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

## 💻 Code Walkthrough

### 01 — Class & Object

**158_class.js — Class skeleton (blueprint)**

A `Person` class with private attributes and empty behaviors. Two separate objects are created from the same blueprint.

```javascript
class Person {
    #name;
    #age

    eat() {}
    sleep() {}
}

const khaleeda = new Person();   // object reference
const niyaz = new Person();
```

**159_Constructor.js — Parameterized constructor**

The constructor takes a name and stores it on `this`. Each object gets its own copy.

```javascript
class Car {
    constructor(assigned_name) {
        this.name = assigned_name;
    }
}

let hyundai_i10 = new Car("i10");
console.log(hyundai_i10.name);   // i10

let hyundai_creta = new Car("creta");
console.log(hyundai_creta.name); // creta

const a = new Car("i11");
const b = new Car("Nexon");
console.log(a.name);             // i11
console.log(b.name);             // Nexon
```

**160.js — Constructor lifecycle**

The constructor runs automatically the moment an object is created — no manual call needed.

```javascript
class Car {
    constructor() {
        console.log("Hi, object is created automatically")
    }
}

obj_ref = new Car();   // Hi, object is created automatically
```

**161_Real_Constructor.js — Real-world constructor**

A `TestCase` class for test automation. Note the second `static display()` shadows the instance method when called on the class.

```javascript
class TestCase {
    constructor(name, status, priority) {
        this.name = name;
        this.status = status;
        this.priority = priority;
    }

    display() {
        console.log(this.name + " -> " + this.status + " -> " + this.priority)
    }
    static display() {
        console.log("Static method called on class")
    }
}

let loginTest_ref = new TestCase("Login Test", "PASS", "P0");
let signUp_ref = new TestCase("Sign Up", "FAIL", "P1");
loginTest_ref.display();   // Login Test -> PASS -> P0
signUp_ref.display();      // Sign Up -> FAIL -> P1
TestCase.display();        // Static method called on class
```

### 02 — Public & Private

**162_Real.js — Real-world class**

A `Browser` class that keeps state per instance (`isOpen`) and exposes start/close behaviors.

```javascript
class Browser {
    constructor(name) {
        this.name = name;
        this.isOpen = true;
        console.log(name + "launched")
    }
    startBrowser() { console.log("starting the browser"); }
    closeBrowser() { console.log("closing the browser"); }
}

let chrome = new Browser("Chrome");     // Chromelaunched
let fireFox = new Browser("Firefox");   // Firefoxlaunched
console.log(chrome.isOpen);             // true
chrome.startBrowser();                  // starting the browser
chrome.closeBrowser();                  // closing the browser
```

**163_IQ.js — IQ practice**

Same class, different configuration. Each `APIClient` instance holds its own `baseURL`.

```javascript
class APIClient {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    get(path) {
        return this.baseURL;
    }
}

let staging = new APIClient("https://staging.api.com");
let prod = new APIClient("https://prod.api.com");
console.log(staging.get("/users"));    // https://staging.api.com
console.log(prod.get("/prod/users"));  // https://prod.api.com
console.log(staging.baseURL);          // https://staging.api.com
```

**164_Private_Plublic.js — Private fields `#`**

The `#apiKey` is hidden inside the class. It can only be read through a method — direct access from outside is a syntax error.

```javascript
class Credentials {
    #apiKey;
    user;

    constructor(user, key) {
        this.user = user;
        this.#apiKey = key;
    }

    pramodGetAuthHeader() {
        return "Bearer " + this.#apiKey;
    }
}

let cred = new Credentials("admin", "secret_key");
// console.log(cred.#apiKey);   // SyntaxError: Private field must be declared...
console.log(cred.user);          // admin
```

### 03 — Static (JavaScript)

**165_Static.js — Static counters**

`totalTests` and `passCount` are static, so they are shared across all instances and counted on the class itself.

```javascript
class TestRunner {
    static totalTests = 0;
    static passCount = 0;

    constructor(name, passed) {
        this.name = name;
        TestRunner.totalTests++;
        if (passed) {
            TestRunner.passCount++;
        }
    }
}

let t1 = new TestRunner("loginTest", true);
let t2 = new TestRunner("signupTest", true);
let t3 = new TestRunner("dashboardTest", true);
let t4 = new TestRunner("supportsTest", false);
console.log(TestRunner.totalTests);  // 4
console.log(TestRunner.passCount);   // 3
console.log(t1.name);                // loginTest
console.log(t2.name);                // signupTest
console.log(t3.name);                // dashboardTest
console.log(t4.name);                // supportsTest
```

**166_IQ.js — Static methods**

`summary()` is a static method — called on the class, not on an instance. Each constructor call also reads the global `a`.

```javascript
let a = 10;
class TestRunner {
    static totalTests = 0;
    static passCount = 0;

    constructor(name, passed) {
        this.name = name;
        TestRunner.totalTests++;
        if (passed) {
            TestRunner.passCount++;
        }
        console.log(a);
    }

    pramod_fn() {
        return this.name;
    }

    static summary() {
        return TestRunner.passCount + "/" + TestRunner.totalTests + " passed";
    }
}

new TestRunner("Login", true);     // 10
new TestRunner("Signup", false);   // 10
new TestRunner("Cart", true);      // 10
new TestRunner("Checkout", true);  // 10
console.log(TestRunner.summary()); // 3/4 passed
```

**167.js — Static properties**

`collegeName` is static and shared by the whole class. Calling `Student.display("miti")` prints `miti` because inside a static method `this` refers to the class name passed.

```javascript
class Student {
    static collegeName = "PW AT Batch";

    constructor(name) {
        this.name = name;
    }

    static display(name) {
        console.log(this.name + " is a part of " + Student.collegeName);
    }

    nsf() {
        console.log(this.name);
    }
}

let amit = new Student("amit");
let miti = new Student("miti");
console.log(Student.collegeName);  // PW AT Batch
// console.log(Student.display("miti"))
console.log(miti.name);            // miti
// console.log(miti.nsf());
```

**168.js — Fields & globals**

The class reads the global `a` inside the constructor, and `b` is a public instance field set to `10`.

```javascript
let a = 10;
class Car {
    b;
    constructor() {
        console.log(a);  // 10
        this.b = 10;
    }
}

let obj = new Car();
console.log(obj.b)       // 10
```

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
