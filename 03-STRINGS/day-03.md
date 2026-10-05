# JavaScript Accenture Sprint — Day 3

## Strings: JS Syntax + Problem Solving

> Assumption: You already know C++ and Python. This is **not** a beginner lesson on strings. Focus on JavaScript syntax, methods, quirks, debugging, and Accenture-level questions.

---

## 1. Today's Target

By the end of Day 3, you should be comfortable with:

- String declaration and indexing
- String immutability
- `.length`
- `slice()`, `substring()`
- `includes()`, `indexOf()`
- `toUpperCase()`, `toLowerCase()`
- `trim()`
- `replace()`, `replaceAll()`
- `split()` and `join()`
- Template literals
- String ↔ Number conversion
- JS type-coercion traps involving strings
- Standard string DSA questions

Create:

```text
03-strings/
└── day3.js
```

---

# 2. C++ / Python → JavaScript Quick Mapping

### Declaration

```cpp
// C++
string s = "hello";
```

```python
# Python
s = "hello"
```

```js
// JavaScript
let s = "hello";
const name = "Satwik";
```

Single quotes, double quotes, and backticks can represent strings:

```js
"hello"
'hello'
`hello`
```

Prefer `const` when the variable itself does not need reassignment.

---

# 3. Indexing and Length

```js
const s = "JavaScript";

console.log(s[0]);
console.log(s[1]);
console.log(s.length);
console.log(s[s.length - 1]);
```

Like C++ and Python:

```text
indexing starts at 0
```

Unlike Python:

```python
s[-1]
```

JavaScript does **not** use ordinary negative bracket indexing this way.

For modern JS, know:

```js
s.at(-1)
```

which can retrieve the last character.

---

# 4. Strings Are Immutable

This is a major difference from C++ `std::string`.

```js
let s = "hello";

s[0] = "H";

console.log(s);
```

The string is not modified.

If you need a changed string, construct/reassign a new one.

```js
s = "H" + s.slice(1);
```

Think closer to Python strings than C++ strings.

---

# 5. Essential Methods

## Case conversion

```js
s.toUpperCase()
s.toLowerCase()
```

These return new strings.

---

## includes()

```js
"javascript".includes("script")
```

Returns a boolean.

Python analogy:

```python
"script" in "javascript"
```

---

## indexOf()

```js
"banana".indexOf("a")
```

Returns the first matching index.

If not found:

```text
-1
```

---

# 6. slice()

```js
s.slice(start, end)
```

`start` included, `end` excluded.

```js
const s = "abcdef";

console.log(s.slice(1, 4));
```

Result:

```text
bcd
```

Very similar to:

```python
s[1:4]
```

Useful JS feature:

```js
s.slice(-3)
```

can work from the end.

---

# 7. substring()

```js
s.substring(start, end)
```

Also excludes `end`.

For this sprint, prefer `slice()` unless a question explicitly uses `substring()`.

Know both for output questions.

---

# 8. split() and join()

This pair is extremely important in JavaScript coding questions.

```js
const s = "hello";

const arr = s.split("");
```

Conceptually:

```text
"hello"
   ↓
["h","e","l","l","o"]
```

For words:

```js
"I love JS".split(" ")
```

Then arrays can be converted back:

```js
arr.join("")
```

Common JS pattern:

```text
String
 ↓ split()
Array
 ↓ process
Array
 ↓ join()
String
```

Example syntax you should recognize:

```js
s.split("").reverse().join("")
```

Do not rely on this blindly; you should still know the loop-based reversal algorithm.

---

# 9. trim()

```js
"   hello   ".trim()
```

removes leading/trailing whitespace.

It does NOT remove internal spaces.

Also know these exist:

```js
trimStart()
trimEnd()
```

---

# 10. replace() and replaceAll()

```js
const s = "hello world";

s.replace("world", "JS");
```

`replace()` does not automatically mean “replace every occurrence”.

Know:

```js
replaceAll()
```

for straightforward all-occurrence replacement.

| ol1 | col2 | col3 |
| --- | ---- | ---- |
|     |      |      |
|     |      |      |

---

# 11. Template Literals

Instead of:

```js
const output = "Name: " + name + ", Age: " + age;
```

JS commonly uses:

```js
const output = `Name: ${name}, Age: ${age}`;
```

Backticks:

```text
`
```

Interpolation:

```text
${expression}
```

Example:

```js
console.log(`Sum = ${a + b}`);
```

---

# 12. String ↔ Number Conversion

Know these:

```js
Number("123")
parseInt("123")
parseFloat("12.5")
String(123)
```

Important output behavior:

```js
Number("123abc")
```

versus:

```js
parseInt("123abc")
```

Run these after predicting them.

Also know:

```js
Number("")
Number(" ")
```

JavaScript coercion can surprise you.

---

# 13. The `+` Trap

Predict:

```js
console.log("10" + 5);
console.log("10" - 5);
console.log("10" * 2);
console.log("10" / 2);
```

The important idea:

`+` is both numeric addition and string concatenation.

Other arithmetic operators tend to trigger numeric conversion when possible.

Do not memorize only the outputs. Understand why.

---

# 14. Useful Traversal Syntax

Index based:

```js
for (let i = 0; i < s.length; i++) {
    console.log(s[i]);
}
```

JavaScript also supports:

```js
for (const ch of s) {
    console.log(ch);
}
```

### Important

`for...of` → values/characters

Do not confuse it with:

```js
for...in
```

which deals with keys/property names and is not your default string/array traversal tool.

---

# 15. Pseudocode — Reverse String

```text
result = empty string

FOR i from last index DOWN TO 0
    append s[i] to result

PRINT result
```

Implement this yourself.

Then also implement the JS-method version after understanding it.

---

# 16. Pseudocode — Palindrome

```text
original = input
reverse = empty string

TRAVERSE original backwards
    construct reverse

IF original === reverse
    palindrome
ELSE
    not palindrome
```

---

# 17. Pseudocode — Count Vowels

```text
count = 0
convert string to lowercase

FOR each character
    IF character belongs to "aeiou"
        count++

PRINT count
```

Think about whether `includes()` can simplify the condition.

---

# 18. Pseudocode — Character Frequency

We will formally study objects later, but you can use a basic object here.

```text
frequency = empty object

FOR each character ch

    IF ch already exists
        frequency[ch]++

    ELSE
        frequency[ch] = 1
```

This pattern will become very important in DSA.

---

# 19. Pseudocode — First Non-Repeating Character

Two passes:

```text
PASS 1:
build character frequencies

PASS 2:
traverse original string

IF frequency[current character] === 1
    this is the first non-repeating character
    stop
```

---

# IMPLEMENTATION SET

## Level 1 — JS Syntax

### Q1

Given a string, print:

- length
- first character
- last character
- uppercase
- lowercase

---

### Q2

Given:

```text
JavaScript
```

print every character with its index.

Expected style:

```text
0 J
1 a
2 v
...
```

---

### Q3

Count the occurrences of `"a"` in:

```text
"javascript is amazing"
```

Use a loop.

---

### Q4

Check whether:

```text
"javascript is powerful"
```

contains:

```text
"script"
```

Use `includes()`.

---

### Q5

Find the first index of `"a"` in:

```text
"banana"
```

Then find the first index of `"z"`.

Observe the result when the character doesn't exist.

---

# Level 2 — Core Problems

## Q6 — Reverse String

Input:

```text
hello
```

Output:

```text
olleh
```

### Part A

Use a loop.

### Part B

Solve using:

```text
split()
reverse()
join()
```

---

## Q7 — Palindrome

Test:

```text
madam
racecar
hello
level
```

Do not make it case-insensitive yet.

---

## Q8 — Vowel Count

Input:

```text
JavaScript
```

Count vowels.

The program should work with uppercase characters too.

---

## Q9 — Vowels and Consonants

Input:

```text
Hello World
```

Count:

```text
Vowels
Consonants
```

Ignore spaces.

---

## Q10 — Remove Spaces

Input:

```text
I love JavaScript
```

Output:

```text
IloveJavaScript
```

Solve it two ways:

1. loop
2. appropriate string method

---

# Level 3 — Accenture-Level String Problems

## Q11 — Character Frequency

Input:

```text
banana
```

Conceptual result:

```text
b → 1
a → 3
n → 2
```

Use an object.

---

## Q12 — First Non-Repeating Character

Input:

```text
swiss
```

Output:

```text
w
```

Use the two-pass frequency approach.

---

## Q13 — Remove Duplicate Characters

Input:

```text
programming
```

Preserve the first occurrence of each character.

Hint:

```text
result = ""

FOR each character
    IF result does not already contain character
        append character
```

---

## Q14 — Anagram

Test:

```text
listen / silent
evil / vile
hello / world
```

Solve using a **sorting-based approach** first.

Think:

```text
normalize
→ convert to characters
→ sort
→ reconstruct/compare
```

---

## Q15 — Longest Word

Input:

```text
I am learning JavaScript
```

Output:

```text
JavaScript
```

Think:

```text
split by spaces
→ traverse words
→ track maximum length
```

---

## Q16 — Reverse Words

Input:

```text
I love JavaScript
```

Output:

```text
JavaScript love I
```

Do NOT reverse the characters inside each word.

---

## Q17 — Capitalize First Character of Every Word

Input:

```text
javascript is powerful
```

Output:

```text
Javascript Is Powerful
```

Think:

```text
split into words
→ transform each word
→ join
```

---

## Q18 — Count Words

Input:

```text
JavaScript is fun to learn
```

Return the number of words.

Also test strings containing extra leading/trailing spaces.

---

# JS TRAP QUESTIONS

Do these **before running them**.

## Q19

```js
console.log("5" + 2);
console.log("5" - 2);
```

---

## Q20

```js
console.log(1 + 2 + "3");
console.log("1" + 2 + 3);
```

Pay attention to evaluation order.

---

## Q21

```js
console.log("10" == 10);
console.log("10" === 10);
```

---

## Q22

```js
console.log(Number("10"));
console.log(Number("10abc"));
console.log(parseInt("10abc"));
```

---

## Q23

```js
console.log(Boolean(""));
console.log(Boolean(" "));
console.log(Boolean("false"));
```

This is important JS truthy/falsy behavior.

---

## Q24

```js
let s = "hello";

s[0] = "H";

console.log(s);
```

Explain the result.

---

## Q25

```js
const s = "JavaScript";

console.log(s.slice(0, 4));
console.log(s.slice(4));
console.log(s.slice(-6));
```

---

# DEBUGGING

## D1

```js
const s = "hello";
let reversed = "";

for (let i = s.length; i >= 0; i--) {
    reversed += s[i];
}

console.log(reversed);
```

Find the off-by-one error.

---

## D2

```js
const s = "racecar";
let reverse = "";

for (let i = s.length - 1; i >= 0; i++) {
    reverse += s[i];
}
```

Find the loop-control bug.

---

## D3

```js
const s = "JavaScript";
let vowels = 0;

for (const ch of s) {
    if ("aeiou".includes(ch)) {
        vowels++;
    }
}
```

Why can this miss some vowels?

Fix the logic without writing five separate comparisons.

---

## D4

```js
let s = "hello";

s.toUpperCase();

console.log(s);
```

Why does it still print the original string?

Think about immutability and return values.

---

# OUTPUT PREDICTION

## O1

```js
console.log("hello".length);
```

## O2

```js
console.log("hello"[1]);
```

## O3

```js
console.log("abcdef".slice(1, 4));
```

## O4

```js
console.log("banana".indexOf("a"));
console.log("banana".indexOf("z"));
```

## O5

```js
console.log("hello".split(""));
```

## O6

```js
console.log("hello".split("").reverse().join(""));
```

## O7

```js
console.log("a,b,c".split(","));
```

## O8

```js
console.log(["JS", "is", "fun"].join(" "));
```

## O9

```js
console.log("   JS   ".trim().length);
```

## O10

```js
console.log(`${2 + 3}5`);
```

---

# MINI CHALLENGE — String Analyzer

Given:

```text
JavaScript is powerful
```

Print:

```text
Original:
Length:
Number of words:
Vowels:
Consonants:
Longest word:
Reversed string:
Reversed word order:
```

### Constraints

- use loops for vowel/consonant counting
- use `split()` where appropriate
- don't use external libraries
- don't copy a ready-made solution

---

# OPTIONAL DSA BRIDGE

Only do these if Q1–Q18 are comfortable.

### DSA 1

Valid palindrome ignoring spaces and case.

Example:

```text
Never odd or even
```

### DSA 2

Check whether two strings are anagrams using frequency counting instead of sorting.

### DSA 3

Find the most frequent character.

### DSA 4

Find all duplicate characters.

### DSA 5

String compression.

Input:

```text
aaabbccccd
```

Output concept:

```text
a3b2c4d1
```

---

# What to Read Today

Use W3Schools only as a syntax reference.

Read the sections covering:

```text
JS Strings
String Methods
String Search
Template Strings
```

Pay particular attention to:

```text
length
at()
charAt()
indexOf()
includes()
slice()
substring()
toUpperCase()
toLowerCase()
trim()
replace()
replaceAll()
split()
```

Do **not** try to memorize every method on the page.

Your goal is to be able to solve problems with the important ones.

---

# What You Should Memorize

By the end of today, these should feel natural:

```js
s.length
s[i]
s.at(-1)

s.toUpperCase()
s.toLowerCase()

s.includes(x)
s.indexOf(x)

s.slice(start, end)

s.trim()

s.replace(a, b)
s.replaceAll(a, b)

s.split(separator)

arr.join(separator)
```

And:

```js
for (const ch of s) {
    // ...
}
```

---

# Day 3 Completion Test

You are done when you can solve without syntax lookup:

```text
Reverse String
Palindrome
Vowel Count
Character Frequency
First Non-Repeating Character
Remove Duplicates
Anagram
Longest Word
Reverse Words
```

And explain these JS-specific concepts:

```text
String immutability
split() vs join()
slice()
for...of
== vs ===
String + Number coercion
Number() vs parseInt()
Truthy/falsy strings
```

---

# End-of-Day Report

```text
DAY 3 COMPLETE

Core Q1–Q18:
Solved: __ / 18

JS Traps Q19–Q25:
Correct: __ / 7

Debugging D1–D4:
Correct: __ / 4

Output O1–O10:
Correct: __ / 10

Mini Challenge:
Done / Stuck

Optional DSA:
Solved: __ / 5

JS syntax I forgot:
-

JS behavior that surprised me:
-

Hardest problem:
-

Time:
__ minutes
```

When stuck, send your **attempt**, not just the question number. I will give you a hint/pseudocode first instead of immediately giving you the final JavaScript solution.
