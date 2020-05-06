<template>
    <div class="base-fun">
        <div class="basefun-li ">
            <span class="basefun-word">文章</span>
            <router-link to="/EditArticle">
                <i class="iconcut iconfont icon-jjiahao"></i>
            </router-link>
            <div class="basefun-num articleCount">{{articlesnum}}</div>
        </div>
        <div class="basefun-li ">
            <span class="basefun-word">友情链接</span>
            <router-link to="/Friend">
                <i class="iconcut iconfont icon-jlianjie2"></i>
            </router-link>
            <div class="basefun-num linkCount">{{friendsnum}}</div>
        </div>
        <div class="basefun-li ">
            <span class="basefun-word">评论</span>
            <router-link to="/Comment">
                <i class="iconcut iconfont icon-jcomment"></i>
            </router-link>
            <div class="basefun-num commentCount">{{commentsnum}}</div>
        </div>
        <div class="basefun-li ">
            <span class="basefun-word">访问量</span>
            <i class="iconcut iconfont icon-jshuju"></i>
            <div class="basefun-num visitedCount">{{visitednum}}</div>
        </div>
    </div>
</template>

<script>
    import adminApi from "../api/admin";

    export default {
        name: 'Shortcut',
        data() {
            return {
                articlesnum: 0,
                friendsnum: 0,
                commentsnum: 0,
                visitednum: 0,
            }
        },

        //自动调用
        created() {
            this.getBloginfo();
        },
        methods: {
            getBloginfo() {
                adminApi.blogInfo().then(blogCount => {
                    // console.log(blogCount.data);
                    this.articlesnum = blogCount.data.data.articleCount;
                    this.friendsnum = blogCount.data.data.linkCount;
                    this.commentsnum = blogCount.data.data.commentCount;
                    this.visitednum = blogCount.data.data.visitedCount;
                })
            },
        },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>
    .base-fun {
        width: 100%;
        height: auto;
        background-color: #eff2f5;
        color: #8c8c8c;
        text-align: left;
        padding-bottom: 20px;
    }

    .base-fun .basefun-li {
        display: inline-block;
        background-color: #fff;
        width: 17%;
        height: 80px;
        vertical-align: middle;
        margin-left: 52px;
        margin-top: 30px;
        border-radius: 3px;
        padding: 20px 22px;
    }

    .base-fun .basefun-li .basefun-word {
        font-size: 15px;
    }

    .base-fun .basefun-li .basefun-num {
        font-size: 30px;
        color: #000;
        margin: 10px 10px;
    }

    .iconcut {
        color: #0099dc;
        float: right;
    }

    .icon-jshuaxin {
        margin: 3px 3px;
    }
</style>
