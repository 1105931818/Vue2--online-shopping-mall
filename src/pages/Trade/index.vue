<template>
  <div class="trade-container">
    <h3 class="title">填写并核对订单信息</h3>
    <div class="content">
      <h5 class="receive">收件人信息</h5>
      <div class="address clearFix" v-for="(item, index) in useritem" :key="index">
        <span class="username" :class="{ selected: item.isDefault == 1 }">{{ item.consignee }}</span>
        <p @click="changeDefault(item, useritem)">
          <span class="s1">{{ item.userAddress }} &nbsp;&nbsp;&nbsp; </span>
          <span class="s2">{{ item.consigneeTel }}</span>
          <span class="s3" v-show="item.isDefault == 1">默认地址</span>
        </p>
      </div>
      <div class="line"></div>
      <h5 class="pay">支付方式</h5>
      <div class="address clearFix">
        <span class="username selected">在线支付</span>
        <span class="username" style="margin-left:5px;">货到付款</span>

      </div>
      <div class="line"></div>
      <h5 class="pay">送货清单</h5>
      <div class="way">
        <h5>配送方式</h5>
        <div class="info clearFix">
          <span class="s1">天天快递</span>
          <p>配送时间：预计8月10日（周三）09:00-15:00送达</p>
        </div>
      </div>
      <div class="detail">
        <h5>商品清单</h5>
        <ul class="list clearFix" v-for="(detail, index) in detailArrayList" :key="index">
          <li>
            <img :src="`./images/${index}.jpeg`" alt="">
          </li>
          <li class="link">
            <p>{{ detail.skuName }}</p>
            <h4>7天无理由退货</h4>
          </li>
          <li>
            <h3>￥{{ detail.orderPrice }}.00</h3>
          </li>
          <li>X{{ detail.skuNum }}</li>
          <li>有货</li>
        </ul>
      </div>
      <div class="bbs">
        <h5>买家留言：</h5>
        <textarea placeholder="建议留言前先与商家沟通确认" class="remarks-cont" v-model="msg"></textarea>

      </div>
      <div class="line"></div>
      <div class="bill">
        <h5>发票信息：</h5>
        <div>普通发票（电子） 个人 明细</div>
        <h5>使用优惠/抵用</h5>
      </div>
    </div>
    <div class="money clearFix">
      <ul>
        <li>
          <b><i>{{ tradelist.totalNum }}</i>件商品，总商品金额</b>
          <span>¥{{ tradelist.totalAmount }}.00</span>
        </li>
        <li>
          <b>返现：</b>
          <span>0.00</span>
        </li>
        <li>
          <b>运费：</b>
          <span>0.00</span>
        </li>
      </ul>
    </div>
    <div class="trade">
      <div class="price">应付金额: <span>¥{{ tradelist.totalAmount }}.00</span></div>
      <div class="receiveInfo">
        寄送至:
        <span>{{ userDefault.userAddress }}</span>
        收货人：<span>{{ userDefault.consignee }}</span>
        <span>{{ userDefault.consigneeTel }}</span>
      </div>
    </div>
    <div class="sub clearFix">
      <a class="subBtn" @click="SubmitOrder">提交订单</a>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapState } from 'vuex'

export default {
  name: 'app_Trade',
  data() {
    return {
      msg: "",
      orderId:""
    }
  },
  mounted() {

    this.$store.dispatch("tradeOptions/getUserAdderss").then(async (a) => {
      console.log(a)
      await this.$store.dispatch("tradeOptions/getUserItem").then((b) => {
        console.log(b)
      }).catch((error) => {
        console.log(error.message)
      })
    }).catch((error) => {
      console.log(error.message)
    })


    this.$store.dispatch("tradeOptions/getTradeList").then((a) => {
      console.log(a)
    }).catch((error) => {
      console.log(error.message)
    })
  },
  computed: {
    ...mapGetters("tradeOptions", ["detailArrayList"]),

    ...mapState("tradeOptions", ["useritem", "tradelist"]),

    userDefault() {
      return this.useritem.find(item => item.isDefault == 1) || {}
    }
  },
  methods: {
    changeDefault(item, useritem) {
      useritem.forEach(items => {
        items.isDefault = 0
      });
      item.isDefault = 1
    },

    async SubmitOrder() {
      const { tradeNo } = this.tradelist
      const data = {
        consignee: this.userDefault.consignee,
        consigneeTel: this.userDefault.consigneeTel,
        deliveryAddress: this.userDefault.userAddress,
        paymentWay: "ONLINE",
        orderComment: this.msg,
        orderDetailList: this.detailArrayList
      }

      const result = await this.$API.reqSubmitOrder(tradeNo , data)
      if(result.code == 200){
        this.orderId = result.data
        this.$router.push({name:"Pay" , query:{
          orderId:this.orderId
        }})
      }else{
        alert(result.message)
      }
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

.trade-container {
  width: 100%;

  .title {
    width: 80%;
    margin: 0 auto;
    margin-top: 30px;
    font-size: 18px;
    line-height: 21px;
  }

  .content {
    width: 80%;
    margin: 15px auto 0;
    border: 1px solid rgb(221, 221, 221);
    padding: 30px;
    box-sizing: border-box;

    .receive,
    .pay {
      line-height: 36px;
      margin: 18px 0;
      font-size: 16px;
    }

    .address {
      padding-left: 20px;
      margin-bottom: 15px;
      height: 40px;
      font-size: 14px;

      .username {
        float: left;
        width: 100px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border: 1px solid #ddd;
        position: relative;
      }

      .username::after {
        content: "";
        display: none;
        width: 13px;
        height: 13px;
        position: absolute;
        right: 0;
        bottom: 0;
        background: url(./images/choosed.png) no-repeat;
      }

      .username.selected {
        border-color: #e1251b;
        margin-right: 15px;
      }

      .username.selected::after {
        display: block;
      }

      p {
        width: 660px;
        float: left;
        line-height: 30px;
        margin-left: 10px;
        padding-left: 5px;
        cursor: pointer;

        .s1 {
          float: left;
          width: 350px;
          margin-left: 20px;

        }

        .s2 {
          float: left;
          width: 100px;
          margin: 0 5px;
        }

        .s3 {
          float: left;
          width: 66px;
          height: 24px;
          line-height: 24px;
          margin-left: 10px;
          background-color: #878787;
          color: #fff;
          margin-top: 3px;
          text-align: center;
        }
      }

      p:hover {
        background-color: #ddd;
      }
    }

    .line {
      height: 1px;
      background-color: #ddd;
    }

    .way {
      width: 90%;
      height: 110px;
      background: #f4f4f4;
      padding: 15px;
      margin: 0 auto;

      h5 {
        line-height: 50px;
        font-size: 16px;
      }

      .info {
        margin-top: 20px;
        font-size: 14px;

        .s1 {
          float: left;
          border: 1px solid #ddd;
          width: 130px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          margin-right: 20px;
        }

        p {
          line-height: 30px;
        }
      }
    }

    .detail {
      width: 90%;

      background: #feedef;
      padding: 15px;
      margin: 2px auto 0;

      h5 {
        line-height: 50px;
        font-size: 16px;
      }

      .list {
        display: flex;
        justify-content: space-between;

        li {
          line-height: 30px;
          margin-bottom: 15px;
          font-size: 14px;

          img {
            width: 80px;
            height: 80px;
          }

          p {
            margin-bottom: 20px;
          }

          h4 {
            color: orangered;
            font-weight: 400;

          }

          h3 {
            color: orangered;
          }
        }

        .link {

          width: 600px;

        }

      }
    }

    .bbs {
      margin-bottom: 15px;

      h5 {
        line-height: 50px;
        font-size: 16px;
      }

      textarea {
        width: 100%;
        height: 80px;
        border-color: #e4e2e2;
        line-height: 1.8;
        outline: none;
        resize: none;
      }
    }

    .bill {
      h5 {
        line-height: 50px;
        font-size: 16px;
      }

      div {
        padding-left: 15px;
        font-size: 14px;
      }
    }
  }

  .money {
    width: 80%;
    height: 100px;
    margin: 20px auto;

    ul {
      width: 240px;
      margin-right: 15px;
      float: right;

      li {
        line-height: 30px;
        display: flex;
        font-size: 14px;
        justify-content: space-between;

        i {
          color: red;
          margin-right: 10px;
        }

        span {
          color: orangered;
          font-size: 16px;
          font-weight: 900;
        }
      }
    }
  }

  .trade {
    box-sizing: border-box;
    width: 80%;
    height: 80px;
    padding: 10px;
    margin: 10px auto;
    text-align: right;
    background-color: #f4f4f4;
    border: 1px solid #ddd;

    div {
      line-height: 30px;
    }

    .price span {
      color: orangered;
      font-weight: 700;
      font-size: 14px;
    }

    .receiveInfo {
      color: #999;
      font-size: 14px;
    }
  }

  .sub {
    width: 80%;
    height: 60px;
    margin: 20px auto;

    .subBtn {
      float: right;
      width: 184px;
      height: 50px;
      font: 700 18px "微软雅黑";
      line-height: 50px;
      text-align: center;
      color: #fff;
      background-color: orangered;

    }
  }

}</style>