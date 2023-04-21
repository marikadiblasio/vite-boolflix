<template>
    <div>
        <h2 class='my-5 container-fluid'>{{title}}</h2>
        <div class="container">
            <div class="row gy-5">
                <CardComponent v-for="(item, index) in store[type].results" :item="item" :key="index" />
            </div>
        <div class="alert alert-danger" v-if="store[type].errorMessage"> {{ store[type].errorMessage }}</div>
        <div class="alert alert-success" v-if="store[type].loading"> Loading...</div>
        <div class="alert alert-danger" v-if="store[type].noRes">La tua ricerca non ha prodotto risultati</div>
        </div>
    </div>
</template>

<script>
    import {store} from '../data/store';
    import CardComponent from './CardComponent.vue';
    export default {
        name: 'CardList',
        props: ['title', 'type'],
        components: {
            CardComponent
        },
        data(){
            return{
                store
            }
        },
        mounted(){
        }
    }
</script>

<style lang="scss" scoped>
    @use '../assets/partials/variables' as *;

    h2{
        color: $my-secondary;
    }
     .alert{
    color: #5e8669;
    border-color: #5e8669; 
    background-color: #c6e8cf;
  }
</style>