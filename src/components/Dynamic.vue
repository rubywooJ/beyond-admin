<style scope>
.content {
  background-color: #eff2f5;
  width: 100%;
  height: auto;
  padding-bottom: 20px;
  vertical-align: middle;
}

.content a {
  color: #8c8c8c;
}

.content .content-li {
  width: 85%;
  height: auto;
  background-color: #fff;
  display: inline-block;
  border-radius: 3px;
  text-align: left;
  padding: 10px 20px 25px 20px;
  vertical-align: top;
}

.content .content-li li {
  border-bottom: 1px solid #d9d9d9;
  height: auto;
  width: 70%;
  margin-left: 30px;
  color: #8c8c8c;
  padding: 17px 10px 17px 3px;
}

.content .content-li .condli-left {
  cursor: pointer;
}

.content .content-li span {
  font-size: 13px;
}

.content .content-li .condtitle {
  color: #000;
  font-size: 15px;
}

.content .cond-list span {
  display: inline-block;
  width: 45%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.content .condli-right {
  float: right;
  text-align: right;
}
.dyelm {
  width: 90%;
  margin: 0px auto;
}
</style>


<template>
  <div class="dynamic">
    <div class="content">
      <el-row :gutter="0" type="flex" class="row-bg dyelm" justify="center">
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
          <div class="content-li content-left">
            <li class="condition">
              <span v-on:click="getDynamic" class="condtitle">新动态</span>
            </li>
            <!-- slice((lists.length-4),lists.length) -->
            <li
              v-for="(list, i) in lists.slice((lists.length-4),lists.length)"
              :key="i"
              class="cond-list"
            >
              <span class="condli-left">
                <a v-bind:href="list.origin" target="_blank">{{ list.title }}</a>
              </span>
              <span class="condli-right">{{ list.createTime | formatDate }}</span>
            </li>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
          <div class="content-li content-right">
            <ul>
              <li class="condition">
                <span v-on:click="getDynamic" class="condtitle">最新评论</span>
              </li>
              <li v-for="(list, i) in lists" :key="i">
                <span>
                  <a v-bind:href="list.origin" target="_blank">{{ list.title }}</a>
                </span>
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { formatDate } from "@/util/transDate";
import articleApi from "../api/article";

export default {
  name: "Dynamic",
  data() {
    return {
      lists: []
    };
  },
  created() {
    this.getDynamic();
  },
  computed: {},
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm:ss");
    }
  },
  methods: {
    getDynamic() {
      articleApi.getAll(1, 5).then(dynamic => {
        // console.log(dynamic.data);
        this.lists = dynamic.data.data.content;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
