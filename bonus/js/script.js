Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente 
//    (se done era uguale a false, impostare true e viceversa)

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
                const textTrim = this.newToDo.trim();
                if(textTrim.length > 2) {
                    this.todos.push(
                        {
                        text: textTrim,
                        done: false
                        }
                    );
                    this.newToDo = "";
                }
            },
            toggleDone: function(index) {
                this.todos[index].done = !this.todos[index].done;
            },
        }
    }
);