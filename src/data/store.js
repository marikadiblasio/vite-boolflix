import { reactive } from "vue";
export const store = reactive({
    baseUrl: 'https:api.themoviedb.org/3/',
    search: {
        api_key: 'f4f73f1cccb8955e7c99926b717eec36',
        query: ''
    },
    movie: {
        endpoint: 'search/movie',
        results: [],
        noRes: false,
        loading: false,
        errorMessage: '',

    },
    tv: {
        endpoint: 'search/tv',
        results: [],
        noRes: false,
        loading: false,
        errorMessage: '',
    },
    topMovie: {
        endpoint: '/movie/top_rated',
        results: [],
        noRes: false,
        loading: false,
        errorMessage: '',

    },
    topTv: {
        endpoint: '/tv/top_rated',
        results: [],
        noRes: false,
        loading: false,
        errorMessage: '',
    },
})
