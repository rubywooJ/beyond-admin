<style scope>
  
</style>

<template>
  <div class="base">
    <Navigation />



    <Bottom />
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
import Bottom from "../components/Bottom";

export default {
  name: 'base',
  components: {
    Navigation,
    Bottom,
  }
}
</script>

