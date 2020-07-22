      /* Inizializza variabili */
      let currentColor = 'white'; 
      let currentImage = '0'; 
      let currentSize = '0';
      let image = document.getElementById('img');
      let selection;
      let currentSelection = 0;
      let bagCounter = 0;


      /* IMMAGINI */

      document.getElementById('dream-nightilight').addEventListener('click', function(){
        /* Reset stile su selezione precedente */
        if(currentSelection !== 0) {
          document.getElementById(currentSelection).style.fontWeight = 'normal';
        }
        /* Aggiorno variabili elemento attuale */
        currentImage = '1';
        currentSelection = 'dream-nightilight';
        selection = document.getElementById('dream-nightilight');

        /* Aggiorno stile bottone e immagine */
        selection.style.fontWeight = 'bold';
        image.src = `img/${currentImage}-${currentColor}.png`;

        /* Per concatenare stringhe a variabili, 2 possibilità: */
        /* 1.     let stringa = "testo " + variabile + " altro testo" */
        /* 2.     let stringa = "testo ${variabile} altro testo" */
      } );

      document.getElementById('la-citta').addEventListener('click', function(){
        if(currentSelection !== 0) {
          document.getElementById(currentSelection).style.fontWeight = 'normal';
        }
        currentImage = '2';
        currentSelection = 'la-citta';
        selection = document.getElementById('la-citta');
        selection.style.fontWeight = 'bold';
        image.src = `img/${currentImage}-${currentColor}.png`;
      } );

      document.getElementById('pianeta-zaczac').addEventListener('click', function(){
        if(currentSelection !== 0) {
          document.getElementById(currentSelection).style.fontWeight = 'normal';
        }
        currentImage = '3';
        currentSelection = 'pianeta-zaczac';
        selection = document.getElementById('pianeta-zaczac');
        selection.style.fontWeight = 'bold';
        image.src = `img/${currentImage}-${currentColor}.png`;
      } );

      document.getElementById('bestriario-dell-inconscio').addEventListener('click', function(){
        if(currentSelection !== 0) {
          document.getElementById(currentSelection).style.fontWeight = 'normal';
        }
        currentImage = '4';
        currentSelection = 'bestriario-dell-inconscio';
        selection = document.getElementById('bestriario-dell-inconscio');
        selection.style.fontWeight = 'bold';
        image.src = `img/${currentImage}-${currentColor}.png`;
      } );

      document.getElementById('maestro').addEventListener('click', function(){
        if(currentSelection !== 0) {
          document.getElementById(currentSelection).style.fontWeight = 'normal';
        }
        currentImage = '5';
        currentSelection = 'maestro';
        selection = document.getElementById('maestro');
        selection.style.fontWeight = 'bold';
        image.src = `img/${currentImage}-${currentColor}.png`;
      } );


            /* COLORI */

            document.getElementById('white').addEventListener('click', function(){
              /* Aggiorno variabile, stile bottone e immagine */
              currentColor = 'white';
              document.getElementById(currentColor).style.borderColor = '#F2E529';
              document.getElementById('black').style.borderColor = 'black';
              image.src = `img/${currentImage}-${currentColor}.png`;
            } );
      
            document.getElementById('black').addEventListener('click', function(){
              currentColor = 'black';
              document.getElementById(currentColor).style.borderColor = '#F2E205';
              document.getElementById('white').style.borderColor = 'black';
              image.src = `img/${currentImage}-${currentColor}.png`;
            } );



            /* TAGLIA */

            document.getElementById('size-xs').addEventListener('click', function(){
              /* Reset stile su selezione precedente */
              if(currentSize !== 0) {
                console.log('Hello');
                document.getElementById('size-xs').style.fontWeight = 'normal';
              }
              /* Aggiorno variabile, stile bottone e immagine */
              console.log("It's me");
              currentSize = 'size-xs';

              document.getElementById('size-xs').style.fontWeight = 'bold';
            } );
      
            document.getElementById('size-s').addEventListener('click', function(){
              if(currentSize !== 0) {
                document.getElementById(currentSize).style.fontWeight = 'normal';
              }
              currentSize = 'size-s';
              document.getElementById(currentSize).style.fontWeight = 'bold';
            } );
      
            document.getElementById('size-m').addEventListener('click', function(){
              if(currentSize !== 0) {
                document.getElementById(currentSize).style.fontWeight = 'normal';
              }
              currentSize = 'size-m';
              document.getElementById(currentSize).style.fontWeight = 'bold';
            } );
      
            document.getElementById('size-l').addEventListener('click', function(){
              if(currentSize !== 0) {
                document.getElementById(currentSize).style.fontWeight = 'normal';
              }
              currentSize = 'size-l';
              document.getElementById(currentSize).style.fontWeight = 'bold';
            } );


            /* Bottone reset */

            document.getElementById('reset').addEventListener('click', function(){
              /* Reset bottoni */
              if(currentSelection !== 0) {
                document.getElementById(currentSelection).style.fontWeight = 'normal';
                bagCounter = 0;
                document.getElementById('quantity').innerHTML = bagCounter;
              }
              document.getElementById('white').style.borderColor = 'black';
              document.getElementById('black').style.borderColor = 'black';

              /* Reset variabili */
              currentColor = 'white'; 
              currentImage = '0'; 
              currentSize = '0';
              currentSelection = 0;
              image.src = `img/${currentImage}-${currentColor}.png`;

            } );

            /* Add to bag */

            document.getElementById('btn-add').addEventListener('click', function(){
              bagCounter += 1;
              document.getElementById('quantity').innerHTML = bagCounter;
              console.log(bagCounter);
            } );
