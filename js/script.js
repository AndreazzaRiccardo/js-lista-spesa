const foodsList = ["Pasta", "Carne", "Formaggio", "Cereali", "Affetttati", "Gelati", "Yogurt"];

const listContainer = document.querySelector("ol");
let myList = "";

let i = 0;
while (i < foodsList.length) {
    const food = foodsList[i];
    myList += `<li>${food}</li>`;
    i++;
}

listContainer.innerHTML = myList;