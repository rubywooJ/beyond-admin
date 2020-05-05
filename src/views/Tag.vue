<style scope>
.Label {
  background-color: #eff2f5;
}
.tagpage {
  margin-top: 30px;
  min-height: 77vh;
}
.tagpage button{
  cursor: pointer;
}
.tagpage .tagcreate {
  background-color: #fff;
  display: inline-block;
  border: 1px solid #ddd;
  border-radius: 3px;
  text-align: left;
  width: 40%;
  margin-right: 20px;
  padding: 10px;
}
.tagpage .tagcreate span {
  font-size: 13px;
}
.tagpage .tagrefresh {
  background-color: #fff;
  display: inline-block;
  /* display: none; */
  border: 1px solid #ddd;
  border-radius: 3px;
  text-align: left;
  width: 40%;
  margin-right: 20px;
  padding: 10px;
}
.tagpage .tagrefresh span {
  font-size: 13px;
}
.tagpage .tagwords {
  padding: 5px 0px 10px 5px;
  border-bottom: 1px solid #ddd;
}
.tagpage input {
  border: none;
  border: 1px solid #ddd;
  border-radius: 3px;
  width: 90%;
  height: 26px;
  padding: 0px 10px;
  color: #8c8c8c;
}
.tagpage .taghint {
  color: #8c8c8c;
  font-size: 14px;
}
.tagpage input:focus {
  border-style:solid;
  border-color: #91d5ff;
	box-shadow: 0 0 2px #91d5ff;
}
.tagpage .save {
  color: #fff;
  border: none;
  background-color: #0092ff;
  padding: 5px 10px;
  border-radius: 3px;
}
.tagpage .tagrefresh .back {
  border: none;
  background-color: #fff;
  padding: 5px 10px;
  border-radius: 3px;
  border: 1px dashed #ddd;
  margin-left: 3px;
}
.tagpage .tagrefresh .dele {
  color: #fff;
  border: none;
  background-color: #ff4d4f;
  padding: 5px 10px;
  border-radius: 3px;
  float: right;
}
.tagpage .sorttags {
  background-color: #fff;
  display: inline-block;
  border: 1px solid #ddd;
  border-radius: 3px;
  text-align: left;
  width: 40%;
  margin-left: 20px;
  height: auto;
  padding: 10px;
  vertical-align: top;
}
.tagpage .sorttags .tagdiv {
  display: inline-block;
  padding: 20px 0px;
}
.tagpage .sorttags span {
  width: auto;
  height: 20px;
  color: #1890ff;
  background-color: #e6f7ff;
  border: 1px solid #91d5ff;
  border-radius: 3px;
  font-size: 13px;
  padding: 3px 8px;
  margin: 5px;
  cursor: pointer;
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
  <div class="Label">
    <Navigation />
    <div class="arthead">
      <el-breadcrumb separator-class="el-icon-arrow-right" class="artspan">
        <el-breadcrumb-item :to="{ path: '/HomePage' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>标签</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="tagpage">
      <div class="tagcreate" v-show="display1">
        <div class="tagwords">添加标签</div>
        <br>
        <span>名称：</span>
        <br>
        <br>
        <input type="text" v-model="tagsname1">
        <br>
        <span class="taghint">*页面上所显示的名称</span>
        <br>
        <br>
        <button class="save" v-on:click="postTags()">保存</button>
        <!-- <button class="save" v-on:click="gett()">text</button> -->
      </div>
      <!-- 修改 -->
      <div class="tagrefresh" v-show="display2">
        <div class="tagwords">修改标签</div>
        <br>
        <span>名称：</span>
        <br>
        <br>
        <input type="text" v-model=" tagsname2">
        <br>
        <span class="taghint">*页面上所显示的名称</span>
        <br>
        <br>
        <span>新名称：</span>
        <br>
        <br>
        <input type="text" v-model=" retagsname">
        <br>
        <span class="taghint">*页面上所显示的名称</span>
        <br>
        <br>
        <button class="save" v-on:click="putReTags()">保存</button>
        <button class="back" v-on:click="toggle2">返回添加</button>
        <button class="dele" v-on:click="deleTags()">删除</button>
      </div>
      <div class="sorttags">
        <div class="tagwords">所有标签</div>
        <div class="tagdiv" v-for="(taglist, i) in taglists" :key="i" v-on:click="getTagsId(taglist.id, taglist.name)">
          <span v-on:click="toggle1" >{{ taglist.name }}</span>
        </div>
      </div>
    </div>
    <Bottom />
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
import Bottom from "../components/Bottom";


export default {
  name: "Label",
  components: {
    Navigation,
    Bottom,
  },
  data() {
    return {
      taglists: [],
      tagsname1: '',
      display1: true,
      display2: false,
      tagsId: null,
      tagsname2: '',
      retagsname: '',
    }
  },
  created() {
    this.getTags();
  },
  methods: {
    toggle1() {
      this.display1 = false;
      this.display2 = true;
    },
    toggle2() {
      this.display1 = true;
      this.display2 = false;
    },
    //获取全部标签 
    getTags() {
      this.$axios({
        method: "get",
        url: "/tags",
      })
        .then(tags => {
          // console.log(tags);
          this.taglists = tags.data.data;
        })
        .catch(error => {
          alert("标签获取失败！");
        });
    },
    //创建新标签
    postTags() {
      this.$axios({
        method: "post",
        url: "/tags",
        data: {
          name: this.tagsname1
        }
      })
      .then(response => {
        this.getTags();
      })
      .catch(error => {
        alert("标签创建失败！");
      });
    },
    //获取单个标签id 
    getTagsId(i, j) {
      this.tagsId = i;
      this.tagsname2 = j;
      console.log(i);
    },
    //更新标签
    putReTags() {
      this.$axios({
        method: "put",
        url: "/tags/" + this.tagsId,
        data : {
          id: this.tagsId,
          name: this.retagsname,
        }
      })
      .then(response => {
        console.log(response.data.data);
        // this.retags = response.data.data;
        this.getTags();
      })
      .catch(error => {
        alert("更新标签失败！");
      });
    },
    //删除标签
    deleTags() {
      this.$axios({
        method: "delete",
        url: "/tags/" + this.tagsId,
      })
      .then(response => {
        console.log(response.data.data);
        this.getTags();
      })
      .catch(error => {
        console.log(error);
        alert("删除标签失败！");
      });
    },

  }
};
</script>

