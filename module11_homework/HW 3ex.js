function argNumber (num1) {
    return function(num2) {
        console.log(num1 + num2);
        return num1 + num2;
    }
} 

const sumResult = argNumber(5);
sumResult(2);/**/