// get relevant DOM elements from initial DOM
const dataForm = document.getElementById("dataForm");
const dataList = document.getElementById("dataList");
const resetButton = document.getElementById("resetButton");

// todo: implement an event listener that adds the values of the
// form field to the DOM and stores data as json in local storage
dataForm.addEventListener("submit", (event) => {
    event.preventDefault();
});

// todo: implement an function that creates a new line in the 
// datalist of the html page
function addDataToList(data) {
    const listItem = document.createElement("li");
    listItem.textContent = `${data.name} (${data.age} Jahre)`;
    dataList.appendChild(listItem);
}

// todo: implement the event listener that initially populates
// the data list with data from local storage
window.addEventListener("DOMContentLoaded", () => {
});

// todo: implement an event listener that emties the data in in the
// html page and resets data in local storage
resetButton.addEventListener( "click", () => {
});