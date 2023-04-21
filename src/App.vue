<template>
  <div>
    <HeaderComponent @doSearch="getData" />
    <!-- <div class="text-white m-3" v-if="!store.search.query">Effettua una ricerca</div>
    <div v-else>-->
      <CardList v-for="item in items" :title="item.title" :type="item.type"/> 
      <!-- <tvList /> -->
    <!-- </div> -->
  </div>
</template>

<script>
import { store } from './data/store';
import axios from 'axios';
 import HeaderComponent from './components/HeaderComponent.vue';
 import CardList from './components/CardList.vue';
// import tvList from './components/tvList.vue';
export default {
  name: 'App',
  data() {
    return {
      store,
      items:[
        {
          title: 'Movies',
          type: 'movie'
        },
        {
          title: 'TV-Series',
          type: 'tv',
        }
      ]
    }
  },
   components: {
     HeaderComponent,
     CardList,
  //   tvList
   },
  methods: {
    getItems(entity) {
      this.store[entity].noRes = false;
      this.store[entity].errorMessage='';
      this.store[entity].loading= false;
      let option = {};
      let params = store.search;
      for (let key in store.search) {
        if (store.search[key]) {
          params.key = store.search[key];
        }
      }
      if (Object.keys(params).length > 0) {
        option.params = params;
      }
      let Url = store.baseUrl + store[entity].endpoint;
      axios.get(Url, option).then((res) => {
        store[entity].results = res.data.results;
        if (res.data.results.length === 0) this.store[entity].noRes = true;
        console.log(store[entity].results);
      }).catch((error) => {
        store[entity].errorMessage = error.message; 
      }).finally(()=> this.store[entity].loading = false);
    },
    getData(){
      this.getItems('movie');
      this.getItems('tv');
    }
  },
  mounted() {
    this.getData();
    console.log(store.movie);
  }
}
</script>
  
<style lang="scss" scoped>
@use './assets/partials/variables';
  .alert{
    color: #5e8669;
    border-color: #5e8669; 
    background-color: #c6e8cf;
  }
</style>