<template>
    <div v-if="store[type].results.length>0">
        <h2 class='my-5 container-fluid'>{{ title }}</h2>
        <div class="container position-relative">
            <i @click="activeIndex--" class="fa-solid fa-angle-left"></i>
            <i @click="goNext" class="fa-solid fa-angle-right"></i>
            <div class="d-flex justify-content-center align-items-center gy-5">
                <CardComponent v-for="(item, index) in store[type].results" :activeIndex="activeIndex" :item="item"
                    :index="index" :key="index" />
            </div>
            <div class="alert alert-danger" v-if="store[type].errorMessage"> {{ store[type].errorMessage }}</div>
            <div class="alert alert-success" v-if="store[type].loading"> Loading...</div>
            <div class="alert alert-danger" v-if="store[type].noRes">La tua ricerca non ha prodotto risultati</div>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store';
import CardComponent from './CardComponent.vue';
export default {
    name: 'CardList',
    props: ['title', 'type'],
    components: {
        CardComponent
    },
    data() {
        return {
            store,
            activeIndex: store.numShow
        }
    },
    methods: {
        goNext() {
            // console.log(this.store[this.type].results);
            if (this.activeIndex === this.store[this.type].results.length - 1) {
                this.activeIndex = 0;
            } else {
                this.activeIndex++;
            }
            // console.log(this.activeIndex);
        },
        goBack() {
            if (this.activeIndex === 0) {
                this.activeIndex = this.store[this.type].results.length - 1;
            } else {
                this.activeIndex--;
            }
        }

    },
    mounted() {
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

h2 {
    color: $my-secondary;
}

.fa-angle-left {
    position: absolute;
    left: 1%;
    height: 100%;
    color: $my-tertiary;
    font-size: 3rem;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
}

.fa-angle-right {
    position: absolute;
    height: 100%;
    right: 1%;
    background-color: rgba(0, 0, 0, 0.5);
    color: $my-tertiary;
    font-size: 3rem;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>