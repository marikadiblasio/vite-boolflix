<template>
  <div>
    <HeaderComponent @doSearch="getData" />
    <div class="text-white m-3" v-if="!store.search.query">Effettua una ricerca</div>
    <div v-else>
      <CardList />
      <tvList />
    </div>
    
  </div>
</template>

<script>
import { store } from './data/store';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import CardList from './components/CardList.vue';
import tvList from './components/tvList.vue';
export default {
  name: 'App',
  data() {
    return {
      store,
    }
  },
  components: {
    HeaderComponent,
    CardList,
    tvList
  },
  methods: {
    getData() {
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
      let movieUrl = store.baseUrl + store.endpoints.endMovie;
      axios.get(movieUrl, option).then((res) => {
        store.results.movieRes = res.data.results;
        console.log(store.results.movieRes);

      }).catch((error) => {
        store.errorMessage = error.message;
        
      })
      let tvUrl = store.baseUrl + store.endpoints.endTv;
      axios.get(tvUrl, option).then((res) => {
        store.results.tvRes = res.data.results;
        for (let i of store.results.tvRes) {
          i.original_title = i.original_name;
          i.title = i.name;
        }
      }).catch((error) => {
        store.errorMessage = error.message;
        console.log(error.message);
      })
    }
  },
  mounted() {
    // console.log(store.results)
  }
}
</script>

<style lang="scss" scoped></style>