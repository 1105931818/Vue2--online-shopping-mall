<template>
    <div id="leftBottom">
        <div id="piclist" class="swiper-container">
            <div class="swiper-wrapper">
                <!-- <div class="swiper-slide"
                    v-for="skuImage in skuImageList"
                    :key="skuImage.id"><img :src="skuImage.imgUrl" alt=""></div> -->
                <div class="swiper-slide" v-for="skuImage in skuImageList" :key="skuImage.id">
                    <img :src="skuImage.imgUrl" :class="{ active: currentIndex == skuImage.id }"
                        @click="changeIndex(skuImage.id)">
                </div>


            </div>
            <div class="swiper-button-prev" @click="addIndex(-1)"></div>
            <div class="swiper-button-next" @click="addIndex(1)"></div>
        </div>

    </div>
</template>

<script>

import Swiper from 'swiper';

export default {
    name: "app_imagelist",
    data() {
        return {
            currentIndex: 0
        }
    },
    props: ["skuImageList"],
    mounted() {

    },
    watch: {
        skuImageList: {
            immediate: true,
            handler() {
                this.$nextTick(() => {
                    new Swiper(".swiper-container", {
                        //开启循环
                        /* loop: true, */

                        //显示几个图片
                        slidesPerView: 3,

                        //每一次切换图片的个数
                        slidesPerGroup: 1,

                        //前进后退按钮
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev"
                        },
                        //滚动条
                    })
                })
            }
        }
    },
    methods: {
        addIndex(value) {
            this.currentIndex += value
            if (this.currentIndex > 4 || this.currentIndex < 0) {
                this.currentIndex = 0
            }
            this.$bus.$emit("getIndex", this.currentIndex)
        },
        changeIndex(index) {
            this.currentIndex = index
            this.$bus.$emit("getIndex", this.currentIndex)
        }
    }
}

</script>

<style scoped lang="less">
.clearFix() {
    &::after {
        clear: both;
        display: block;
        content: '';
    }
}

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


#leftBottom {

    width: 440px;
    margin-top: 5px;
    .clearFix();

    #piclist {

        width: 90%;
        height: 56px;
        margin-left: 20px;
        overflow: hidden;
        position: relative;


        .swiper-wrapper {
            width: 80%;
            height: 50px;
            margin: auto;

            .swiper-slide {
                img {

                    width: 50px;
                    height: 50px;
                    border-radius: 6px;

                }

                .active {
                    border: 1px solid orangered;
                }
            }

            .swiper-button-prev,
            .swiper-button-next {
                width: 10%;
            }

        }



    }

}
</style>