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
            ]
        },
        methods: {
            deletetodo: function(i){
                document.getElementsByClassName("todo")[i].style.display = "none"
            },
            tododone: function(i){
                (this.todo[i].done == true) ? this.todo[i].done = false : this.todo[i].done = true
            }
    }
})