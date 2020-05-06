<style scoped>
    .AmendArticle {
        background-color: #eff2f5;
    }

    .edart {
        margin-top: 30px;
    }

    .edart .edtitle {
        width: 80%;
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
        padding: 0 0 0 19px;
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
        padding: 3px;
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
</style>

<template>
    <div class="AmendArticle">
        <Navigation/>
        <div class="edart">
            <div class="edtitle">
                <input type="text" v-model="this.single.title" class="edinput" placeholder="请输入文章标题"/>
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
                <el-checkbox-group v-model="checkboxGroup" style="margin: 20px;">
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

        <Bottom/>
    </div>
</template>

<script>
    import Navigation from "../components/Navigation";
    import Bottom from "../components/Bottom";

    export default {
        name: 'AmendArticle',
        components: {
            Navigation,
            Bottom
        },
        data() {
            return {
                single: {},
            };
        },
        methods: {
            putArticles() {
                this.$axios({
                    method: "put",
                    url: "/articles/" + this.artsId,
                    data: {
                        author: this.single.author,
                        content: this.single.content,
                        contentMd: this.single.contenMd,
                        cover: this.single.cover,
                        createTime: this.single.createTime,
                        editTime: 0,
                        id: this.single.id,
                        origin: this.single.origin,
                        state: this.single.state,
                        summary: this.single.summary,
                        tags: this.single.tags,
                        title: this.single.title,
                        type: this.single.type,
                        views: this.single.views
                    }
                })
                    .then(response => {
                        console.log(response.data.data);
                    })
                    .catch(error => {
                        alert("修改文章失败！");
                    });
            },
        }
    }
</script>

