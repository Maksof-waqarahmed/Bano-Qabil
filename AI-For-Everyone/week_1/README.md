# Week 1: Introduction to Artificial Intelligence

**Complete Overview of AI Fundamentals**

---

## Week 1 Summary

This week covers the foundational concepts of Artificial Intelligence, from basic Computer Science to advanced Generative AI, along with understanding how Large Language Models work.

---

## Class Structure

### [Class 1: Introduction to AI & The PATH](./class_1/README.md)

**Topics Covered:**
- What is Artificial Intelligence?
- The PATH to AI: CS → ML → DL → Gen AI
- Computer Science Foundation
- Machine Learning Explained
- Deep Learning and Neural Networks
- Generative AI Revolution
- Real-world Applications

**Key Diagrams:**
- AI Evolution Pyramid
- Machine Learning Types
- Neural Network Architecture
- Generative AI vs Traditional AI

**Duration:** 1.5 - 2 hours

---

### [Class 2: LLMs, Tokens & Context Windows](./class_2/README.md)

**Topics Covered:**
- Large Language Models (LLMs)
- How LLMs Work
- Understanding Tokens
- Context Windows Explained
- Parameters in AI Models
- Popular LLMs Comparison
- Practical Examples and Limitations

**Key Diagrams:**
- LLM Training Process
- Token Calculation Flow
- Context Window Visualization
- Parameter Comparison

**Duration:** 1.5 - 2 hours

---

## Complete Week 1 Learning Path

```mermaid
graph TB
    subgraph "Class 1: AI Fundamentals"
        A1[What is AI?]
        A2[Computer Science]
        A3[Machine Learning]
        A4[Deep Learning]
        A5[Generative AI]

        A1 --> A2
        A2 --> A3
        A3 --> A4
        A4 --> A5
    end

    subgraph "Class 2: LLM Deep Dive"
        B1[Large Language Models]
        B2[Tokens]
        B3[Context Windows]
        B4[Parameters]
        B5[Model Comparison]

        B1 --> B2
        B2 --> B3
        B3 --> B4
        B4 --> B5
    end

    A5 --> B1

    style A1 fill:#e3f2fd,stroke:#1565c0
    style A5 fill:#c8e6c9,stroke:#2e7d32
    style B1 fill:#fff3e0,stroke:#ef6c00
    style B5 fill:#f3e5f5,stroke:#6a1b9a
```

---

## Key Concepts Overview

### The AI Hierarchy

```mermaid
graph TB
    subgraph "Foundation Layer"
        CS[Computer Science<br/>Programming, Logic, Algorithms]
    end

    subgraph "Learning Layer"
        ML[Machine Learning<br/>Learning from Data]
    end

    subgraph "Advanced Layer"
        DL[Deep Learning<br/>Neural Networks]
    end

    subgraph "Creation Layer"
        GA[Generative AI<br/>Creating New Content]
    end

    CS --> ML
    ML --> DL
    DL --> GA

    CS --> EX1["Example:<br/>If-else statements"]
    ML --> EX2["Example:<br/>Spam detection"]
    DL --> EX3["Example:<br/>Face recognition"]
    GA --> EX4["Example:<br/>ChatGPT, DALL-E"]

    style CS fill:#2196F3,stroke:#0D47A1,stroke-width:2px,color:#fff
    style ML fill:#9C27B0,stroke:#4A148C,stroke-width:2px,color:#fff
    style DL fill:#FF9800,stroke:#E65100,stroke-width:2px,color:#fff
    style GA fill:#4CAF50,stroke:#1B5E20,stroke-width:2px,color:#fff
```

---

## LLM Core Concepts

```mermaid
mindmap
  root((LLM<br/>Fundamentals))
    What are LLMs
      AI models for language
      Trained on massive data
      Billions of parameters
    How They Work
      Tokenization
      Pattern learning
      Next word prediction
      Transformer architecture
    Key Metrics
      Tokens
        Text units
        ~4 chars = 1 token
      Context Window
        Memory span
        4K to 1M tokens
      Parameters
        Model size
        1B to 1T+
    Popular Models
      GPT-4
        Most capable
        8K-128K context
      Gemini
        1M context
        Multimodal
      Claude
        200K context
        Long docs
```

---

## Week 1 Visual Summary

```mermaid
graph TD
    A[Week 1: AI Fundamentals]

    A --> B[Class 1]
    A --> C[Class 2]

    B --> B1[AI PATH]
    B --> B2[CS → ML → DL → Gen AI]
    B --> B3[Applications]

    C --> C1[LLMs Explained]
    C --> C2[Tokens: 4 chars ≈ 1 token]
    C --> C3[Context: Model memory]
    C --> C4[Parameters: Model size]

    B3 --> D[Daily Life AI]
    D --> D1[Face Unlock]
    D --> D2[Netflix Recommendations]
    D --> D3[Google Maps]
    D --> D4[ChatGPT]

    C4 --> E[Model Selection]
    E --> E1[GPT-4: Complex tasks]
    E --> E2[GPT-3.5: Quick answers]
    E --> E3[Gemini: Long context]
    E --> E4[Claude: Document analysis]

    style A fill:#e3f2fd,stroke:#1565c0,stroke-width:3px
    style B fill:#f3e5f5,stroke:#6a1b9a
    style C fill:#fff3e0,stroke:#ef6c00
```

---

## Learning Objectives - Week 1

By the end of Week 1, you will be able to:

### Knowledge & Understanding:
- ✅ Define Artificial Intelligence and its components
- ✅ Explain the progression from CS to ML to DL to Gen AI
- ✅ Describe how Large Language Models work
- ✅ Understand the concept of tokens and context windows
- ✅ Compare different AI models and their use cases

### Skills:
- ✅ Calculate approximate token counts for text
- ✅ Select appropriate AI models for different tasks
- ✅ Recognize AI applications in daily life
- ✅ Understand context limitations of LLMs

### Attitudes:
- ✅ Appreciate the power and potential of AI
- ✅ Recognize the limitations of current AI systems
- ✅ Develop critical thinking about AI outputs
- ✅ Build curiosity about AI technology

---

## Practice & Assessment

### Week 1 Quiz Topics:

1. **AI Fundamentals**
   - What is AI?
   - Difference between ML and DL
   - Types of Machine Learning
   - Generative AI examples

2. **LLM Concepts**
   - What are tokens?
   - Context window definition
   - Parameter significance
   - Model comparison

3. **Practical Application**
   - Token estimation
   - Model selection for tasks
   - Real-world AI identification

---

## Hands-on Exercises

### Exercise 1: AI Spotting
Identify 10 AI applications you use/encounter daily:
- Categorize them: ML, DL, or Gen AI
- Explain how they help you
- Rate their usefulness (1-10)

### Exercise 2: Token Practice
Calculate approximate tokens for:
1. "Hello, how are you?"
2. A 500-word essay
3. A 10-page document
4. Your favorite book

### Exercise 3: Model Selection
Choose the best model for:
1. Translating a sentence
2. Analyzing a 100-page research paper
3. Quick Q&A chatbot
4. Generating creative stories

### Exercise 4: Context Understanding
Scenario: You have GPT-3.5 (4K context)
1. How many messages can fit?
2. What happens when limit is reached?
3. How to manage long conversations?

---

## Key Takeaways - Week 1

```mermaid
mindmap
  root((Week 1<br/>Complete))
    AI PATH
      CS: Foundation
      ML: Learning from data
      DL: Neural networks
      Gen AI: Creating content
    LLMs
      Large models for language
      Trained on massive data
      Can generate human-like text
    Tokens
      Basic units of text
      ~4 characters = 1 token
      Used for pricing & limits
    Context Window
      Model's memory span
      4K to 1M tokens
      Determines conversation length
    Popular Models
      GPT-4: Most capable
      Gemini: Largest context
      Claude: Long documents
      GPT-3.5: Fast & cheap
```

---

## Real-World Applications Discussed

### Class 1 Examples:
- **Email Spam Detection** (ML)
- **Face Recognition** (DL)
- **ChatGPT Conversations** (Gen AI)
- **Self-driving Cars** (DL)
- **Netflix Recommendations** (ML)

### Class 2 Examples:
- **Token Calculation** for cost estimation
- **Context Management** in long conversations
- **Model Selection** based on task requirements
- **LLM Limitations** and workarounds

---

## Common Questions & Answers

### Q1: Do I need programming skills to understand this?
**A:** No! Week 1 is designed for everyone. We use simple analogies and visual diagrams.

### Q2: Which AI model should I use?
**A:** Depends on your task:
- Quick answers → GPT-3.5
- Complex reasoning → GPT-4
- Long documents → Claude or Gemini

### Q3: Why are tokens important?
**A:** Tokens determine:
- Cost (charged per token)
- Speed (more tokens = slower)
- Limits (context window in tokens)

### Q4: Can AI replace humans?
**A:** AI is a tool that augments human capabilities, not replaces them. It has limitations like hallucinations, bias, and no true understanding.

---

## Week 1 Timeline

### Suggested Study Plan:

```mermaid
gantt
    title Week 1 Study Timeline
    dateFormat  YYYY-MM-DD
    section Class 1
    Read Class 1 Material           :a1, 2024-01-01, 2h
    Watch Examples                  :a2, after a1, 1h
    Practice Questions              :a3, after a2, 1h
    section Class 2
    Read Class 2 Material           :b1, 2024-01-02, 2h
    Hands-on with ChatGPT          :b2, after b1, 1h
    Token Calculation Practice      :b3, after b2, 1h
    section Assessment
    Review All Content              :c1, 2024-01-03, 1h
    Complete Week 1 Quiz            :c2, after c1, 30min
```

**Total Time:** 10-12 hours

---

## Resources & Tools

### For This Week:

1. **AI Tools to Explore:**
   - ChatGPT (https://chat.openai.com)
   - Google Gemini (https://gemini.google.com)
   - Claude (https://claude.ai)

2. **Token Calculators:**
   - OpenAI Tokenizer: https://platform.openai.com/tokenizer
   - Calculate token counts for practice

3. **Additional Reading:**
   - OpenAI Blog
   - Google AI Blog
   - Anthropic Research

---

## Next Week Preview

### Week 2: Prompt Engineering

You will learn:
- What is Prompt Engineering?
- Zero-shot vs Few-shot prompting
- Chain-of-thought reasoning
- Prompt templates and patterns
- Best practices for effective prompts
- Hands-on prompt writing exercises

**Get Ready!**

---

## Week 1 Checklist

Before moving to Week 2, ensure you have:

- [ ] Completed Class 1 reading
- [ ] Understood the AI PATH (CS → ML → DL → Gen AI)
- [ ] Completed Class 2 reading
- [ ] Practiced token calculation
- [ ] Explored at least 2 LLMs (ChatGPT, Gemini, etc.)
- [ ] Completed practice questions
- [ ] Finished Week 1 quiz (if available)
- [ ] Reviewed key concepts

---

## Need Help?

If you have questions or need clarification:

1. **Review the diagrams** - Visual aids explain complex concepts
2. **Try the examples** - Hands-on practice reinforces learning
3. **Ask in discussions** - Community can help
4. **Contact instructor** - waqarahmed7861234@gmail.com

---

## Congratulations! 🎉

You've completed **Week 1 of AI for Everyone**!

You now understand:
- ✅ What AI is and how it evolved
- ✅ The difference between ML, DL, and Gen AI
- ✅ How Large Language Models work
- ✅ What tokens and context windows are
- ✅ How to choose the right AI model

**Keep the momentum going! See you in Week 2!** 🚀

---

*Happy Learning!*

**Instructor:** Waqar Rana
**Course:** AI for Everyone - Bano Qabil
