function fibs(n) {
    let arr = [];
    
    if (n >= 1) {
        arr.push(0);
    }

    if (n >= 2) {
        arr.push(1);
    }

    if (n >= 3) {
        for (let i = 2; i < n; i++) {
            value = arr[i - 1] + arr[i - 2];
            arr.push(value);
        }
    }

    return arr;
}

console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(8));
console.log(fibs(13));