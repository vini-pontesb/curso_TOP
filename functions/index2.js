const txt = document.querySelector("#txt");
const form = document.querySelector("form");

form.addEventListener("submit", alertForm);

function capitalize(text) {
    if (!text) return "";
    const text_capitalized = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    return text_capitalized
}

function lastLetter(text) {
    if (!text) return "";
    const letter = text.trim().slice(-1).toLowerCase();
    return letter
}

function alertForm(event) {
    event.preventDefault();
    alert(capitalize(txt.value))
    alert(lastLetter(txt.value))
}