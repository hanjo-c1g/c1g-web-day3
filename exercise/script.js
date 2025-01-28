// get relevant DOM elements from initial DOM
const dataForm = document.getElementById("dataForm");
const dataList = document.getElementById("dataList");
const resetButton = document.getElementById("resetButton");

dataForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("nameInput").value;
    const age = document.getElementById("ageInput").value;

    const data = { name: name, age: age };

    // show new dataset in html
    addDataToList(data);

    // store new dataset in local storage

    // fetch the existing data array from localstorage or create new empty array
    let storedData = JSON.parse(localStorage.getItem("formData")) || [];
    // add new dataset to the array
    storedData.push(data);
    // store the changed dataset to local storage
    localStorage.setItem("formData", JSON.stringify(storedData));
});

// function to add new line to html list
function addDataToList(data) {
    const listItem = document.createElement("li");
    listItem.textContent = `${data.name} (${data.age} Jahre)`;
    dataList.appendChild(listItem);
}

// load the content of local storage on document load
window.addEventListener("DOMContentLoaded", () => {
    console.debug("Seite geladen. Daten aus Local Storage werden geladen...");
    const storedData = JSON.parse(localStorage.getItem("formData")) || [];
    storedData.forEach((item) => {
        addDataToList(item);
    });
});

resetButton.addEventListener( "click", () => {
    dataList.innerHTML = "";
    localStorage.removeItem("formData");
});