const foodsList = ["Pasta", "Carne", "Formaggio", "Cereali", "Affetttati", "Gelati", "Yogurt"];

let i = 0;
while (i < foodsList.length) {
    const food = foodsList[i];
    document.querySelector("ol").innerHTML += `<li>${food}</li>`
    i++
}