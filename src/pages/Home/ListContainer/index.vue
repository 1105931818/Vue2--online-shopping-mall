<template>
    <div class="container">
        <div class="container_wrapper">
            <div class="container_left">
                <!-- <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" 
                        v-for="banner in bannerList"
                        :key="banner.id">
                            <img :src="banner.imgUrl" alt="">
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-scrollbar"></div>
                </div> -->
                <CarouseL :bannerList="bannerList"/>
            </div>
            <div class="container_right">
                <div class="right_main">
                    <div class="right_top">
                        <h4>淘宝快报</h4>
                        <a href="">更多 ></a>
                    </div>

                    <ul class="right_list">
                        <li class="right_link"><a href="" class="right_item">【特惠】备战开学季，全民半价购数码</a></li>
                        <li class="right_link"><a href="" class="right_item">【特惠】备战开学季，全民半价购数码</a></li>
                        <li class="right_link"><a href="" class="right_item">【特惠】备战开学季，全民半价购数码</a></li>
                        <li class="right_link"><a href="" class="right_item">【特惠】备战开学季，全民半价购数码</a></li>
                        <li class="right_link"><a href="" class="right_item">【特惠】备战开学季，全民半价购数码</a></li>
                    </ul>

                    <ul class="list_icon">
                        <li class="link_icon"><a href="" class="item_icon"></a></li>
                        <li class="link_icon"><a href="" class="item_icon"></a></li>
                        <li class="link_icon"><a href="" class="item_icon"></a></li>
                        <li class="link_icon"><a href="" class="item_icon"></a></li>
                        <li class="link_icon"><a href="" class="item_icon"></a></li>
                        <li class="link_icon"><a href="" class="item_icon"></a></li>
                        <li class="link_icon"><a href="" class="item_icon"></a></li>
                        <li class="link_icon"><a href="" class="item_icon"></a></li>
                        <li class="link_icon"><a href="" class="item_icon"></a></li>
                        <li class="link_icon"><a href="" class="item_icon"></a></li>
                        <li class="link_icon"><a href="" class="item_icon"></a></li>
                        <li class="link_icon"><a href="" class="item_icon"></a></li>
                    </ul>

                    <img :src="`./images/banner1.jpg`" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import { mapState } from 'vuex'
   /*  import Swiper from "swiper" */

    export default {
        name:"app_container",
        data() {
            return {
                
            }
        },
        computed:{
            ...mapState({
                bannerList:state => state.homeOptions.bannerList
            })
        },
        mounted(){
             this.$store.dispatch("homeOptions/getbannerList")
        },
       /*  watch:{
            bannerList:{
                handler(){

                    //nextTick：在下次DOM更新循环结束之后，执行延迟回调     在修改数据之后，立即使用这个方法，获取更新后的DOM
                    this.$nextTick(() => {
                        //当执行这个回调函数时，服务器的数据已经回来了，v-for执行完毕
                        console.log("实例化swiper组件")
                        new Swiper(".swiper-container" , {
                            //开启循环
                            loop:true,
                            //分页器
                            pagination: {
                                el: '.swiper-pagination',
                                clickable:true
                            },
                            //前进后退按钮
                            navigation:{
                                nextEl:".swiper-button-next",
                                prevEl:".swiper-button-prev"
                            },
                            //滚动条
                            scrollbar:{
                                el:".swiper-scrollbar"
                            }
                        })
                    })
                }
            }
        } */
    }

</script>

<style scoped lang="less">

    .container{
        width: 65%;
        height: 540px;
        margin-left: 25%;
        margin-top: 5px;
        margin-bottom: 5px;

        .container_wrapper{
            width: 100%;
            height: 100%;
            display: flex;

            .container_left{
                .swiper-container{
                    width: 720px;
                    height: 540px;
                }
            }

            .container_right{
                flex:1;
                height: 100%;
                margin-left: 5px;

                .right_main{
                    width: 100%;
                    height: 538px;
                    border: 1px solid rgb(208, 208, 208);

                    .right_top{
                        width: 95%;
                        height: 40px;
                        margin: auto;
                        padding: 0 7px;
                        box-sizing: border-box;
                        border-bottom:1px solid rgb(208, 208, 208); 
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        a{
                            text-decoration: none;
                            color: rgb(98, 98, 98);
                            font-size: 14px;
                        }
                    
                    }

                    .right_list{
                        list-style: none;
                        margin-top: 10px;
                        padding: 0;

                        .right_link{
                            margin-top: 10px;

                            .right_item{
                                text-decoration: none;
                                color: black;
                                font-size: 13px;
                            }
                        }
                    }

                    .list_icon{
                        width: 100%;
                        height: 225px;
                        list-style: none;
                        padding: 0;
                        display: flex;
                        flex-wrap: wrap;
                        margin-top: 15px;

                        .link_icon{
                            width: 24.5%;
                            height: 75px;
                            border: 1px solid rgb(208, 208, 208); 
                            float: left;
                            margin: 0 -1px -1px 0;
                        }
                    }

                    img{
                        width: 100%;
                        height: 80px;
                        
                    }
                }
            }
        }
    }

</style>