// if, else, elif
const select = document.querySelector("select");
const txt = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
    const choice = select.value;

    if (choice === "sunny") {
        txt.textContent = "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
    } else if (choice === "rainy") {
        txt.textContent = "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
    } else if (choice === "snowing") {
        txt.textContent = "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
    } else if (choice === "overcast") {
        txt.textContent = "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
    } else {
        txt.textContent = "";
    }
}

// swich, case

let arg = prompt("Enter a value: ");
switch (arg) {
    case '0':
    case '1':
        alert("Zero or One");
        break;
    case '2':
        alert("Two");
        break;
    case '3':
        alert("Never executes!");
        break
    default:
        alert("An unkown value!!")
}