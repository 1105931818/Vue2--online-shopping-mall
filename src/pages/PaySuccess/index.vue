<template>
  <div class="paysuccess">

    <div class="success" v-show="isPay == 2">
      <h3>
        <img src="./images/right.png" width="48" height="48">
        恭喜您，支付成功啦！
      </h3>
      <div class="paydetail">
        <p class="button">
          <router-link class="btn-look" :to="name = 'Center'">查看订单</router-link>
          <router-link class="btn-goshop" :to="name = 'Home'">继续购物</router-link>
        </p>
      </div>
    </div>

    <div class="pay" v-show="isPay == 1">
      <h3>微信扫码支付</h3>

      <div class="pay_img">
        <img :src="imgUrl" alt="">
      </div>
      <div class="pay_btn">
        <button>支付遇见问题</button>
        <button @click="payShop">已支付成功</button>
      </div>
    </div>

    <div class="nopay" v-show="isPay == 3">

      <h3>XXX支付失败XXX</h3>

      <button @click="toShop">返回购物车</button>

    </div>
  </div>
</template>

<script>

import QRCode from "qrcode"
import { mapGetters } from "vuex"

export default {
  name: 'app_PaySuccess',
  data() {
    return {
      isPay: 1,
      imgUrl: "",
      timer: null,
      code: "",
      i: 15
    }
  },
  methods: {
    //生成二维码
    async getUrl() {
      this.imgUrl = await QRCode.toDataURL(this.$route.params.codeUrl)
    },

    paystatus() {

    },

    toShop() {
      this.$router.push({
        name: "ShopCart"
      })
    },

    payShop() {
      this.detailArrayList.forEach(async item => {
        await this.$API.deleteCart(item.skuId)
      })
      /* if(this.code == 200){
        clearInterval(this.timer)
        this.timer = null
        this.isPay = 2
      } */
      clearInterval(this.timer)
      this.timer = null
      this.isPay = 2
    }
  },
  computed:{
    ...mapGetters("tradeOptions", ["detailArrayList"])
  },
  mounted() {
    this.getUrl()

    if (!this.timer) {
      this.timer = setInterval(async () => {
        if (this.i > 1) {
          this.i--
          let result = await this.$API.reqPayStatus(this.$route.params.orderId)
          if (result.code == 200) {
            clearInterval(this.timer)
            this.isPay = 2
            this.code = result.code
          }
        } else {
          this.isPay = 3
          this.timer = true
          clearInterval(this.timer)

        }
      }, 1000)
    }
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

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

.paysuccess {
  margin: 20px auto;
  padding: 25px;
  border: 1px solid rgb(211, 211, 211);
  width: 80%;

  .success {
    width: 500px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;

    h3 {
      margin: 20px 0;
      font-weight: 700;
      font-size: 20px;
      line-height: 30px;

      img {
        max-width: 100%;
        vertical-align: middle;
        border: 0;
        margin-right: 14px;
      }
    }

    .paydetail {
      font-size: 15px;
      margin-top: 100px;

      .button {
        margin: 30px 0;
        line-height: 26px;

        a {
          display: inline-block;
          box-sizing: border-box;
          text-align: center;
          vertical-align: middle;
          cursor: pointer;
          border-radius: 2px;
          user-select: none;
          font-size: 18px;
          padding: 8px 60px;
          line-height: 22px;
          text-decoration: none;

          &.btn-look {
            margin-right: 25px;
            color: #fff;
            background-color: orangered;
            border: 1px solid orangered;
          }

          &.btn-goshop {
            color: #666;
            background-color: #eee;
            border: 1px solid #e1e1e1;
          }
        }
      }
    }
  }

  .pay {
    width: 500px;
    margin: auto;
    background-color: rgb(244, 244, 244);
    padding: 20px;
    text-align: center;
    box-sizing: border-box;
    border: 1px solid orangered;

    h3 {
      font-weight: 700;
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 30px;
    }

    .pay_img {
      margin: 30px auto;
      width: 200px;
      height: 200px;

      img {
        width: 200px;
        height: 200px;
      }
    }

    .pay_btn {
      height: 80px;
      padding: 20px;
      box-sizing: border-box;

      button {
        width: 180px;
        height: 40px;
        background-color: rgb(215, 215, 215);
        border: none;
        font-size: 16px;
        color: #666;

        &:last-child {
          margin-left: 30px;
          background-color: orangered;
          color: white;
        }
      }
    }
  }

  .nopay {
    width: 500px;
    margin: auto;
    text-align: center;
    padding: 40px 20px;
    border: 1px solid orangered;

    h3 {
      margin: 20px 0;
      font-weight: 700;
      font-size: 20px;
      line-height: 30px;
    }

    button {
      width: 180px;
      height: 40px;
      margin: auto;
      margin-top: 50px;
      border: none;
      background-color: orangered;
      color: white;
      font-size: 16px;

    }

  }
}</style>