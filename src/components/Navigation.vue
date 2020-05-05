<template>
  <div class="navigation">
    <div class="navlittle">
      <!-- <router-link to="/test"> -->
      <span class="logo">Beyond</span>
      <!-- </router-link> -->
    </div>
    <div class="navlittle">
      <router-link to="/HomePage">
        <i class="iconfont icon-jdaohang"></i>
          <span>首页</span>
      </router-link>
    </div>
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
    <div class="navlittle">
      <div class="label">
        <i class="iconfont icon-jbiaoqian"></i>
        <router-link to="/Tag">
          <span>标签</span>
        </router-link>
        <ul class="p-items">
          <!-- <router-link to="/Tag">
            <li>全部标签</li>
          </router-link> -->
          <!-- <li>创建标签</li> -->
        </ul>
      </div>
    </div>
    <div class="navlittle">
      <div class="accessory">
        <i class="iconfont icon-jtupian"></i>
        <router-link to="/Accessory">
          <span>附件</span>
        </router-link>
      </div>
    </div>
    <div class="navlittle">
      <div class="comment">
        <i class="iconfont icon-jxiaoxi3"></i>
        <router-link to="/Comment">
          <span>评论</span>
        </router-link>
      </div>
    </div>
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
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getPersonal() {
      this.$axios({
        method: "get",
        url: "/user/info"
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          alert("信息获取失败！");
        });
    },
    getArticles() {
      this.$axios({
        method: "get",
        url: "/articles"
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          alert("文章获取失败！");
        });
    },
    postLogin() {
      this.$axios({
        method: "post",
        url: "/logout",
      })
        .then(response => {
          this.$router.push('/Login');
        })
        .catch(error => {
          alert("退出登录失败！");
        });
    },
    postRestart() {
      this.$axios({
        method: "post",
        url: "/beyond-restart",
      })
        .then(response => {
          this.$router.push('/Login');
        })
        .catch(error => {
          alert("重启失败！");
        });
    },
    postShutdown() {
      this.$axios({
        method: "post",
        url: "/beyond-shutdown",
      })
        .then(response => {
          this.$router.push('/Login');
        })
        .catch(error => {
          alert("关闭应用失败！");
        });
    },
  }
};
</script>

<style scope>
.navigation {
  width: 100%;
  height: 70px;
  background: url("../assets/img/navigationbackground.jpg");
  display: flex;
  justify-content: center;
  align-items: center;
  color: #a6aeb4;
  font-weight: 500;
  font-size: 18px;
  padding: auto 10px;
  /* position: absolute; */
  /* top: 0px; */
}

.navlittle {
  display: inline-block;
  text-align: center;
  justify-content: center;
  margin: auto 30px;
  cursor: pointer;
}
.navlittle span {
  margin-left: 5px;
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
  margin-left: 50px;
}
.navigation .navlittle .I {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 50px;
}
.navigation .navlittle .p-items {
  display: none;
  width: 110px;
  height: auto;
  background-color: #020a1a;
  border-radius: 3px;
  color: #dbdbdb;
  position: absolute;
  /* margin-top: 23px; */
  font-size: 16px;
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
</style>