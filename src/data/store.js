//https://image.tmdb.org/t/p/ base url img
// import { axios } from 'axios';

import { reactive } from "vue";
export const store = reactive({
    baseUrl: 'https:api.themoviedb.org/3/',
    errorMessage: '',
    endpoints:{
        endMovie: 'search/movie',
        endTv: 'search/tv'
    },
    search: {
        api_key: 'f4f73f1cccb8955e7c99926b717eec36',
        query: '',
        offset: 0,
        num: 20
    },
    results: {
        movieRes: [],
        tvRes: []
    },
})
