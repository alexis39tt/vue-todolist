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
                    text: 'Dare un passaggio a una tredicenne di Brembate',
                    done: false
                },
                {
                    text: 'Pilotare una nave da crociera vicino all\'isola del Giglio',
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