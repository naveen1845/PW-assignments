function outerFunction(x){
    let outerVariable = 5
    return function innerFunction(){
        console.log(`Outer Paramater value ${x}`);
        console.log(`outer variable value ${outerVariable}`);
    }
}

result = outerFunction(10)
result()