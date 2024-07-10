let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let streamNumber = document.getElementById("stream-number");

let addPerson = document.querySelector(".add-person");
let clearList = document.querySelector(".clear-list");

let personArray = [];

addPerson.addEventListener("click", () => {
    let firstNameValue = firstName.value;
    let lastNameValue = lastName.value;
    let streamNumberValue = streamNumber.value;
    
    if (firstNameValue === "" || lastNameValue === "" || streamNumberValue === "") {
        alert("Вы не заполнили поля");
    } else {
        let person = {
            firstName: firstNameValue,
            lastName: lastNameValue,
            streamNumber: streamNumberValue
        };
        personArray.push(person);
        updatePersonList();
        clearInputFields();
    }
});

clearList.addEventListener("click", () => {
    personArray = [];
    updatePersonList();
});

function updatePersonList() {
    let peopleList = document.querySelector(".people-list");
    peopleList.innerHTML = "";

    personArray.forEach((person, index) => {
        let personItem = document.createElement("div");
        personItem.className = "person-item";
        personItem.innerHTML = `
            Имя: ${person.firstName} <br>
            Фамилия: ${person.lastName} <br>
            Номер потока: ${person.streamNumber} <br>
            <button class="delete" onclick="deletePerson(${index})">Удалить</button>
        `;
        peopleList.appendChild(personItem);
    });
}

function deletePerson(index) {
    personArray.splice(index, 1);
    updatePersonList();
}

function clearInputFields() {
    firstName.value = "";
    lastName.value = "";
    streamNumber.value = "";
}

