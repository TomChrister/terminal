function sumValues(num1, num2) {
    const res = Number(num1) + Number(num2);
    if (!isNaN(res)) {
        console.log(res)
    } else {
        console.error('Error')
    }
}

document.querySelector("#btn-run").addEventListener("click", () => {
    const val1 = document.querySelector("#input-1").value;
    const val2 = document.querySelector("#input-2").value;
    sumValues(val1, val2);
});

console.log(typeof NaN);