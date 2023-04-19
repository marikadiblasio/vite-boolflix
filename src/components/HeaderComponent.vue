<template>
    <header class="d-flex justify-content-between">
        <h1 class="text-uppercase m-3 w-20">Boolfix</h1>
        <div class="input-group m-3 w-20">
            <input type="text" class="form-control" placeholder="Search" name="searchString" v-model="store.search.query">
            <button @click.prevent="getData" class="btn btn-outline-secondary" type="button">Button</button>
        </div>
    </header>
</template>

<script>
    import axios from 'axios';
    import { store } from '../data/store';
    export default {
        name: 'HeaderComponent',
        data(){
            return{
                store
            }
        },
        methods: {
            getData(){
                let option = {};
                let params = store.search;
                for (let key in store.search){
                    if(store.search[key]){
                        params.key = store.search[key];
                    }
                }
                if(Object.keys(params).length>0){
                    option.params= params;
                }
                let url = store.baseUrl + store.endpoints.endMovie;
                axios.get(url, option).then((res)=>{
                    console.log(res.data.results);
                    store.results = res.data.results;
                    console.log(store.results);
                })
            }
        },
        mounted(){
            console.log(store.search)
        }
    }
</script>

<style lang="scss" scoped>
    //@use '../assets/partials/variables' as *;

    .w-20 {
        width: 20%;
    }
    // .button {
    //     border-color: $my-tertiary;
    // }
</style>