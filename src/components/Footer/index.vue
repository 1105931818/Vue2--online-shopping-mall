<template>
    <div class="footer">
        <div class="footer_wrapper">
            <div class="footer_cont" 
                v-show="isShow">
                <ul class="footer_list">
                    <li class="footer_link">
                        <a href="">购物指南</a>
                    </li>
                    <li class="footer_link">
                        <a href="">购物流程</a>
                    </li>
                    <li class="footer_link">
                        <a href="">会员介绍</a>
                    </li>
                    <li class="footer_link">
                        <a href="">生活旅行/团购</a>
                    </li>
                    <li class="footer_link">
                        <a href="">常见问题</a> 
                    </li>
                </ul>

                <ul class="footer_list">
                    <li class="footer_link">
                        <a href="">配送方式</a>
                    </li>
                    <li class="footer_link">
                        <a href="">上门自提</a>
                    </li>
                    <li class="footer_link">
                        <a href="">211限时达</a>
                    </li>
                    <li class="footer_link">
                        <a href="">配送服务查询</a>
                    </li>
                    <li class="footer_link">
                        <a href="">配送费收取标准</a>
                    </li>
                    <li class="footer_link">
                        <a href="">海外配送</a>
                    </li>
                </ul>

                <ul class="footer_list">
                    <li class="footer_link">
                        <a href="">支付方式</a>
                    </li>
                    <li class="footer_link">
                        <a href="">货到付款</a>
                    </li>
                    <li class="footer_link">
                        <a href="">在线支付</a>
                    </li>
                    <li class="footer_link">
                        <a href="">分期付款</a>
                    </li>
                    <li class="footer_link">
                        <a href="">邮局汇款</a>
                    </li>
                    <li class="footer_link">
                        <a href="">公司转账</a>
                    </li>
                </ul>

                <ul class="footer_list">
                    <li class="footer_link">
                        <a href="">售后服务</a>
                    </li>
                    <li class="footer_link">
                        <a href="">售后政策</a>
                    </li>
                    <li class="footer_link">
                        <a href="">价格保护</a>
                    </li>
                    <li class="footer_link">
                        <a href="">退款说明</a>
                    </li>
                    <li class="footer_link">
                        <a href="">返修/退换货</a>
                    </li>
                    <li class="footer_link">
                        <a href="">取消订单</a>
                    </li>
                </ul>

                <ul class="footer_list">
                    <li class="footer_link">
                        <a href="">特色服务</a>
                    </li>
                    <li class="footer_link">
                        <a href="">夺宝岛</a>
                    </li>
                    <li class="footer_link">
                        <a href="">DIY装机</a>
                    </li>
                    <li class="footer_link">
                        <a href="">延保服务</a>
                    </li>
                    <li class="footer_link">
                        <a href="">淘宝会员</a>
                    </li>
                    <li class="footer_link">
                        <a href="">淘宝通信</a>
                    </li>
                </ul>

                <ul class="footer_list">
                    <li class="footer_link">
                        <a href="">帮助中心</a>
                    </li>
                    <li class="footer_link">
                        <img :src="`./images/1.jpeg`" alt="">
                    </li>
                </ul>
            </div>
            <div class="footer_about">
                <ul class="about_list">
                    <li class="about_link">
                        <a href="">关于我们</a>
                    </li>
                    <li class="about_link">
                        <a href="">联系我们</a>
                    </li>
                    <li class="about_link">
                        <a href="">关于我们</a>
                    </li>
                    <li class="about_link">
                        <a href="">商家入驻</a>
                    </li>
                    <li class="about_link">
                        <a href="">营销中心</a>
                    </li>
                    <li class="about_link">
                        <a href="">友情链接</a>
                    </li>
                    <li class="about_link">
                        <a href="">关于我们</a>
                    </li>
                    <li class="about_link">
                        <a href="">营销中心</a>
                    </li>
                    <li class="about_link">
                        <a href="">商家入驻</a>
                    </li>
                    <li class="about_link">
                        <a href="">友情链接</a>
                    </li>
                </ul>
                <p>地址：上海市浦东新区航头镇工业科技园</p>
                <p>沪IPC备123124135号</p>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name:"app_footer",
        data() {
            return {
                
            }
        },
        computed:{
            isShow(){
                return this.$route.meta.isShow
            },
          
        },
    }

</script>

<style scoped lang="less">

    .footer{
        width: 100%;
        background-color: rgb(214, 214, 214);

        .footer_wrapper{
            width: 75%;
            height: 100%;
            margin: auto;

            .footer_cont{
                width: 100%;
                height: 160px;
                padding-top: 20px;
                border-bottom: 1px solid rgb(181, 181, 181);
                display: flex;
                justify-content: space-between;
                align-items: flex-start;

                .footer_list{
                    list-style: none;
                    margin: 0;
                    padding: 0;
                
                    .footer_link{

                        a{
                            text-decoration: none;
                            font-size: 12px;
                            color: rgb(89, 89, 89);
                        }

                        &:first-child a{
                            font-size: 16px;
                            font-weight: 700;
                            color: black;
                        }
                    }

                    &:last-child{
                        img{
                            width: 100px;
                        }
                    }
                }
            }

            .footer_about{
                width: 100%;
                height: 120px;
                padding-top: 30px;
                
                .about_list{
                    width: 80%;
                    margin: auto;
                    padding: 0;

                    list-style: none;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .about_link{
                        a{
                            text-decoration: none;
                            color: rgb(89, 89, 89);
                            font-size: 14px;
                        }
                    }
                }

                p{
                    text-align: center;
                    padding: 0;
                    margin: 0;
                    margin-top: 8px;
                    color: rgb(89, 89, 89);
                    font-size: 14px;
                }
            }
        }
    }

</style>