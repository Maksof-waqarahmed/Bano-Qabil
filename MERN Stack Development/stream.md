# Streams & Buffers 🌊

Yeh topic 90% developers skip karte hain — isliye senior aur junior mein yahi fark hota hai.

---

## Pehle Ek Sawaal

Socho yeh scenario:

```javascript
// Ek 1GB file user ko bhejni hai

// Tarika 1:
const data = fs.readFileSync('movie.mp4')  // poori file padho
res.send(data)                              // phir bhejo

// Tarika 2:
const stream = fs.createReadStream('movie.mp4')
stream.pipe(res)                            // chunks mein bhejo
```

**Kya fark hai dono mein?**

```
Tarika 1:
RAM mein 1GB load karo → phir bhejo
1000 users = 1000GB RAM chahiye 💀 Server crash

Tarika 2:
Chunk by chunk bhejo (64KB at a time)
1000 users = sirf thodi si RAM ✅ Server khush
```

**Yahi Streams ka magic hai!**

---

## Buffer Kya Hai — Pehle Yeh Samjho

### Simple Analogy 🚰

```
Socho paani ki tank hai:

Pipe se paani aa raha hai    = Data source (file, network)
Tank                         = Buffer
Tum paani pee rahe ho        = Your code processing data

Tank kyun hai beech mein?
→ Pipe se paani kabhi fast aata hai kabhi slow
→ Tank ensure karta hai tum continuously pee sako
→ Buffer bhi yahi karta hai data ke liye
```

### Buffer In Code:

```javascript
// Buffer = Fixed size ka raw memory chunk
// Binary data store karta hai

const buf = Buffer.alloc(4)        // 4 bytes ka buffer
console.log(buf)                   // <Buffer 00 00 00 00>

// String se buffer
const buf2 = Buffer.from('Hello')
console.log(buf2)                  // <Buffer 48 65 6c 6c 6f>
console.log(buf2.toString())       // 'Hello'

// Kyun binary?
// Network, files, images — sab binary hoti hain
// String mein convert karna = extra kaam
// Buffer = direct raw data
```

---

## Stream Kya Hai

```
Stream = Data ka flow — ek baar mein nahi
         Thoda thoda aata hai — process karte jao

Real life:
YouTube video = Stream
Poori video download hone ka wait nahi karta
Buffer hota hai thoda → chalna shuru → aage load hota rehta hai
```

### 4 Types of Streams:

```
┌─────────────────────────────────────────────┐
│           STREAM TYPES                      │
│                                             │
│  Readable   → Sirf padh sakte ho            │
│               fs.createReadStream()         │
│               http request                  │
│                                             │
│  Writable   → Sirf likh sakte ho            │
│               fs.createWriteStream()        │
│               http response                 │
│                                             │
│  Duplex     → Padh bhi sako likh bhi sako   │
│               TCP socket                    │
│               WebSocket                     │
│                                             │
│  Transform  → Padho, badlo, likho           │
│               Compression (gzip)            │
│               Encryption                    │
└─────────────────────────────────────────────┘
```

---

## Readable Stream — Deep Dive

```javascript
const fs = require('fs')

const readable = fs.createReadStream('bigfile.txt', {
    highWaterMark: 64 * 1024    // 64KB chunks (default)
})

// Event 1: Data aa raha hai
readable.on('data', (chunk) => {
    console.log(`Chunk mila: ${chunk.length} bytes`)
    // Yahan process karo chunk ko
})

// Event 2: Sab khatam
readable.on('end', () => {
    console.log('File poori pad li!')
})

// Event 3: Error
readable.on('error', (err) => {
    console.error('Kuch gadbad:', err)
})
```

```
Kya ho raha hai andar:

File = 200KB
highWaterMark = 64KB

Chunk 1: 64KB → 'data' event fire ✅
Chunk 2: 64KB → 'data' event fire ✅
Chunk 3: 64KB → 'data' event fire ✅
Chunk 4: 8KB  → 'data' event fire ✅
              → 'end' event fire  ✅

RAM mein sirf 64KB at a time! 🔥
```

---

## Writable Stream

```javascript
const writable = fs.createWriteStream('output.txt')

// Data likho
writable.write('Pehli line\n')
writable.write('Doosri line\n')
writable.write('Teesri line\n')

// Khatam karo
writable.end('Last line\n')

writable.on('finish', () => {
    console.log('File likh di!')
})
```

---

## Pipe — Streams Ka ASLI Magic 🔥

```javascript
// Pipe = Readable ko Writable se jodo
// Automatically chunks flow karta hai

const readable = fs.createReadStream('input.txt')
const writable = fs.createWriteStream('output.txt')

readable.pipe(writable)

// Yeh 3 cheezein automatically karta hai:
// 1. Readable se data leta hai
// 2. Writable mein dalta hai
// 3. Backpressure handle karta hai (important!)
```

### Real World — File Server:

```javascript
const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {

    // ❌ Galat tarika — poori file RAM mein
    const data = fs.readFileSync('movie.mp4')
    res.end(data)

    // ✅ Sahi tarika — stream karo
    fs.createReadStream('movie.mp4').pipe(res)

}).listen(3000)
```

---

## Transform Stream — Most Powerful

```javascript
const { Transform } = require('stream')
const zlib = require('zlib')

// Built-in transform — file compress karo
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())         // Transform: compress karo
    .pipe(fs.createWriteStream('input.txt.gz'))

console.log('File compress ho rahi hai...')

// Chain karo multiple transforms:
fs.createReadStream('data.txt')
    .pipe(upperCaseTransform)        // Transform 1
    .pipe(zlib.createGzip())         // Transform 2
    .pipe(fs.createWriteStream('out.gz'))
```

---

## Backpressure — Senior Level Concept 🎯

```
Problem:
Readable bohot fast data de raha hai
Writable slow hai process karne mein
Buffer overflow ho sakta hai → Memory crash 💀

Solution: Backpressure

readable.on('data', (chunk) => {
    const canContinue = writable.write(chunk)
    
    if (!canContinue) {
        readable.pause()              // Ruko! Writable busy hai
        writable.once('drain', () => {
            readable.resume()         // Ab aao, ready hoon
        })
    }
})

// pipe() yeh automatically karta hai!
// Isliye pipe use karo manually likhne se zyada
```

---

## Real World Use Cases

```
1. File Upload/Download    → Stream karo, RAM bachao
2. Video Streaming         → Chunks mein bhejo
3. Log Processing          → Badi files stream karo
4. Data Compression        → Transform stream
5. Encryption              → Transform stream
6. CSV Processing          → Line by line stream karo
```

---

## Quick Summary

```
Buffer  = Temporary memory chunk
          Raw binary data store karta hai
          Jab data ka wait karna ho

Stream  = Data ka continuous flow
          Chunk by chunk process karo
          RAM efficient

4 Types:
  Readable  → Source (file read, request)
  Writable  → Destination (file write, response)
  Duplex    → Dono (socket)
  Transform → Modify karo (compress, encrypt)

pipe() = Streams ko connect karo
         Backpressure automatically handle karta hai
```

---

## Ab Tera Test 🧠

**Q1 — Concept:**
> 500MB CSV file hai, har line process karni hai.
> `fs.readFileSync` use karoge ya Stream? Kyun?

**Q2 — Code Output:**
```javascript
const { Readable } = require('stream')

const readable = Readable.from(['A', 'B', 'C'])

readable.on('data', chunk => {
    console.log('Chunk:', chunk)
})

readable.on('end', () => {
    console.log('Done!')
})
```
Kya print hoga?

**Q3 — Senior Question:**
> Backpressure kya hoti hai?
> Agar pipe() nahi use karo toh kya problem aayegi?

**Q4 — Real World:**
> User ne 1GB file upload ki Express server pe.
> Tum yeh file S3 pe save karna chahte ho.
> Streams use karke kaise karoge? (Code likho)

Jawab do! 💪

# Excellent! 🔥 Review Karte Hain

---

## Q1 ✅ — Bilkul Sahi!

```
✅ Script = readFileSync (ek banda, koi baat nahi)
✅ 1000 users = Stream (memory + performance)

Perfect thinking! Yahi senior mindset hai —
"Context dekho, phir tool choose karo"
```

---

## Q2 ✅ — Sahi!

```
✅ A, B, C, Done — correct!
```

---

## Q3 — Backpressure Samjhao

Real life se samjho:

```
Socho ek factory hai:

Machine A = Readable  (Bohot fast — 1000 items/sec bana raha hai)
Conveyor   = Buffer
Machine B  = Writable (Slow     — 100 items/sec pack kar raha hai)

Kya hoga?
Machine A → 1000 items diye
Machine B → sirf 100 process kar paya
900 items → floor pe gir gaye → MESS 💀

Solution = Backpressure:
Machine B ne signal diya → "Bhai ruk ja main busy hoon"
Machine A ruk gaya       → "Theek hai bata jab ready ho"
Machine B ready hua      → "Ab bhej"
Machine A ne resume kiya → ✅
```

### Code Mein:

```javascript
readable.on('data', (chunk) => {
    const canContinue = writable.write(chunk)

    if (!canContinue) {
        // Writable ka buffer full hai
        readable.pause()         // ← Readable ruk ja!

        writable.once('drain', () => {
            // Writable ka buffer khali hua
            readable.resume()    // ← Ab chalo!
        })
    }
})

// pipe() yeh sab automatically karta hai!
// Isliye pipe = best practice
```

---

## Q4 — Teri Code Mein 3 Problems Hain ⚠️

Acha try tha — lekin senior level pe yeh issues hain:

### Problem 1: memoryStorage ❌

```javascript
// Tera code:
const storage = multer.memoryStorage()

// Yeh poori 1GB file RAM mein load karta hai!
// Streams ka faida khatam! 💀

// Sahi tarika:
const upload = multer({ dest: 'uploads/' })
// Ya bilkul multer use mat karo — directly stream karo
```

### Problem 2: uploadToS3 chunk by chunk nahi hota ❌

```javascript
// Tera code:
fs.createReadStream(req.file.path).on('data', (chunk) => {
    uploadtoS3Bucket()    // Har chunk pe naya S3 call? ❌
                          // S3 aise kaam nahi karta
})
```

### Problem 3: req directly stream hai! ✅

```
req = Readable Stream hai already!
Multer ki zaroorat hi nahi
Direct req.pipe() karo S3 mein
```

---

## Sahi Code — Senior Level

```javascript
const AWS = require('aws-sdk')
const s3 = new AWS.S3()

app.post('/upload', (req, res) => {

    // req khud ek Readable Stream hai!
    // Multer ki zaroorat nahi

    const params = {
        Bucket: 'my-bucket',
        Key: `uploads/${Date.now()}.file`,
        Body: req          // ← Direct stream pipe kar do S3 mein!
    }

    s3.upload(params, (err, data) => {
        if (err) {
            return res.status(500).json({ error: err.message })
        }
        res.json({ url: data.Location })
    })

    // Kya ho raha hai:
    // User → req (stream) → S3
    // RAM mein kuch nahi ruka!
    // 1GB file → sirf 64KB at a time RAM mein ✅
})
```

### Aur Bhi Better — Progress Track Karo:

```javascript
app.post('/upload', (req, res) => {
    let uploaded = 0

    // Transform stream — progress track karo
    const progress = new Transform({
        transform(chunk, encoding, callback) {
            uploaded += chunk.length
            console.log(`Uploaded: ${uploaded} bytes`)
            callback(null, chunk)    // chunk aage bhej do
        }
    })

    const params = {
        Bucket: 'my-bucket',
        Key: `uploads/${Date.now()}.file`,
        Body: req.pipe(progress)     // req → progress → S3
    }

    s3.upload(params, (err, data) => {
        if (err) return res.status(500).json({ error: err.message })
        res.json({ url: data.Location })
    })
})
```

---

## Visual — Tera Code vs Sahi Code

```
Tera code:
User → multer → RAM (1GB!) → readStream → S3
                  💀

Sahi code:
User → req (stream) → S3
         ✅
RAM mein sirf 64KB at a time!
```

---

## Tera Score — Streams & Buffers

```
Q1: ✅ Perfect — context-based thinking
Q2: ✅ Correct output
Q3: ❌ → Ab samajh gaya ✅
Q4: ⚠️ → Sahi direction tha, senior level pe refine karna tha
```

**Overall: Bohot acha!** Core concept clear hai. 🔥

---

## Agla Topic Konsa? 🎯Batao — aage chalte hain! 💪