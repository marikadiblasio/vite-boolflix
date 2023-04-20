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
        movieRes: [], //non mi viene un iterabile provare con maps?
        tvRes: []
    },
    // getData(){
    //     let option = {};
    //     let params = this.search;
    //     for (let key in this.search){
    //         if(this.search[key]){
    //             params.key = this.search[key];
    //         }
    //     }
    //     if(Object.keys(params).length>0){
    //         option.params= params;
    //     }
    //     let movieUrl = this.baseUrl + this.endpoints.endMovie;
    //     axios.get(movieUrl, option).then((res)=>{
    //         console.log(res.data.results);
    //         this.results = res.data.results;
    //     })//catch((error)=>{
    //     //     this.errorMessage=error.response.status_message;
    //     // })
    // }
})
