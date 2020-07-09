var pokemons;
var poke_imagens = {};

document.addEventListener("DOMContentLoaded", function () {
  axios.get("https://pokeapi.co/api/v2/pokemon?limit=251").then((response) => {
    var pokemons = response.data.results;
    pokemons.forEach((poke) => {
      var split = poke.url.split("/");
      var numero = split[split.length - 2];
      var url =
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" +
        numero.padStart(3, "0") +
        ".png";
      poke_imagens[poke.name] = url;
    });
  });
});

function selecionarPokemon() {
  var input = document.querySelector("#autocomplete-input");
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${input.value}/`)
    .then((response) => {
      var pokemon = response.data.name;
      document.querySelector("#nomePokemon").innerHTML = pokemon.toUpperCase();
      var lista = document.querySelector("#listaHabilidades");
      var habilidades = response.data.abilities.map(
        (ab) => `<p>${ab.ability.name}</p>`
      );
      lista.innerHTML = habilidades.join("");
      var imagem = poke_imagens[pokemon];
      document.querySelector("#pokeImage").src = imagem;
      var tipos = response.data.types.map((t) => t.type.name);
      document.querySelector("#tipoPokemon").innerHTML = tipos.join(`, `);
    });
}

// função javascript ao pressionar a tecla Enter na caixa de texto
var input = document.getElementById("autocomplete-input");
input.onkeypress = function (event) {
  // O número 13 é a tecla "Enter" no teclado
  if (event.which === 13 || event.keyCode === 13) {
    document.getElementById("btnPesquisar").click();
  }
};
var pokemons;
var poke_imagens = {};

document.addEventListener("DOMContentLoaded", function () {
  axios.get("https://pokeapi.co/api/v2/pokemon?limit=251").then((response) => {
    var pokemons = response.data.results;
    pokemons.forEach((poke) => {
      var split = poke.url.split("/");
      var numero = split[split.length - 2];
      var url =
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" +
        numero.padStart(3, "0") +
        ".png";
      poke_imagens[poke.name] = url;
    });
  });

  // var instances = M.Autocomplete.init(elems, { data: poke_imagens });
});

function selecionarPokemon() {
  var input = document.querySelector("#autocomplete-input");
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${input.value}/`)
    .then((response) => {
      var pokemon = response.data.name;
      document.querySelector("#nomePokemon").innerHTML = pokemon.toUpperCase();
      var lista = document.querySelector("#listaHabilidades");
      var habilidades = response.data.abilities.map(
        (ab) => `<p>${ab.ability.name}</p>`
      );
      lista.innerHTML = habilidades.join("");
      var imagem = poke_imagens[pokemon];
      document.querySelector("#pokeImage").src = imagem;
      var tipos = response.data.types.map((t) => t.type.name);
      document.querySelector("#tipoPokemon").innerHTML = tipos.join(`, `);
      descricao();
    });
}

function descricao() {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${input.value}`)
    .then((resposta) => {
      const pokemonBusca = resposta.data;
      var url = pokemonBusca.species.url;
      axios.get(url).then((resposta) => {
        var descricaoDoPoke = resposta.data.flavor_text_entries[0].flavor_text;
        document.getElementById("descricaoPokemon").innerHTML = descricaoDoPoke;
      });
    });
}

// função javascript ao pressionar a tecla Enter na caixa de texto
var input = document.getElementById("autocomplete-input");
input.onkeypress = function (event) {
  // O número 13 é a tecla "Enter" no teclado
  if (event.which === 13 || event.keyCode === 13) {
    document.getElementById("btnPesquisar").click();
  }
};
