<style scope>
    .Friend {
        background-color: #eff2f5;
    }

    .fripage {
        margin-top: 30px;
    }

    .fripage button {
        cursor: pointer;
    }

    .fripage .fricreate {
        background-color: #fff;
        display: inline-block;
        border: 1px solid #ddd;
        border-radius: 3px;
        text-align: left;
        width: 40%;
        margin-right: 20px;
        padding: 10px;
    }

    .fripage .frirefresh {
        background-color: #fff;
        display: inline-block;
        border: 1px solid #ddd;
        border-radius: 3px;
        text-align: left;
        width: 40%;
        margin-right: 20px;
        padding: 10px;
    }

    .fripage .friwords {
        padding: 5px 0px 10px 5px;
        border-bottom: 1px solid #ddd;
    }

    .fripage input {
        border: none;
        border: 1px solid #ddd;
        border-radius: 3px;
        width: 90%;
        height: 26px;
        padding: 0px 10px;
        color: #8c8c8c;
    }

    .fripage span {
        font-size: 14px;
    }

    .fripage .frihint {
        font-size: 13px;
        color: #8c8c8c;
        font-size: 14px;
    }

    .fripage input:focus {
        border-style: solid;
        border-color: #91d5ff;
        box-shadow: 0 0 2px #91d5ff;
    }

    .fripage .save {
        color: #fff;
        border: none;
        background-color: #0092ff;
        padding: 5px 10px;
        border-radius: 3px;
    }

    .fripage .frirefresh .back {
        border: none;
        background-color: #fff;
        padding: 5px 10px;
        border-radius: 3px;
        border: 1px dashed #ddd;
        margin-left: 3px;
    }

    .fripage .frirefresh .dele {
        color: #fff;
        border: none;
        background-color: #ff4d4f;
        padding: 5px 10px;
        border-radius: 3px;
        float: right;
    }

    .fripage .sortfriends {
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

    .fripage .sortfriends .fridiv {
        display: inline-block;
        padding: 20px 0px;
    }

    .fripage .sortfriends .frilist table {
        width: 100%;
        height: auto;
        border-spacing: 0;
        font-size: 13px;
        padding: 5px 5px 20px 5px;
    }

    .fripage .sortfriends .frilist td {
        border-bottom: 1px solid #ddd;
        height: 40px;
        padding: 0px 5px;
    }

    .fripage .sortfriends .frilist .fridsname {
        color: #8c8c8c;
    }

    .fripage .sortfriends .frilist .fridslink {
        color: #0099dc;
    }

    .fripage .sortfriends .frilist .fridsteam {
        color: #8c8c8c;
    }

    .fripage .sortfriends .frilist .fridsoper {
        color: #0099dc;
        cursor: pointer;
    }

    .fripage .fridescription {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 3px;
        color: #8c8c8c;
    }

    .fripage .sortfriends .frilist .fieth {
        font-size: 14px;
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
    <div class="Friend">
        <Navigation/>
        <div class="arthead">
            <el-breadcrumb separator-class="el-icon-arrow-right" class="artspan">
                <el-breadcrumb-item :to="{ path: '/HomePage' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>好友</el-breadcrumb-item>
                <el-breadcrumb-item>友情链接</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="fripage">
            <div class="fricreate" v-show="display1">
                <div class="friwords">添加友情链接</div>
                <br>
                <span>网站名称：</span>
                <br><br>
                <input type="text" v-model="fridsname">
                <br>
                <span class="frihint">*备注</span>
                <br><br>
                <span>网站地址：</span>
                <br><br>
                <input type="text" v-model="fridslink">
                <br>
                <span class="frihint">*需加上 http://</span>
                <br><br>
                <span>Logo：</span>
                <br><br>
                <input type="text" v-model="fridslogo">
                <br><br>
                <span>分组：</span>
                <br><br>
                <input type="text" v-model="fridsteam">
                <br><br>
                <span>描述：</span>
                <br><br>
                <textarea name="" class="fridescription" cols="64" rows="5" v-model="fridsdes"></textarea>
                <br><br>
                <button class="save" v-on:click="postFriends()">保存</button>
            </div>
            <!-- 修改友情链接 -->
            <div class="frirefresh" v-show="display2">
                <div class="friwords">修改友情链接</div>
                <br>
                <span>名称：</span>
                <br><br>
                <input type="text" v-model="friendname">
                <br>
                <span class="frihint">*备注</span>
                <br><br>
                <span>网站地址：</span>
                <br><br>
                <input type="text" v-model="friendurl">
                <br>
                <span class="frihint">*需加上 http://</span>
                <br><br>
                <span>Logo：</span>
                <br><br>
                <input type="text" v-model="friendimg">
                <br><br>
                <span>分组：</span>
                <br><br>
                <input type="text" v-model="friendteam">
                <br><br>
                <span>描述：</span>
                <br><br>
                <textarea name="" class="fridescription" cols="64" rows="5" v-model="frienddescription"></textarea>
                <br><br>
                <button class="save" v-on:click="putReFrids()">保存</button>
                <button class="back" v-on:click="toggle1()">返回添加</button>
            </div>
            <div class="sortfriends">
                <div class="friwords">所有友情链接</div>
                <div class="frilist">
                    <div v-for="(frilist, i) in frilists" :key="i">
                        <el-tabs class="linklist" v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="技术区" name="first" v-if="frilist.team == '技术区'">
                                <table>
                                    <tr v-for="(teams, j) in frilist.links" :key="j">
                                        <td class="fridsname">{{ teams.name }}</td>
                                        <td class="fridslink"><a v-bind:href="origin" target="_blank">{{ teams.url
                                            }}</a></td>
                                        <td class="fridsoper">
                <span v-on:click="getfrid(teams.id, teams.name, teams.url, teams.img, teams.team, teams.description), toggle2()">
                  {{ operate }}
                </span>
                                            |
                                            <span v-on:click="getfrid(teams.id), deleFrids()">{{ dele }}</span>
                                        </td>
                                    </tr>
                                </table>
                            </el-tab-pane>

                            <el-tab-pane label="闲置区" name="third" v-else-if="frilist.team == ''">
                                <table>
                                    <tr v-for="(teams, j) in frilist.links" :key="j">
                                        <td class="fridsname">{{ teams.name }}</td>
                                        <td class="fridslink"><a v-bind:href="origin" target="_blank">{{ teams.url
                                            }}</a></td>
                                        <td class="fridsoper">
                <span v-on:click="getfrid(teams.id, teams.name, teams.url, teams.img, teams.team, teams.description), toggle2()">
                  {{ operate }}
                </span>
                                            |
                                            <span v-on:click="getfrid(teams.id), deleFrids()">{{ dele }}</span>
                                        </td>
                                    </tr>
                                </table>
                            </el-tab-pane>
                            <el-tab-pane label="颜值区" name="second" v-else-if="frilist.team == '颜值区'">
                                <table>
                                    <tr v-for="(teams, j) in frilist.links" :key="j">
                                        <td class="fridsname">{{ teams.name }}</td>
                                        <td class="fridslink"><a v-bind:href="origin" target="_blank">{{ teams.url
                                            }}</a></td>
                                        <td class="fridsoper">
                <span v-on:click="getfrid(teams.id, teams.name, teams.url, teams.img, teams.team, teams.description), toggle2()">
                  {{ operate }}
                </span>
                                            |
                                            <span v-on:click="getfrid(teams.id), deleFrids()">{{ dele }}</span>
                                        </td>
                                    </tr>
                                </table>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                </div>
            </div>
        </div>
        <Bottom/>
    </div>
</template>

<script>
    import Navigation from "../components/Navigation";
    import Bottom from "../components/Bottom";


    export default {
        name: "Friend",
        components: {
            Navigation,
            Bottom,
        },
        data() {
            return {
                activeName: "second",
                frilists: [],
                operate: "编辑",
                dele: "删除",
                origin: "https://www.tsxygfy.cn",
                //新建好友链接
                fridsname: '',
                fridslink: '',
                fridslogo: '',
                fridsteam: '',
                fridsdes: '',

                display1: true,
                display2: false,
                fridsId: null,
                refridsname: '',
                //修改好友链接时获得的信息
                friendId: '',
                friendname: '',
                friendurl: '',
                friendimg: '',
                friendteam: '',
                frienddescription: ''
            }
        },
        created() {
            this.getFriends();
        },
        methods: {
            handleClick(tab, event) {
                // console.log(tab, event);
            },
            toggle1() {
                this.display1 = true;
                this.display2 = false;
            },
            toggle2() {
                this.display1 = false;
                this.display2 = true;
            },
            getfrid(Id, name, url, img, team, description) {
                this.friendId = Id;
                this.friendname = name;
                this.friendurl = url;
                this.friendimg = img;
                this.friendteam = team;
                this.frienddescription = description;
            },
            getFriends() {
                this.$axios({
                    method: "get",
                    url: "/links",
                })
                    .then(links => {
                        // console.log(links.data.data);
                        this.frilists = links.data.data;
                    })
                    .catch(error => {
                        alert("链接获取失败！");
                    });
            },
            postFriends() {
                this.$axios({
                    method: "post",
                    url: "/links",
                    data: {
                        name: this.fridsname,
                        url: this.fridslink,
                        img: this.fridslogo,
                        team: this.fridsteam,
                        description: this.fridsdes,
                    }
                })
                    .then(response => {
                        // console.log(response.data.data);
                        this.getFriends();
                    })
                    .catch(error => {
                        alert("标签创建失败！");
                    });
            },
            putReFrids() {
                this.$axios({
                    method: "put",
                    url: "/links/" + this.friendId,
                    data: {
                        id: this.friendId,
                        name: this.friendname,
                        url: this.friendurl,
                        img: this.friendimg,
                        team: this.friendteam,
                        description: this.frienddescription,
                    }
                })
                    .then(response => {
                        // console.log(response.data.data);
                        this.getFriends();
                    })
                    .catch(error => {
                        alert("更新链接失败！");
                    });
            },
            deleFrids() {
                this.$axios({
                    method: "delete",
                    url: "/links/" + this.friendId,
                })
                    .then(response => {
                        // console.log(response.data.data);
                        this.getFriends();
                    })
                    .catch(error => {
                        alert("删除链接失败！");
                    });
            },

        }
    };
</script>

