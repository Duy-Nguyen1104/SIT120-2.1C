const app = Vue.createApp({
    data() {
        return {
            surprise: true,
            showMessage: true,
            books: [
                { title: 'The Catcher in the Rye', author: "J.D.Sallinger"},
                { title: 'Norweigian Wood', author: "Haruki Murakami"},
                { title: 'Fahrenheit 451', author: "Ray Bardbury"}, 
            ],
            inputValue: '',
        };
    },
    methods: {
        toggleSurprise() {
            this.surprise = !this.surprise;
        }
    }
});

app.mount('#app');