//CHECKING AGE
let age = prompt('How old are you?', 17);

function check(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm('Do you have permissiom from your parents?');
    }
}
/* Rewriting de function check
function check(age) {
    if (age >= 18) {
        return true;
    } return confirm('Do you have permissiom from your parents?');
}
function check(age) {
    return (age >= 18) || confirm('Do you have permissiom from your parents?');
}
function check(age) {
    return (age >= 18) ? true : confirm('Do you have permissiom from your parents?');
}
*/
if (check(age)) {
    alert('Acces granted');
} else {
    alert('Acces denied');
}

//RETURN THE LEAST OF TWO NUMBERS

function min(a, b) {
    if (a < b) {
        return a
    } return b
}
alert(min(1, 8))

/* Rewriting the function min 
function min(a,b) {
    return (a < b) ? a : b;
}
alert(min(1,8))
*/

//RETURN x IN POWER n

function pow(x, n) {
    return (n >= 0) ? x ** n : `Power ${n} is not supported, use a positive integer oe zero`
}
alert(pow(prompt("x: "), prompt("n: ")))