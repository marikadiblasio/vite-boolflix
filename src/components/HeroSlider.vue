<template>
    <div>
        <img :src="store.currentCard" alt="">
        <!-- <img src="/images/unknown.png" alt=""> -->
    </div>
</template>
<script>
import { store } from '../data/store';
    export default {
        name: 'HeroComponent'
    }
</script>

<style lang="scss" scoped>
    div{
        width:100%;
        height: 30rem;
        object-fit: cover;
    }
    img{
        width: 100%;
        height: 100%;
    }
</style>