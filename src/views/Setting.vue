<style scope>
  .Setting {
    background-color: #eff2f5;
  }
</style>
<template>
  <div class="Setting">
    <Navigation />



    <Bottom />
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
import Bottom from "../components/Bottom";

export default {
  name: 'Setting',
  components: {
    Navigation,
    Bottom,
  }
}
</script>

