var Predator = (function () {
  var carnivores = [];
  var herbivores = [];

  return {
    loadCarnivores: function (showCarnivores) {
      var loader = new XMLHttpRequest();

      loader.addEventListener("load", function () {
        // Set the value of the private array
        carnivores = JSON.parse(this.responseText);
        console.log("carnivores", carnivores);

        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.
        showCarnivores(carnivores);
      });
      loader.open("GET", "carnivores.json");
      loader.send();
    },

    loadHerbivores: function (showHerbivores) {
      var loader2 = new XMLHttpRequest();

      loader2.addEventListener("load", function () {
        // Set the value of the private array
        herbivores = JSON.parse(this.responseText);
        console.log("herbivores", herbivores);

        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.
        showHerbivores(herbivores);
      });
      loader2.open("GET", "herbivores.json");
      loader2.send();
    }
  }
})(Predator || {});
