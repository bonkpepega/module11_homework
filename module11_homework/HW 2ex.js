function primeNumbers(number = 1) {
    if (number > 1000) {
        console.log('Данные неверны.');
        return;
    }
    if (number <=1) {
        consolele.log(`${number} это сложное число.`);
        return;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            console.log(`${number} это сложное число.`);
            return;
        }
    }
    console.log(`${number} это простое число`);
}
primeNumbers(59);

