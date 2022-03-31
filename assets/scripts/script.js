new Vue(
    {
        el: '#root',
        data: {
            imgs: [
                {
                    'id': 1,
                    'url': 'https://i.picsum.photos/id/525/1280/720.jpg?hmac=9KsTQUlGgZWB1w7hmWhufXrYztqNw-ZiI6-OQj-lZMw',
                    'imgshown': true
                },
                {
                    'id': 2,
                    'url': 'https://i.picsum.photos/id/873/1280/720.jpg?hmac=isejkGjLOtcT0ymgL0EWHw2stJMSNieeaQGM3Bo3qjs',
                    'imgshown': false
                },
                {
                    'id': 3,
                    'url': 'https://i.picsum.photos/id/136/1280/720.jpg?hmac=0wqlroIDBm5Rgc-q2_AJ-jNL9NTU5Iwkkk9IaPj4EEU',
                    'imgshown': false
                },
                {
                    'id': 4,
                    'url': 'https://i.picsum.photos/id/282/1280/720.jpg?hmac=zNjMzLKFJQDy_1sDpmwKTpNz3vHC5M4psJUy8y-YCR8',
                    'imgshown': false
                },
                {
                    'id': 5,
                    'url': 'https://i.picsum.photos/id/147/1280/720.jpg?hmac=5M49-Xv7F5Tl7zr5UiaMq7kWkyf62etiFy6NrocT4ko',
                    'imgshown': false
                },
                {
                    'id': 6,
                    'url': 'https://i.picsum.photos/id/862/1280/720.jpg?hmac=tI-hXGre-jYKAxcBjjmLg3eRuZG6ZeT8fVWaHiOEAvQ',
                    'imgshown': false
                }
            ],
            counter: 1
        },
        methods: {
            previmg: function () {
                this.counter--;
                if (this.counter < 1) {
                    this.counter = this.imgs.length;
                    this.imgs[0].imgshown = false;
                    this.imgs[this.counter - 1].imgshown = true;
                }
                else {
                    this.imgs[this.counter].imgshown = false;
                    this.imgs[this.counter - 1].imgshown = true;
                }
            },
            nextimg: function () {
                this.counter++;
                if (this.counter > this.imgs.length) {
                    this.counter = 1;
                    this.imgs[this.imgs.length - 1].imgshown = false;
                    this.imgs[0].imgshown = true;
                }
                else {
                    this.imgs[this.counter-2].imgshown = false;
                    this.imgs[this.counter-1].imgshown = true;
                }
            },
            timeint: function onMounted(){
                setInterval(() =>{
                    this.nextimg()
                }, 5000);
            }
        }
    });