<template>
  <div>
    <HeaderComponent />
    <CardList />
  </div>
</template>

<script>
  import HeaderComponent from './components/HeaderComponent.vue';
  import CardList from './components/CardList.vue';
  export default {
    name:'App',
    components: {
            HeaderComponent,
            CardList
        }
  }
</script>

<style lang="scss" scoped>

</style>