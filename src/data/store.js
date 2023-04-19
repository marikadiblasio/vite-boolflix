//
//GET ----> per singolo film /movie/{movie_id}
//GET /movie/{movie_id}
//GET /search/tv
//https://image.tmdb.org/t/p/ base url img
import { reactive } from "vue";
export const store = reactive({
    baseUrl: 'https:api.themoviedb.org/3/',
    endpoints:{
        endMovie: 'search/movie',
        endTv: ''
    },
    search: {
        //options (apykey - fissa; query (dall'input); offset e num (0, 20?));
        api_key: 'f4f73f1cccb8955e7c99926b717eec36',
        query: '',
        offset: 0,
        num: 20
    },
    results: Object
})
