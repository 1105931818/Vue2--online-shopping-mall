<template>
  <div class="login-container">
    <!-- 登录 -->
    <div class="login-wrap">
      <div class="login">
        <div class="loginform">
          <ul class="tab clearFix">
            <li>
              <a href="##" style="border-right: 0;">扫描登录</a>
            </li>
            <li>
              <a href="##" class="current">账户登录</a>
            </li>
          </ul>

          <div class="content">
            <form action="##">
              <div class="input-text clearFix">
                <span></span>
                <input type="text" placeholder="邮箱/用户名/手机号" 
                  v-model="phone"
                  name="phone"
                  v-validate="{required:true , regex:/^1\d{10}$/}"
                  :class="{invalid:errors.has('phone')}">
                <p>{{ errors.first("phone") }}</p>
              </div>
              <div class="input-text clearFix">
                <span class="pwd"></span>
                <input type="password" placeholder="请输入密码" 
                  v-model="password"
                  name="password"
                  v-validate="{required:true , regex:/^[0-9A-Za-z]{6,18}$/}"
                  :class="{invalid:errors.has('password')}">
                <p>{{ errors.first("password") }}</p>
              </div>
              <div class="setting clearFix">
                <label class="checkbox inline">
                  <input name="m1" type="checkbox" value="2" checked="">
                  自动登录
                </label>
                <span class="forget">忘记密码？</span>
              </div>
              <button class="btn" @click.prevent="userLogin" :disabled="(phone == '' && password == '')">登&nbsp;&nbsp;录</button>
            </form>

            <div class="call clearFix">
              <ul>
                <li><img src="./images/qq.png" alt=""></li>
                <li><img src="./images/sina.png" alt=""></li>
                <li><img src="./images/ali.png" alt=""></li>
                <li><img src="./images/weixin.png" alt=""></li>
              </ul>
              <router-link class="register" to="/register">立即注册</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
 
  </div>
</template>

<script>
import throttle from 'lodash/throttle'

  export default {
    name: 'app_Login',
    data() {
      return {
        phone:'',
        password:''
      }
    },
    methods:{
       userLogin:throttle(async function(){

        const {phone , password} = this
        if(phone && password){
            await this.$store.dispatch("loginOptions/getUserLogin" , {phone , password}).then((a) => {
              
              let toPath = this.$route.query.redirect || "/home"

              this.$router.push({
                path:toPath
              })
              
              console.log(a)
            }).catch((error) => {
              alert(error.message)
            })
        }
        
      } , 1000)
    }
  }
</script>

<style lang="less" scoped>

a {
    text-decoration: none;
    color: #000000;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

p , h1 , h2 , h3 , h4 , h5 , h6{
    margin: 0;
    padding: 0;
}

  .login-container {
    .login-wrap {
      height: 587px;
      background-color: orangered;
      margin-top: 20px;

      .login {
        width: 1200px;
        height: 487px;
        margin: 0 auto;
      }

      .loginform {
        width: 420px;
        height: 466px;
        box-sizing: border-box;
        background: #fff;
        float: right;
        top: 65px;
        position: relative;
        padding: 20px;

        .tab {

          li {
            width: 50%;
            float: left;
            text-align: center;

            a {
              width: 100%;
              display: block;
              height: 50px;
              line-height: 50px;
              font-size: 20px;
              font-weight: 700;
              color: #333;
              border: 1px solid #ddd;
              box-sizing: border-box;
              text-decoration: none;

            }

            .current {
              border-bottom: none;
              border-top-color: #28a3ef;
              color: #e1251b;
            }
          }
        }

        .content {
          width: 380px;
          height: 426px;
          box-sizing: border-box;
          border: 1px solid #ddd;
          border-top: none;
          padding: 18px;

          form {
            margin: 15px 0 18px 0;
            font-size: 12px;
            line-height: 18px;
            margin-top: 70px;

            .input-text {
              margin-bottom: 25px;
              height: 50px;

              span {
                float: left;
                width: 42px;
                height: 42px;
                border: 1px solid #ccc;
                box-sizing: border-box;
                border-radius: 2px 0 0 2px;
              }

              .pwd {
                background-position: -72px -201px;
              }

              input {
                width: 297px;
                height: 42px;
                box-sizing: border-box;
                border: 1px solid #ccc;
                border-left: none;
                float: left;
                padding-top: 6px;
                padding-bottom: 6px;
                font-size: 14px;
                line-height: 22px;
                padding-right: 8px;
                padding-left: 8px;

                border-radius: 0 2px 2px 0;
                outline: none;
              }

              p{
                margin-left: 50px;
                color: orangered;
              }
            }

            .setting {
              height: 40px;
              label {
                float: left;
              }

              .forget {
                float: right;
              }
            }

            .btn {
              background-color: orangered;
              padding: 6px;
              border-radius: 0;
              font-size: 16px;
              font-family: 微软雅黑;
              word-spacing: 4px;
              border: 1px solid orangered;
              color: #fff;
              width: 100%;
              height: 40px;
              margin-top: 25px;
              outline: none;
            }
          }

          .call {
            margin-top: 30px;

            ul {
              float: left;

              li {
                float: left;
                margin-right: 5px;
              }
            }

            .register {
              float: right;
              font-size: 15px;
              line-height: 38px;
            }

            .register:hover {
              color: #4cb9fc;
              text-decoration: underline;
            }
          }

        }
      }
    }

    .copyright {
      width: 1200px;
      margin: 0 auto;
      text-align: center;
      line-height: 24px;

      ul {
        li {
          display: inline-block;
          border-right: 1px solid #e4e4e4;
          padding: 0 20px;
          margin: 15px 0;
        }
      }
    }

  }
</style>