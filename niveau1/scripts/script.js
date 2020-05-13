
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

    });
});

/*questions.next().css('display', 'block');
});*/
