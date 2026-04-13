# Week 1 - Class 2: Understanding LLMs, Tokens & Context Windows

## Table of Contents
1. [What are Large Language Models (LLMs)?](#what-are-large-language-models-llms)
2. [How LLMs Work](#how-llms-work)
3. [Understanding Tokens](#understanding-tokens)
4. [Context Windows Explained](#context-windows-explained)
5. [Parameters in AI Models](#parameters-in-ai-models)
6. [Popular LLMs Comparison](#popular-llms-comparison)
7. [Practical Examples](#practical-examples)
8. [Limitations of LLMs](#limitations-of-llms)
9. [Practice Questions](#practice-questions)

---

## What are Large Language Models (LLMs)?

**Large Language Models (LLMs)** wo AI models hain jo text ko samajh sakte hain aur generate kar sakte hain. Ye models **billions of parameters** ke saath train kiye jaate hain.

### Simple Definition:

> LLMs are AI models trained on massive amounts of text data that can understand, generate, and work with human language.

### Real Examples:
- **ChatGPT** (OpenAI)
- **Google Gemini** (Google)
- **Claude** (Anthropic)
- **Llama** (Meta)

```mermaid
mindmap
  root((Large Language<br/>Models))
    Capabilities
      Text Generation
      Translation
      Summarization
      Question Answering
      Code Generation
    Examples
      ChatGPT
      Gemini
      Claude
      Llama
    Training
      Billions of Parameters
      Massive Datasets
      GPU Clusters
```

---

## How LLMs Work

LLMs kaam kaise karte hain? Let's break it down step by step.

### Training Process:

```mermaid
graph TD
    A[Massive Text Data<br/>Books, Websites, Code] --> B[Preprocessing<br/>Cleaning & Tokenization]
    B --> C[Neural Network<br/>Transformer Architecture]
    C --> D[Training Process<br/>Learning Patterns]
    D --> E[Trained Model<br/>Billions of Parameters]
    E --> F[Fine-tuning<br/>Specific Tasks]
    F --> G[Final LLM<br/>Ready to Use]

    style A fill:#e3f2fd,stroke:#1565c0
    style C fill:#fff3e0,stroke:#ef6c00
    style G fill:#e8f5e9,stroke:#2e7d32
```

### How LLMs Predict Next Word:

```mermaid
sequenceDiagram
    participant U as User
    participant L as LLM
    participant T as Transformer
    participant P as Prediction

    U->>L: Input: "The cat sat on the"
    L->>T: Tokenize & Process
    T->>T: Analyze Context
    T->>T: Calculate Probabilities
    T->>P: Next Word Predictions
    P-->>L: "mat" (45%), "chair" (30%)<br/>"floor" (15%), "table" (10%)
    L-->>U: Output: "The cat sat on the mat"

    Note over T: Uses learned patterns<br/>from training data
```

### Transformer Architecture (Simplified):

```mermaid
graph TB
    subgraph "Input Processing"
        I[Input Text] --> T1[Tokenization]
        T1 --> E[Embeddings]
    end

    subgraph "Transformer Layers"
        E --> A1[Self-Attention Layer 1]
        A1 --> F1[Feed Forward Layer 1]
        F1 --> A2[Self-Attention Layer 2]
        A2 --> F2[Feed Forward Layer 2]
        F2 --> AN[... More Layers ...]
    end

    subgraph "Output Generation"
        AN --> D[Decoder]
        D --> O[Output Text]
    end

    style I fill:#e3f2fd,stroke:#1565c0
    style A1 fill:#f3e5f5,stroke:#6a1b9a
    style A2 fill:#f3e5f5,stroke:#6a1b9a
    style O fill:#e8f5e9,stroke:#2e7d32
```

---

## Understanding Tokens

**Tokens** wo basic units hain jisme text ko divide kiya jaata hai. Tokens words, sub-words, ya characters ho sakte hain.

### What is a Token?

```mermaid
graph LR
    A[Input Text:<br/>Hello World!] --> B[Tokenization Process]
    B --> C[Token 1: Hello]
    B --> D[Token 2: World]
    B --> E[Token 3: !]

    style A fill:#e3f2fd,stroke:#1565c0
    style B fill:#fff3e0,stroke:#ef6c00
    style C fill:#e8f5e9,stroke:#2e7d32
    style D fill:#e8f5e9,stroke:#2e7d32
    style E fill:#e8f5e9,stroke:#2e7d32
```

### Tokenization Examples:

| Input Text | Tokens | Token Count |
|------------|--------|-------------|
| "Hello" | ["Hello"] | 1 |
| "Hello World" | ["Hello", " World"] | 2 |
| "ChatGPT" | ["Chat", "GPT"] | 2 |
| "artificial intelligence" | ["art", "ificial", " intelligence"] | 3 |
| "AI है बहुत अच्छा" | ["AI", " है", " बहुत", " अच्छा"] | 4 |

### How Tokenization Works:

```mermaid
graph TD
    A[Input: I love programming!] --> B{Tokenizer}

    B --> C[Token 1: I]
    B --> D[Token 2: love]
    B --> E[Token 3: program]
    B --> F[Token 4: ming]
    B --> G[Token 5: !]

    C --> H[Token IDs]
    D --> H
    E --> H
    F --> H
    G --> H

    H --> I[Numerical IDs:<br/>234, 1247, 3456, 7890, 33]

    style A fill:#e3f2fd,stroke:#1565c0
    style B fill:#fff3e0,stroke:#ef6c00
    style I fill:#e8f5e9,stroke:#2e7d32
```

### Why Tokens Matter?

```mermaid
mindmap
  root((Why Tokens<br/>Are Important))
    Cost Calculation
      OpenAI charges per token
      More tokens = Higher cost
    Model Processing
      Models process tokens
      Not raw text
    Context Limits
      Max tokens per request
      GPT-4: 8K, 32K, 128K tokens
    Speed
      More tokens = Slower
      Fewer tokens = Faster
```

### Token Count Examples (Real-World):

```mermaid
graph TB
    subgraph "Short Text"
        A1[Hi] --> B1[1 token]
    end

    subgraph "Medium Text"
        A2[Explain artificial intelligence] --> B2[4 tokens]
    end

    subgraph "Long Text"
        A3[Write a detailed essay about<br/>the impact of AI on society] --> B3[12 tokens]
    end

    subgraph "Very Long Text"
        A4[Full Article: 500 words] --> B4[~650-750 tokens]
    end

    style B1 fill:#c8e6c9,stroke:#2e7d32
    style B2 fill:#fff9c4,stroke:#f57f17
    style B3 fill:#ffccbc,stroke:#d84315
    style B4 fill:#ffcdd2,stroke:#c62828
```

### Practical Token Calculator:

```
Average Rule: 1 token ≈ 4 characters (English)
              1 token ≈ 0.75 words (English)

Examples:
- 100 words ≈ 133 tokens
- 1000 characters ≈ 250 tokens
- 1 page (500 words) ≈ 667 tokens
```

---

## Context Windows Explained

**Context Window** wo maximum amount hai information (tokens) jitna ek LLM ek time mein process kar sakta hai.

### What is Context Window?

```mermaid
graph TB
    A[Context Window<br/>Model's Memory Span]

    B[Input Tokens<br/>Your Prompt]
    C[Output Tokens<br/>AI Response]

    A --> D[Total Available Space]
    D --> B
    D --> C

    E[Example: GPT-4<br/>8,192 tokens total]
    E --> F[Input: 6,000 tokens]
    E --> G[Output: 2,192 tokens max]

    style A fill:#e3f2fd,stroke:#1565c0,stroke-width:3px
    style E fill:#fff3e0,stroke:#ef6c00
```

### Context Window Analogy:

```mermaid
graph LR
    subgraph "Your Brain (Human)"
        A1[Short-term Memory<br/>Remember last few sentences]
    end

    subgraph "LLM's Brain"
        A2[Context Window<br/>Remember last N tokens]
    end

    A1 -.Similar to.-> A2

    style A1 fill:#ffebee,stroke:#c62828
    style A2 fill:#e8f5e9,stroke:#2e7d32
```

### How Context Window Works:

```mermaid
sequenceDiagram
    participant U as User
    participant M as Model (8K context)
    participant W as Context Window

    U->>M: Message 1 (100 tokens)
    M->>W: Store in context
    Note over W: 100/8000 tokens used

    U->>M: Message 2 (200 tokens)
    M->>W: Add to context
    Note over W: 300/8000 tokens used

    U->>M: Message 3 (500 tokens)
    M->>W: Add to context
    Note over W: 800/8000 tokens used

    U->>M: Very long message (7500 tokens)
    M->>W: Add to context
    Note over W: 8300 tokens!<br/>Exceeds limit!

    W-->>M: Remove oldest messages
    Note over W: Now 7700/8000 tokens
    M-->>U: Response (but forgot Message 1)
```

### Context Window Sizes Comparison:

```mermaid
graph TB
    subgraph "Small Context Windows"
        A[GPT-3.5<br/>4K tokens<br/>~3,000 words]
    end

    subgraph "Medium Context Windows"
        B[GPT-4<br/>8K tokens<br/>~6,000 words]
        C[Claude 2<br/>100K tokens<br/>~75,000 words]
    end

    subgraph "Large Context Windows"
        D[GPT-4 Turbo<br/>128K tokens<br/>~96,000 words<br/>~300 pages]
        E[Gemini 1.5 Pro<br/>1M tokens<br/>~750,000 words]
    end

    style A fill:#ffcdd2,stroke:#c62828
    style B fill:#fff9c4,stroke:#f57f17
    style C fill:#fff9c4,stroke:#f57f17
    style D fill:#c8e6c9,stroke:#2e7d32
    style E fill:#c8e6c9,stroke:#2e7d32
```

### What Happens When Context is Full?

```mermaid
graph TD
    A[Context Window Full] --> B{What Happens?}

    B -->|Option 1| C[Truncate from Beginning<br/>Oldest messages removed]
    B -->|Option 2| D[Summarize Previous Context<br/>Keep important points]
    B -->|Option 3| E[Error: Context Limit Exceeded<br/>Cannot process]

    C --> F[Conversation continues<br/>but forgets old messages]
    D --> G[Conversation continues<br/>with compressed history]
    E --> H[Need to start new conversation]

    style B fill:#fff3e0,stroke:#ef6c00
    style F fill:#e8f5e9,stroke:#2e7d32
    style G fill:#e8f5e9,stroke:#2e7d32
    style H fill:#ffcdd2,stroke:#c62828
```

### Practical Example:

```mermaid
graph LR
    subgraph "4K Context Window"
        A1[Short Conversation<br/>10-15 messages]
    end

    subgraph "8K Context Window"
        A2[Medium Conversation<br/>20-30 messages]
    end

    subgraph "128K Context Window"
        A3[Entire Book<br/>Full document analysis]
    end

    subgraph "1M Context Window"
        A4[Multiple Books<br/>Entire codebase]
    end

    style A1 fill:#ffccbc,stroke:#d84315
    style A2 fill:#fff9c4,stroke:#f57f17
    style A3 fill:#c8e6c9,stroke:#2e7d32
    style A4 fill:#b2dfdb,stroke:#00695c
```

---

## Parameters in AI Models

**Parameters** wo internal variables hain jo model training ke dauran learn karta hai.

### What are Parameters?

```mermaid
graph TB
    A[AI Model Parameters]
    A --> B[Weights<br/>Connection strengths]
    A --> C[Biases<br/>Threshold values]

    D[Simple Example:<br/>y = mx + b]
    D --> E[m = parameter weight]
    D --> F[b = parameter bias]

    style A fill:#e3f2fd,stroke:#1565c0,stroke-width:3px
    style D fill:#fff3e0,stroke:#ef6c00
```

### Parameter Count Comparison:

```mermaid
graph TD
    subgraph "Small Models"
        A[GPT-2<br/>1.5 Billion<br/>Parameters]
    end

    subgraph "Medium Models"
        B[GPT-3<br/>175 Billion<br/>Parameters]
    end

    subgraph "Large Models"
        C[GPT-4<br/>~1.7 Trillion<br/>Parameters<br/>Estimated]
    end

    A --> B
    B --> C

    style A fill:#e3f2fd,stroke:#1565c0
    style B fill:#fff3e0,stroke:#ef6c00
    style C fill:#ffcdd2,stroke:#c62828,stroke-width:3px
```

### Why More Parameters?

```mermaid
mindmap
  root((More Parameters))
    Better Understanding
      Complex patterns
      Nuanced language
      Context awareness
    Broader Knowledge
      More topics
      Detailed answers
      Specialized domains
    Improved Performance
      Higher accuracy
      Better reasoning
      Fewer errors
    Trade-offs
      More computational power
      Slower processing
      Higher costs
```

### Parameters vs Performance:

```mermaid
graph LR
    A[1B Parameters] -->|Basic Tasks| B[Simple Q&A]
    C[10B Parameters] -->|Intermediate| D[Code Generation]
    E[100B Parameters] -->|Advanced| F[Complex Reasoning]
    G[1T+ Parameters] -->|Expert Level| H[Multimodal AI]

    style A fill:#e3f2fd,stroke:#1565c0
    style C fill:#fff9c4,stroke:#f57f17
    style E fill:#ffccbc,stroke:#d84315
    style G fill:#c8e6c9,stroke:#2e7d32
```

---

## Popular LLMs Comparison

### Comprehensive Comparison Table:

| Model | Company | Parameters | Context Window | Special Features |
|-------|---------|------------|----------------|------------------|
| **GPT-4** | OpenAI | ~1.7T | 8K / 32K / 128K | Multimodal, highest accuracy |
| **GPT-3.5 Turbo** | OpenAI | 175B | 4K / 16K | Fast, cost-effective |
| **Gemini Pro** | Google | Unknown | 32K | Multimodal, Google integrated |
| **Gemini 1.5 Pro** | Google | Unknown | 1M tokens | Largest context window |
| **Claude 3** | Anthropic | Unknown | 200K | Long document analysis |
| **Llama 2** | Meta | 70B | 4K | Open-source |
| **Mistral** | Mistral AI | 7B | 8K | Efficient, open-source |

### Visual Comparison:

```mermaid
graph TB
    subgraph "OpenAI Models"
        A[GPT-4<br/>Most Capable<br/>Expensive]
        B[GPT-3.5<br/>Balanced<br/>Affordable]
    end

    subgraph "Google Models"
        C[Gemini Pro<br/>Multimodal<br/>Free tier]
        D[Gemini Ultra<br/>Most Advanced<br/>Coming soon]
    end

    subgraph "Open Source"
        E[Llama 2<br/>Free<br/>Self-host]
        F[Mistral<br/>Efficient<br/>Fast]
    end

    style A fill:#c8e6c9,stroke:#2e7d32
    style C fill:#e1f5fe,stroke:#01579b
    style E fill:#fff9c4,stroke:#f57f17
```

### Use Case Recommendations:

```mermaid
mindmap
  root((Choose Your LLM))
    GPT-4
      Complex reasoning
      Code generation
      Research work
      High accuracy needed
    GPT-3.5
      Quick answers
      General chatbot
      Cost-sensitive projects
      High volume requests
    Gemini Pro
      Google integration
      Multimodal tasks
      Free experiments
      Image + text
    Claude
      Long documents
      Book analysis
      Legal documents
      Research papers
    Llama 2
      Privacy concerns
      Custom deployment
      No API costs
      Full control
```

---

## Practical Examples

### Example 1: Token Calculation

```mermaid
sequenceDiagram
    participant U as User
    participant T as Tokenizer
    participant C as Counter

    U->>T: "Explain machine learning in simple terms"
    T->>T: Split into tokens
    T->>C: ["Explain", " machine", " learning",<br/>" in", " simple", " terms"]
    C->>C: Count = 6 tokens
    C-->>U: Total: 6 input tokens

    Note over T,C: Plus AI response tokens<br/>Total cost = input + output tokens
```

### Example 2: Context Window Overflow

**Scenario:** ChatGPT with 4K context window

```mermaid
graph TD
    A[User starts conversation] --> B[Message 1: 200 tokens]
    B --> C[Message 2: 300 tokens]
    C --> D[Message 3: 400 tokens]
    D --> E[Total: 900 tokens ✓]

    E --> F[Message 4: 3500 tokens]
    F --> G{Total: 4400 tokens<br/>Exceeds 4K limit!}

    G -->|System Action| H[Remove Message 1<br/>200 tokens]
    H --> I[New total: 4200 tokens<br/>Still over limit]
    I --> J[Remove Message 2<br/>300 tokens]
    J --> K[Final: 3900 tokens ✓]
    K --> L[AI forgets Messages 1 & 2]

    style G fill:#ffcdd2,stroke:#c62828
    style K fill:#c8e6c9,stroke:#2e7d32
    style L fill:#fff3e0,stroke:#ef6c00
```

### Example 3: Model Selection Flow

```mermaid
graph TD
    A{What's your task?} --> B[Simple Q&A]
    A --> C[Code Generation]
    A --> D[Long Document Analysis]
    A --> E[Image + Text]

    B --> F[Use GPT-3.5<br/>Fast & Cheap]
    C --> G[Use GPT-4<br/>High Accuracy]
    D --> H[Use Claude<br/>200K context]
    E --> I[Use Gemini Pro<br/>Multimodal]

    style A fill:#e3f2fd,stroke:#1565c0
    style F fill:#c8e6c9,stroke:#2e7d32
    style G fill:#c8e6c9,stroke:#2e7d32
    style H fill:#c8e6c9,stroke:#2e7d32
    style I fill:#c8e6c9,stroke:#2e7d32
```

---

## Limitations of LLMs

LLMs powerful hain, but unki limitations bhi hain:

```mermaid
mindmap
  root((LLM Limitations))
    Knowledge Cutoff
      Trained on old data
      No real-time information
      Example: GPT-4 cutoff April 2023
    Context Limits
      Forgets old messages
      Cannot process very long docs
      Some models: only 4K tokens
    Hallucinations
      Makes up facts
      Confident but wrong
      Needs fact-checking
    Bias
      Training data bias
      Cultural bias
      May need filtering
    No Real Understanding
      Pattern matching
      No true comprehension
      Cannot reason like humans
    Cost
      API costs per token
      Expensive for large scale
      Need budget planning
```

### Common Issues:

```mermaid
graph TD
    A[LLM Limitations] --> B[Hallucination Example]
    A --> C[Context Forgetting]
    A --> D[Outdated Information]

    B --> B1["User: Who won 2024 World Cup?<br/>AI: Makes up answer<br/>Actually doesn't know"]

    C --> C1["Long conversation<br/>AI forgets earlier messages<br/>Repeats questions"]

    D --> D1["User: Latest iPhone price?<br/>AI: Gives 2023 data<br/>Prices changed"]

    style B1 fill:#ffcdd2,stroke:#c62828
    style C1 fill:#fff3e0,stroke:#ef6c00
    style D1 fill:#ffe0b2,stroke:#e65100
```

---

## Summary Diagram: Complete Overview

```mermaid
graph TB
    A[Large Language Models]

    A --> B[Key Concepts]
    B --> B1[Tokens<br/>Text units<br/>4 chars ≈ 1 token]
    B --> B2[Context Window<br/>Memory span<br/>4K to 1M tokens]
    B --> B3[Parameters<br/>Model size<br/>1B to 1T+]

    A --> C[Popular Models]
    C --> C1[GPT-4<br/>Most capable]
    C --> C2[Gemini<br/>Largest context]
    C --> C3[Claude<br/>Long docs]

    A --> D[Applications]
    D --> D1[Chat]
    D --> D2[Code]
    D --> D3[Analysis]

    A --> E[Limitations]
    E --> E1[Hallucinations]
    E --> E2[Context limits]
    E --> E3[Costs]

    style A fill:#e3f2fd,stroke:#1565c0,stroke-width:3px
    style B fill:#f3e5f5,stroke:#6a1b9a
    style C fill:#fff3e0,stroke:#ef6c00
    style D fill:#c8e6c9,stroke:#2e7d32
    style E fill:#ffcdd2,stroke:#c62828
```

---

## Practice Questions

### Multiple Choice:

1. **What is a token in LLMs?**
   - a) A password
   - b) A basic unit of text
   - c) A type of model
   - d) A programming language

   **Answer: b) A basic unit of text**

2. **What is a context window?**
   - a) A browser window
   - b) Maximum tokens an LLM can process at once
   - c) A chat window
   - d) A coding editor

   **Answer: b) Maximum tokens an LLM can process at once**

3. **Which model has the largest context window?**
   - a) GPT-4 (8K)
   - b) GPT-3.5 (4K)
   - c) Gemini 1.5 Pro (1M)
   - d) Claude (100K)

   **Answer: c) Gemini 1.5 Pro (1M)**

### Practical Exercises:

1. **Estimate tokens:**
   - Input: "Artificial Intelligence is transforming the world"
   - Approximately how many tokens? (Use rule: 1 token ≈ 0.75 words)

2. **Context limit scenario:**
   - You have GPT-3.5 (4K context)
   - Your conversation used 3,800 tokens
   - Can you send a 500-token message?
   - What will happen?

3. **Model selection:**
   - Task: Analyze a 100-page research paper
   - Which model would you choose and why?

---

## Key Takeaways

```mermaid
mindmap
  root((Week 1 Complete<br/>Summary))
    Class 1
      AI PATH
      CS → ML → DL → Gen AI
      Applications
    Class 2
      LLMs
      Tokens
      Context Windows
      Parameters
    Next Steps
      Learn Prompt Engineering
      Practice with ChatGPT
      Understand AI ethics
```

---

## Next Week Preview

In Week 2, we will learn:
- **Prompt Engineering Fundamentals**
- **How to write effective prompts**
- **Zero-shot, Few-shot, Chain-of-thought prompting**
- **Practical prompt templates**
- **Best practices and tips**

---

**Congratulations! You've completed Week 1!**

*You now understand:*
- ✅ AI foundations (CS → ML → DL → Gen AI)
- ✅ How LLMs work
- ✅ Tokens and their importance
- ✅ Context windows and limitations
- ✅ Different AI models and when to use them

**Keep learning, keep growing!**
