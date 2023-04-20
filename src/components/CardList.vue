<template>
    <div>

        <div class="container">
            <h2 class='text-white'>titolo</h2>
            <div class="row g-5">
                <CardComponent v-for="info in store.results.movieRes" :image="baseImgUrl+info.poster_path"
                :title="info.title" :original-title="info.original_title" :vote="info.vote_average" :language="info.original_language" 
                :overview="info.overview"/>
                <div v-if="store.errorMessage">{{ store.errorMessage }}</div>
            </div>

            <!-- <img src="https://image.shutterstock.com/image-vector/recorder-short-film-icon-image-260nw-579908209.jpg" alt=""> -->
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
            console.log(store.results.movieRes)
        }
    }
</script>

<style lang="scss" scoped>

</style>