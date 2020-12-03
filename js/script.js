var app = new Vue({
    el: '#root',
    data: {
        // https://api.themoviedb.org/3/search/movie/?api_key=aa17a945ada5e90bc96db53bad6edbc1&query=
        apiFilm: 'https://api.themoviedb.org/3/search/movie/?api_key=',
        key: 'aa17a945ada5e90bc96db53bad6edbc1',
        inputCerca: '',
        arrayFilm: [],
        arrayTv: [],
    },
    mounted: function() {

    },
    methods: {
        filtra() {
            const chiamata = axios.get(this.apiFilm + this.key + '&language=it_IT&query=' + this.inputCerca);
            chiamata.then(risposta => {
                var linkQuery = risposta.data.results;
                this.arrayFilm = linkQuery;
                this.inputCerca = '';
            });

            console.log(this.arrayFilm);
        }
    }
})