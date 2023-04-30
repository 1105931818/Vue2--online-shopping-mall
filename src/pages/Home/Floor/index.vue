<template>
    <div class="floor">
        <div class="floor_wrapper">
            <div class="floor_top">
                <p>{{ floors.name }}</p>
                <ul class="top_list">
                    <li class="top_link" v-for="(nav , index) in floors.navList"
                    :key="index"><a :href="nav.url">{{ nav.text }}</a></li>
                </ul>
            </div>

            <div class="floor_cont">
                <div class="floor_left">
                    <ul class="left_list">
                        <li class="left_link" v-for="(keys , index) in floors.keywords"
                            :key="index"><a href="">{{ keys }}</a></li>
                    </ul>
                    <div class="left_title">
                        <p>三星曲面电视</p>
                        <span>抽奖送好礼</span>
                    </div>
                    <img :src="floors.imgUrl" alt="">
                </div>

                <div class="floor_commend">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="recomm  in floors.carouselList"
                                :key="recomm.id">
                                <img :src="recomm.imgUrl" alt="">
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-scrollbar"></div>
                    </div>
                </div>

                <div class="floor_right">
                    <div class="right_link">
                        <div class="right_item">
                            <div class="right_title">
                                <p>每满200减20元</p>
                                <span>烘培节1元抢购</span>
                            </div>
                            <img :src="floors.recommendList[0]" alt="">
                        </div> 
                        <div class="right_item">
                            <div class="right_title">
                                <p>买乐视电视享钜惠</p>
                                <span>送60个月会员</span>
                            </div>
                            <img :src="floors.recommendList[1]" alt="">
                       
                        </div>
                    </div>

                    <div class="right_main">
                        <div class="right_title">
                            <p>8.20彩电宅购节</p>
                            <span>65寸4K智能电视3799</span>
                        </div>
                        <img :src="floors.bigImg" alt="">
                    </div>

                    <div class="right_link">
                        <div class="right_item">
                            <div class="right_title">
                                <p>每满200减20元</p>
                                <span>烘培节1元抢购</span>
                            </div>
                            <img :src="floors.recommendList[2]" alt="">
                        </div> 
                        <div class="right_item">
                            <div class="right_title">
                                <p>买乐视电视享钜惠</p>
                                <span>送60个月会员</span>
                            </div>
                            <img :src="floors.recommendList[3]" alt="">
                        
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Swiper from 'swiper';

    export default {
        name:"app_floor",
        data() {
            return {
                
            }
        },
        props:{
            floors:{
                type:Object,
                required:true
            }
        },
        mounted(){
            //此时数据是从父组件传输过来的，不存在异步请求数据
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
        },
        watch:{
            floors:{
                //立即监听
                immediate:true,
                handler(){

                }
            }
        }
    }

</script>

<style scoped lang="less">

    .floor{
        width: 100%;
        height: 400px;
        margin-top: 20px;

        .floor_wrapper{
            width: 80%;
            height: 100%;
            margin: auto;

            .floor_top{
                width: 100%;
                height: 40px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                p{
                    font-size: 18px;
                    font-weight: 700;
                }

                .top_list{
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    display: flex;

                    .top_link{
                        
                        a{
                            display: inline-block;
                            height: 17px;
                            padding: 0 10px;
                            text-align: center;
                            line-height: 20px;
                            border-right: 1px solid orangered;
                            text-decoration: none;
                            color: orangered;
                            font-size: 14px;

                            &:last-child{
                                border-right: none;
                            }
                        }
                    }
                }
            }

            .floor_cont{
                width: 100%;
                height: 350px;
                border-top: 2px solid orangered;
                display: flex;

                .floor_left{
                    width: 200px;
                    height: 100%;
                    background-color: rgb(248, 247, 247);

                    .left_list{
                        width: 100%;
                        margin: 0;
                        padding: 0;
                        margin-top: 20px;
                        list-style: none;
                        display: flex;
                        flex-wrap: wrap;

                        .left_link{
                            width: 50%;
                            margin-bottom: 10px;

                            a{
                                display: block;
                                text-decoration: none;
                                color: rgb(145, 145, 146);
                                width: 70%;
                                font-size: 12px;
                                margin: auto;
                                text-align: center;
                                border-bottom: 1px solid rgb(168, 167, 167);
                            }
                        }
                    }

                    .left_title{
                        width: 100%;
                        text-align: center;
                        color: orangered;
                        font-weight: 500;
                        margin-top: 20px;

                        p{
                            margin: 0;
                            padding: 0;
                            font-size: 18px;
                        }
                    }

                    img{
                        margin-top: 30px;
                        width: 100%;
                        height: 150px;
                    }
                }

                .floor_commend{
                    width: 400px;
                    height: 100%;

                    .swiper-container{
                        width: 400px;
                        height: 100%;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }

                .floor_right{
                    flex:1;
                    height: 100%;
                    display: flex;
                    border-bottom: 1px solid rgb(133, 133, 133);

                    .right_link{
                        width: 190px;
                        height: 100%;

                        .right_item{
                            width: 100%;
                            height: 44%;
                            position: relative;

                            &:first-child{
                                border-bottom: 1px solid rgb(143, 143, 143);
                            }
                            .right_title{
                                margin-top: 20px;
                                margin-left: 15px;
                                box-sizing: border-box;
                                p{
                                    margin: 0;
                                    padding: 0;
                                }
                                span{
                                    font-size: 14px;
                                    color: orangered;
                                }
                            }

                            img{
                                width: 60%;
                                height: 80px;
                                position: absolute;
                                bottom: 0;
                                right: 0;
                            }
                        }
                    }

                    .right_main{
                        width: 240px;
                        height: 100%;
                        padding: 35px 15px;
                        box-sizing: border-box;
                        border-left: 1px solid rgb(133, 133, 133);
                        border-right: 1px solid rgb(133, 133, 133);

                        .right_title{
                            width: 80%;
                            margin: auto;
                            text-align: center;

                            p{
                                padding: 0;
                                margin: 0;
                            }

                            span{
                                font-size: 14px;
                                color: rgb(133, 133, 133);
                            }
                        }

                        img{
                            display: block;
                            margin: auto;
                            margin-top: 80px;
                            width: 90%;
                            height: 140px;
                        }
                    }
                }
            }
        }
    }

</style>