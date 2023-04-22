<template>
    <div>
        <h2 class='my-5 container-fluid'>{{title}}</h2>
        <div class="container position-relative">
            <div class="row flex-nowrap gy-5">
                <i @click="goNext" class="fa-solid fa-angle-left"></i>
                <CardComponent v-for="(item, index) in store[type].results" :item="item" :key="index" />
                <i class="fa-solid fa-angle-right"></i>
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
        methods: {
            goNext(){

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
    .fa-angle-left{
        position: absolute;
        left: -5%;
        top: 40%;
        color: red;
        font-size: 5rem;
            }
</style>