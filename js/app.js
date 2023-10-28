const app = Vue.createApp;
app({
  data() {
    return {
      activeIndex: 0, //Definire indice attivo default 0
      //Contacts è il mio array di oggetti
      contacts: [
        {
          name: 'Michele', //Primo contatto "Michele"
          avatar: './img/avatar_1.jpg',
          visible: true,
          messages: [
            //Array messaggA

            {
              date: '10/01/2020 15:30:55',
              message: 'Hai portato a spasso il cane?',
              status: 'sent',
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Ricordati di stendere i panni',
              status: 'sent',
            },
            {
              date: '10/01/2020 16:15:22',
              message: 'Tutto fatto!',
              status: 'received',
            },
          ],
        },
        {
          name: 'Fabio',
          avatar: './img/avatar_2.jpg',
          visible: true,
          messages: [
            {
              date: '20/03/2020 16:30:00',
              message: 'Ciao come stai?',
              status: 'sent',
            },
            {
              date: '20/03/2020 16:30:55',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received',
            },
            {
              date: '20/03/2020 16:35:00',
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent',
            },
          ],
        },
        {
          name: 'Samuele',
          avatar: './img/avatar_3.jpg',
          visible: true,
          messages: [
            {
              date: '28/03/2020 10:10:40',
              message: 'La Marianna va in campagna',
              status: 'received',
            },
            {
              date: '28/03/2020 10:20:10',
              message: 'Sicuro di non aver sbagliato chat?',
              status: 'sent',
            },
            {
              date: '28/03/2020 16:15:22',
              message: 'Ah scusa!',
              status: 'received',
            },
          ],
        },
        {
          name: 'Alessandro B.',
          avatar: './img/avatar_4.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent',
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received',
            },
          ],
        },
        {
          name: 'Alessandro L.',
          avatar: './img/avatar_5.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ricordati di chiamare la nonna',
              status: 'sent',
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Va bene, stasera la sento',
              status: 'received',
            },
          ],
        },
        {
          name: 'Claudia',
          avatar: './img/avatar_6.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao Claudia, hai novità?',
              status: 'sent',
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Non ancora',
              status: 'received',
            },
            {
              date: '10/01/2020 15:51:00',
              message: 'Nessuna nuova, buona nuova',
              status: 'sent',
            },
          ],
        },
        {
          name: 'Federico',
          avatar: './img/avatar_7.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Fai gli auguri a Martina che è il suo compleanno!',
              status: 'sent',
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Grazie per avermelo ricordato, le scrivo subito!',
              status: 'received',
            },
          ],
        },
        {
          name: 'Davide',
          avatar: './img/avatar_8.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received',
            },
            {
              date: '10/01/2020 15:50:00',
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: 'sent',
            },
            {
              date: '10/01/2020 15:51:00',
              message: 'OK!!',
              status: 'received',
            },
          ],
        },
      ],
      newMessage: '', //definire newMessage vuoto
      search: '', //Creo una variabile che rappresenta la barra di ricerca inizialmente vuota.
      //quando l'utente inizia a digitare, il valore di search verrà aggiornato
    };
  },
  methods: {
    // Funzione per definire l'indice attivo dopo il click
    active(index) {
      this.activeIndex = index;
    },
    // Funzione per inviare messaggio
    addMessage() {
      // .trim rimozione spazzi bianchi
      const message = this.newMessage.trim();
      // controllo se l'utente ha inserito un messaggio valido allora invia
      if (message !== '') {
        this.contacts[this.activeIndex].messages.push({
          message,
          status: 'sent',
        });
        this.newMessage = '';
      }
      // Funzione risposta automatica
      setTimeout(() => {
        const autoAnswer = {
          message: 'adesso no!!',
          status: 'received',
        };
        this.contacts[this.activeIndex].messages.push(autoAnswer);
      }, 1000);
    },
    // Funzione per visualizzare ultimo messaggio ricevuto/inviato
    lastMessage: function (index) {
      // l'array di messaggi associato al contatto corrispondente all'indice fornito
      let message = this.contacts[index].messages;
      // ottenere l'indice dell'ultimo elemento dell'array dei messaggi.
      return message[message.length - 1];
    },
  },

  // Funzione ricerca con filtro
  computed: {
    filteredList() {
      //Converte il testo di ricerca in minuscolo
      const search = this.search.toLowerCase();
      //Filtra la lista dei contatti per trovare quelli che corrispondono al testo di ricerca
      return this.contacts.filter((contact) =>
        //La funzione includes() verifica se il nome del contatto contiene la stringa di ricerca
        contact.name.toLowerCase().includes(search)
      );
    },
  },
}).mount('#app');