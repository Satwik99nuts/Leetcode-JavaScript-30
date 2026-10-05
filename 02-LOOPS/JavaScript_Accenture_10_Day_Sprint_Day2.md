# JavaScript — Accenture 10-Day Sprint

# DAY 2 — Loops, Nested Loops, Patterns & Basic Math

## Today's objective

By the end of Day 2, you should be able to:

- choose the correct loop for a problem
- trace a loop without executing it
- use `for`, `while`, and `do...while`
- use `break` and `continue`
- build nested loops
- solve basic number/math problems
- recognize common DSA-style loop patterns

Today is about **program flow**.

---

# 1. What is a loop?

A loop repeats a block of code while a condition is satisfied.

Conceptually:

```text
START
SET counter

WHILE condition is true
    perform task
    update counter

END
```

# 2. `for` loop

```js
for (initialization; condition; update) {
    // code
}
```

Example:

```js
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

Trace it mentally:

```text
initialization → condition → body → update → condition → ...
```

# 3. `while` loop

```js
while (condition) {
    // code
}
```

Example:

```js
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

You must update the variable yourself, otherwise you can create an infinite loop.

# 4. `do...while`

```js
do {
    // code
} while (condition);
```

`while` checks first. `do...while` executes once before checking.

```js
let x = 10;

do {
    console.log(x);
} while (x < 5);
```

This still prints `10`.

# 5. `break`

`break` immediately exits the loop.

```js
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);
}
```

# 6. `continue`

`continue` skips the current iteration and moves to the next one.

```js
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}
```

Remember:

```text
break    → stop the entire loop
continue → skip this iteration
```

# 7. Increment and decrement

```text
i++   → i = i + 1
i--   → i = i - 1
i += 2
i -= 2
```

# 8. Nested loops

A loop inside another loop:

```js
for (...) {
    for (...) {
        // code
    }
}
```

Useful for patterns, matrices, 2D arrays, and pair comparisons.

Think:

```text
OUTER LOOP
    INNER LOOP
    INNER LOOP
    INNER LOOP

OUTER LOOP
    INNER LOOP
    INNER LOOP
    INNER LOOP
```

# 9. Pattern thinking

For:

```text
*
**
***
****
*****
```

The observation is:

```text
row 1 → 1 star
row 2 → 2 stars
row 3 → 3 stars
...
```

Pseudocode:

```text
FOR row = 1 TO 5
    FOR col = 1 TO row
        PRINT "*"
    PRINT new line
```

Understand the relationship before coding.

# 10. Digit extraction

For a positive integer:

```text
n % 10
```

gives the last digit.

Example:

```text
123 % 10 = 3
```

To remove the last digit:

```js
Math.floor(n / 10)
```

Example:

```text
123 → 12 → 1 → 0
```

General pattern:

```text
WHILE n > 0
    digit = n % 10
    process digit
    n = floor(n / 10)
END
```

This processes digits right-to-left.

It is used for:

- sum of digits
- reverse number
- count digits
- palindrome number
- Armstrong number

# 11. Sum of first N natural numbers

Pseudocode:

```text
sum = 0

FOR i = 1 TO n
    sum = sum + i

PRINT sum
```

# 12. Factorial

```text
5! = 5 × 4 × 3 × 2 × 1
```

Pseudocode:

```text
factorial = 1

FOR i = 1 TO n
    factorial = factorial * i

PRINT factorial
```

Remember:

```text
0! = 1
```

# 13. Counting digits

Pseudocode:

```text
count = 0

WHILE n > 0
    n = floor(n / 10)
    count++

PRINT count
```

Think about `0` as a special case.

# 14. Prime numbers

A prime has exactly two positive divisors: `1` and itself.

Basic approach:

```text
READ n

IF n < 2
    NOT PRIME
ELSE
    FOR i = 2 TO n - 1
        IF n % i == 0
            NOT PRIME

    IF no divisor was found
        PRIME
```

Do not optimize yet. Focus on the logic.

# 15. Fibonacci

Sequence:

```text
0 1 1 2 3 5 8 13 ...
```

Each term is the sum of the previous two.

State idea:

```text
a = 0
b = 1

repeat:
    next = a + b
    a = b
    b = next
```

Do not memorize code; understand the state transition.

---



# Day 2 — Implementation Tasks

Create:

```text
02-loops/
└── day2.js
```

## Level 1 — Loop Fundamentals

### Q1

Print numbers from `1` to `10`.

### Q2

Print numbers from `10` to `1`.

### Q3

Print all even numbers from `1` to `50`.

### Q4

Print all odd numbers from `1` to `50`.

### Q5

Print the first 10 multiples of a number.

Example:

```text
n = 7

7
14
21
...
70
```

## Level 2 — Accumulation

### Q6 — Sum of N

Given `n`, calculate:

```text
1 + 2 + 3 + ... + n
```

Do not use the mathematical formula.

### Q7 — Sum of Even Numbers

Given `n`, calculate the sum of all even numbers from `1` to `n`.

### Q8 — Factorial

Calculate `n!`.

Test:

```text
5 → 120
0 → 1
```

## Level 3 — Number Problems

### Q9 — Count Digits

Given:

```text
n = 58392
```

Output:

```text
5
```

### Q10 — Sum of Digits

Given:

```text
n = 58392
```

Output:

```text
27
```

Pseudocode:

```text
sum = 0

WHILE n > 0
    digit = last digit of n
    add digit to sum
    remove last digit from n

PRINT sum
```

### Q11 — Reverse a Number

Given:

```text
12345
```

Output:

```text
54321
```

Hint:

Use digit extraction plus place-value construction.

### Q12 — Palindrome Number

Determine whether:

```text
121
```

is a palindrome.

Hint:

```text
original number
        ↓
reverse it
        ↓
compare original with reverse
```

Preserve the original before destroying `n`.

### Q13 — Count Even and Odd Digits

Given:

```text
n = 123456
```

Output:

```text
Even digits: 3
Odd digits: 3
```

Use `% 2`.

## Level 4 — Prime / Fibonacci

### Q14 — Prime Check

Determine whether a number is prime.

Test:

```text
2
7
11
15
1
0
```

### Q15 — Print Prime Numbers

Print all prime numbers between `1` and `100`.

Think:

```text
outer loop → numbers
inner logic → prime check
```

### Q16 — Fibonacci

Print the first `n` Fibonacci numbers.

For:

```text
n = 8
```

Expected:

```text
0 1 1 2 3 5 8 13
```

## Level 5 — Patterns

### Q17

```text
*
**
***
****
*****
```

### Q18

```text
*****
****
***
**
*
```

### Q19

```text
1
12
123
1234
12345
```

### Q20

```text
1
22
333
4444
55555
```

### Q21

```text
    *
   **
  ***
 ****
*****
```

Focus on spaces and stars separately.

---

# Debugging

Do not run these immediately.

## Debug 1

```js
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

This is correct.

Change it so it prints:

```text
5
4
3
2
1
```

without changing the body.

## Debug 2

What is wrong?

```js
let i = 1;

while (i <= 5) {
    console.log(i);
}
```

Why does this become dangerous?

## Debug 3

Determine what this actually prints:

```js
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        continue;
    }

    console.log(i);
}
```

Does it match this intended output?

```text
2
4
6
8
10
```

If not, fix the logic.

---

# Output Prediction

Predict before executing.

## Q1

```js
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

## Q2

```js
for (let i = 5; i > 0; i--) {
    console.log(i);
}
```

## Q3

```js
let x = 0;

for (let i = 1; i <= 5; i++) {
    x += i;
}

console.log(x);
```

## Q4

```js
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}
```

## Q5

```js
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }

    console.log(i);
}
```

## Q6

```js
let x = 5;

do {
    console.log(x);
    x++;
} while (x < 5);
```

## Q7

```js
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(i, j);
    }
}
```

Understand how many times the inner loop executes.

---

# Day 2 Mini Challenge

Write a program that takes a number `n` and prints:

```text
Number: 12345
Digits: 5
Sum: 15
Reverse: 54321
Palindrome: No
```

Derive all five values yourself.

Do not use:

```text
String(n)
split()
reverse()
```

The objective is understanding mathematical digit extraction.

---

# What to read on W3Schools

Read only:

1. JavaScript Arithmetic
2. JavaScript Assignment
3. JavaScript Comparison
4. JavaScript Logical
5. JavaScript if/else
6. JavaScript for Loop
7. JavaScript for/in
8. JavaScript while Loop
9. JavaScript do/while
10. JavaScript break
11. JavaScript continue
12. JavaScript Math

Do not go into arrays or functions yet.

---

# Day 2 Completion Criteria

Move to Day 3 only when you can:

- write a `for` loop without looking up syntax
- write a `while` loop
- explain `break` vs `continue`
- trace nested loops
- extract digits using `% 10`
- remove digits using `Math.floor(n / 10)`
- solve factorial
- solve sum of digits
- reverse a number
- check palindrome
- check prime
- generate Fibonacci
- write basic nested-loop patterns

---

# End-of-Day Report

Send:

```text
DAY 2 COMPLETE

Q1–Q21:
Solved: __ / 21

Debugging:
D1:
D2:
D3:

Output:
Q1:
Q2:
Q3:
Q4:
Q5:
Q6:
Q7:

Mini Challenge:
Done / Stuck

Understanding:
__/10

Hardest concept:
-

Mistakes:
-

Time:
__ minutes
```

I will review your attempts and guide you. I will not give you full solutions unless your attempt shows that you need them.
