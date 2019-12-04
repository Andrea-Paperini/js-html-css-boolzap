$(document).ready(function() {
    $(".chat-input").click(function() {
        invia_messaggio();
        // risposta_computer();
        // tempoRisposta();
        setTimeout(risposta_computer, 3000);
    });
    // Creo una funzione per l'invio del messaggio
    function invia_messaggio() {
        $(".messaggio-vocale").click(function() {
            // Recupero il testo del messaggio
            var testo_messaggio = $(".msg").val();
            // controllo se il messaggio è diverso da(elementi 0) e quindi non è vuoto
            if (testo_messaggio.lenght != 0) {
                // clono la struttura del messaggio
                var nuovo_messaggio = $(".template .Structure").clone();
                // Lo inserisco nel figlio di h3
                nuovo_messaggio.children("h3").text(testo_messaggio);
                // Gli aggiungo la classe inviati
                nuovo_messaggio.addClass("inviati");
                // Ci inserisco il nuovo messaggio come ultimo
                $(".container-messaggi").append(nuovo_messaggio);
                risposta_computer();
            }
        });
    }

    // Creo una funzione per la ricezione del messaggio
    function risposta_computer() {
        $(".messaggio-vocale").click(function() {
            // Recupero il testo del messaggio
            var messaggio_risposta = $(".msg").val();
            // controllo se il messaggio è diverso da(elementi 0) e quindi non è vuoto
            if (messaggio_risposta.lenght != 0) {
                // clono la struttura del messaggio
                var messaggio_risposta = $(".template .Structure").clone();
                // Lo inserisco nel figlio di h3 con una risposta
                messaggio_risposta.children("h3").text("ok");
                // Gli aggiungo la classe ricevuti
                messaggio_risposta.addClass("ricevuti");
                // Ci inserisco il nuovo messaggio come ultimo
                $(".container-messaggi").append(messaggio_risposta);

            }
        });
    }

    // Creo la funzione per togliere il microfono se sto scrivendo, altrimenti lo rimetto
    $(".msg").keyup(function(event) {
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
