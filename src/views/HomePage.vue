<template>
  <div class="Nav">
    <el-container>
      <el-header>
        <Navigation />
      </el-header>
      <el-main>
        <div class="homehead">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <span>
              <el-breadcrumb-item>首页</el-breadcrumb-item>
            </span>
          </el-breadcrumb>
        </div>
        <Shortcut />
        <Dynamic />
      </el-main>
      <el-footer>
        <Bottom />
      </el-footer>
    </el-container>

    <router-view />
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
import Shortcut from "../components/Shortcut";
import Dynamic from "../components/Dynamic";
import Bottom from "../components/Bottom";

export default {
  components: {
    Navigation,
    Shortcut,
    Dynamic,
    Bottom
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  list-style: none;
}

* a {
  text-decoration: none;
  color: #0099dc;
}
.Nav {
    background-color: #eff2f5;
    min-width: 820px;
}
.homehead {
  width: 100%;
  height: 35px;
  background-color: #fff;
}

.homehead span {
  margin: 10px 20px;
}
</style>
