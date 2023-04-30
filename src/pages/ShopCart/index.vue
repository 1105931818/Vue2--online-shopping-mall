<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">版本</div>
        <div class="cart-th4">单价（元）</div>
        <div class="cart-th5">数量</div>
        <div class="cart-th6">小计（元）</div>
        <div class="cart-th7">操作</div>
      </div>
      <div class="cart-body">
        <ul class="cart-list" v-for="(cartInfo , index) in cartInfoList"
          :key="index">
          <li class="cart-list-con1">
            <input type="checkbox" name="chk_list" :checked="cartInfo.isChecked == 1" @change="changecheck(cartInfo , $event)">
          </li>
          <li class="cart-list-con2">
            <img :src="`./images/${index}.jpeg`">
            <div class="item-msg">{{ cartInfo.skuName }}</div>
          </li>
          <li class="cart-list-con3">
            <div class="item-txt">暗紫色，256GB</div>
          </li>
          <li class="cart-list-con4">
            <span class="price">{{ cartInfo.cartPrice }}.00</span>
          </li>
          <li class="cart-list-con5">
            <a href="javascript:void(0)" class="mins" @click="changeNum('minus', -1 , cartInfo)">-</a>
            <input autocomplete="off" type="text" :value="cartInfo.skuNum" class="itxt" @change="changeNum('change' , $event.target.value*1 , cartInfo)">
            <a href="javascript:void(0)" class="plus" @click="changeNum('add' , 1 , cartInfo)">+</a>
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{ cartInfo.cartPrice * cartInfo.skuNum }}</span>
          </li>
          <li class="cart-list-con7">
            <a class="sindelet" @click="deleteCart(cartInfo.skuId)">删除</a>
            <br>
            <a href="#none">移到收藏</a>
          </li>
        </ul>

      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input class="chooseAll" type="checkbox" :disabled="cartInfoList.length == 0" :checked="isAllCheck && cartInfoList.length > 0" @change="changeAll($event)">
        <span>全选</span>
      </div>
      <div class="option">
        <a @click="deleteAllCart">删除选中的商品</a>
        <a href="#none">移到我的关注</a>
        <a href="#none">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">已选择
          <span>{{ totalPrice.num }}</span>件商品</div>
        <div class="sumprice">
          <span>总价（不含运费） ：</span>
          <i class="summoney">{{ totalPrice.sum }}</i>
        </div>
        <div class="sumbtn">
          <router-link class="sum-btn" :to="{name:'Trade'}">结算</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import throttle from 'lodash/throttle'
import { mapGetters } from 'vuex'

  export default {
    name: 'ShopCart',
    data() {
      return {
        
      }
    },
    mounted(){
      this.getData()
    },
    methods:{

      getData(){
        this.$store.dispatch("shopOptions/getCartList").then((a) => {
          console.log(a)
        }).catch((error) => {
          console.log(error.message , "请求失败")
        })
      },


      async addShopCart(id , num){
        await this.$store.dispatch("detailOptions/addShopCart" , {skuId:id ,skuNum:num}).then((a) => {
          this.getData()
          console.log(a)
        }).catch((error) => {
          console.log(error.message , "请求失败")
        })
      },


      changeNum:throttle(function(value , item , cart){
          switch(value){
              case 'add':
                  item = 1
                  break
              case "change":
                  if(item == '' || isNaN(item) || item < 1){ 
                      item = 0
                  }else {
                      item = parseInt(item) - cart.skuNum
                  }
                  break
              case "minus":
                  item = cart.skuNum > 1 ? -1 : 0
                  break
          }
          this.addShopCart(cart.skuId , item)
      } , 1000),


      deleteCart:throttle(async function(id){
        await this.$store.dispatch("shopOptions/deleteCartItem" , id).then((a) => {
          console.log(a)
          this.getData()
        }).catch((error) => {
          console.log(error.message , "删除失败")
        })
      } , 1000),


      changecheck:throttle(async function(cart , event){
        let isChecked = event.target.checked ? 1 : 0
        await this.$store.dispatch("shopOptions/getCheckCart" , {skuId:cart.skuId , isChecked:isChecked}).then((a) => {
          console.log(a)
        }).catch((error) => {
          console.log(error.message , "修改失败")
        })
        this.getData()
      } , 1000),


      async deleteAllCart(){
        await this.$store.dispatch("shopOptions/deleteAllCheckedCart").then(() => {
          console.log("删除成功")
          this.getData()
        }).catch((error) => {
          console.log(error.message , "删除失败")
        })
        
      },

      changeAll:throttle(async function(event){
        let flag = event.target.checked ? 1 : 0
        await this.$store.dispatch("shopOptions/getAllCheck" , flag).then(() => {
          console.log("ok")
          this.getData()
        }).catch((error) => {
          console.log(error.message , "全选失败")
        })
      } , 1000)

    },
    computed:{
      ...mapGetters("shopOptions" , ["cartInfoList"]),
      totalPrice(){
        let sum = 0
        let num = 0

        this.cartInfoList.forEach(item => {
          sum += item.cartPrice * item.skuNum
          num += item.skuNum
        });

        return {sum , num}
      },
      isAllCheck(){
        return this.cartInfoList.every(item => item.isChecked == 1)
      }
    }
  }
</script>
.
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


  .cart {
    width: 80%;
    margin: 35px auto;

    h4 {
      margin: 9px 0;
      font-size: 22px;
      font-weight: 900;
      color: orangered;
      line-height: 21px;
      margin-bottom: 10px;
    }

    .cart-main {
      .cart-th {
        background: #f5f5f5;
        border: 1px solid #ddd;
        padding: 10px;
        overflow: hidden;

        &>div {
          float: left;
        }

        .cart-th1 {
          width: 5%;
          text-align: center;

          input {
            vertical-align: middle;
          }

          span {
            vertical-align: middle;
          }
        }

        .cart-th2 {
          width: 25%;
          text-align: center;
        }

        .cart-th3 {
          width: 20%;
          text-align: center;
        }

        .cart-th4,
        .cart-th5,
        .cart-th6,
        .cart-th7 {
          width: 12.5%;
          text-align: center;

        }
      }

      .cart-body {
        margin: 15px 0;
        border: 1px solid #ddd;

        .cart-list {
          padding: 10px;
          height: 100px;
          box-sizing: border-box;
          border-bottom: 1px solid #ddd;
          overflow: hidden;

          &>li {
            float: left;
            height: 100%;
            text-align: center;
          }

          .cart-list-con1 {
            width: 5%;

            input{
              margin-top: 30px;
            }
          }

          .cart-list-con2 {
            width: 25%;
            padding-left: 10px;

            img {
              width: 82px;
              height: 82px;
              float: left;
            }

            .item-msg {
              float: left;
              width: 150px;
              margin: 5px 15px;
              line-height: 18px;
              font-size: 14px;
            }
          }

          .cart-list-con3 {
            width: 19%;
            margin-top: 25px;

            .item-txt {
              text-align: center;
            }
          }

          .cart-list-con4 {
            width: 12.5%;
            margin-top: 25px;
          }

          .cart-list-con5 {
            width: 12.5%;
            margin-top: 15px;
            .mins {
              border: 1px solid #ddd;
              border-right: 0;
              float: left;
              color: #666;
              width: 6px;
              text-align: center;
              padding: 8px;
              margin-left: 30px;
            }

            input {
              border: 1px solid #ddd;
              width: 40px;
              height: 36.5px;
              float: left;
              text-align: center;
              font-size: 14px;
            }

            .plus {
              border: 1px solid #ddd;
              border-left: 0;
              float: left;
              color: #666;
              width: 6px;
              text-align: center;
              padding: 8px;
            }
          }

          .cart-list-con6 {
            width: 12.5%;
            margin-top: 25px;

            .sum {
              font-size: 16px;
            }
          }

          .cart-list-con7 {
            width: 12.5%;
            margin-top: 15px;

            a {
              color: #666;
              font-size: 15px;
            }
          }
        }
      }
    }

    .cart-tool {
      overflow: hidden;
      border: 1px solid #ddd;
      padding: 10px;

      .select-all {
        padding: 10px;
        overflow: hidden;
        float: left;
        margin-left: 5px;

        span {
          vertical-align: middle;
          margin-left: 5px;
        }

        input {
          vertical-align: middle;
        }
      }

      .option {
        padding: 10px;
        overflow: hidden;
        float: left;

        a {
          float: left;
          padding: 0 10px;
          color: #666;
          margin-right: 5px;
        }
      }

      .money-box {
        float: right;

        .chosed {
          line-height: 26px;
          float: left;
          padding:10px;
        }

        .sumprice {
          width: 280px;
          line-height: 26px;
          float: left;
          padding:10px;

          .summoney {
            color: #c81623;
            font-size: 16px;
          }
        }

        .sumbtn {
          float: right;

          a {
            display: block;
            position: relative;
            width: 108px;
            height: 40px;
            line-height: 40px;
            color: #fff;
            text-align: center;
            font-size: 18px;
            font-family: "Microsoft YaHei";
            background: #e1251b;
            overflow: hidden;
          }
        }
      }
    }
  }
</style>