// MILESTONE 2
// Visualizzare a fianco ad ogni item una "x": cliccando su di essa, il todo viene rimosso dalla lista.

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
            removeToDo: function(index){
                this.todos.splice(index, 1);
            },
        }
    }
);