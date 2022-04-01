var app = new Vue(
    {
        el: '#root',
        data: {
            todo: [
                {
                    text: 'Provare le scarpe',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: false
                },
                {
                    text: 'Inviare CV',
                    done: false
                },
                {
                    text: 'Pagare le bollette',
                    done: false
                },
                {
                    text: 'Imparare una nuova lingua',
                    done: false
                },
            ],
            errors: [
                'Errore: questo to-do già esiste!',
                'Errore: non puoi inserire un to-do vuoto!'
            ],
            errorindex: 0,
            copia: false,
            empty: false
        },
        methods: {
            deletetodo: function (i) {
                document.getElementsByClassName("todo")[i].style.display = "none";
                this.todo.splice(i,0);
            },
            tododone: function (i) {
                (this.todo[i].done == true) ? this.todo[i].done = false : this.todo[i].done = true
            },
            addnewtodo: function (newtodo) {
                this.copia = false;
                this.empty = false;
                for (i = 0; i < this.todo.length; i++) {
                    if (this.todo[i].text == newtodo) {
                        this.copia = true;
                        this.errorindex = 0;
                    }
                }
                if(newtodo == null || newtodo == "" || newtodo == " "){
                    this.empty = true;
                    this.errorindex = 1;
                }
                else if (this.copia == false){
                    this.todo.push({
                        text: newtodo,
                        done: false
                    });
                }
            }
        }
    })