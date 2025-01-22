const arr = [1, 1, 2, 4];
let check = true;
for (let i = 1; i < arr.length; i++) {
    const element = arr[i]; {
        check = false
    }
}/**/
console.log(check ? 'Одинаковые': 'Различаются')