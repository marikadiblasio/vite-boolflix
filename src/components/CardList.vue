<template>
    <div>
        <h2 class='my-5 container-fluid'>{{title}}</h2>
        <div class="container position-relative">
            <i @click="activeIndex--" class="fa-solid fa-angle-left"></i>
            <i @click="goNext"  class="fa-solid fa-angle-right"></i>
            <div class="row gy-5">
                <CardComponent v-for="(item, index) in store[type].results" :activeIndex="activeIndex" :item="item" :index="index" :key="index" />
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
                store,
                activeIndex: 0

            }
        },
        methods: {
            goNext(){
                // console.log(this.store[this.type].results);
                if (this.activeIndex === this.store[this.type].results.length - 1) {
                  this.activeIndex = 0;
                } else {
                    this.activeIndex++;
                }
                // console.log(this.activeIndex);
            },
            goBack(){
                if (this.activeIndex === 0) {
                    this.activeIndex = this.store[this.type].results.length - 1; 
                } else {
                    this.activeIndex--;
                } 
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
        color: $my-tertiary;
        font-size: 5rem;
            }
            .fa-angle-right{
        position: absolute;
        right: -8%;
        top: 40%;
        color: $my-tertiary;
        font-size: 5rem;
            }
</style>