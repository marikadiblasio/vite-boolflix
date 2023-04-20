<template>
    <div>
        <div class="container-fluid">
            <h2 class='text-white'>Movies</h2>
            <div class="row g-5">
                <CardComponent v-for="info in store.results.movieRes"  :image-path="info.poster_path"
                :title="info.title" :original-title="info.original_title" :vote="info.vote_average" :language="info.original_language" 
                :overview="info.overview"/>
                <div v-if="store.errorMessage">{{ store.errorMessage }}</div>
            </div>
            <!-- v-for="info in store.results.movieRes.filter((movie) => movie.original_language==='es')"  :image="baseImgUrl+info.poster_path"-->
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
        }
    }
</script>

<style lang="scss" scoped>

</style>