<style scoped>
.editArticle {
  background-color: #eff2f5;
}

.edart {
  margin-top: 30px;
  min-height: 73vh;
}

.edart .edtitle {
  width: 81%;
  text-align: right;
  height: auto;
  margin: 0px auto;
  text-align: left;
}

.edart .edtitle .edinput {
  width: 98%;
  height: 40px;
  border: none;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 0 0 0 20px;
}

.edart .edat {
  display: inline-block;
  width: 40%;
  height: auto;
  margin-top: 20px;
  vertical-align: top;
}

.edart .edselect {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding-bottom: 20px;
}

.edart .edselect .chebtn {
  padding: 3px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  /* color: #8c8c8c; */
}

.edart .edselect .edseli {
  margin: 20px 20px 0px 0px;
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
  <div class="editArticle">
    <el-container>
      <el-header>
        <Navigation />
      </el-header>
      <el-main>
        <div class="arthead">
          <el-breadcrumb separator-class="el-icon-arrow-right" class="artspan">
            <el-breadcrumb-item :to="{ path: '/HomePage' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>文章</el-breadcrumb-item>
            <el-breadcrumb-item>写文章</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="edart">
          <div class="edtitle">
            <input type="text" v-model="input1" class="edinput" placeholder="请输入文章标题" />
          </div>
          <div class="edat edbody">
            <el-input
              type="textarea"
              :autosize="{ minRows: 12, maxRows: 20}"
              placeholder="开始编辑"
              v-model="input2"
            ></el-input>
          </div>
          <div class="edat edselect">
            <el-checkbox-group v-model="tags" style="margin: 20px;">
              <el-checkbox v-for="(tags, i) in taglists" :label="tags" :key="i" class="edseli">
                <span class="chebtn">{{tags.name}}</span>
              </el-checkbox>
            </el-checkbox-group>
          </div>
          <div class="edbtn">
            <button class="pub" v-on:click="postArticles">发布</button>
            <router-link to="/Article">
              <button class="back">返回</button>
            </router-link>
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
import articleApi from "../api/article";
import tagApi from "../api/tag";

export default {
  name: "editArticle",
  components: {
    Navigation,
    Bottom
  },
  data() {
    return {
      input1: "",
      input2: "",
      tags: [],
      taglists: [],
      author: "往事随风",
      tagname: ""
    };
  },
  created() {
    this.getTags();
  },
  methods: {
    postArticles() {
      this.tags.forEach(t => {
        delete t.articleCount;
      });

      articleApi
        .add({
          author: this.author,
          title: this.input1,
          content: this.input2,
          origin: "",
          contentMd: "",
          cover: "",
          state: "",
          summary: "",
          tags: this.tags,
          type: 0,
          views: 0
        })
        .then(articles => {
          // console.log(articles.data.data.content);
          this.$message.info("文章发布成功！");
          this.$router.go(0);
        });
    },
    getTags() {
      tagApi.getAll().then(tags => {
        // console.log(tags.data.data);
        this.taglists = tags.data.data;
      });
    }
  }
};
</script>
