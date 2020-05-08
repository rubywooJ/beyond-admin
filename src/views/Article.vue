<style scope>
.Article {
  background-color: #eff2f5;
  width: 100%;
  min-width: 820px;
}

.body {
  width: 100%;
  height: auto;
  text-align: center;
  margin-top: 30px;
  min-height: 72vh;
}

.body .allcontent {
  width: 80%;
  height: auto;
  background-color: #fff;
  display: inline-block;
  padding: 20px;
  text-align: left;
  border-radius: 3px;
}

.body .allcontent .contentconfor {
  margin-bottom: 20px;
}

.body .allcontent .contentconfor button {
  outline: none;
  border: none;
  background-color: #0092ff;
  color: #fff;
}

.body .allcontent .artsearch {
  height: auto;
  width: 60%;
  display: inline-block;
  margin-left: 2%;
}

.body .allcontent .artsearch input {
  width: 50%;
  height: 25px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding-left: 10px;
  color: #8c8c8c;
}

.body .allcontent .artsearch .artsearch-btn {
  width: 60px;
  height: 27px;
  border-radius: 3px;
  margin-left: 4%;
}

.body .allcontent .artcreate {
  width: 100px;
  height: 27px;
  display: inline-block;
  float: right;
  margin-right: 4%;
}

.body .allcontent .artcreate button {
  height: 28px;
  width: 100px;
  border-radius: 3px;
}

.body .allcontent table {
  width: 97%;
  font-size: 13px;
  border-spacing: 0;
  padding: 0 10px;
  table-layout: fixed;
}

.body .allcontent table > tr {
  width: 100%;
  height: 70px;
}

.body .allcontent td {
  border-bottom: 1px solid #ddd;
  padding: 0px 5px;
}

.allcontent .arttitle {
  color: #0099dc;
  width: 30%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
}

.allcontent .artdate {
  color: #8c8c8c;
  width: 20%;
}

.allcontent .artauthor {
  color: #8c8c8c;
}

.allcontent .back {
  border: none;
  background-color: #fff;
  padding: 5px 10px;
  border-radius: 3px;
  border: 1px dashed #ddd;
  margin: 10px 9px;
}

.nodata {
  text-align: center;
}

.allcontent .arttag {
  width: 20%;
}

.allcontent .artoperate {
  width: 20%;
  color: #ddd;
}

.allcontent .artoperate span {
  color: #0099dc;
  margin: 0px 4px;
  cursor: pointer;
}

.allcontent .arttag span {
  border-radius: 3px;
  color: #52c41a;
  border: 1px solid #b7eb8f;
  background-color: #f6ffed;
  padding: 2px;
  margin-right: 6px;
  cursor: default;
}

.allcontent .artth {
  color: #000;
}

.allcontent .el-pageli {
  float: right;
  margin: 10px 30px;
}

.allcontent .container_table .fy {
  float: right;
  margin-right: 30px;
}

.edart .edtitle {
  width: 83%;
  text-align: right;
  height: auto;
  margin: 0px auto;
  text-align: left;
}

.edart .edtitle .edinput {
  width: 98%;
  height: 52px;
  border: none;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 0 3px 0 18px;
  color: #8c8c8c;
  font-size: 16px;
}

.edart .edat {
  display: inline-block;
  width: 41%;
  height: auto;
  vertical-align: top;
}

.edart .edselect {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px 10px 20px 0;
}

/* .edart .edselect span {
      display: inline-block;
      background-color: #e6f7ff;
      border: 1px solid #91d5ff;
      border-radius: 3px;
      padding: 3px 10px;
      margin: 5px 10px;
      font-size: 13px;
      color: #1890ff;
    } */
.edart .edselect input {
  border: none;
  width: 50px;
  height: auto;
  padding: 3px 10px;
}

.edart .edbtn {
  width: 80%;
  margin: 20px auto;
  text-align: right;
}

.edart .edbtn button {
  border: none;
  width: 65px;
  height: 35px;
  font-size: 15px;
  border-radius: 3px;
}

.edart .edbtn .pub {
  background-color: #0092ff;
  color: #fff;
  margin-right: 40px;
}

.edart .edbtn .back {
  border: 1px dashed #ddd;
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
  <div class="Article">
    <el-container>
      <el-header>
        <Navigation />
      </el-header>
      <el-main>
        <div class="arthead">
          <el-breadcrumb separator-class="el-icon-arrow-right" class="artspan">
            <el-breadcrumb-item :to="{ path: '/HomePage' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>文章</el-breadcrumb-item>
            <el-breadcrumb-item>所有文章</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="body">
          <div class="allcontent">
            <div class="contentconfor">
              <div class="artsearch">
                文章id：
                <input type="text" v-model="artid" />
                <!-- <router-link to="/referArticle"> -->
                <button class="art-btn artsearch-btn" v-on:click="toggle2(),getIdArticles()">查 询</button>
                <!-- </router-link> -->
              </div>
              <div class="artcreate">
                <router-link to="/editArticle">
                  <button>
                    <i class="iconfont icon-jjiahao articon"></i>
                    写文章
                  </button>
                </router-link>
              </div>
            </div>
            <!-- 根据id查找文章 -->
            <div v-show="display2">
              <table>
                <tr class="artall">
                  <td class="artth arttitle">标题</td>
                  <td class="artth arttag">作者</td>
                  <td class="artth artdate">发布时间</td>
                  <td class="artth artoperate" style="padding-left: 10px;">操作</td>
                </tr>
                <!-- v-if="justId.data != null" -->
                <tr class="artall" v-show="justId.data">
                  <td class="arttitle">
                    <a v-bind:href="artIdlists.origin" target="_blank">{{ artIdlists.title }}</a>
                  </td>
                  <td class="artauthor">{{ artIdlists.author }}</td>
                  <td class="artdate">{{ artIdlists.createTime | formatDate }}</td>
                  <td class="artoperate">
                    <span v-on:click="putArticles()">{{ operate }}</span>
                    |
                    <span v-on:click="deleArticles()">{{ dele }}</span>
                  </td>
                </tr>
                <tr v-show="!justId.data">
                  <td class="nodata" colspan="4">暂无数据</td>
                </tr>
              </table>
              <el-pagination
                class="el-pageli"
                background
                layout="prev, pager, next"
                :total="artIdlists.length"
                v-bind:page-size="pagesize"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
              ></el-pagination>
              <button class="back" v-on:click="toggle1()">返回</button>
            </div>
            <div class="artList" v-show="display1">
              <table>
                <tr class="artall">
                  <td class="artth arttitle">标题</td>
                  <td class="artth arttag">标签</td>
                  <td class="artth artdate">发布时间</td>
                  <td class="artth artoperate" style="padding-left: 10px;">操作</td>
                </tr>
                <!-- 分割数组，分页显示 -->
                <tr
                  class="artall"
                  v-for="(artlist, i) in artlists.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                  :key="i"
                >
                  <td class="arttitle">
                    <a v-bind:href="artlist.origin" target="_blank">{{ artlist.title }}</a>
                  </td>
                  <!-- 获取标签 -->
                  <td class="arttag">
                    <span v-for="(artTags,j) in artlist.tags" :key="j">{{ artTags.name }}</span>
                  </td>
                  <td class="artdate">{{ artlist.createTime | formatDate }}</td>
                  <td class="artoperate">
                    <span
                      v-on:click="getOneid(artlist.id), getSingle(artlist),toggle3()"
                    >{{ operate }}</span>
                    |
                    <span
                      v-on:click="getOneid(artlist.id), deleArticles()"
                    >{{ dele }}</span>
                  </td>
                </tr>
              </table>
              <el-pagination
                class="el-pageli"
                background
                layout="prev, pager, next"
                :total="artlists.length"
                v-bind:page-size="pagesize"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
              ></el-pagination>
            </div>
          </div>
          <div class="edart" v-show="display3">
            <div class="edtitle">
              <input type="text" class="edinput" placeholder="请输入文章标题" v-model="this.single.title" />
            </div>
            <div class="edat edbody">
              <el-input
                type="textarea"
                :autosize="{ minRows: 12, maxRows: 20}"
                placeholder="开始编辑"
                v-model="this.single.content"
              ></el-input>
            </div>
            <!-- <div class="edat edselect">
                    <span v-for="(singletag, i) in this.singletags" :label="singletag" :key="i">{{singletag.name}}</span>
            </div>-->
            <div class="edat edselect">
              <span v-for="(singletag, i) in this.single.tags" :label="singletag" :key="i">
                <input type="text" v-model="singletag.name" />
              </span>
            </div>
            <div class="edbtn">
              <button class="pub" v-on:click="putArticles()">发布</button>
              <button class="back" v-on:click="toggle1()">返回</button>
            </div>
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
import { formatDate } from "@/util/transDate";
import Navigation from "../components/Navigation";
import Bottom from "../components/Bottom";
import articleApi from "../api/article";
import tagApi from "../api/tag";

export default {
  name: "Article",
  components: {
    Navigation,
    Bottom
  },
  data() {
    return {
      artlists: [],
      artIdlists: [],
      justId: [],
      operate: "修改",
      dele: "删除",
      //输入的文章id
      artid: "",
      //操作的文章id
      artsId: "",
      single: {},
      pagesize: 5,
      currentPage: 1,
      display1: true,
      display2: false,
      display3: false,
      edtaglists: [],
      singletags: []
    };
  },
  created() {
    this.getArticles();
    this.getTags();
  },
  //时间戳转换
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm:ss");
    }
  },
  methods: {
    handleSizeChange: function(size) {
      this.pagesize = size;
      // console.log(this.pagesize);
      //每页下拉显示数据
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
      // console.log(this.currentPage);
      //点击第几页
    },
    toggle1() {
      this.display1 = true;
      this.display2 = false;
      this.display3 = false;
    },
    toggle2() {
      this.display1 = false;
      this.display2 = true;
      this.display3 = false;
    },
    toggle3() {
      this.display3 = true;
      this.display1 = false;
      this.display2 = false;
    },
    getOneid(i) {
      this.artsId = i;
      // console.log(i);
    },
    //为修改文章获取单个文章信息
    getSingle(m) {
      this.single = m;
      this.singletags = m.tags;
      // console.log(m);
      // console.log(m.tags);
    },
    getArticles() {
      articleApi.getAll(1, 10).then(articles => {
        // console.log(articles.data.data.content);
        this.artlists = articles.data.data.content;
      });
    },
    //根据id查找文章
    getIdArticles() {
      articleApi
        .getOne(this.artsId)
        .then(response => {
          // console.log(response.data);
          this.artIdlists = response.data.data;
          this.justId = response.data;
        })
        .catch(error => {
          this.$message.error("未查询到此id下的文章！");
        });
      // this.$router.go(0);
    },
    putArticles() {
      this.$alert("暂无法修改文章", "提示", {
        confirmButtonText: "确定"
        // callback: action => {
        //     this.$message({
        //         type: 'info',
        //         message: `action: ${ action }`
        //     });
        // }
      });
      // this.$axios({
      //     method: "put",
      //     url: "/articles/" + this.artsId,
      //     data: {
      //         author: this.single.author,
      //         content: this.single.content,
      //         contentMd: this.single.contenMd,
      //         cover: this.single.cover,
      //         createTime: this.single.createTime,
      //         editTime: 0,
      //         id: this.single.id,
      //         origin: this.single.origin,
      //         state: this.single.state,
      //         summary: this.single.summary,
      //         tags: this.single.tags,
      //         title: this.single.title,
      //         type: this.single.type,
      //         views: this.single.views
      //     }
      // })
      //     .then(response => {
      //         // console.log(response.data.data);
      //     })
      //     .catch(error => {
      //         alert("修改文章失败！");
      //     });
    },
    deleArticles() {
      articleApi
        .delete(this.artsId)
        // alert("确认删除此文章？")
        .then(response => {
          alert("删除成功！");
          // console.log(response.data.data);
          this.getArticles();
        });
    },
    getTags() {
      tagApi.getAll().then(tags => {
        // console.log(tags.data.data);
        this.edtaglists = tags.data.data;
      });
    }
    // getIdTag() {
    //   this.$axios({
    //     method: "get",
    //     url: "/articles/tags/" + this.tagid
    //   })
    //     .then(response => {
    //       console.log(response.data.data);
    //     })
    //     .catch(error => {
    //       alert("删除失败！");
    //     });
    // }
  }
};
</script>

