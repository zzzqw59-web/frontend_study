const animals = [
    {
        name: "호랑이",
        rare: false,
    },
    {
        name: "공룡",
        rare: true
    },
    {
        name: "판다",
        rare: false,
    },
    {
        name: "드래곤",
        rare: true
    }
];

function showAnimals() {
    const list = document.querySelector("#animalList");

    list.innerHTML = "";

    animals.forEach((animal) => {
        list.innerHTML += `<li>${animal.name}</li>`;
    });
}

function showOnlyRare() {
    const list = document.querySelector("#animalList");
    list.innerHTML = "";

    const rareAnimals = animals.filter(
        (animal) => animal.rare === true
    );

    rareAnimals.forEach((animal) => {
        list.innerHTML += `<li>${animal.name}</li>`;
    });
}