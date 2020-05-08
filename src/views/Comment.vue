<style scope>
.Comment {
  background-color: #eff2f5;
  min-width: 820px;
}

.combody {
  min-height: 78vh;
}

.arthead {
  width: 100%;
  height: 35px;
  background-color: #fff;
}

.arthead .artspan {
  padding: 10px 20px;
}
</style>

<template>
  <div class="Comment">
    <el-container>
      <el-header>
        <Navigation />
      </el-header>
      <el-main>
        <div class="arthead">
          <el-breadcrumb separator-class="el-icon-arrow-right" class="artspan">
            <el-breadcrumb-item :to="{ path: '/HomePage' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>评论</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="combody">
          <el-row :gutter="10">
            <el-col :xs="6" :sm="6" :md="4" :lg="6" :xl="1">
              <div class="grid-content bg-purple">1</div>
            </el-col>
            <el-col :xs="6" :sm="6" :md="4" :lg="6" :xl="11">
              <div class="grid-content bg-purple-light">2</div>
            </el-col>
            <el-col :xs="6" :sm="6" :md="4" :lg="6" :xl="11">
              <div class="grid-content bg-purple">3</div>
            </el-col>
            <el-col :xs="6" :sm="6" :md="4" :lg="6" :xl="1">
              <div class="grid-content bg-purple-light">4</div>
            </el-col>
          </el-row>
        </div>
      </el-main>
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
  name: "Comment",
  components: {
    Navigation,
    Bottom
  }
};
</script>

