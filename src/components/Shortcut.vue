<style scope>
.base-fun {
  width: 100%;
  height: auto;
  background-color: #eff2f5;
  color: #8c8c8c;
  text-align: left;
  padding-bottom: 20px;
}

.base-fun .basefun-li {
  display: inline-block;
  background-color: #fff;
  width: 90%;
  height: auto;
  margin-top: 30px;
  border-radius: 3px;
}

.base-fun .basefun-li .basefun-word {
    display: inline-block;
  font-size: 15px;
  margin: 20px 0 0 20px;
}

.base-fun .basefun-li .basefun-num {
  font-size: 30px;
  color: #000;
  margin: 20px 0 10px 20px;
}

.iconcut {
  color: #0099dc;
  float: right;
  margin: 20px ;
}

.icon-jshuaxin {
  margin: 3px 3px;
}
.bfelm {
    width: 90%;
    margin: 0px auto;
    padding-left: 30px;
}
</style>


<template>
  <div class="base-fun">
    <el-row :gutter="0" class="row-bg bfelm" type="flex" justify="center">
      <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" class="shortleft">
        <div class="basefun-li">
          <span class="basefun-word">文章</span>
          <router-link to="/EditArticle">
            <i class="iconcut iconfont icon-jjiahao"></i>
          </router-link>
          <div class="basefun-num articleCount">{{articlesnum}}</div>
        </div>
      </el-col>
      <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" class="shortleft">
        <div class="basefun-li">
          <span class="basefun-word">友情链接</span>
          <router-link to="/Friend">
            <i class="iconcut iconfont icon-jlianjie2"></i>
          </router-link>
          <div class="basefun-num linkCount">{{friendsnum}}</div>
        </div>
      </el-col>
      <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" class="shortright">
        <div class="basefun-li">
          <span class="basefun-word">评论</span>
          <router-link to="/Comment">
            <i class="iconcut iconfont icon-jcomment"></i>
          </router-link>
          <div class="basefun-num commentCount">{{commentsnum}}</div>
        </div>
      </el-col>
      <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" class="shortright">
        <div class="basefun-li">
          <span class="basefun-word">访问量</span>
          <i class="iconcut iconfont icon-jshuju"></i>
          <div class="basefun-num visitedCount">{{visitednum}}</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import adminApi from "../api/admin";

export default {
  name: "Shortcut",
  data() {
    return {
      articlesnum: 0,
      friendsnum: 0,
      commentsnum: 0,
      visitednum: 0
    };
  },

  //自动调用
  created() {
    this.getBloginfo();
  },
  methods: {
    getBloginfo() {
      adminApi.blogInfo().then(blogCount => {
        // console.log(blogCount.data);
        this.articlesnum = blogCount.data.data.articleCount;
        this.friendsnum = blogCount.data.data.linkCount;
        this.commentsnum = blogCount.data.data.commentCount;
        this.visitednum = blogCount.data.data.visitedCount;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
