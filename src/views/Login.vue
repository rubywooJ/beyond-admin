<style scope>
    .login-body {
        width: 320px;
        height: 300px;
        position: absolute;
        border-radius: 5px;
        text-align: center;
        border: 1px solid #DCDFE6;
        box-shadow: 0 0 25px #DCDFE6;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: 200px auto;
    }

    .login-body .welcome {
        font-size: 32px;
        /* color: #ffdab9; */
        /* 蓝色主题 */
        color: #9370db;
        padding-top: 30px;
    }

    .login-in {
        border: 1px solid #ddd;
        width: 250px;
        height: 30px;
        margin: 28px auto;
        border-radius: 4px;
        background-color: #e5f0fe;
        color: #cdcdcd;
    }

    .login-in input {
        border: none;
        background-color: #e5f0fe;
        display: inline-block;
        margin: 8px 10px;
        outline: none;
        color: #1d1d1d;
    }

    .login-x {
        background-color: #0092ff;
        margin-top: 30px;
    }

    .login-in button {
        background-color: #0092ff;
        border: none;
        font-size: 15px;
        color: #fff;
        margin-top: 4px;
    }

    input::-webkit-input-placeholder,
    textarea::-webkit-input-placeholder {
        color: #bebebe;
    }

    input:-moz-placeholder,
    textarea:-moz-placeholder {
        color: #bebebe;
    }

    input::-moz-placeholder,
    textarea::-moz-placeholder {
        color: #bebebe;
    }

    input:-ms-input-placeholder,
    textarea:-ms-input-placeholder {
        color: #bebebe;
    }

    .hint {
        display: inline-block;
        position: relative;
        bottom: 19px;
        left: 119px;
        color: #c2c0c0;
    }

    .paswd {
        float: right;
        margin: 5px;
    }
</style>

<template>
    <div>
        <div class="login-body">
            <div class="welcome">
                <label for>Beyond</label>
            </div>
            <div class="login-main">
                <div class="login-in">
                    <i class="el-icon-user"></i>
                    <input
                            class="user"
                            type="text"
                            placeholder="测试用户名/邮箱 beyond"
                            onfocus="this.placeholder=''"
                            onblur="this.placeholder='测试用户名/邮箱 beyond'"
                            v-model="ruleForm.username"
                    />
                </div>
                <div class="login-in">
                    <i class="el-icon-lock"></i>
                    <input
                            class="code"
                            type="password"
                            placeholder="测试密码 123456"
                            onfocus="this.placeholder=''"
                            onblur="this.placeholder='密码123456'"
                            v-model="ruleForm.password"
                    />
                    <el-checkbox class="paswd" v-model="checked">记住密码</el-checkbox>
                </div>
                <div class="login-in login-x" v-on:click="submitForm('ruleForm')">
                    <button>登 录</button>
                </div>
            </div>
            <div class="hint">
                <i class="iconfont icon-jtishi"></i>
            </div>
        </div>
    </div>

</template>

<script>
    import adminApi from "../api/admin";

    export default {
        name: 'Login',
        data() {
            return {
                ruleForm: {
                    username: "",
                    password: ""
                },
                checked: false
            };
        },
        mounted() {
            this.getCookie();
        },
        methods: {
            submitForm(formName) {
                const self = this;
                //判断复选框是否被勾选 勾选则调用配置cookie方法
                if (self.checked === true) {
                    //传入账号名，密码，和保存天数3个参数
                    self.setCookie(self.ruleForm.username, self.ruleForm.password, 7);
                } else {
                    //未保存账号密码
                    console.log("清空Cookie");
                    self.clearCookie();
                }

                adminApi.login(this.ruleForm.username, this.ruleForm.password)
                    .then(response => {
                        //定义一个accessToken接收后台返回的access_token值
                        var accessToken = response.data.data.access_token;
                        var refreshToken = response.data.data.refresh_token;
                        //localStorage.setItem设置本地数据
                        localStorage.setItem("accessToken", accessToken);
                        localStorage.setItem("refreshToken", accessToken);
                        //   console.log(response);
                        this.$router.push("HomePage");
                    });
            },
            //设置cookie
            setCookie(c_name, c_pwd, exdays) {
                var exdate = new Date(); //获取时间
                exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
                //字符串拼接cookie
                window.document.cookie =
                    "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
                window.document.cookie =
                    "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
            },
            //读取cookie
            getCookie: function () {
                if (document.cookie.length > 0) {
                    var arr = document.cookie.split("; "); //这里显示的格式需要切割一下自己可输出看下
                    for (var i = 0; i < arr.length; i++) {
                        var arr2 = arr[i].split("="); //再次切割
                        //判断查找相对应的值
                        if (arr2[0] === "userName") {
                            this.ruleForm.username = arr2[1]; //保存到保存数据的地方
                        } else if (arr2[0] === "userPwd") {
                            this.ruleForm.password = arr2[1];
                        }
                    }
                }
            },
            //清除cookie
            clearCookie: function () {
                this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
            }
        }
    };
</script>

