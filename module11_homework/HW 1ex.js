function outputNumbers() {
const arr = [0, 6, 2, 3, 4, 5, null, "hello"];
let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;
for (let item of arr) {
    if (typeof item === "number" && !isNaN(item)) {
        if (item === 0) {
            zeroCount++;
        } else if (item % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
}
console.log("Кол-во четных чисел:", evenCount);
console.log("Кол-во нечетных чисел:", oddCount);
console.log("Кол-во нулей:", zeroCount);
}
outputNumbers();