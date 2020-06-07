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
    console.log(poke_imagens);
  });
  var elems = document.querySelectorAll(".autocomplete");
  var instances = M.Autocomplete.init(elems, { data: poke_imagens });
});



function selecionarPokemon() {
    var input = document.querySelector('#autocomplete-input');
    axios.get(`https://pokeapi.co/api/v2/pokemon/${input.value}/`)
        .then(response => {
            var pokemon = response.data.name;
            document.querySelector("#nomePokemon").innerHTML = pokemon.toUpperCase()
            var lista = document.querySelector('#listaHabilidades');
            var habilidades = response.data.abilities.map(ab => `<p>${ab.ability.name}</p>`);
            lista.innerHTML = habilidades.join('');
            var imagem = poke_imagens[pokemon];
            document.querySelector('#pokeImage').innerHTML = imagem
            })
        }
        .catch();






//     function autoComplete(pokemons) {  
//                 return pokemons.filter((valor) => {
//                     const valorMinusculo = valor.toLowerCase()
//                     const pokemonsMinusculo = cidade.toLowerCase()
        
//                         return valorMinusculo.includes(pokemonsMinusculo)
//                     })
//             }

//             const campo = document.querySelector('#search')
//   const sugestoes = document.querySelector('.sugestoes')

//   campo.addEventListener('input', ({ target }) => {
//       const dadosDoCampo = target.value
//       if(dadosDoCampo.length) {
//          const autoCompleteValores = autoComplete(dadosDoCampo)
//          sugestoes.innerHTML = `
//             ${autoCompleteValores.map((value) => {
//                 return (
//                    `<li>${value}</li>`
//                         )
//              }).join('')}
//            `
//        }





















// const fetchPokemon = () => {

// };


// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.carousel');
//     var instances = M.Carousel.init(elems, options);
//   });

//   // Or with jQuery

//   $(document).ready(function(){
//     $('.carousel').carousel();
//   });

//   Autocompleate
// Get da API http://pokeapi.co/api/v2/pokemon?limit=251