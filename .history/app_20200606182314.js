var pokemons;

document.addEventListener('DOMContentLoaded', function() {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=251')
        .then(response => {
            var pokemons = response.data.results;
            console.log(pokemons)
        })
    function autoComplete(pokemons.name) {
        const destino = ['Salvador', 'Vitória', 'Maceió', 'Ceará','Rio Branco','Macapá', 'Porto Velho', 'Olinda','Aracaju','Capitólio','São Paulo', 'Paraty'];
        
                return destino.filter((valor) => {
                    const valorMinusculo = valor.toLowerCase()
                    const cidadeMinusculo = cidade.toLowerCase()
        
                        return valorMinusculo.includes(cidadeMinusculo)
                    })
            }
})





















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