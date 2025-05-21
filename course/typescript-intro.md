# 🧠 Introduction to TypeScript

## What is TypeScript?

TypeScript is like **supercharged JavaScript**. It was created to make coding safer by adding **type safety** to JavaScript. A lot of JavaScript developers have started using TypeScript because it helps avoid silly bugs. Some developers even say that knowing TypeScript is a sign you’ve reached the **senior level**. 😎

## Why Should You Learn TypeScript?

The world of software development is changing fast. These days, people aren’t just "vibe coding" – they want to **understand what the code does** and how it works. TypeScript helps with that. It gives you peace of mind by **showing errors before you even run your app**. That means fewer surprises when your app breaks out of nowhere.

Whether you’re building a mobile app, web app, or a backend API – knowing TypeScript will give you an edge and improve your productivity.

---

## 🧾 Data Types in TypeScript

TypeScript uses **data types** to help you write cleaner and more reliable code. Here are some common ones:

- **string** → A string is text wrapped in quotes like `"hello"` or `'hi there'`. It can be any characters.
- **number** → This is used for both whole numbers (like `10`) and decimal numbers (like `3.14`).
- **Date** → Used to store date and time values.
- **any** → This is a flexible type. You can assign anything to it – but be careful, it removes all the type safety.

---

## 🧱 Declaring a Variable

In TypeScript, you can create variables using `const`, `let`, or `var`. Let's break each one down quickly:

- **const** → This is used for values that don’t change. Once you assign a value, you can’t change it again.
- **let** → This is used when you want to change the value of a variable later.
- **var** → Works similarly to `let`, but it's older and has some quirks. These days, we usually avoid using `var`.

> ℹ️ Pro Tip: Always prefer `const` unless you **know** the value will change, then use `let`.

---

## 🛠️ Practical Guide: Your First TypeScript File

Let’s get hands-on!

In your `emfundo` project, go to the `components` folder and create a new file called:

```
constants.ts
```

> 🔍 Note: `.ts` means it’s a TypeScript file. This is slightly different from the `.tsx` files we use for components in React/Next.js.

Inside this file, let’s declare a few variables using `const`. We'll cover strings, numbers, and even a string that looks like a number.

```ts
// constants.ts

// 🔤 string variables
export const myname: string = "hello world";
export const surname: string = "hello, it's a surname";

// 🔢 number variables (integers)
const numberTwo: number = 1;
const n: number = 193283288327;

// 💸 decimal or float values
const rand: number = 0.1;

// 🤔 a string that looks like a number
const numberM: string = "1";
```

---

## Conclusion

TypeScript might look a little strict at first, but it actually helps you become a better developer by forcing you to **think clearly about your code**. Once you get used to it, you’ll wonder how you ever survived without it.

In the next lessons, we’ll go deeper into:

- 🔧 How to use `functions` with types
- 🧩 Working with `interfaces` and `types`
- 🧠 Type inference
- 📦 Importing and exporting your modules properly

Stay tuned and keep coding! 🇿🇦💻🔥
