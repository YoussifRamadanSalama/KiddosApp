<template>
  <AppHeader />
  <router-view />
</template>

<script>
// import
import AppHeader from "./components/AppHeader.vue";
export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss" scoped>
  *{
    font-family: 'Advent Pro', sans-serif;
  }
</style>