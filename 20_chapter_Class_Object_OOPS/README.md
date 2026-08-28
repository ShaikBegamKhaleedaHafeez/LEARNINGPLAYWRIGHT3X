# Classes, Objects & OOP in JavaScript

This chapter introduces Object-Oriented Programming in JavaScript: classes, objects, constructors, public/private fields, and static members — with practical examples inspired by test automation (TestRunners, APIClients, Browsers).

## 📁 Files

### 01 — Class & Object

| File | Topic | Highlights |
|------|-------|------------|
| `158_class.js` | Class skeleton | `Person` class with private fields (`#name`, `#age`) and behaviors (`eat()`, `sleep()`); creating objects with `new Person()` |
| `159_Constructor.js` | Parameterized constructor | `Car` class with a constructor that accepts a name and assigns it via `this.name` |
| `160.js` | Constructor lifecycle | Constructor runs automatically when an object is created ("Hi, object is created automatically") |
| `161_Real_Constructor.js` | Real-world constructor | `TestCase` class holding `name`, `status`, `priority` with a `display()` method |

### 02 — Public & Private

| File | Topic | Highlights |
|------|-------|------------|
| `162_Real.js` | Real-world class | `Browser` class that tracks state (`isOpen`) and has `startBrowser()` / `closeBrowser()` behaviors |
| `163_IQ.js` | IQ practice | `APIClient` class storing a `baseURL` per instance (staging vs prod) |
| `164_Private_Plublic.js` | Private fields `#` | `Credentials` class hides `#apiKey` — private fields cannot be accessed outside the class |

### 03 — Static (JavaScript)

| File | Topic | Highlights |
|------|-------|------------|
| `165_Static.js` | Static counters | `TestRunner` with static `totalTests` / `passCount` incremented from the constructor |
| `166_IQ.js` | Static methods | `TestRunner.summary()` returns `"pass/total passed"`; static method called on the class, not the instance |
| `167.js` | Static properties | `Student.collegeName` shared across all instances; `static display()` reads the class name |
| `168.js` | Fields & globals | `Car` class with an instance field `b` and access to a global variable `a` |

## 🎯 Key Takeaways

- A **class** is a blueprint; an **object** is created from it with `new ClassName()`.
- The **constructor** runs automatically on object creation and sets up instance state via `this`.
- **Private fields** (`#field`) hide data — they can only be accessed inside the class.
- **Static** members belong to the class itself, not to instances: access them via `ClassName.staticMember`.

## 🛠️ How to Run

```bash
node 20_chapter_Class_Object_OOPS/01_Class_Object/158_class.js
node 20_chapter_Class_Object_OOPS/02_Public_Private/164_Private_Plublic.js
node 20_chapter_Class_Object_OOPS/03_Static_JS/166_IQ.js
```
