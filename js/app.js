const app = Vue.createApp;
const DateTime = luxon.DateTime;
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
            //Array messaggi

            {
              date: DateTime.local(2020, 1, 10, 15, 30),
              message: 'Hai portato a spasso il cane?',
              status: 'sent',
              dropdown: false,
            },
            {
              date: DateTime.local(2020, 1, 10, 15, 50),
              message: 'Ricordati di stendere i panni',
              status: 'sent',
              dropdown: false,
            },
            {
              date: DateTime.local(2020, 1, 10, 16, 50),
              message: 'Tutto fatto!',
              status: 'received',
              dropdown: false,
            },
          ],
        },
        {
          name: 'Fabio',
          avatar: './img/avatar_2.jpg',
          visible: true,
          messages: [
            {
              date: DateTime.local(2020, 1, 10, 16, 30),
              message: 'Ciao come stai?',
              status: 'sent',
              dropdown: false,
            },
            {
              date: DateTime.local(2020, 3, 20, 16, 50),
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received',
              dropdown: false,
            },
            {
              date: DateTime.local(2020, 3, 20, 16, 35),
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent',
              dropdown: false,
            },
          ],
        },
        {
          name: 'Samuele',
          avatar: './img/avatar_3.jpg',
          visible: true,
          messages: [
            {
              date: DateTime.local(2020, 3, 28, 10, 50),
              message: 'La Marianna va in campagna',
              status: 'received',
              dropdown: false,
            },
            {
              date: DateTime.local(2020, 3, 28, 10, 20),
              message: 'Sicuro di non aver sbagliato chat?',
              status: 'sent',
              dropdown: false,
            },
            {
              date: DateTime.local(2020, 3, 28, 16, 15),
              message: 'Ah scusa!',
              status: 'received',
              dropdown: false,
            },
          ],
        },
        {
          name: 'Alessandro B.',
          avatar: './img/avatar_4.jpg',
          visible: true,
          messages: [
            {
              date: DateTime.local(2020, 1, 10, 15, 50),
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent',
              dropdown: false,
            },
            {
              date: DateTime.local(2020, 1, 10, 15, 50),
              message: 'Si, ma preferirei andare al cinema',
              status: 'received',
              dropdown: false,
            },
          ],
        },
        {
          name: 'Alessandro L.',
          avatar: './img/avatar_5.jpg',
          visible: true,
          messages: [
            {
              date: DateTime.local(2020, 1, 10, 15, 30),
              message: 'Ricordati di chiamare la nonna',
              status: 'sent',
              dropdown: false,
            },
            {
              date: DateTime.local(2020, 1, 10, 15, 30),
              message: 'Va bene, stasera la sento',
              status: 'received',
              dropdown: false,
            },
          ],
        },
        {
          name: 'Claudia',
          avatar: './img/avatar_6.jpg',
          visible: true,
          messages: [
            {
              date: DateTime.local(2020, 1, 10, 15, 30),
              message: 'Ciao Claudia, hai novità?',
              status: 'sent',
              dropdown: false,
            },
            {
              date: DateTime.local(2020, 1, 10, 15, 50),
              message: 'Non ancora',
              status: 'received',
              dropdown: false,
            },
            {
              date: DateTime.local(2020, 1, 10, 15, 50),
              message: 'Nessuna nuova, buona nuova',
              status: 'sent',
              dropdown: false,
            },
          ],
        },
        {
          name: 'Federico',
          avatar: './img/avatar_7.jpg',
          visible: true,
          messages: [
            {
              date: DateTime.local(2020, 1, 10, 15, 30),
              message: 'Fai gli auguri a Martina che è il suo compleanno!',
              status: 'sent',
              dropdown: false,
            },
            {
              date: DateTime.local(2020, 1, 10, 15, 50),
              message: 'Grazie per avermelo ricordato, le scrivo subito!',
              status: 'received',
              dropdown: false,
            },
          ],
        },
        {
          name: 'Davide',
          avatar: './img/avatar_8.jpg',
          visible: true,
          messages: [
            {
              date: DateTime.local(2020, 1, 10, 15, 30),
              message: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received',
              dropdown: false,
            },
            {
              date: DateTime.local(2020, 1, 10, 15, 50),
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: 'sent',
              dropdown: false,
            },
            {
              date: DateTime.local(2020, 1, 10, 15, 51),
              message: 'OK!!',
              status: 'received',
              dropdown: false,
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
          date: DateTime.now(),
          status: 'sent',
          dropdown: false,
        });
        this.newMessage = '';
      }
      // Funzione risposta automatica
      setTimeout(() => {
        const autoAnswer = {
          message: '',
          image: './img/madame.jpg',
          date: DateTime.now(),
          status: 'received',
          dropdown: false,
        };
        this.contacts[this.activeIndex].messages.push(autoAnswer);
      }, 1000);
    },
    // Funzione per visualizzare ultimo messaggio ricevuto/inviato
    lastMessage(index) {
      // l'array di messaggi associato al contatto corrispondente all'indice fornito
      let message = this.contacts[index].messages;
      // ottenere l'indice dell'ultimo elemento dell'array dei messaggi.
      return message[message.length - 1];
    },

    showDropdown(index) {
      this.contacts[this.activeIndex].messages[index].dropdown = !this.contacts[this.activeIndex].messages[index].dropdown
    },

    deleteMsg(index){
      this.contacts[this.activeIndex].messages.splice(index, 1)
    }
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
