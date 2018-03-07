<template>
  <div id="app">
    <myheader></myheader>
    <router-view></router-view>
    <navbar></navbar>
  </div>
</template>
<script>
import Myheader from "@/components/header.vue";
import Navbar from "@/components/navbar.vue";

export default {
  components: {
    Myheader,
    Navbar
  }
};
</script>

<style>

</style>
