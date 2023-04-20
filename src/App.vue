<template>
  <div>
    <HeaderComponent @doSearch="getData"/>
    <!-- <div >Effettua una ricerca</div> -->
    <CardList />
    <h3 class="mt-5 pt-5">Serie Tv</h3>
    <!-- <CardList /> -->
  </div>
</template>

<script>
   import { store } from './data/store';
   import axios from 'axios';
  import HeaderComponent from './components/HeaderComponent.vue';
  import CardList from './components/CardList.vue';
  export default {
    name:'App',
    data(){
      return{
         store,
      }
    },
    components: {
            HeaderComponent,
            CardList
    },
    methods:{
      getData(){
        let option = {};
        let params = store.search;
        for (let key in store.search){
            if(store.search[key]){
              params.key = store.search[key];
            }
        }
        if(Object.keys(params).length>0){
            option.params= params;
        }
        let movieUrl = store.baseUrl + store.endpoints.endMovie;
        axios.get(movieUrl, option).then((res)=>{
          store.results.movieRes = res.data.results;
          console.log(store.results.movieRes[3].title)
        })//catch((error)=>{
            //     //     store.errorMessage=error.response.status_message;
            //     // })
        let tvUrl = store.baseUrl + store.endpoints.endTv;
        axios.get(tvUrl, option).then((res)=>{
          store.results.tvRes = res.data.results;
          for (let i of store.results.tvRes) {
                   i.original_title = i.original_name;
                   i.title = i.name;
          }        
        })//.catch((error)=>{
            //     //     store.errorMessage=error.response.status_message;
            //     //     console.log(error.response.status_message)
            //     // })
      }
    },
    mounted(){
      // console.log(store.results)
    }
  }
</script>

<style lang="scss" scoped>

</style>