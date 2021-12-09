// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, 
// il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

Vue.config.devtools = true;
const app = new Vue(
    {
        el: '#root',
        data: {
            newToDo: "",
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
                },
            ],
        },
        methods:{
            removeToDo: function(index){
                this.todos.splice(index, 1);
            },
            addToDo: function(){
                this.todos.push(
                    {
                    text: this.newToDo,
                    done: false
                    }
                );
                this.newToDo = "";
            },
        }
    }
);