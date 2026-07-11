# Source Code vs Byte Code vs Binary Code

## Example: `HelloWorld.js`

```javascript
console.log("Hi Welcome to JavaScript!");
```

---

## Comparison Table

| Aspect | **Source Code** | **Byte Code** | **Binary Code (Machine Code)** |
|--------|----------------|---------------|--------------------------------|
| **What it is** | Human-readable instructions written in a programming language | Intermediate representation — platform-independent low-level instructions | CPU-native instructions — 0s and 1s the processor executes directly |
| **Who reads it** | Humans (developers) | Virtual Machine (e.g. JVM, V8 engine) | CPU hardware |
| **Readability** | ✅ Readable — uses English-like syntax | ❌ Not human-friendly — numeric opcodes and operands | ❌ Not human-readable — pure binary |
| **Example (our file)** | `console.log("Hi Welcome to JavaScript!");` | `0xLd, 0x12, "Hi Welcome to JavaScript!", 0xCall` (pseudo) | `10110000 01000000 11111100 ...` (actual bits) |
| **File extension** | `.js`, `.py`, `.java`, `.c`, etc. | `.class` (Java), `.pyc` (Python), internal V8 bytecode | `.exe`, `.dll`, `.o`, `.out` |
| **Execution step** | **Step 1** — you write this | **Step 2** — compiler/engine compiles source to byte code | **Step 3** — CPU executes the binary |
| **Portability** | Portable across any platform with a compatible runtime | Portable across any platform with a compatible VM | **Not portable** — tied to a specific CPU architecture (x86, ARM, etc.) |
| **Speed** | Slowest (must be interpreted/compiled first) | Faster than source, slower than binary (VM adds overhead) | Fastest — runs directly on silicon |
| **Can you modify it?** | ✅ Yes — open in any editor | ❌ No — would need decompilation tools | ❌ No — would need a disassembler / hex editor |
| **Security / Obfuscation** | Fully exposed — easy to copy | Partially obscured — harder to reverse-engineer | Very hard to reverse-engineer |

---

## How It Works for `console.log("Hi Welcome to JavaScript!");`

```
┌────────────────────────────────────────────────────────────┐
│  Step 1: SOURCE CODE                                       │
│  console.log("Hi Welcome to JavaScript!");                  │
│  └── You write this in VS Code / Notepad                   │
│                                                             │
│       │ Node.js / V8 engine parses this                     │
│       ▼                                                     │
│  Step 2: BYTE CODE (invisible — V8 internal)                │
│  LdaConstant "Hi Welcome to JavaScript!"                    │
│  CallRuntime ConsoleLog                                     │
│  Return                                                     │
│  └── Stored in memory as compact instructions               │
│                                                             │
│       │ V8 Ignition interpreter or TurboFan compiler        │
│       ▼                                                     │
│  Step 3: BINARY / MACHINE CODE                              │
│  mov  rdi, <string_address>                                 │
│  call <console_log_address>                                 │
│  └── Actual 0s and 1s executed by your CPU                  │
└────────────────────────────────────────────────────────────┘
```

## Key Takeaway

| Code Type | Purpose |
|-----------|---------|
| **Source Code** | What **you** write and maintain |
| **Byte Code** | What the **runtime engine** (V8 / JVM / Python VM) uses internally for portability & optimization |
| **Binary Code** | What the **CPU** actually executes — pure machine instructions |

> In JavaScript (Node.js), the V8 engine first compiles source to **byte code** (Ignition interpreter), then for hot/frequently-run code it compiles the byte code into **optimised machine code** (TurboFan compiler).
