<style scope>
.referArticle {
  background-color: #eff2f5;
  min-width: 820px;
}

.boy {
  width: 100%;
  height: auto;
  text-align: center;
}

.boy .allcontent {
  width: 80%;
  height: auto;
  background-color: #fff;
  display: inline-block;
  padding: 20px;
  text-align: left;
  border-radius: 3px;
}

.boy .allcontent .contentconfor {
  margin-bottom: 20px;
}

.boy .allcontent .contentconfor button {
  outline: none;
  border: none;
  background-color: #0092ff;
  color: #fff;
}

.boy .allcontent .artsearch {
  height: auto;
  width: 40%;
  display: inline-block;
  margin-left: 8px;
}

.boy .allcontent .artsearch input {
  height: 25px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding-left: 10px;
  color: #8c8c8c;
}

.boy .allcontent .artsearch .artsearch-btn {
  width: 60px;
  height: 27px;
  border-radius: 3px;
  margin-left: 20px;
}

.boy .allcontent .artcreate {
  width: 100px;
  height: 27px;
  display: inline-block;
  margin-left: 47%;
}

.boy .allcontent .artcreate button {
  height: 28px;
  width: 100px;
  border-radius: 3px;
}

.boy .allcontent table {
  width: 97%;
  font-size: 13px;
  border-spacing: 0;
  padding: 0 10px;
  table-layout: fixed;
}

.boy .allcontent table > tr {
  width: 100%;
  height: 70px;
}

.boy .allcontent td {
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
</style>

<template>
  <div class="referArticle">
    <el-container>
      <el-header>
        <Navigation />
      </el-header>
      <el-main>
        <div class="boy">
          <div class="allcontent">
            <div class="contentconfor">
              <div class="artsearch">
                文章id：
                <input type="text" v-model="artsid" />
                <button class="art-btn artsearch-btn" v-on:click="toggle1(),getIdArticles()">查 询</button>
              </div>
              <div class="artcreate">
                <button>
                  <i class="iconfont icon-jjiahao articon"></i>
                  写文章
                </button>
              </div>
            </div>
            <!-- 根据id查找文章 -->
            <div>
              <table>
                <tr class="artall">
                  <td class="artth arttitle">标题</td>
                  <td class="artth arttag">作者</td>
                  <td class="artth artdate">发布时间</td>
                  <td class="artth artoperate" style="padding-left: 10px;">操作</td>
                </tr>
                <!-- v-if="justId.data != null" -->
                <tr class="artall" v-if="justId != null">
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
                <tr v-else>
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
              <button class="back" v-on:click="toggle2">返回</button>
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
import { formatDate } from "@/util/transDate.js";
import Navigation from "../components/Navigation";
import Bottom from "../components/Bottom";

export default {
  name: "referArticle",
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
      artsid: "",
      pagesize: 5,
      currentPage: 1,
      display1: true,
      display2: false
    };
  },
  created() {
    this.getArticles();
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
      console.log(this.pagesize); //每页下拉显示数据
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
      console.log(this.currentPage); //点击第几页
    },
    toggle1() {
      this.display1 = false;
      this.display2 = true;
    },
    toggle2() {
      this.display1 = true;
      this.display2 = false;
    },
    getArticles() {
      this.$axios({
        method: "get",
        url: "/articles"
      })
        .then(articles => {
          console.log(articles.data.data.content);
          this.artlists = articles.data.data.content;
        })
        .catch(error => {
          alert("动态获取失败！");
        });
    },
    postArticles() {
      this.$axios({
        method: "post",
        url: "/articles",
        data: {
          author: string,
          content: string,
          contentMd: string,
          cover: string,
          createTime: 0,
          editTime: 0,
          id: 0,
          origin: string,
          state: string,
          summary: string,
          tags: [
            {
              id: 0,
              name: string
            }
          ],
          title: string,
          type: 0,
          views: 0
        }
      })
        .then(articles => {
          console.log(articles.data.data.content);
          // this.artlists = articles.data.data.content;
        })
        .catch(error => {
          alert("动态获取失败！");
        });
    },

    //根据id查找文章
    getIdArticles() {
      this.$axios({
        method: "get",
        url: "/articles/" + this.artsid
      })
        .then(response => {
          console.log(response.data);
          this.artIdlists = response.data.data;
          this.justId = response.data;
        })
        .catch(error => {
          alert("未查询到此id下的文章！");
        });
      // this.$router.go(0);
    },
    putArticles() {
      this.$axios({
        method: "put",
        url: "/articles/" + this.artsid
      })
        .then(response => {
          console.log(response.data.data);
        })
        .catch(error => {
          alert("修改文章失败！");
        });
    },
    deleArticles() {
      this.$axios({
        method: "delete",
        url: "/articles/" + this.artsid
      })
        .then(response => {
          console.log(response.data.data);
        })
        .catch(error => {
          alert("删除失败！");
        });
    },
    getIdTag() {
      this.$axios({
        method: "get",
        url: "/articles/tags/" + this.tagsid
      })
        .then(response => {
          console.log(response.data.data);
        })
        .catch(error => {
          alert("删除失败！");
        });
    }
  }
};
</script>

