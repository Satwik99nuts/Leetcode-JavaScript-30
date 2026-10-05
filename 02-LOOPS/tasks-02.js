// Q1
for(let i = 0; i<10;i++){
    console.log(i);
}

// Q2
for(let j = 10;j>=1;j--){
    console.log(j);
}
// Q3
for(let k = 1;k<=50;k++){
    if(k%2==0){
        console.log(k);
    }
}
// Q4
for(let x = 0;x<=50;x++){
    if(x%2!=0){
        console.log(x);
    }
}
// Q5
let num = 2;
let mul;
for(let i = 1; i<=10;i++){
    mul = num*i;
    console.log(mul);
}

// Q6
let m=0;
for(let j =1;j<=100;j++){
    m+=j;
}
console.log(m);

// Q7
let c = 6;
let res = 0;
for(let x = 0; x<=c; x++){
    if(x%2==0){
        res = x + res;
    }
}
console.log(res);

// Q8
let result = 1;
let numb = 10;

for(let i= 1;i<=numb;i++){
    result = result*i;
}
console.log(result);

// Q9
let number = 12345;
let digit = 0;
let summ = 0;
let reverse = 0;
let pal = 0;

while (number != 0) {
    digit = number % 10;
    console.log(digit);

    number = Math.floor(number / 10);

    reverse = reverse * 10 + digit;
    summ += digit;

    
}

console.log(summ);
console.log(reverse);

// Q12
let n = 101;
while(n!=0){
    
}