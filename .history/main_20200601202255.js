var url ="https://pokeapi.co/api/v2/";

const axio = require('axios')
const rs = require('readline-sync');

var pesquisa = rs.question('digite o noem ou número de um pokemon: ').toLowerCase();

axios.get(`https:https://pokeapi.co/api/v2/poemon/${pesquisa}`)
    .then((resposta) => {
        const pokemon = resposta.data;
        console.log(pokemon.name);
    })


        var nomesDasHabilidades = [];

        pokemon.abilities.forEach(habilidade) => {
            nomesDasHabilidades.push(habilidade.ability.name);
        };
    
        console.log(nomesDasHabilidades);

