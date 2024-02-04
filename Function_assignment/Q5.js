function recursion(x) {
    if (x == 0) return 1;
    let factorial = x * recursion(x-1)
    return factorial
}

result = recursion(4)
console.log(result);