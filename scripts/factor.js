$(document).ready(function() {
  loadButtons(6);
  
  $(buttons).click(loadFactor);
});

function loadButtons(numRows) {
  $.getJSON('/ProjectEuler/valid.json', function(data) {
    for (var i = 0; i < numRows; i++) {
      $(".problem-select").append(
        '<div class="row">' +
        '</div>'
      );
    }
    
    var rows = $('.problem-select .row');
    for (var i = 0; i < numRows; i++) {
      for (var j = 1; j <= 6; j++) {
        var num = (j + i * (numRows + 1)).toString();
        var padded = num;
        
        while (padded.length < 3) {
          padded = '0' + padded;
        }
        
        $(rows[i]).append(
          '<button class="col-md-2" id="p' + padded + '">Problem ' + num + '</button>'
        );
        
        if (!data.hasOwnProperty(padded)) {
          $(rows[i]).children().last().addClass('invalid');
        }
      }
    }
    
    $('.problem-select button').click(loadFactor);
  });
}

function loadFactor() {
  console.log(this);
  $('button.active').removeClass('active');
  $(this).addClass('active');
  $('#problem').load('/ProjectEuler/html/' + $(this).attr('id') + '.html');
  $('#tests').load('/ProjectEuler/html/' + $(this).attr('id') + '-tests.html');
}