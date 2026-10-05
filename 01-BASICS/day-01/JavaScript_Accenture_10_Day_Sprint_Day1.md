# JavaScript --- Accenture 10-Day Sprint

## How this sprint works

I will be your **guide**, not your code writer.

For every session:

1.  Read the theory/notes.
2.  Read the pseudocode.
3.  Implement everything yourself in VS Code.
4.  Run and test your code.
5.  Debug your own mistakes first.
6.  Send me your solutions/errors.
7.  I review them and give you the next set.

### Daily target

-   2--3 focused hours
-   Theory: 25--35 min
-   Implementation: 60--75 min
-   Problems/debugging: 40--50 min
-   Revision: 10--15 min

### Rule

Do not copy solutions. Search syntax only when necessary. Try to reason
first.

------------------------------------------------------------------------

# 10-Day Roadmap

  Day   Focus
  ----- ---------------------------------------------------------
  1     JS basics, variables, data types, operators, conditions
  2     Loops, nested loops, patterns, basic math
  3     Strings + string problems
  4     Arrays + array problems
  5     Functions + scope + recursion basics
  6     Objects + Sets + Maps + modern JS syntax
  7     Array methods + callbacks + higher-order functions
  8     DOM + events + forms + browser JS
  9     DSA in JavaScript + debugging/output questions
  10    Accenture-style mixed test + weak-area revision

------------------------------------------------------------------------

# DAY 1 --- JavaScript Foundations

## 1. What JavaScript is

JavaScript is a programming language commonly used to add logic and
interactivity to web pages.

For this sprint, focus on JavaScript as a **programming language**, not
on web development first.

Your immediate goals:

-   store data
-   perform calculations
-   compare values
-   make decisions
-   understand program flow

------------------------------------------------------------------------

# 2. Output

``` js
console.log("Hello");
console.log(10);
```

`console.log()` prints a value to the console.

------------------------------------------------------------------------

# 3. Variables

A variable is a named reference to a value.

``` js
let age = 22;
const country = "India";
```

### let

Use when the variable may be reassigned.

``` js
let score = 10;
score = 20;
```

### const

Use when the variable should not be reassigned.

``` js
const pi = 3.14;
```

### var

Older variable declaration syntax. Know it for exams, but prefer `let`
and `const` in new code.

------------------------------------------------------------------------

# 4. Data types

Know these first:

``` text
String
Number
Boolean
Undefined
Null
```

Examples:

``` js
let name = "Alex";      // String
let age = 21;           // Number
let passed = true;      // Boolean
let result;             // Undefined
let data = null;        // Null
```

Use:

``` js
typeof value
```

to inspect the type.

Example:

``` js
console.log(typeof 10);
console.log(typeof "10");
console.log(typeof true);
```

------------------------------------------------------------------------

# 5. Operators

## Arithmetic

``` text
+    addition
-    subtraction
*    multiplication
/    division
%    remainder
**   exponent
```

Examples:

``` js
10 + 3
10 - 3
10 * 3
10 / 3
10 % 3
2 ** 3
```

### Important

`%` gives the remainder.

``` text
10 % 2 = 0
11 % 2 = 1
17 % 5 = 2
```

This is heavily used for:

-   even/odd
-   digit problems
-   divisibility
-   cyclic logic

------------------------------------------------------------------------

# 6. Assignment operators

``` text
= 
+=
-=
*=
/=
%=
```

Example:

``` js
let x = 10;

x += 5;
```

Equivalent to:

``` js
x = x + 5;
```

------------------------------------------------------------------------

# 7. Comparison operators

``` text
>
<
>=
<=
==
===
!=
!==
```

### `==` vs `===`

This is important.

``` js
5 == "5"
```

allows type conversion.

``` js
5 === "5"
```

checks value and type.

For normal programming, prefer `===` unless you specifically need loose
equality.

------------------------------------------------------------------------

# 8. Logical operators

``` text
&&    AND
||    OR
!     NOT
```

### AND

Both conditions must be true.

``` js
age >= 18 && age <= 60
```

### OR

At least one condition must be true.

``` js
day === "Saturday" || day === "Sunday"
```

### NOT

Reverses a boolean result.

``` js
!true
```

gives:

``` text
false
```

------------------------------------------------------------------------

# 9. Conditions

Basic structure:

``` js
if (condition) {
    // execute if true
}
```

With alternatives:

``` js
if (condition) {
    // true
} else {
    // false
}
```

Multiple conditions:

``` js
if (condition1) {

} else if (condition2) {

} else {

}
```

------------------------------------------------------------------------

# 10. Ternary operator

Short form of a simple if/else.

``` js
condition ? valueIfTrue : valueIfFalse
```

Example:

``` js
let result = age >= 18 ? "Adult" : "Minor";
```

Do not overuse it. Learn to read it quickly.

------------------------------------------------------------------------

# Pseudocode patterns

## Even / Odd

``` text
START
READ n

IF n % 2 == 0
    PRINT "Even"
ELSE
    PRINT "Odd"

END
```

## Largest of two numbers

``` text
START
READ a, b

IF a > b
    PRINT a
ELSE
    PRINT b

END
```

## Positive / Negative / Zero

``` text
START
READ n

IF n > 0
    PRINT "Positive"
ELSE IF n < 0
    PRINT "Negative"
ELSE
    PRINT "Zero"

END
```

## Simple calculator

``` text
START
READ a, b, operator

IF operator is "+"
    result = a + b
ELSE IF operator is "-"
    result = a - b
ELSE IF operator is "*"
    result = a * b
ELSE IF operator is "/"
    result = a / b
ELSE
    PRINT "Invalid operator"

PRINT result

END
```

------------------------------------------------------------------------

# DAY 1 --- Implementation Tasks

Create:

``` text
JAVASCRIPT-ACCENTURE/
└── 01-basics/
    └── day1.js
```

Do these yourself.

## Level 1 --- Fundamentals

### Q1

Declare variables for:

-   your name
-   age
-   height
-   whether you are a student

Print all four.

### Q2

Create two numbers and print:

-   sum
-   difference
-   product
-   quotient
-   remainder

### Q3

Given a number, print whether it is even or odd.

### Q4

Given a number, print whether it is:

-   positive
-   negative
-   zero

### Q5

Given two numbers, print the larger number.

------------------------------------------------------------------------

# Level 2 --- Conditional Logic

### Q6 --- Largest of Three

Given `a`, `b`, and `c`, print the largest.

Do NOT use `Math.max()`.

### Q7 --- Divisibility

Given `n`, determine whether it is divisible by both 3 and 5.

### Q8 --- Voting Eligibility

Given age:

-   18 or above → Eligible
-   otherwise → Not eligible

### Q9 --- Grade

Given marks:

``` text
90–100 → A
80–89  → B
70–79  → C
60–69  → D
below 60 → F
```

Handle invalid marks too.

### Q10 --- Leap Year

Determine whether a year is a leap year.

Do not memorize the condition. Think about the divisibility rules and
construct the logic.

------------------------------------------------------------------------

# Level 3 --- Small Problems

### Q11 --- Calculator

Create a calculator using:

``` text
+
-
*
/
%
```

Handle invalid operators.

Also think about division by zero.

### Q12 --- Electricity Bill

Create a program that calculates a bill based on units.

Use your own reasonable slab structure.

The objective is practicing multiple conditions, not the exact bill
amount.

### Q13 --- Three-number ordering

Given three numbers, determine whether they are:

-   strictly increasing
-   strictly decreasing
-   neither

Example:

``` text
1 2 3 → Increasing
5 4 1 → Decreasing
1 3 2 → Neither
```

------------------------------------------------------------------------

# Debugging Practice

Do NOT immediately run these.

First identify the problem.

## Debug 1

``` js
let age = 20;

if age >= 18 {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

Identify the syntax problem.

------------------------------------------------------------------------

## Debug 2

``` js
const x = 10;

x = 20;

console.log(x);
```

Identify what kind of error this creates and why.

------------------------------------------------------------------------

## Debug 3

``` js
let x = 10;

if (x = 20) {
    console.log("Twenty");
}
```

Ask yourself:

-   Is `=` comparison?
-   What does assignment return?
-   Which operator should normally be used for comparison?

------------------------------------------------------------------------

# Output Prediction

Predict before running.

## Q1

``` js
console.log(10 + 5);
console.log(10 + "5");
```

## Q2

``` js
console.log(10 == "10");
console.log(10 === "10");
```

## Q3

``` js
let x = 10;

x += 5;
x *= 2;

console.log(x);
```

## Q4

``` js
let x = 15;

if (x > 20) {
    console.log("A");
} else if (x > 10) {
    console.log("B");
} else {
    console.log("C");
}
```

## Q5

``` js
console.log(17 % 5);
console.log(2 ** 4);
```

------------------------------------------------------------------------

# Day 1 Quiz

Answer without running code.

### 1.

What is the difference between `let` and `const`?

### 2.

What does `%` return?

### 3.

What is the difference between `==` and `===`?

### 4.

What does `typeof` do?

### 5.

What does `&&` mean?

### 6.

What does `||` mean?

### 7.

What does `!` do?

### 8.

What is the output?

``` js
console.log(5 + "10");
```

### 9.

What is the output?

``` js
console.log(20 % 6);
```

### 10.

Why is this dangerous?

``` js
if (x = 10)
```

------------------------------------------------------------------------

# What to study today from W3Schools

Read only these sections today:

1.  JavaScript Introduction
2.  JavaScript Where To
3.  JavaScript Output
4.  JavaScript Statements
5.  JavaScript Syntax
6.  JavaScript Comments
7.  JavaScript Variables
8.  JavaScript let
9.  JavaScript const
10. JavaScript Data Types
11. JavaScript Operators
12. JavaScript Arithmetic
13. JavaScript Assignment
14. JavaScript Comparison
15. JavaScript Logical
16. JavaScript if / else / else if
17. JavaScript Ternary Operator

Do the **W3Schools exercises** after each relevant section, but do not
spend excessive time on them. Your main work is the implementation tasks
in this file.

------------------------------------------------------------------------

# Completion Criteria

Do not call Day 1 finished just because you read the theory.

Day 1 is complete when you can:

-   write variables without looking up syntax
-   identify basic data types
-   use arithmetic operators
-   use `%` correctly
-   distinguish `==` and `===`
-   construct if/else logic
-   solve the 13 implementation problems
-   identify the three debugging issues
-   answer the output questions
-   score at least 8/10 on the quiz

If you cannot do those things, repeat the weak section instead of moving
forward.

------------------------------------------------------------------------

# End-of-Day Report

Send this to your guide:

``` text
DAY 1 COMPLETE

Implementation:
Q1:
Q2:
...
Q13:

Debugging:
D1:
D2:
D3:

Output:
Q1:
Q2:
...
Q5:

Quiz:
__/10

Time spent:
__ minutes

Topics I struggled with:
-

Errors I made:
-

Confidence:
__/10
```

Do not send screenshots unless necessary. Send your code/errors as text
when I need to inspect your reasoning.
