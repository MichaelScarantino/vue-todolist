// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

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