var url ="https://pokeapi.co/api/v2/";

const axio = require('axios')
const rs = require('readline-sync');

var pesquisa = rs.question('digite o nome da cidade: ').toLowerCase();

axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/distritos/${pesquisa}`)
    .then((resposta) => {
        const distrito = resposta.data;
        console.log(distrito.nome);
    });


        var nomesDasHabilidades = [];
        pokemon.abilities.forEach((habilidade) => {
            nomesDasHabilidades.push(habilidade.ability.name);
        });
    
        console.log(nomesDasHabilidades);

