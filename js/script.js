var app = new Vue({
    el: '#root',
    data: {
        // https://api.themoviedb.org/3/search/movie/?api_key=aa17a945ada5e90bc96db53bad6edbc1&query=
        apiFilm: 'https://api.themoviedb.org/3/search/movie/?api_key=',
        apiTv: 'https://api.themoviedb.org/3/search/tv?api_key=',
        key: 'aa17a945ada5e90bc96db53bad6edbc1',
        inputCerca: '',
        arrayFilmLocal: [],
        arrayTvLocal: [],
        stellaP: '<i class="fas fa-star"></i>',
        stellaV: '<i class="far fa-star"></i>'
    },
    mounted: function() {

    },
    methods: {
        // filtra() {
        //     const chiamataFilm = axios.get(this.apiFilm + this.key + '&language=it_IT&query=' + this.inputCerca);
        //     chiamataFilm.then(risposta => {
        //         var arrayFilmApi = risposta.data.results;

        //         var filmModificati = arrayFilmApi.map((item) => {
        //             console.log('singolo film', item);
        //             item.numeroStars = Math.round(item.vote_average / 2);
        //             item.bandiera = 'img/' + item.original_language + '.svg';
                    
        //             return item;
        //         });
        //             this.arrayFilmLocal = filmModificati;
        //             this.inputCerca = '';
        //     });
        // },
        filtra() {
            const chiamataTv = axios.get(this.apiTv + this.key + '&language=it_IT&query=' + this.inputCerca);
            chiamataTv.then(risposta => {
                var arrayTvApi = risposta.data.results;

                var tvModificati = arrayTvApi.map((item) => {
                    item.numeroStars = Math.round(item.vote_average / 2);
                    item.bandiera = 'img/' + item.original_language + '.svg';

                    return item;
                });
                    this.arrayTvLocal = tvModificati;
                    this.inputCerca = '';
            });
        },
        setAltImg(e) { 
            e.target.src = "img/ar.svg"
        } 
    }
})