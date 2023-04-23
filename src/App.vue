<template>
  <div>
    <HeaderComponent @doSearch="getData" />
    <HeroComponent />
    <!-- <div class="text-white m-3" v-if="!store.search.query">Effettua una ricerca</div> -->
    <!-- <div v-else> -->
    <CardList v-for="item in items" :title="item.title" :type="item.type" />
    <!-- </div> -->
  </div>
</template>

<script>
import { store } from './data/store';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import CardList from './components/CardList.vue';
import HeroComponent from './components/HeroComponent.vue';
export default {
  name: 'App',
  data() {
    return {
      store,
      items: [
        {
          title: 'Most Popular Movies',
          type: 'topMovie'
        },
        {
          title: 'Most Popular Tv-Shows',
          type: 'topTv'
        },
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
    HeroComponent
  },
  methods: {
    getItems(entity) {
      this.store[entity].noRes = false;
      this.store[entity].errorMessage = '';
      this.store[entity].loading = true;
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
      if (entity === 'topMovie' || entity === 'topTv') delete option.params.query;
      let Url = store.baseUrl + store[entity].endpoint;
      axios.get(Url, option).then((res) => {
        store[entity].results = res.data.results;
        if (store[entity].results.length === 0) {
          this.store[entity].noRes = true;
        }
      }).catch((error) => {
        store[entity].errorMessage = error.message;
      }).finally(() => this.store[entity].loading = false);
    },
    getData() {
      this.getItems('movie');
      this.getItems('tv');
    },
    getTop() {
      this.getItems('topMovie');
      this.getItems('topTv');
    },
    checkShow() {
      store.md = window.matchMedia("(min-width: 768px)").matches;
      store.lg = window.matchMedia("(min-width: 992px)").matches;
      if (store.md && !store.lg) store.numShow = 1;
      else if (store.md && store.lg) store.numShow = 2;
      else store.numShow = 0;
    }
  },
  created() {
    this.getTop();
    window.addEventListener('resize', this.checkShow);
  }
}
</script>
  
<style lang="scss" scoped>
@use './assets/partials/variables';
</style>