const start = 5;
const end = 15;
let current = start;

const enterNumber = setInterval(() => {
    console.log(current);
    if (current === end) {
        clearInterval(enterNumber);
    }
    current++;
}, 1000);