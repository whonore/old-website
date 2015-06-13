$(document).ready(function() {
  $("button").click(function() {
    toggleIcon($(this).find("span"));
    $("#" + this.name).toggle(500);
  });

  /* Start off collapsed */
  $("button").each(function() {
    $(this).trigger("click");
  });
});

function toggleIcon(icon) {
  switch (icon.text()) {
    case "+":
      icon.text("-");
      break;
    case "-":
      icon.text("+");
      break;
  }
}