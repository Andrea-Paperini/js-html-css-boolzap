$(".messaggio-vocale").click(function() {
    var testo_messaggio = $(".msg").val();
    if(testo_messaggio.lenght != 0) {
        var nuovo_messaggio = $(".template .msg").clone();
        nuovo_messaggio.children(".msg").text(testo_messaggio);
        nuovo_messaggio.addClass("inviati");
        $(".inviati").append(nuovo_messaggio);

    }
});
