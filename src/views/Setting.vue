<style scope>
.Setting {
  background-color: #eff2f5;
  min-width: 820px;
}
</style>
<template>
  <div class="Setting">
    <el-container>
      <el-header>
        <Navigation />
      </el-header>
      <el-main>Main</el-main>
      <el-footer>
        <Bottom />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
import Bottom from "../components/Bottom";

export default {
  name: "Setting",
  components: {
    Navigation,
    Bottom
  }
};
</script>

