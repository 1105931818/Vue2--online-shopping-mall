<!-- 封装轮播图组件 -->
<template>
    <div class="swiper-container">
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
    </div>
</template>

<script>

    import Swiper from 'swiper'

    export default {
        name:"app_carousel",
        data() {
            return {
                
            }
        },
        props:["bannerList"],
        watch:{
            bannerList:{
                immediate:true,
                handler(){
                    this.$nextTick(() => {
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
        }
    }

</script>

<style scoped lang="less">



</style>