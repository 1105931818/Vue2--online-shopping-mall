<template>
  <!-- 右侧内容 -->
  <div class="order-right">
    <div class="order-content">
      <div class="title">
        <h3>我的订单</h3>
      </div>
      <div class="chosetype">
        <table>
          <thead>
            <tr>
              <th width="29%">商品</th>
              <th width="31%">订单详情</th>
              <th width="13%">收货人</th>
              <th>金额</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="orders">

        <table class="order-item" v-for="(orders , index) in myOrder.records"
          :key="index">
          <thead>
            <tr>
              <th colspan="5">
                <span class="ordertitle">{{ orders.createTime }} &nbsp;&nbsp;&nbsp;&nbsp; 订单编号：{{ orders.outTradeNo }} <span
                    class="pull-right delete"><img src="../images/delete.png"></span></span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td width="58%" >
                <div  class="typographic" v-for="(order , index) in orders.orderDetailList"
                    :key="index">
                  <img :src="`./images/${index}.jpeg`">
                  <a class="block-text">{{ order.skuName }}</a>
                  <span>x{{ order.skuNum }}</span>
                  <a class="service">售后申请</a>
                </div>
              </td>
              <td :rowspan="orders.orderDetailList.length" width="9%" class="center">{{ orders.consignee }}</td>
              <td :rowspan="orders.orderDetailList.length" width="13%" class="center">
                <ul class="unstyled">
                  <li>总金额¥{{ orders.totalAmount }}.00</li>
                  <li>在线支付</li>

                </ul>
              </td>
              <td :rowspan="orders.orderDetailList.length" width="9%" class="center">
                <a href="#" class="btn">{{ orders.orderStatusName }} </a>
              </td>
              <td :rowspan="orders.orderDetailList.length" width="13%" class="center">
                <ul class="unstyled">
                  <li>
                    <a href="mycomment.html" target="_blank">评价|晒单</a>
                  </li>

                </ul>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
      <div class="choose-order">
        <div class="pagination">
          <ul>
            <li class="prev disabled">
              <a  @click="addPage(page - 1)">«上一页</a>
            </li>
            <li class="page" :class="{actived: page == 1}" v-if="Pages.start > 1">
              <a  @click="addPage(1)">1</a>
            </li>
            <li v-if="Pages.start > 2">
              <span>...</span>
            </li>
            <li class="page"  v-for="(pageNo , index) in conts"
              :key="index"
              :class="{actived:pageNo == page}">

              <a  @click="addPage(pageNo)">{{ pageNo }}</a>

            </li>
    
            <li v-if="Pages.end < myOrder.pages - 1">
              <span>...</span>
            </li>
            <li class="page" :class="{actived:page == myOrder.pages}">
              <a  @click="addPage(myOrder.pages)" v-if="Pages.end < myOrder.pages">{{ myOrder.pages }}</a>
            </li>

            <li class="next disabled">
              <a  @click="addPage(page + 1)">下一页»</a>
            </li>
          </ul>
          <div>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;共{{ myOrder.pages }}页，&nbsp;&nbsp;&nbsp;&nbsp;{{ myOrder.total }}个订单</span>
          </div>
        </div>
      </div>
    </div>
    <!--猜你喜欢-->
    <div class="like">
      <h4 class="kt">猜你喜欢</h4>
      <ul class="like-list">
        <li class="likeItem">
          <div class="p-img">
            <img :src="`./images/0.jpeg`" />
          </div>
          <div class="attr">
            <em>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</em>
          </div>
          <div class="price">
            <em>¥</em>
            <i>3699.00</i>
          </div>
          <div class="commit">已有6人评价
          </div>
        </li>
        <li class="likeItem">
          <div class="p-img">
            <img :src="`./images/2.jpeg`" />
          </div>
          <div class="attr">
            Apple苹果iPhone 6s/6s Plus 16G 64G 128G
          </div>
          <div class="price">
            <em>¥</em>
            <i>4388.00</i>
          </div>
          <div class="commit">已有700人评价
          </div>
        </li>
        <li class="likeItem">
          <div class="p-img">
            <img :src="`./images/4.jpeg`" />
          </div>
          <div class="attr">DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本
          </div>
          <div class="price">
            <em>¥</em>
            <i>4088.00</i>
          </div>
          <div class="commit">已有700人评价
          </div>
        </li>
        <li class="likeItem">
          <div class="p-img">
            <img :src="`./images/5.jpeg`" />
          </div>
          <div class="attr">DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本
          </div>
          <div class="price">
            <em>¥</em>
            <i>4088.00</i>
          </div>
          <div class="commit">已有700人评价
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import throttle from 'lodash/throttle'


export default {
  name: "app_myorder",
  data() {
    return {
      //当前第几页
      page:1,

      //每一页展示的数据
      limit:3,

      //连续页码
      cont:3,

      myOrder:{}
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    async getData(){
      const {page , limit} = this
      let result = await this.$API.reqAuthOrder(page , limit)
      if(result.code == 200){
          this.myOrder = result.data
      }
    },


    addPage:throttle(function(value){
      if(value > 0){
        this.page = value
        this.getData()
      }else{
        this.page = 1
      }
     
    } , 1000)
  },

  computed:{
     Pages(){
      let start
      let end

      if(this.cont > this.myOrder.pages){
        start = 1
        end = this.myOrder.pages
      }else{
        start = this.page - Math.floor(this.cont / 2)
        end = this.page + Math.floor(this.cont / 2)
        if(start < 1){
          start = 1
          end = this.cont
        }
        if(end > this.myOrder.pages){
          start = this.myOrder.pages - this.cont + 1
          end = this.myOrder.pages
        }
      }

      return {start , end}
     },


     conts(){
      let arr = []
      for(let i = 0 ; i < (this.Pages.end - this.Pages.start + 1) ; i++){
        arr[i] = (this.Pages.start + i)
      }
      return arr
     }
  }
}
</script>






<style scoped lang="less">

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

.order-right {
  float: right;
  width: 83.33%;

  //订单部分
  .order-content {
    margin: 0 20px;
    color: #666;

    //标题
    .title {
      margin-bottom: 22px;
      border: 1px solid #ddd;

      h3 {
        padding: 12px 10px;
        font-size: 15px;
        background-color: #f1f1f1;

      }
    }

    //表头
    .chosetype {
      margin-bottom: 15px;
      color: #666;

      table {
        border: 1px solid #e6e6e6;
        border-collapse: separate;
        border-radius: 2px;
        width: 100%;
        max-width: 100%;
        border-spacing: 0;

        th {
          padding: 6px 8px;
          color: #666;
          font-weight: 700;
          vertical-align: bottom;
          background-color: #f4f4f4;
          line-height: 18px;
          border-bottom: 1px solid #e6e6e6;
          font-size: 12px;
          text-align: left;
        }
      }
    }

    // 表单内容
    .orders {
      font-size: 12px;

      a {
        &:hover {
          color: #4cb9fc;
        }
      }

      table {
        border: 1px solid #e6e6e6;
        border-collapse: collapse;
        border-radius: 2px;
        width: 100%;
        margin-bottom: 18px;
        max-width: 100%;

        th {
          padding: 6px 8px;
          line-height: 18px;
          text-align: left;
          vertical-align: bottom;
          background-color: #f4f4f4;
          font-size: 12px;
          color: #666;

          .pull-right {
            float: right;
            cursor: pointer;

            img {
              margin-right: 10px;
              vertical-align: middle;
            }
          }
        }

        td {
          font-size: 12px;
          color: #666;
          padding: 6px 8px;
          line-height: 18px;
          text-align: left;
          vertical-align: middle;
          border: 1px solid #e6e6e6;

          &.center {
            text-align: center;
          }

          .typographic {
            width: 100%;
            height: 60px;
            margin-bottom: 20px;

            &:last-child{
              margin-bottom: 0;
            }

            img {
              width: 60px;
              height: 60px;
              float: left;
              margin-right: 10px;
            }

            a {
              float: left;
              min-width: 80px;
              max-width: 250px;
              color: orangered;

              &.service {
                color: #666;
              }
            }

            span {
              float: left;
              min-width: 80px;
              max-width: 250px;
              text-align: center;
            }

          }
        }

      }
    }

    // 分页
    .choose-order {
      width: 100%;
      padding-left: 20%;
      .pagination {
        margin: 38px;

        ul {
          font-size: 0;
          display: inline-block;

          li {
            display: inline-block;
            padding: 4px 9px;
            font-size: 14px;
            border: 1px solid #e0e9ee;

            &.prev,
            &.next {
              background-color: #fafafa;
            }

            &.prev {
              border-right-color: #28a3ef;
            }

            &.page {

              &.actived {
                background-color: orangered;

                a {
                  color: #fff;
                }

              }
            }
          }
        }

        div {
          display: inline-block;
          font-size: 14px;
          color: #333;
        }
      }
    }
  }

  // 猜你喜欢
  .like {
    border: 1px solid #ddd;
    margin: 15px 20px;

    .kt {
      border-bottom: 1px solid #ddd;
      background: #f1f1f1;
      color: #666;
      margin: 0;
      padding: 12px;
      font-size: 15px;
    }

    .like-list {
      padding: 15px 11px;
      overflow: hidden;

      .likeItem {
        width: 25%;
        float: left;

        .p-img {
          text-align: left;

          img {
            width: 167px;
            height: 123px;
          }
        }

        .attr {
          padding: 0 15px;
        }

        .price {
          padding: 0 15px;
          font-size: 16px;
          color: orangered;
          margin-bottom: 20px;
        }

        .commit {
          padding: 0 15px;
        }
      }
    }
  }
}
</style>
