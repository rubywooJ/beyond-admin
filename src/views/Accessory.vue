<style scope>
.Accessory {
  background-color: #eff2f5;
}

.Accessory .acsimg {
  margin: 30px auto;
  height: auto;
  background-color: #fff;
  width: 88%;
  border-radius: 3px;
  padding: 20px 0px;
  min-height: 63vh;
}

.acsimg el-upload--picture-card {
  width: 50px;
  height: 50px;
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
  <div class="Accessory">
    <el-container>
      <el-header>
        <Navigation />
      </el-header>
      <el-main>
        <div class="arthead">
          <el-breadcrumb separator-class="el-icon-arrow-right" class="artspan">
            <el-breadcrumb-item :to="{ path: '/HomePage' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>附件</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <div class="acsimg">
          <el-upload
            action="http://beyond.tsxygfy.cn/api/admin/upload"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :multiple="mul"
            :headers="head"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
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
  name: "Accessory",
  components: {
    Navigation,
    Bottom
  },
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      mul: true
    };
  },
  computed: {
    head() {
      return {
        "ADMIN-Authorization": "8309e873416c4b11a27756ed8b636c1d",
        "Content-Type": "application/json;charset=utf8"
      };
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>

