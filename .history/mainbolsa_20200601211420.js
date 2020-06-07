var apiDeMunicipios ="https://servicodados.ibge.gov.br/api/v1/localidades/municipios";

const axios = require('axios')
const rs = require('readline-sync');

var nomeDoMunicipio = rs.question('digite o nome de um minicípio: ').toLowerCase();


axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios`)
    .then((resposta) => {
        var municipios = resposta.data;
        municipios.filter( (identificador) => {
            console.log(identificador.nome);
        });
        console.log(municipios[0]);
    });


        // var nomesDasHabilidades = [];
        // distrito.abilities.forEach((habilidade) => {
        //     nomesDasHabilidades.push(habilidade.ability.name);
        // });
    
        // console.log(nomesDasHabilidades);

