const pokemon = [
  { name: "Bulbasaur", type: "grass", maxHp: 152, attack: 48 },
  { name: "Ivysaur", type: "grass", maxHp: 167, attack: 60 },
  { name: "Venusaur", type: "grass", maxHp: 187, attack: 78 },
  { name: "Charmander", type: "fire", maxHp: 146, attack: 51 },
  { name: "Charmeleon", type: "fire", maxHp: 165, attack: 62 },
  { name: "Charizard", type: "fire", maxHp: 185, attack: 80 },
  { name: "Squirtle", type: "water", maxHp: 151, attack: 47 },
  { name: "Wartortle", type: "water", maxHp: 166, attack: 61 },
  { name: "Blastoise", type: "water", maxHp: 186, attack: 79 },
  { name: "Pikachu", type: "electric", maxHp: 142, attack: 54 },
  { name: "Raichu", type: "electric", maxHp: 167, attack: 85 },
  { name: "Vulpix", type: "fire", maxHp: 145, attack: 41 },
  { name: "Ninetales", type: "fire", maxHp: 180, attack: 72 },
  { name: "Oddish", type: "grass", maxHp: 152, attack: 49 },
  { name: "Gloom", type: "grass", maxHp: 167, attack: 63 },
  { name: "Vileplume", type: "grass", maxHp: 182, attack: 76 },
  { name: "Paras", type: "grass", maxHp: 142, attack: 67 },
  { name: "Parasect", type: "grass", maxHp: 167, attack: 90 },
  { name: "Psyduck", type: "water", maxHp: 157, attack: 51 },
  { name: "Golduck", type: "water", maxHp: 187, attack: 78 },
  { name: "Growlithe", type: "fire", maxHp: 162, attack: 67 },
  { name: "Arcanine", type: "fire", maxHp: 197, attack: 103 },
  { name: "Poliwag", type: "water", maxHp: 147, attack: 49 },
  { name: "Poliwhirl", type: "water", maxHp: 172, attack: 63 },
  { name: "Poliwrath", type: "water", maxHp: 197, attack: 90 },
  { name: "Bellsprout", type: "grass", maxHp: 157, attack: 72 },
  { name: "Weepinbell", type: "grass", maxHp: 172, attack: 85 },
  { name: "Victreebel", type: "grass", maxHp: 187, attack: 99 },
  { name: "Tentacool", type: "water", maxHp: 147, attack: 40 },
  { name: "Tentacruel", type: "water", maxHp: 187, attack: 67 },
  { name: "Ponyta", type: "fire", maxHp: 157, attack: 81 },
  { name: "Rapidash", type: "fire", maxHp: 172, attack: 94 },
  { name: "Slowpoke", type: "water", maxHp: 197, attack: 63 },
  { name: "Slowbro", type: "water", maxHp: 202, attack: 72 },
  { name: "Magnemite", type: "electric", maxHp: 132, attack: 36 },
  { name: "Magneton", type: "electric", maxHp: 157, attack: 58 },
  { name: "Seel", type: "water", maxHp: 172, attack: 45 },
  { name: "Dewgong", type: "water", maxHp: 197, attack: 67 },
  { name: "Shellder", type: "water", maxHp: 137, attack: 63 },
  { name: "Cloyster", type: "water", maxHp: 157, attack: 90 },
  { name: "Krabby", type: "water", maxHp: 137, attack: 99 },
  { name: "Kingler", type: "water", maxHp: 162, attack: 121 },
  { name: "Voltorb", type: "electric", maxHp: 147, attack: 31 },
  { name: "Electrode", type: "electric", maxHp: 167, attack: 49 },
  { name: "Exeggcute", type: "grass", maxHp: 167, attack: 40 },
  { name: "Exeggutor", type: "grass", maxHp: 202, attack: 90 },
  { name: "Tangela", type: "grass", maxHp: 172, attack: 54 },
  { name: "Horsea", type: "water", maxHp: 137, attack: 40 },
  { name: "Seadra", type: "water", maxHp: 162, attack: 63 },
  { name: "Goldeen", type: "water", maxHp: 152, attack: 64 },
  { name: "Seaking", type: "water", maxHp: 187, attack: 87 },
  { name: "Staryu", type: "water", maxHp: 137, attack: 45 },
  { name: "Starmie", type: "water", maxHp: 167, attack: 72 },
  { name: "Electabuzz", type: "electric", maxHp: 172, attack: 79 },
  { name: "Magmar", type: "fire", maxHp: 172, attack: 90 },
  { name: "Magikarp", type: "water", maxHp: 127, attack: 13 },
  { name: "Gyarados", type: "water", maxHp: 202, attack: 117 },
  { name: "Lapras", type: "water", maxHp: 237, attack: 81 },
  { name: "Vaporeon", type: "water", maxHp: 237, attack: 63 },
  { name: "Jolteon", type: "electric", maxHp: 172, attack: 63 },
  { name: "Flareon", type: "fire", maxHp: 172, attack: 121 },
  { name: "Omanyte", type: "water", maxHp: 142, attack: 40 },
  { name: "Omastar", type: "water", maxHp: 177, attack: 58 },
  { name: "Kabuto", type: "water", maxHp: 137, attack: 76 },
  { name: "Kabutops", type: "water", maxHp: 167, attack: 108 },
  { name: "Zapdos", type: "electric", maxHp: 197, attack: 85 },
  { name: "Moltres", type: "fire", maxHp: 197, attack: 94 },
];

const pokemonChange = [
  { name: "Bulbasaur", type: "grass", maxHp: 152, attack: 48 },
  { name: "Ivysaur", type: "grass", maxHp: 167, attack: 60 },
  { name: "Venusaur", type: "grass", maxHp: 187, attack: 78 },
  { name: "Charmander", type: "fire", maxHp: 146, attack: 51 },
  { name: "Charmeleon", type: "fire", maxHp: 165, attack: 62 },
  { name: "Charizard", type: "fire", maxHp: 185, attack: 80 },
  { name: "Squirtle", type: "water", maxHp: 151, attack: 47 },
  { name: "Wartortle", type: "water", maxHp: 166, attack: 61 },
  { name: "Blastoise", type: "water", maxHp: 186, attack: 79 },
  { name: "Pikachu", type: "electric", maxHp: 142, attack: 54 },
  { name: "Raichu", type: "electric", maxHp: 167, attack: 85 },
  { name: "Vulpix", type: "fire", maxHp: 145, attack: 41 },
  { name: "Ninetales", type: "fire", maxHp: 180, attack: 72 },
  { name: "Oddish", type: "grass", maxHp: 152, attack: 49 },
  { name: "Gloom", type: "grass", maxHp: 167, attack: 63 },
  { name: "Vileplume", type: "grass", maxHp: 182, attack: 76 },
  { name: "Paras", type: "grass", maxHp: 142, attack: 67 },
  { name: "Parasect", type: "grass", maxHp: 167, attack: 90 },
  { name: "Psyduck", type: "water", maxHp: 157, attack: 51 },
  { name: "Golduck", type: "water", maxHp: 187, attack: 78 },
  { name: "Growlithe", type: "fire", maxHp: 162, attack: 67 },
  { name: "Arcanine", type: "fire", maxHp: 197, attack: 103 },
  { name: "Poliwag", type: "water", maxHp: 147, attack: 49 },
  { name: "Poliwhirl", type: "water", maxHp: 172, attack: 63 },
  { name: "Poliwrath", type: "water", maxHp: 197, attack: 90 },
  { name: "Bellsprout", type: "grass", maxHp: 157, attack: 72 },
  { name: "Weepinbell", type: "grass", maxHp: 172, attack: 85 },
  { name: "Victreebel", type: "grass", maxHp: 187, attack: 99 },
  { name: "Tentacool", type: "water", maxHp: 147, attack: 40 },
  { name: "Tentacruel", type: "water", maxHp: 187, attack: 67 },
  { name: "Ponyta", type: "fire", maxHp: 157, attack: 81 },
  { name: "Rapidash", type: "fire", maxHp: 172, attack: 94 },
  { name: "Slowpoke", type: "water", maxHp: 197, attack: 63 },
  { name: "Slowbro", type: "water", maxHp: 202, attack: 72 },
  { name: "Magnemite", type: "electric", maxHp: 132, attack: 36 },
  { name: "Magneton", type: "electric", maxHp: 157, attack: 58 },
  { name: "Seel", type: "water", maxHp: 172, attack: 45 },
  { name: "Dewgong", type: "water", maxHp: 197, attack: 67 },
  { name: "Shellder", type: "water", maxHp: 137, attack: 63 },
  { name: "Cloyster", type: "water", maxHp: 157, attack: 90 },
  { name: "Krabby", type: "water", maxHp: 137, attack: 99 },
  { name: "Kingler", type: "water", maxHp: 162, attack: 121 },
  { name: "Voltorb", type: "electric", maxHp: 147, attack: 31 },
  { name: "Electrode", type: "electric", maxHp: 167, attack: 49 },
  { name: "Exeggcute", type: "grass", maxHp: 167, attack: 40 },
  { name: "Exeggutor", type: "grass", maxHp: 202, attack: 90 },
  { name: "Tangela", type: "grass", maxHp: 172, attack: 54 },
  { name: "Horsea", type: "water", maxHp: 137, attack: 40 },
  { name: "Seadra", type: "water", maxHp: 162, attack: 63 },
  { name: "Goldeen", type: "water", maxHp: 152, attack: 64 },
  { name: "Seaking", type: "water", maxHp: 187, attack: 87 },
  { name: "Staryu", type: "water", maxHp: 137, attack: 45 },
  { name: "Starmie", type: "water", maxHp: 167, attack: 72 },
  { name: "Electabuzz", type: "electric", maxHp: 172, attack: 79 },
  { name: "Magmar", type: "fire", maxHp: 172, attack: 90 },
  { name: "Magikarp", type: "water", maxHp: 127, attack: 13 },
  { name: "Gyarados", type: "water", maxHp: 202, attack: 117 },
  { name: "Lapras", type: "water", maxHp: 237, attack: 81 },
  { name: "Vaporeon", type: "water", maxHp: 237, attack: 63 },
  { name: "Jolteon", type: "electric", maxHp: 172, attack: 63 },
  { name: "Flareon", type: "fire", maxHp: 172, attack: 121 },
  { name: "Omanyte", type: "water", maxHp: 142, attack: 40 },
  { name: "Omastar", type: "water", maxHp: 177, attack: 58 },
  { name: "Kabuto", type: "water", maxHp: 137, attack: 76 },
  { name: "Kabutops", type: "water", maxHp: 167, attack: 108 },
  { name: "Zapdos", type: "electric", maxHp: 197, attack: 85 },
  { name: "Moltres", type: "fire", maxHp: 197, attack: 94 },
];

const wrapperText = document.getElementById("wrapper");
const typeSelect = document.getElementById("typeSelect").value;
const sortSelect = document.getElementById("sortSelect").value;

const btnPress = document.getElementById("searchBtn");

//initial list
let renderedPokemon = pokemon.map((itm) => {
  const ele = document.createElement("div");
  ele.innerHTML = `${itm.name} (${itm.type}) - ${itm.maxHp} HP, ${itm.attack} Attack`;
  return ele;
});
renderedPokemon.forEach((itm) => {
  document.getElementById("wrapper").appendChild(itm);
});

//pick out one type
const firePokemon = pokemon.filter((itm) => itm.type === "fire");
const waterPokemon = pokemon.filter((itm) => itm.type === "water");
const electricPokemon = pokemon.filter((itm) => itm.type === "electric");
const grassPokemon = pokemon.filter((itm) => itm.type === "grass");

const firePokemonChange = pokemonChange.filter((itm) => itm.type === "fire");
const waterPokemonChange = pokemonChange.filter((itm) => itm.type === "water");
const electricPokemonChange = pokemonChange.filter(
  (itm) => itm.type === "electric",
);
const grassPokemonChange = pokemonChange.filter((itm) => itm.type === "grass");

//button function
btnPress.addEventListener("click", () => {
  getSearch();
});

function getSearch() {
  let sortSelect = document.getElementById("sortSelect").value;
  let typeSelect = document.getElementById("typeSelect").value;

  if (typeSelect === "allTypes") {
    if (sortSelect === "sortDefault") {
      wrapperText.replaceChildren();
      let renderedPokemon = pokemon.map((itm) => {
        const ele = document.createElement("div");
        ele.innerHTML = `${itm.name} (${itm.type}) - ${itm.maxHp} HP, ${itm.attack} Attack`;
        return ele;
      });
      renderedPokemon.forEach((itm) => {
        document.getElementById("wrapper").appendChild(itm);
      });
    } else if (sortSelect === "highAttack") {
      wrapperText.replaceChildren();
      let pokemonSort = pokemonChange.sort((a, b) => b.attack - a.attack);
      let renderedPokemon = pokemonChange.map((itm) => {
        const ele = document.createElement("div");
        ele.innerHTML = `${itm.name} (${itm.type}) - ${itm.maxHp} HP, ${itm.attack} Attack`;
        return ele;
      });
      renderedPokemon.forEach((itm) => {
        document.getElementById("wrapper").appendChild(itm);
      });
    } else if (sortSelect === "lowAttack") {
      wrapperText.replaceChildren();
      let pokemonSort = pokemonChange.sort((a, b) => a.attack - b.attack);
      let renderedPokemon = pokemonChange.map((itm) => {
        const ele = document.createElement("div");
        ele.innerHTML = `${itm.name} (${itm.type}) - ${itm.maxHp} HP, ${itm.attack} Attack`;
        return ele;
      });
      renderedPokemon.forEach((itm) => {
        document.getElementById("wrapper").appendChild(itm);
      });
    } else if (sortSelect === "highHp") {
      wrapperText.replaceChildren();
      let pokemonSort = pokemonChange.sort((a, b) => b.maxHp - a.maxHp);
      let renderedPokemon = pokemonChange.map((itm) => {
        const ele = document.createElement("div");
        ele.innerHTML = `${itm.name} (${itm.type}) - ${itm.maxHp} HP, ${itm.attack} Attack`;
        return ele;
      });
      renderedPokemon.forEach((itm) => {
        document.getElementById("wrapper").appendChild(itm);
      });
    } else if (sortSelect === "lowHp") {
      wrapperText.replaceChildren();
      let pokemonSort = pokemonChange.sort((a, b) => a.maxHp - b.maxHp);
      let renderedPokemon = pokemonChange.map((itm) => {
        const ele = document.createElement("div");
        ele.innerHTML = `${itm.name} (${itm.type}) - ${itm.maxHp} HP, ${itm.attack} Attack`;
        return ele;
      });
      renderedPokemon.forEach((itm) => {
        document.getElementById("wrapper").appendChild(itm);
      });
    }
  } else if (typeSelect === "fire") {
    if (sortSelect === "sortDefault") {
      wrapperText.replaceChildren();
      let renderedFirePokemon = firePokemon.map((itm) => {
        const ele = document.createElement("div");
        ele.innerHTML = `${itm.name} (${itm.type}) - ${itm.maxHp} HP, ${itm.attack} Attack`;
        return ele;
      });
      renderedFirePokemon.forEach((itm) => {
        document.getElementById("wrapper").appendChild(itm);
      });
    } else if (sortSelect === "highAttack") {
      wrapperText.replaceChildren();
      let pokemonSort = firePokemonChange.sort((a, b) => b.attack - a.attack);
      let renderedPokemon = firePokemonChange.map((itm) => {
        const ele = document.createElement("div");
        ele.innerHTML = `${itm.name} (${itm.type}) - ${itm.maxHp} HP, ${itm.attack} Attack`;
        return ele;
      });
      renderedPokemon.forEach((itm) => {
        document.getElementById("wrapper").appendChild(itm);
      });
    } else if (sortSelect === "lowAttack") {
      wrapperText.replaceChildren();
      let pokemonSort = firePokemonChange.sort((a, b) => a.attack - b.attack);
      let renderedPokemon = firePokemonChange.map((itm) => {
        const ele = document.createElement("div");
        ele.innerHTML = `${itm.name} (${itm.type}) - ${itm.maxHp} HP, ${itm.attack} Attack`;
        return ele;
      });
      renderedPokemon.forEach((itm) => {
        document.getElementById("wrapper").appendChild(itm);
      });
    } else if (sortSelect === "highHp") {
      wrapperText.replaceChildren();
      let pokemonSort = firePokemonChange.sort((a, b) => b.maxHp - a.maxHp);
      let renderedPokemon = firePokemonChange.map((itm) => {
        const ele = document.createElement("div");
        ele.innerHTML = `${itm.name} (${itm.type}) - ${itm.maxHp} HP, ${itm.attack} Attack`;
        return ele;
      });
      renderedPokemon.forEach((itm) => {
        document.getElementById("wrapper").appendChild(itm);
      });
    } else if (sortSelect === "lowHp") {
      wrapperText.replaceChildren();
      let pokemonSort = firePokemonChange.sort((a, b) => a.maxHp - b.maxHp);
      let renderedPokemon = firePokemonChange.map((itm) => {
        const ele = document.createElement("div");
        ele.innerHTML = `${itm.name} (${itm.type}) - ${itm.maxHp} HP, ${itm.attack} Attack`;
        return ele;
      });
      renderedPokemon.forEach((itm) => {
        document.getElementById("wrapper").appendChild(itm);
      });
    }
  } else if (typeSelect === "water") {
    if (sortSelect === "sortDefault") {
      wrapperText.replaceChildren();
      let renderedWaterPokemon = waterPokemon.map((itm) => {
        const ele = document.createElement("div");
        ele.innerHTML = `${itm.name} (${itm.type}) - ${itm.maxHp} HP, ${itm.attack} Attack`;
        return ele;
      });
      renderedWaterPokemon.forEach((itm) => {
        document.getElementById("wrapper").appendChild(itm);
      });
    } else if (sortSelect === "highAttack") {
      wrapperText.replaceChildren();
      let pokemonSort = waterPokemonChange.sort((a, b) => b.attack - a.attack);
      let renderedPokemon = waterPokemonChange.map((itm) => {
        const ele = document.createElement("div");
        ele.innerHTML = `${itm.name} (${itm.type}) - ${itm.maxHp} HP, ${itm.attack} Attack`;
        return ele;
      });
      renderedPokemon.forEach((itm) => {
        document.getElementById("wrapper").appendChild(itm);
      });
    } else if (sortSelect === "lowAttack") {
      wrapperText.replaceChildren();
      let pokemonSort = waterPokemonChange.sort((a, b) => a.attack - b.attack);
      let renderedPokemon = waterPokemonChange.map((itm) => {
        const ele = document.createElement("div");
        ele.innerHTML = `${itm.name} (${itm.type}) - ${itm.maxHp} HP, ${itm.attack} Attack`;
        return ele;
      });
      renderedPokemon.forEach((itm) => {
        document.getElementById("wrapper").appendChild(itm);
      });
    } else if (sortSelect === "highHp") {
      wrapperText.replaceChildren();
      let pokemonSort = waterPokemonChange.sort((a, b) => b.maxHp - a.maxHp);
      let renderedPokemon = waterPokemonChange.map((itm) => {
        const ele = document.createElement("div");
        ele.innerHTML = `${itm.name} (${itm.type}) - ${itm.maxHp} HP, ${itm.attack} Attack`;
        return ele;
      });
      renderedPokemon.forEach((itm) => {
        document.getElementById("wrapper").appendChild(itm);
      });
    } else if (sortSelect === "lowHp") {
      wrapperText.replaceChildren();
      let pokemonSort = waterPokemonChange.sort((a, b) => a.maxHp - b.maxHp);
      let renderedPokemon = waterPokemonChange.map((itm) => {
        const ele = document.createElement("div");
        ele.innerHTML = `${itm.name} (${itm.type}) - ${itm.maxHp} HP, ${itm.attack} Attack`;
        return ele;
      });
      renderedPokemon.forEach((itm) => {
        document.getElementById("wrapper").appendChild(itm);
      });
    }
  } else if (typeSelect === "electric") {
    if (sortSelect === "sortDefault") {
      wrapperText.replaceChildren();
      let renderedElectricPokemon = electricPokemon.map((itm) => {
        const ele = document.createElement("div");
        ele.innerHTML = `${itm.name} (${itm.type}) - ${itm.maxHp} HP, ${itm.attack} Attack`;
        return ele;
      });
      renderedElectricPokemon.forEach((itm) => {
        document.getElementById("wrapper").appendChild(itm);
      });
    } else if (sortSelect === "highAttack") {
      wrapperText.replaceChildren();
      let pokemonSort = electricPokemonChange.sort(
        (a, b) => b.attack - a.attack,
      );
      let renderedPokemon = electricPokemonChange.map((itm) => {
        const ele = document.createElement("div");
        ele.innerHTML = `${itm.name} (${itm.type}) - ${itm.maxHp} HP, ${itm.attack} Attack`;
        return ele;
      });
      renderedPokemon.forEach((itm) => {
        document.getElementById("wrapper").appendChild(itm);
      });
    } else if (sortSelect === "lowAttack") {
      wrapperText.replaceChildren();
      let pokemonSort = electricPokemonChange.sort(
        (a, b) => a.attack - b.attack,
      );
      let renderedPokemon = electricPokemonChange.map((itm) => {
        const ele = document.createElement("div");
        ele.innerHTML = `${itm.name} (${itm.type}) - ${itm.maxHp} HP, ${itm.attack} Attack`;
        return ele;
      });
      renderedPokemon.forEach((itm) => {
        document.getElementById("wrapper").appendChild(itm);
      });
    } else if (sortSelect === "highHp") {
      wrapperText.replaceChildren();
      let pokemonSort = electricPokemonChange.sort((a, b) => b.maxHp - a.maxHp);
      let renderedPokemon = electricPokemonChange.map((itm) => {
        const ele = document.createElement("div");
        ele.innerHTML = `${itm.name} (${itm.type}) - ${itm.maxHp} HP, ${itm.attack} Attack`;
        return ele;
      });
      renderedPokemon.forEach((itm) => {
        document.getElementById("wrapper").appendChild(itm);
      });
    } else if (sortSelect === "lowHp") {
      wrapperText.replaceChildren();
      let pokemonSort = electricPokemonChange.sort((a, b) => a.maxHp - b.maxHp);
      let renderedPokemon = electricPokemonChange.map((itm) => {
        const ele = document.createElement("div");
        ele.innerHTML = `${itm.name} (${itm.type}) - ${itm.maxHp} HP, ${itm.attack} Attack`;
        return ele;
      });
      renderedPokemon.forEach((itm) => {
        document.getElementById("wrapper").appendChild(itm);
      });
    }
  } else if (typeSelect === "grass") {
    if (sortSelect === "sortDefault") {
      wrapperText.replaceChildren();
      let renderedGrassPokemon = grassPokemon.map((itm) => {
        const ele = document.createElement("div");
        ele.innerHTML = `${itm.name} (${itm.type}) - ${itm.maxHp} HP, ${itm.attack} Attack`;
        return ele;
      });
      renderedGrassPokemon.forEach((itm) => {
        document.getElementById("wrapper").appendChild(itm);
      });
    } else if (sortSelect === "highAttack") {
      wrapperText.replaceChildren();
      let pokemonSort = grassPokemonChange.sort((a, b) => b.attack - a.attack);
      let renderedPokemon = grassPokemonChange.map((itm) => {
        const ele = document.createElement("div");
        ele.innerHTML = `${itm.name} (${itm.type}) - ${itm.maxHp} HP, ${itm.attack} Attack`;
        return ele;
      });
      renderedPokemon.forEach((itm) => {
        document.getElementById("wrapper").appendChild(itm);
      });
    } else if (sortSelect === "lowAttack") {
      wrapperText.replaceChildren();
      let pokemonSort = grassPokemonChange.sort((a, b) => a.attack - b.attack);
      let renderedPokemon = grassPokemonChange.map((itm) => {
        const ele = document.createElement("div");
        ele.innerHTML = `${itm.name} (${itm.type}) - ${itm.maxHp} HP, ${itm.attack} Attack`;
        return ele;
      });
      renderedPokemon.forEach((itm) => {
        document.getElementById("wrapper").appendChild(itm);
      });
    } else if (sortSelect === "highHp") {
      wrapperText.replaceChildren();
      let pokemonSort = grassPokemonChange.sort((a, b) => b.maxHp - a.maxHp);
      let renderedPokemon = grassPokemonChange.map((itm) => {
        const ele = document.createElement("div");
        ele.innerHTML = `${itm.name} (${itm.type}) - ${itm.maxHp} HP, ${itm.attack} Attack`;
        return ele;
      });
      renderedPokemon.forEach((itm) => {
        document.getElementById("wrapper").appendChild(itm);
      });
    } else if (sortSelect === "lowHp") {
      wrapperText.replaceChildren();
      let pokemonSort = grassPokemonChange.sort((a, b) => a.maxHp - b.maxHp);
      let renderedPokemon = grassPokemonChange.map((itm) => {
        const ele = document.createElement("div");
        ele.innerHTML = `${itm.name} (${itm.type}) - ${itm.maxHp} HP, ${itm.attack} Attack`;
        return ele;
      });
      renderedPokemon.forEach((itm) => {
        document.getElementById("wrapper").appendChild(itm);
      });
    }
  }
}
