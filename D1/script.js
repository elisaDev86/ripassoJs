//ESERCIZIO 1

function checkNumbers(num1, num2) {
    if (num1 === 50 || num2 === 50 || (num1 + num2) === 50) {
        return true;
    }
    return false;
}

console.log(checkNumbers(25, 25)); 
console.log(checkNumbers(50, 10)); 
console.log(checkNumbers(20, 30)); 
console.log(checkNumbers(10, 10)); 

//ESERCIZIO 2

function removeCharAt(str, position) {
    if (position < 0 || position >= str.length) {
        return str;
    }
    return str.slice(0, position) + str.slice(position + 1);
}

let string = "ciao";
console.log(removeCharAt(string, 0)); // "iao"
console.log(removeCharAt(string, 2)); // "cao"

//ESERCIZIO 3
function checkNumbers(num1, num2) {
    const inRange1 = (num1 >= 40 && num1 <= 60) && (num2 >= 40 && num2 <= 60);
    const inRange2 = (num1 >= 70 && num1 <= 100) && (num2 >= 70 && num2 <= 100);
    
    return inRange1 || inRange2;
}

console.log(checkNumbers(50, 55)); 
console.log(checkNumbers(80, 90)); 
console.log(checkNumbers(30, 50)); 
console.log(checkNumbers(75, 95)); 

//ESERCIZIO 4
function checkCityName(city) {
    if (city.startsWith("Los") || city.startsWith("New")) {
        return city;
    }
    return false;
}

console.log(checkCityName("Los Angeles")); 
console.log(checkCityName("New York"));    
console.log(checkCityName("Boston"));       


//ESERCIZIO 5
function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4]));
console.log(sumArray([10, 5, 15])); 

//ESERCIZIO 6
function checkArray(arr) {
    if (arr.includes(1) || arr.includes(3)) {
        return false;
    }
    return true;
}

console.log(checkArray([2, 4, 5])); 
console.log(checkArray([1, 2, 4])); 


//ESERCIZIO 7


//ESERCIZIO 8
function creaAcronimo(frase) {
    const parole = frase.split(" ");
    const lettere = parole.map(parola => parola.charAt(0).toUpperCase());
    return lettere.join("");
}

console.log(creaAcronimo("Ministero della salute")); 
console.log(creaAcronimo("Organizzazione mondiale della sanità")); 
console.log(creaAcronimo("associazione italiana sport")); 

