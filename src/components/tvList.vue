<template>
    <div>
        <div class="container">
            <h2 class='text-white py-5'>Serie Tv</h2>
            <div class="row gy-5">
                <CardComponent v-for="info in store.results.movieRes"  :image-path="info.poster_path"
                :title="info.title" :original-title="info.original_title" :vote="info.vote_average" :language="info.original_language" 
                :overview="info.overview"/>
            </div>
            <div class="alert alert-danger" v-if="store.errorMessage"> {{ store.errorMessage }}</div>
            <div class="alert alert-success" v-if="store.loading"> {{ store.loading }}</div>
        </div>
    </div>
</template>
<script>
    import {store} from '../data/store';
    import CardComponent from './CardComponent.vue';
    export default {
        name: 'CardList',
        // props: ['list'],
        components: {
            CardComponent
        },
        data(){
            return{
                store,
                baseImgUrl: 'https:image.tmdb.org/t/p/w342'
            }
        },
        mounted(){
            // console.log(store.results.tvRes);
        }
    }
</script>

<style lang="scss" scoped>

</style>