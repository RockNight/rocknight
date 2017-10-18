var Flickity = require('flickity');

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  contain: true
});

// element argument can be a selector string
//   for an individual element
// var flkty = new Flickity( '.main-carousel', {
  // options
// });