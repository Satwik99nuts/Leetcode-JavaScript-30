function fun(){
    function f(a,b){
        const sum = a+b;
        return sum;
    }
    return f;
}
var numsum = fun()
console.log(numsum(3,5))