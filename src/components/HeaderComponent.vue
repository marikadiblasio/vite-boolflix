<template>
    <header class="d-flex container-fluid align-items-center justify-content-between">
        <div class="d-flex align-items-center">
            <img class="logo me-3" src="/images/square-logo.svg" alt="">
            <h1 class="text-uppercase mt-3 w-20">Boolfix</h1>
        </div>
        <div class="input-group flex-grow-0 mt-3 w-20">
            <input @keyup.enter="$emit('doSearch')"  type="text" class="form-control" placeholder="Search" name="searchString" v-model="store.search.query">
            <button @click.prevent="$emit('doSearch')" class="btn btn-outline" type="button">Button</button>
        </div>
    </header>
</template>

<script>
    // import axios from 'axios';
    import { store } from '../data/store';
    export default {
        name: 'HeaderComponent',
        data(){
            return{
                store
            }
         },
        // methods: {
        //      getData(){
        //          let option = {};
        //          let params = store.search;
        //          for (let key in store.search){
        //              if(store.search[key]){
        //                 params.key = store.search[key];
        //              }
        //         }
        //         if(Object.keys(params).length>0){
        //             option.params= params;
        //         }
        //         let movieUrl = store.baseUrl + store.endpoints.endMovie;
        //         axios.get(movieUrl, option).then((res)=>{
        //             store.results.movieRes = res.data.results;
        //             console.log(store.results.movieRes[3].title)
        //             for (let i of store.results.movieRes){
        //             }
        //             // console.log(store.results.movieRes)

        //         })//catch((error)=>{
        //     //     //     store.errorMessage=error.response.status_message;
        //     //     // })
        //      let tvUrl = store.baseUrl + store.endpoints.endTv;
        //      axios.get(tvUrl, option).then((res)=>{
        //         console.log(res.data.results)
        //         store.results.tvRes = res.data.results;
        //         for (let i of store.results.tvRes) {
        //                 i.original_title = i.original_name;
        //                 i.title = i.name;
        //             }
        //             console.log(store.results.tvRes)
                   
        //      })//.catch((error)=>{
        //     //     //     store.errorMessage=error.response.status_message;
        //     //     //     console.log(error.response.status_message)
        //     //     // })
        //      }
        // },
        mounted(){
           // console.log(store.search)
        }
    }

</script>

<style lang="scss" scoped>
    @use '../assets/partials/variables' as *;
    header{
        color: $my-tertiary;
    }
    .logo{
        width: 50px;
        height: 50px;
    }
    .w-20 {
        width: 20%;
    }
    .btn {
        border-color: $my-tertiary;
        color: $my-tertiary;
    }
</style>