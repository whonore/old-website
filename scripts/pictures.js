$(document).ready(function() {
  folder = 'peru';

  $('.thumbnail').click(function() {
    //im = this.children[0];
    //$(im).toggleClass('fullsize');
    //$(this).toggleClass('fullsize');
  });
  //$('.curr').click(function() {
  //  showFullsize(this);
  //});

  $('input[name=folder]', '.folder-select').change(function() {
    folder = $(this).val();
    updateImages();
  });
});

function updateImages() {
  $('.thumbnail').each(function(idx, thumb) {
      im = thumb.children[0];
      oldSrc = im.src.split('/');
      oldSrc[oldSrc.length - 2] = folder;
      $(im).attr('src', oldSrc.join('/'));
  });
}