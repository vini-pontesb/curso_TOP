// VARIÁVEIS
let firstName = "Vinicius";
let lastName = "Pontes";
let age = 21;
console.log(`Olá, meu nome é ${firstName + ` ${lastName}`} e eu tenho ${age} anos`);
age = age + 1;
console.log(`Olá, meu nome é ${firstName + ` ${lastName}`} e ano que vem eu terei ${age} anos`);

// CONSTANTES
const pi = 3.14;
// pi = 7 caso tire do comentário, irá dar erro, visto que é const
console.log(pi);

// NÚMEROS
const lotOfDecimal = 1.878236145;
const twoDecimal = lotOfDecimal.toFixed(2);
console.log(twoDecimal);
let myNumber = "74";
console.log(myNumber + 3);
myNumber = Number(myNumber);
console.log(myNumber + 3);

// EXERCÍCIOS
// 1 -> 3
console.log(23 + 97 + 98 + 56 + 21 + 13);

// 4 
let a = 10;
console.log(a);
a += a;
console.log(`2 * a = ${a}`);
let b = 7 * a;
console.log(b);

// 5
const max = 57;
const actual = max - 13; 
const percentage = (actual / max).toFixed(2);
console.log(percentage);

// MDN
const btn = document.querySelector("button");
const text = document.querySelector("p");

btn.addEventListener("click", updateBtn);

function updateBtn() {
    if (btn.textContent === "Start machine") {
        btn.textContent = "Stop machine";
        text.textContent = "The machine has started!!";
    } else {
        btn.textContent = "Start machine";
        text.textContent = "The machine has stopped!!";
    }
}