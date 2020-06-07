const fetchPokemon = () => {

};


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.carousel').carousel();
  });

//   Autocompleate
// Get da API http://pokeapi.co/api/v2/pokemon?limit=1000
