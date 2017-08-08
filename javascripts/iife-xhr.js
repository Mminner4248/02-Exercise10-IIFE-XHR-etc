const CarniDisplay = document.querySelector("#carnDiv");
const HerbiDisplay = document.querySelector("#herbDiv");

function showCarnivores (carnivores) {
  console.log("carnivores", carnivores);
  carnivores.forEach( (carnivore) => {
    CarniDisplay.innerHTML += `<h1>Name: ${carnivore.name}</h1>`;
  });
}

function showHerbivores (herbivores) {
  console.log("herbivores", herbivores);
  herbivores.forEach( (herbivore) => {
    HerbiDisplay.innerHTML += `<h1>Name: ${herbivore.name}</h1>`;
  });
}


Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);