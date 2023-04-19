<template>
    <div>
        <p>questo è cardlist</p>
        <div class="card" v-for="cip in store.results">
            <p>{{ cip.original_title}}</p>
            <p>{{ cip.title}}</p>
            <p>{{ cip.original_language }}</p>
            <p>{{ cip.vote_average }}</p>
        </div>
    </div>
</template>

<script>
    import {store} from '../data/store'
    export default {
        name: 'CardList',
        components: {
        },
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>