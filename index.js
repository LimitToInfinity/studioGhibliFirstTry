document.addEventListener("DOMContentLoaded", postLoad);

function postLoad()
{
    fetch("https://ghibliapi.herokuapp.com/people")
    .then(parseJSON)
    .then(displayPeople);
}

function displayPeople(people)
{
    const cardsContainer = document.querySelector(".cards-container");

    people.forEach(person => createPersonCard(person, cardsContainer));
}

function createPersonCard(person, cardsContainer)
{
    const card = document.createElement("div");
    card.classList.add("card");

    const name = document.createElement("p");
    name.innerText = person.name;

    card.append(name);
    cardsContainer.append(card);
}

function parseJSON(response)
{
    return response.json();
}