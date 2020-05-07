<style scope>
.Personal {
  height: 100%;
  background-color: #eff2f5;
}

.perContent {
  text-align: center;
  background-color: #fff;
  margin: 30px auto;
  padding-top: 20px;
  width: 90%;
  border-radius: 3px;
  min-height: 65vh;
}

.perContent .per-left {
  display: inline-block;
  width: 40%;
  vertical-align: top;
}

.perContent .per-right {
  display: inline-block;
  width: 40%;
  vertical-align: top;
}

.perContent .perImg img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  text-align: center;
}

.perContent .list-information {
  text-align: center;
}

.perContent .list-information .iconfont {
  margin-right: 8px;
}

.perContent .per-right input {
  border: none;
  border: 1px solid #ddd;
  padding: 3px 10px;
  border-radius: 3px;
  width: 100%;
  height: 25px;
}

.perContent .per-right table {
  text-align: left;
  border: none;
  width: 100%;
}

.perContent .per-right .iconfont {
  color: #1890ff;
  float: right;
  font-size: 25px;
  cursor: pointer;
}

.perContent .per-right button {
  color: #fff;
  border: none;
  background-color: #0092ff;
  padding: 5px 10px;
  border-radius: 3px;
}

.per-right table .per-word {
  height: 32px;
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
  <div class="Personal">
    <el-container>
      <el-header>
        <Navigation />
      </el-header>
      <el-main>
        <div class="arthead">
          <el-breadcrumb separator-class="el-icon-arrow-right" class="artspan">
            <el-breadcrumb-item :to="{ path: '/HomePage' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>用户</el-breadcrumb-item>
            <el-breadcrumb-item>用户资料</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <div class="perContent">
          <div class="per-left">
            <div class="perImg">
              <img src="../assets/img/20200403124618.jpg" alt />
            </div>
            <!-- <table>
                <tr v-for="(icon, i) in icons" :key="i">
                  <i class="iconfont" :class="icon.icon"></i>
                  <td>{{icon.content}}</td>
                </tr>
            </table>-->
            <ul class="list-information">
              <li>
                <i class="iconfont icon-jlianjie"></i>
                <a href="http://www.tsxygfy.cn">http://www.tsxygfy.cn</a>
              </li>
              <br />
              <li>
                <i class="iconfont icon-jyoujian1"></i>
                <span>2362882118@qq.com</span>
              </li>
              <br />
              <li>
                <i class="iconfont icon-jshengri1"></i>
                <span>1999.03.21</span>
              </li>
              <br />
              <li>
                <i class="iconfont icon-jmingpian"></i>
                <span>山东省泰安市</span>
              </li>
              <br />
            </ul>
          </div>
          <div class="per-right">
            <br />
            <br />
            <table v-show="display1">
              <tr class="per-word">用户名：</tr>
              <tr>
                <input type="text" placeholder="feiyangbeyond" />
              </tr>
              <tr class="per-word">昵称：</tr>
              <tr>
                <input type="text" placeholder="ruby woo" />
              </tr>
              <tr class="per-word">签名：</tr>
              <tr>
                <input type="text" placeholder="write the code, change the world!" />
              </tr>
              <tr>
                <i class="iconfont icon-jxiaoyu-copy sh" v-on:click="toggle2"></i>
              </tr>
            </table>
            <table v-show="display2">
              原密码：
              <tr>
                <input type="password" v-model="oldpassword" />
              </tr>新密码：
              <tr>
                <input type="password" v-model="newpassword1" />
              </tr>确认密码：
              <tr>
                <input type="password" v-model="newpassword2" />
              </tr>
              <tr>
                <button v-on:click="postPassword">提交</button>
                <i class="iconfont icon-jxiaoyu" v-on:click="toggle1"></i>
              </tr>
            </table>
          </div>
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
import adminApi from "../api/admin";

export default {
  name: "Personal",
  components: {
    Navigation,
    Bottom
  },
  data() {
    return {
      display1: true,
      display2: false,
      oldpassword: "",
      newpassword1: "",
      newpassword2: ""
    };
  },
  methods: {
    toggle1() {
      this.display1 = true;
      this.display2 = false;
    },
    toggle2() {
      this.display1 = false;
      this.display2 = true;
    },
    postPassword() {
      adminApi
        .resetPassword({
          confirmPassword: this.newpassword2,
          newPassword: this.newpassword1,
          oldPassword: this.oldpassword
        })
        .then(response => {
          adminApi.logout();
          this.$message.warning("登录状态已失效，请重新登录！");
        });
    }
  }
};
</script>

