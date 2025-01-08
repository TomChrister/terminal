const arr = [2, 4, 6, 12, 5];

arr.forEach((item) => {
    // loop through all items
    console.log(item);
})

// sort arr
arr.sort((a, b) => a - b);
console.log(arr);


/*

arr.map((item) => {
    // loop  through all items
    console.log(item);
})

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}*/

/*

1
2
fizz
4
buzz


 */
