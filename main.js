$(document).ready(function() {
    $(".fa-microphone").click(function() {
        invia_messaggio();
        // risposta_computer();
        // tempoRisposta();

    });
    // Creo una funzione per l'invio del messaggio
    function invia_messaggio() {
        // $(".messaggio-vocale").click(function() {
        // Recupero il testo del messaggio
        var testo_messaggio = $(".msg").val();
        console.log(testo_messaggio);
        // controllo se il messaggio è diverso da(elementi 0) e quindi non è vuoto
        if (testo_messaggio.length != 0) {
            // clono la struttura del messaggio
            var nuovo_messaggio = $(".template .Structure").clone();
            // Lo inserisco nel figlio di h3
            nuovo_messaggio.children("h3").text(testo_messaggio);
            // Gli aggiungo la classe inviati
            nuovo_messaggio.addClass("inviati");
            // Ci inserisco il nuovo messaggio come ultimo
            $(".container-messaggi").append(nuovo_messaggio);
            setTimeout(risposta_computer, 1000);
            // risposta_computer();
        }
        // });
    }

    // Creo una funzione per la ricezione del messaggio
    function risposta_computer() {
        // $(".messaggio-vocale").click(function() {
        // Recupero il testo del messaggio
        var messaggio_risposta = $(".msg").val();
        // controllo se il messaggio è diverso da(elementi 0) e quindi non è vuoto
        if (messaggio_risposta.length != 0) {
            // clono la struttura del messaggio
            var messaggio_risposta = $(".template .Structure").clone();
            // Lo inserisco nel figlio di h3 con una risposta
            messaggio_risposta.children("h3").text("ok");
            // Gli aggiungo la classe ricevuti
            messaggio_risposta.addClass("ricevuti");
            // Ci inserisco il nuovo messaggio come ultimo
            $(".container-messaggi").append(messaggio_risposta);

        }
        // });
    }

    // Creo la funzione per togliere il microfono se sto scrivendo, altrimenti lo rimetto
    $(".msg").keyup(function() {
        // Recupero il contenuto del messaggio
        var risposta = $(".msg").val();
        // se il messaggio non è vuoto allora tolgo il microfono e rimetto l'aereoplano di carta
        if (risposta.length != 0) {
            $(".messaggio-vocale i").removeClass("fas fa-2x fa-microphone").addClass("fas fa-2x fa-paper-plane");
            // altrimenti tolgo l'aereoplano di carta e rimetto il microfono
        } else {
            $('.messaggio-vocale i').removeClass("fas fa-2x fa-paper-plane").addClass("fas fa-2x fa-microphone");
        }
    });
});
// Ricerca della chat se corrisponde a ciò che viene inserito
$(".cerca").keyup(function() {
    // Creo la variabile del testo(scritto) che se corrisponde alla ricerca si va avanti
    var testo_ricerca = $('.cerca').val();
    // Se si sta effettivamente digitando perciò è diverso da 0 allora si procede
    if (testo_ricerca.length != 0) {
        // mi aggancio al contenitore e controllo ogni componente con each
        $(".container-lista").each(function() {
            // se ciò che è digitato può essere trovato dentro nome allora lo scrivo
            var elemento_corrente = $(this).find(".nome").text();
            // Uso to LowerCase per controllare se ciò che inserito, diventando minuscolo corrisponde ad una chat da minuscolo cosi non è necessario scriverlo obbligatoriamente maiuscolo
            if (elemento_corrente.toLowerCase().includes(testo_ricerca.toLowerCase()))
            // quando lo trova allora lo mostra
            {
                $(this).show();
                // il resto (this) lo nasconde
            } else {
                $(this).hide();
            }
        });
    } else {
        $(".container-lista").show();

    }

});
$(".container-lista").click(function() {
    // intercetto il click sull container-lista
    var Posizione = $(this).index();
    var Nome = $(this).find(".nome > h4").text();
    var Immagine = $(this).find(".lista > img").attr("src");
    $(".vertical-access > h4").text(Nome);
    $(".nav-right > img").attr("src", Immagine);

    // controllare l'indice con index e this
    $(".container-messaggi").removeClass("active");
    var ConversazioneActive = $(".container-messaggi").eq(Posizione);
    // togliere la classe active ai vari container e recuperare il container corrispondente all'indice del contatto utilizzando eq e mettergli la classe active

    ConversazioneActive.addClass("active");
    // quando invii un messaggio devi appendere il mex sul container con la classe active

});
