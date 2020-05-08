<style scope>
.navigation {
  width: 100%;
  height: 70px;
  background: url("../assets/img/navigationbackground.jpg");
  color: #a6aeb4;
  font-weight: 500;
  font-size: 18px;
}

.navlittle {
  display: inline-block;
  text-align: center;
  /* justify-content: center; */
  cursor: pointer;
}
.navlittle span {
  display: inline-block;
  margin: 17px 0 0 0;
}

.navigation a {
  text-decoration: none;
  color: #a6aeb4;
}

.navigation a:hover {
  color: #f2f2f3;
}

.navigation .navlittle:hover {
  color: #f2f2f3;
}

.navigation .navlittle li:hover {
  color: #f2f2f3;
}

.navigation .navlittle .logo {
  font-size: 27px;
  margin-top: 15px;
}

.navigation .navlittle .I {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-top: 7px;
}

.navigation .navlittle .p-items {
  display: none;
  width: 110px;
  height: auto;
  background-color: #020a1a;
  border-radius: 3px;
  color: #dbdbdb;
  position: absolute;
  font-size: 16px;
  z-index: 100;
}

.navlittle li {
  float: left;
  padding: 8px 0px 8px 15px;
}

.articles:hover > .p-items {
  display: block;
}

.label:hover > .p-items {
  display: block;
}

.setting:hover > .p-items {
  display: block;
}

.friends:hover > .p-items {
  display: block;
}

.setting:hover > .p-items {
  display: block;
}

.my:hover > .p-items {
  display: block;
}
.navelm {
  width: 100%;
}
@media screen and (max-width: 960px) {
  .logo-col {
    display: none;
  }
}
</style>


<template>
  <div class="navigation">
    <el-row :gutter="0" type="flex" class="navelm" justify="center">
      <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2" class="logo-col">
        <div class="navlittle">
          <router-link to="/HomePage">
            <span class="logo">Beyond</span>
          </router-link>
        </div>
      </el-col>
      <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
        <div class="navlittle">
          <router-link to="/HomePage">
            <i class="iconfont icon-jdaohang"></i>
            <span>首页</span>
          </router-link>
        </div>
      </el-col>
      <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
        <div class="navlittle">
          <div class="articles">
            <i class="iconfont icon-jshouhui"></i>
            <span>文章</span>
            <ul class="p-items">
              <router-link to="/Article">
                <li v-on:click="getArticles">所有文章</li>
              </router-link>
              <router-link to="/editArticle">
                <li>写文章</li>
              </router-link>
            </ul>
          </div>
        </div>
      </el-col>
      <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
        <div class="navlittle">
          <div class="label">
            <router-link to="/Tag">
              <i class="iconfont icon-jbiaoqian"></i>
              <span>标签</span>
            </router-link>
          </div>
        </div>
      </el-col>
      <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
        <div class="navlittle">
          <div class="accessory">
            <router-link to="/Accessory">
              <i class="iconfont icon-jtupian"></i>
              <span>附件</span>
            </router-link>
          </div>
        </div>
      </el-col>
      <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
        <div class="navlittle">
          <div class="comment">
            <router-link to="/Comment">
              <i class="iconfont icon-jxiaoxi3"></i>
              <span>评论</span>
            </router-link>
          </div>
        </div>
      </el-col>
      <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
        <div class="navlittle friends">
          <div class="friends">
            <i class="iconfont icon-jfriend"></i>
            <span>好友</span>
            <ul class="p-items">
              <router-link to="/Friend">
                <li>友情链接</li>
              </router-link>
            </ul>
          </div>
        </div>
      </el-col>
      <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
        <div class="navlittle">
          <div class="setting">
            <i class="iconfont icon-jshezhi1"></i>
            <span class="set">设置</span>
            <ul class="p-items">
              <li class="restart" v-on:click="postRestart">重启应用</li>
              <li class="shutdown" v-on:click="postShutdown">关闭应用</li>
              <li>关于</li>
            </ul>
          </div>
        </div>
      </el-col>
      <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
        <div class="navlittle">
          <div class="my">
            <router-link to="/Personal">
              <img
                v-on:click="getPersonal"
                class="I my-information"
                src="../assets/img/20200403124618.jpg"
                alt
              />
            </router-link>
            <ul class="p-items">
              <router-link to="/Personal">
                <li v-on:click="getPersonal">用户资料</li>
              </router-link>
              <li class="exit" v-on:click="postLogin">退出登录</li>
            </ul>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import adminApi from "../api/admin";
import articleApi from "../api/article";

export default {
  data() {
    return {};
  },
  methods: {
    getPersonal() {
      adminApi.userInfo().then(response => {
        console.log(response.data);
      });
    },
    getArticles() {
      articleApi
        .getAll(1, 5)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          alert("文章获取失败！");
        });
    },
    postLogin() {
      this.$confirm("即将退出登录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          adminApi.logout().then(response => {
            this.$router.push("/Login");
          });
          //TODO 退出登录 清空cookie localStorage
        })
        .catch(() => {});
    },
    postRestart() {
      this.$alert("暂不开放", "提示", {
        confirmButtonText: "确定"
      });
      // this.$confirm('即将重启, 是否继续?', '提示', {
      //     confirmButtonText: '确定',
      //     cancelButtonText: '取消',
      //     type: 'warning'
      // }).then(() => {
      //     adminApi.refreshToken().then(response => {
      //         this.$router.push('/Login');
      //     })
      // }).catch(()=>{});
    },
    postShutdown() {
      this.$alert("暂不开放", "提示", {
        confirmButtonText: "确定"
      });
      // this.$confirm('即将关闭, 是否继续?', '提示', {
      //     confirmButtonText: '确定',
      //     cancelButtonText: '取消',
      //     type: 'warning'
      // }).then(() => {
      //     adminApi.shutdownApp()
      //         .then(response => {
      //             this.$router.push('/Login');
      //         })
      // }).catch(()=>{});
    }
  }
};
</script>

