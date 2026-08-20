function fibonacci(n){
    let a = 0;b = 1;
    for(let i=0;i<n;i++){
        console.log(b)
        let sum = a+b;
        a = b;
        b = sum;
    }
}
fibonacci(5)