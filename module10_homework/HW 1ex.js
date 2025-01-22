let input = prompt("Введите значение");
let number = +input;

if (input !== null && input !== "" && typeof number === "number" && !isNaN(number)) {
    if (number % 2 === 0) {
        console.log("Введено четное число");
    } else {
        console.log("Введено НЕ четное число");
    }
} else {
    console.log("Упс, кажется, вы ошиблись");
}
