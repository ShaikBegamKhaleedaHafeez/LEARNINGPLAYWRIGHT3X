# Learning Playwright 3X — JavaScript Foundations

A structured journey through JavaScript fundamentals, building toward Playwright test automation. Each chapter focuses on core JS concepts with hands-on coding examples and IQ (Intelligent Question) notes.

## 📁 Chapters

| # | Chapter | Topic | Key Files |
|---|---------|-------|-----------|
| 00 | `chapter_00_GenAI` | Introduction to Generative AI | — |
| 01 | `chapter_01_Basics` | Hello World & JS setup | `HelloWorld.js` |
| 02 | `chapter_02_JSBasics` | JavaScript fundamentals | — |
| 01 | `01_chapter_JavaScript` | Hello World | `01_HelloWorld.js` |
| 02 | `02_chapter_JavaScript` | `let` keyword concept | `02_letConcept.js` |
| 03 | `03_chapter_Identifiers` | Variable naming rules, comments | `03_Identifier_Rules.js`, `04_Identifier_Rules_Part2.js`, `05_Comments.js`, `06_Identifier_IQ.js` |
| 04 | `04_chapter_Literal` | Values, null vs undefined | `07_Literal.js`, `08_null_undefined.js`, `09_Null_IQ.js`, `10_Literal.js`, `11_Number.js`, `12_Number2.js` |
| 05 | `05_chapter_Operator` | Arithmetic, comparison, logical, ternary, increment/decrement, null coalescing, IQ | `13_DataTypes.js`, `15_Arithmetic_Operator.js`, `16_Comparison_operator.js`, `17_Logical_Operators.js`, `18_Confusing_Operator.js`, `22_Ternary_Operator.js`, `32_In_De_Operator.js`, `36_Null_Coalescing.js`, `23-30 IQ*.js`, `37_IQ.js` |
| 06 | `06_Statement` | IQ review on statements | `37_IQ.js`, `38_IQ.js`, `38_Multiple_Condition.js` |
| 07 | `07_chapter_Functions_Kh` | Functions: types, arrows, params, hoisting, higher-order | `01_Arrays.js` … `07_HigherOrder_Functions.js` |
| 07 | `07_chapter_Switch` | Switch statements & IQ | `39_Switch.js`, `40_IQ.js` … `47_IQ4.js` |
| 08 | `08_chapter_UserInputs` | User input via prompt, readline, prompt-sync, fs | `48_JS.js` (+ README) |
| 09 | `09_chapter_Loops` | for / while / do-while, nested loops | `52_Loops.js` … `63_Nested_ForLoop.js` |
| 10 | `10_chaper_Arrays` | Arrays: creation, methods, iteration, sorting, destructuring | `64_Arrays.js` … `79_Destructuring.js` |
| 11 | `11_Functions` | Functions: arrow, IIFE, spread, hoisting, TDZ, IQ | `80_Type1_BasicFn.js` … `103_IQ.js` |
| 11 | `11_PracticeProblems` | Practice: palindrome, prime, patterns, strings | `01_Palindrom_Checker.js` … `07_Reverse_String.js` |
| 12 | `12_chapter_Fn_Closure` | Scope & closures | `104_Scope_Fn.js` … `108_Fn_Simple.js` |
| 13 | `13_String` | String methods, searching, extraction, split/join | `109_String.js` … `115_Fn_String_Conversion.js`, `String_Cheatsheet.md` |
| 14 | `14_Objects` | Objects, call-by-reference vs call-by-value | `116_Objects.js` … `121_CallByRef_CallByValue.js` |
| 15 | `15_MultiDimensionalArray` | 2D arrays | `122_Array.js` |
| 15 | `15_MultiDimensional_Array` | 2D arrays & patterns | `122_Array.js` … `127_Pyramid_Pattern.js` |
| 16 | `16_CallBack` | Callbacks: sync, async, real-world | `128_CallBack.js` … `135_Pyramid_DOM.js` |
| 17 | `17_Promises` | Promises: chaining, all, allSettled, race | `136_Promise.js` … `143_Promise_Race.js` |
| 18 | `18_chapter_Async` | Async/await, sequential & parallel execution | `146.js`, `147.js`, `148_AA.js`, `149_Example.spec.ts`, `150.js`, `151_Sequential_Exec.js`, `152_Parallel_Exec.js`, `154.js`, `async_await_tutorial.html` |
| 19 | `19_chapter_Export_Import` | ES modules: export/import, utils, tests | `155.js`, `156_test.js`, `157.js`, `utils.js`, `testutil.js`, `Logs/logger.js`, `package.json` |
| 20 | `20_chapter_Class_Object_OOPS` | Classes, objects, public/private, static | `01_Class_Object/`, `02_Public_Private/`, `03_Static_JS/` (+ README) |
| 21 | `21_Encapsulation_OOPS` | Encapsulation: private fields, bank/real examples, IQ | `169.js` … `175_IQ.js` |
| 22 | `22_OOPS_Interitance` | Inheritance & IQ | `177.js` … `181_IQ.js`, `Single_Interitance/176_SI.js`, `Single_Interitance/182.js` |
| — | `IQ_Notes` | Concept breakdowns (tables, diagrams, takeaways) | `Source_Code_ByteCODE_Binary_IQ.md`, `__prompt.md` |
| — | `01_CodingExam` | Coding exam practice problems | `01_Even_Odd.js` … `10_Remove_Duplicates.js` |

## 🎯 Goal

Build a solid JS foundation — identifiers, literals, data types, operators, functions, arrays, objects, async patterns, and OOP — before diving into Playwright for browser automation.

## 🛠️ How to Run

Most examples are plain Node.js scripts:

```bash
node <filename>.js
```

Example:

```bash
node chapter_01_Basics/HelloWorld.js
node 05_chapter_Operator/36_Null_Coalescing.js
node 18_chapter_Async/152_Parallel_Exec.js
```

ES module chapters (19+) use `import`/`export`:

```bash
node 19_chapter_Export_Import/156_test.js
```

Playwright spec files (e.g. `18_chapter_Async/149_Example.spec.ts`) run with:

```bash
npx playwright test 18_chapter_Async/149_Example.spec.ts
```
