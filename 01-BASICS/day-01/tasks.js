// Q1
const my_name = "Satwik";
let age = 23;
let height = 6.0;
let designation = "Student";

console.log(my_name);
console.log(age);
console.log(height);
console.log(designation);

// Q2
let a = 10;
let b = 100;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

// Q3
let c = 100
if(c%2==0){
    console.log("Even");
}
else{
    console.log("Odd");
}
// Q4

let x = 1000;
if(x>0){
    console.log("Positive");
}
else if(x==0){
    console.log("Zero");
}
else{
    console.log("Negative");
}

// Q5
let y = 20
let z = 100

if(y>z){
    console.log(y,"is greater than ",z);
}
else{
    console.log(z,"is greater than ",y);
}
// Q6
let d = 100
let e = 890
let f = 980
let largest;

if(d>e && e>f){
    largest = d;
}

else if(e>d && e>f){
    largest = e;
}
else{
    largest = f;
}

console.log(largest);


// Q7
let n = 300
if(n%3===0 && n%5===0){
    console.log(n,"is divisible by both 3 and 5");
}
else{
    console.log(n,"is not divisible")
}

// Q8
let aage = 89;
if(aage>=18){
    console.log("Eligible");
}
else{
    console.log("Not Eligible");
}

// Q13

let p = 100;
let q = 1000;
let r = 10000;

if(p>q && q>r){
    console.log("Strictly Decreasing");
}
else if(p<q && q<r){
    console.log("Strictly Increasing");
}
else{
    console.log("Nothing");
}