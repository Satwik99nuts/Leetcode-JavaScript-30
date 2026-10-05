// Q1
const s = "Satwik"
console.log(s.length);
console.log(s[0]);
console.log(s.at(-1));
console.log(s.toUpperCase());
console.log(s.toLowerCase());

// Q2
let n = "JavaScript"
for(let i =0; i<n.length; i++){
    console.log(n[i],i);
}

// Q3
let text = "javascript is amazing";
let occur = 0;
let i = 0;
while(i<text.length){
    if(text[i]=="a"){
        occur+=1;
    }
    i++;
}
console.log("The number of a's in the given text is : "+occur);

// Q4
let t = "javascript is powerful";
console.log(t.includes("script"));

// Q5
let ban = "banana"
console.log(ban.indexOf("a"));
console.log(ban.indexOf("z"));

// Q6
let a = "hello"
console.log(a.split("").reverse().join());

// Q7
let g = "madam";
let pal = true;
for(let i = 0; i< g.length/2; i++){
    pal = false;
    break;
}
console.log(pal);

// Q8
let vow = "Satwik";
let count = 0;
for(let i =0; i<vow.length; i++){
    if("aeiou".includes(vow[i])){
        count+=1;
    }
}
console.log("Total Vowels in vow : "+count);
// Q9
let cons = "Hello World";
let vow_count = 0;
let con_count = 0;
for(let i = 0; i<cons.length; i++){
    let ch = cons[i].toLowerCase();
    if("aeiou".includes(ch)){
        vow_count+=1;
    }
    else if(ch >= 'a' && ch <= 'z'){
        con_count+=1;
    }
}
console.log("Vowels in cons : "+vow_count);
console.log("Consonants in cons : "+con_count);

// Q10
let spa = "    I love JavaScript    ";
console.log(spa.trim());
console.log(spa.replaceAll(" ",""));

// Q11
let b = "banana";
let freq = {};
for(let i = 0; i<b.length; i++){
    let ch = b[i];
    console.log(ch,i);

    if(freq[ch]){
        freq[ch]++;
    }
    else{
        freq[ch] = 1;
    }
}
console.log(freq);

// Q12
