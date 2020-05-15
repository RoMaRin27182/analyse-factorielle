var scoretotal=0;
$(function() {
 $("#commencer.bouton").click(function() {
  $(this).hide();
  questions = $(".question").first();
  questions.css('display', 'block');
  $(".bouton#repondre").css('display', 'block');

 });
});

$(function() {
 $(".bouton#repondre").click(function() {
  $(this).hide();
  questions.css('display', 'none');
  reponses = $(".reponse").first();
  reponses.css('display', 'block');
  $(".bouton#ok").css('display', 'block');

 });
});

$(function() {
 $(".bouton#ok").click(function() {
  $(this).hide();
  $("#autoeval.container").css('display', 'block');
  $(".bouton#okeval").css('display', 'block');
 });
});

$(function() {
 $(".bouton#okeval").click(function() {
  sco = $("#autoevaluation input:checked").val();
  if (sco) {
    $(this).hide();
   sco = Number(sco);
   scoretotal=scoretotal+sco;
   $("#evaluation").css('display', 'block');
   $("#evaluation").html("pointage : " + scoretotal);
  };
 });
});




/*questions.next().css('display', 'block');
});*/
