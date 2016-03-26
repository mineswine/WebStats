function scrollAnchor(id) {
  var self = $(`#${id}`),
      body = $('html, body'),
      pixels = 0;
  pixels = $( self.attr('href') ).offset().top;
  body.animate({
      scrollTop: $( self.attr('href') ).offset().top - 65
  }, 500, function() {
  });
}

export default scrollAnchor;
