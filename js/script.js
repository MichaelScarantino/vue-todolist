// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no

Vue.config.devtools = true;
const app = new Vue(
    {
        el: '#root',
        data: {
            todos: [
                {
                    text: "Creare la Repo",
                    done: true
                },
                {
                    text: "Aprire Visual Studio Code",
                    done: true
                },
                {
                    text: "Creare lo scaffolding iniziale",
                    done: true
                },
                {
                    text: "Pushare ogni ora",
                    done: false
                },
                {
                    text: "Chiudere i tag",
                    done: false
                },
                {
                    text: "Commentare il codice",
                    done: true
                }
            ],
        },
        methods:{

        }
    }
);