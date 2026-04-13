# Good Effort! Let's Review 🎯

Kuch sahi, kuch fix karte hain.

---

## Q1 — process.nextTick() Kya Karta Hai

```javascript
process.nextTick(() => console.log('hello'))
```

Samjho simple:

```
process.nextTick = "Yaar ye kaam ABHI karo
                    Event Loop ka koi phase shuru hone se PEHLE"

Microtask hai — lekin Promise.then() se bhi PEHLE chalta hai!

Priority Order:
1. process.nextTick    ← SABSE PEHLE (microtask queue mein VIP)
2. Promise.then()      ← Doosra
3. setTimeout          ← Teesra
4. fs/IO callbacks     ← Chauta
```

### Real Use Case:

```javascript
function readFile(callback) {
    // Agar file already cached hai
    if (cache.has('file')) {
        // Galat tarika — synchronous callback ❌
        callback(cache.get('file'))
        
        // Sahi tarika — nextTick se do ✅
        process.nextTick(() => callback(cache.get('file')))
    }
}

// Kyun? Consistency ke liye
// Callback hamesha async lagni chahiye
// Kabhi sync kabhi async = bugs
```

---

## Q2 — Crash Karega?

```javascript
process.nextTick(function tick() {
    process.nextTick(tick)
})
```

```
✅ Tu ne guess kiya hoga: crash karega
❌ Sahi jawab: CRASH KAREGA — lekin alag reason se

Yeh infinite loop ban jaega:
nextTick → nextTick → nextTick → nextTick...

nextTick SABSE pehle chalta hai
Event Loop aage badh hi nahi payega
setTimeout, fs, kuch bhi nahi chaleyga
Server FREEZE ho jaega ☠️

Isko "Starving the Event Loop" kehte hain
```

---

## Q3 — Async/Await ✅

```
Bilkul sahi! async/await internally Promises use karta hai
Jo Microtask Queue mein jata hai
```

```javascript
// Yeh dono same hain internally:

async function example() {
    const data = await fetchData()
    console.log(data)
}

// Same as:
fetchData().then(data => {
    console.log(data)
})
```

---

## Level 2 — Output Review

```
Tera jawab:    Sahi jawab:
1  ✅          1
6  ✅          6
2  ❌          2  ✅ (sahi position)
3  ❌          5  ← yahan galti
4  ✅          3
5  ❌          4
```

### Kyun 5 Pehle Aata Hai 3 Se?

```javascript
process.nextTick(() => console.log('2'))   // nextTick
Promise.resolve().then(() => console.log('3'))  // Promise
process.nextTick(() => console.log('5'))   // nextTick
```

```
Microtask Queue mein 2 sections hain:

┌─────────────────────────────┐
│      Microtask Queue        │
│                             │
│  [nextTick Queue]           │
│   → '2'  (pehle register)   │  ← YEH PEHLE
│   → '5'  (baad mein)        │  ← YEH DOOSRA
│                             │
│  [Promise Queue]            │
│   → '3'                     │  ← YEH BAAD MEIN
└─────────────────────────────┘

Rule:
nextTick Queue PURI khali karo
PHIR Promise Queue chalo
```

---

## Level 3 — Review

```
Tera jawab:   Sahi jawab:
C  ✅         C
D  ❌         A   ← yahan galti
A  ❌         D
B  ✅         B
```

### Teri Galti Kahan Hui

```javascript
console.log('C')     // sync — abhi chala
fetchData()          // function call hua
console.log('D')     // sync — abhi chala
```

Tu ne socha `fetchData()` call hone se pehle `D` chalta hai.

Lekin dekho `fetchData()` ke andar:

```javascript
async function fetchData() {
    console.log('A')              // ← Yeh SYNC hai!
    const data = await db.query() // ← Yahan rukta hai
    console.log('B')              // ← Yeh baad mein
}
```

```
Step by step:

console.log('C')  → "C" print ✅
fetchData() call  → function andar ghusa
console.log('A')  → "A" print ✅  (sync hai yeh!)
await db.query()  → RUKA! libuv ko diya
                    function se bahar aaya
console.log('D')  → "D" print ✅
... DB complete ...
console.log('B')  → "B" print ✅

Output: C A D B
```

### Key Rule:

```
async function mein:
await se PEHLE = synchronous, abhi chalta hai
await ke BAAD  = microtask, baad mein chalta hai

await = "yahan ruko, baaki kaam karne do"
```

---

## Tera Score

```
Level 1: 2/3  ✅ (nextTick ka kaam nahi pata tha)
Level 2: 3/6  ✅ (nextTick priority nahi pata thi)
Level 3: 2/4  ✅ (async function ka sync part bhool gaya)

Overall: Acha hai! Core concepts clear hain
         Bas edge cases seekhne hain
```

---

## Sirf 2 Rules Yaad Rakho

```
Rule 1:
process.nextTick > Promise.then
Dono microtask hain lekin nextTick VIP hai

Rule 2:
async function mein
await se PEHLE wala code = SYNC (abhi chalta hai)
await ke BAAD wala code  = ASYNC (baad mein chalta hai)
```

---

## Agla Topic Kya Karna Hai?

Inme se kya cover karna chahte ho abhi?Batao — shuru karte hain! 💪