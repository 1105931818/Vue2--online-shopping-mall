<template>
    <div id="leftTop">

        <div id="bigPic">
            <!-- <img :src="skuImageList[0] ? skuImageList[0].imgUrl : '' " alt=""> -->
            <img :src="imgObj.imgUrl" ref="big">
        </div>
        <!-- 小图框 -->
        <div id="samllPic" >

            <!-- 原图 -->
            <!-- <img :src="skuImageList[0] ? skuImageList[0].imgUrl : '' " alt=""> -->
            <img :src="imgObj.imgUrl" @mousemove="handler">
            <div class="mask" ref="mask">

            </div>


        </div>

    </div>
</template>


<script>

export default {
    name: "app_zoom",
    data() {
        return {
            currentIndex:0
        }
    },
    props:["skuImageList"],
    mounted(){
        this.$bus.$on("getIndex" , (index) => {
            this.currentIndex = index
        })
    },
    computed:{
        imgObj(){
            return this.skuImageList[this.currentIndex] || {}
        }
    },
    methods:{
        handler(event){
            let mask = this.$refs.mask
            let big = this.$refs.big
            let left = event.offsetX - mask.offsetWidth/2
            let top = event.offsetY - mask.offsetHeight/2
            if(top < 0) top = 0
            if(top > 338 - mask.offsetHeight/2) top = 338 - mask.offsetHeight/2
            if(left < 0) left = 0
            if(left > 338 - mask.offsetWidth/2) left = 338 - mask.offsetWidth/2
            mask.style.top = top + 'px'
            mask.style.left = left + 'px'
            big.style.top = -1 * top + 'px'
            big.style.left = -1 * left + 'px'
        }
    }
}

</script>


<style scoped lang="less">
#leftTop {

    width: 400px;
    position: relative;

    &:hover #bigPic{
        display: block;
    }

    &:hover #samllPic .mask{
        display: block;
    }

    #samllPic {

        width: 400px;
        height: 400px;
        border-bottom: 10px solid #f3f1f0;
        border-left: 20px solid #f3f1f0;
        border-right: 10px solid #f3f1f0;
        position: relative;

        img {

            width: 400px;
            border-radius: 8px;


        }

        .mask {

            width: 120px;
            height: 120px;
            background: rgba(231, 86, 86, 0.5);
            border: 1px solid #f3f1f0;
            border-radius: 8px;
            position: absolute;
            left: 0px;
            top: 0px;
            display: none;


        }

    }

    #bigPic {

        width: 400px;
        height: 400px;
        border-bottom: 10px solid #f3f1f0;
        border-left: 10px solid #f3f1f0;
        left: 420px;
        top: 0;
        position: absolute;
        overflow: hidden;
        display: none;

        img {

            width: 800px;
            height: 800px;
            position: absolute;
            left: 0;
            top: 0;

        }

    }

}
</style>