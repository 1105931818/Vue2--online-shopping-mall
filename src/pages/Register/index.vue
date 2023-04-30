<template>
    <div class="register">
        <div class="register_wrapper">
            <div class="register_top">
                <p>注册新用户</p>
                <span>已有账号，去 <router-link to="/login">登录</router-link></span>
            </div>
            <form>
                <div class="register_cont">
                    <div class="cont_item">
                        <span>手机号：</span>
                        <input type="text" placeholder="请输入手机号" 
                            v-model="phone"
                            name="phone"
                            v-validate="{required:true , regex:/^1\d{10}$/}"
                            :class="{invalid:errors.has('phone')}" />
                           
                        <p>{{ errors.first("phone") }}</p>
                    </div>

                    <div class="cont_item">
                        <span>验证码：</span>
                        <input type="text" placeholder="请输入验证码" 
                            v-model="code"
                            name="code"
                            v-validate="{required:true , regex:/^\d{6}$/}"
                            :class="{invalid:errors.has('code')}">
                         <button
                            @click.prevent="sendCode($event)">获取验证码</button>
                        <p>{{ errors.first("code") }}</p>
                    </div>

                    <div class="cont_item">
                        <span>登录密码：</span>
                        <input type="password" placeholder="请输入密码" 
                            v-model="password"
                            name="password"
                            v-validate="{required:true , regex:/^[0-9A-Za-z]{6,18}$/}"
                            :class="{invalid:errors.has('password')}">
                        <p>{{ errors.first("password") }}</p>
                    </div>

                    <div class="cont_item">
                        <span>确认密码：</span>
                        <input type="password" placeholder="请确认密码" 
                            v-model="password1"
                            name="password1"
                            v-validate="{required:true , is:password}"
                            :class="{invalid:errors.has('password1')}">
                        <p>{{ errors.first("password1") }}</p>
                    </div>

                    <div class="cont_box">
                        <input type="checkbox" v-model="agree"
                            name="isCheck"
                            v-validate="{required:true , 'agree':true}"
                            :class="{invalid:errors.has('isCheck')}">
                        <span>同意协议并注册《淘宝用户协议》</span>
                        <p>{{ errors.first("isCheck") }}</p>
                    </div>
                    <button class="btn" :disabled="!agree" @click.prevent="userRegister">确认注册</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

export default {
    name: "app_register",
    data() {
        return {
            phone: "",
            code: "",
            password: "",
            password1: "",
            agree: false
        }
    },
    methods: {
        //获取验证码
        async sendCode(event) {
            if (this.phone != "" && this.phone.length == 11) {
                event.target.innerHTML = `60秒后重新发送`
                event.target.disabled = true
                await this.$store.dispatch("loginOptions/getUserCode", this.phone).then((a) => {
                    this.code = this.$store.state.loginOptions.code
                    console.log(a)
                    let time = 59
                    let n = setInterval(() => {
                        event.target.innerHTML = `${time}秒后重新发送`
                        time--
                    }, 1000)
                    setTimeout(() => {
                        clearInterval(n)
                        event.target.disabled = false
                        event.target.innerHTML = "获取验证码"
                    }, 60000)
                }).catch((error) => {
                    console.log(error.message, "发送失败")
                    this.phone = ""
                })

            } else {
                alert("请输入正规手机号")
                this.phone = ""
            }

        },

        //完成注册
        async userRegister() {
            //全部表单验证成功
            const success = await this.$validator.validateAll()
            if(success){
                const { phone, code, password } = this
                await this.$store.dispatch("loginOptions/getUserRegister", { phone, code, password }).then(() => {
                    this.$router.push({
                        name: "Login"
                    })
                }).catch((error) => {
                    alert(error.message, "注册失败")
                })
            }else{
                this.phone = ""
                this.code = ""
                this.password = ""
                this.password1 = ""
                this.agree = false
                alert("请输入正确格式")
            }
            
        },


    }
}

</script>

<style scoped lang="less">
.register {
    width: 100%;
    height: 550px;
    margin-bottom: 65px;

    .register_wrapper {
        width: 80%;
        height: 100%;
        margin: auto;
        border: 1px solid rgb(234, 233, 233);

        .register_top {
            width: 100%;
            height: 40px;
            background-color: rgb(234, 233, 233);
            display: flex;
            justify-content: space-between;
            align-items: center;

            p {
                margin: 0;
                padding: 0;
                margin-left: 20px;
                font-weight: 600;
            }

            span {
                font-size: 14px;
                font-weight: 500;
                margin-right: 20px;

                a {
                    text-decoration: none;
                    color: orangered;
                }
            }
        }

        .register_cont {
            width: 520px;
            height: 450px;
            margin: auto;
            margin-top: 40px;

            .cont_item {
                width: 100%;
                height: 70px;

                p {
                    margin: 0;
                    padding: 0;
                    color: orangered;
                    font-size: 12px;
                    margin-left: 90px;
                }

                span {
                    display: inline-block;
                    width: 80px;
                    text-align: right;
                }

                input {
                    width: 300px;
                    height: 35px;
                    font-size: 16px;
                }

                button {
                    width: 110px;
                    height: 38px;
                    margin-left: 10px;
                    font-size: 12px;
                }
            }

            .cont_box {
                width: 400px;
                height: 50px;
                margin-left: 80px;

                p {
                    margin: 0;
                    padding: 0;
                    font-size: 12px;
                    color: orangered;
                    margin-left: 10px;
                }
            }

            .btn {
                width: 300px;
                height: 40px;
                margin-top: 10px;
                margin-left: 80px;
                background-color: orangered;
                border: none;
                color: white;
                font-size: 16px;
            }
        }
    }
}
</style>