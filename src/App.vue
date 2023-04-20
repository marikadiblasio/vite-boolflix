<template>
  <div>
    <HeaderComponent/>
    <!-- <div >Effettua una ricerca</div> -->
    <CardList />
    <h3 class="mt-5 pt-5">Serie Tv</h3>
    <!-- <CardList /> -->
  </div>
</template>

<script>
  //  import { store } from './data/store';
  import HeaderComponent from './components/HeaderComponent.vue';
  import CardList from './components/CardList.vue';
  export default {
    name:'App',
    data(){
      return{
        // store
      }
    },
    components: {
            HeaderComponent,
            CardList
    },
    mounted(){
      // console.log(store.results)
    }
  }
</script>

<style lang="scss" scoped>

</style>