<template>
    <div class="rank">
        <div class="rank_wrapper">
            <div class="rank_top">
                <div class="top_main">
                    <ul class="top_list">
                        <li class="top_link">
                            <p>热卖排行</p>
                        </li>
                        <li class="top_link">
                            <p>特价排行</p>
                        </li>
                        <li class="top_link">
                            <p>新品排行</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="rank_main">
                <ul class="main_list">
                    <li class="main_link">
                        <img :src="`./images/0.jpeg`" alt="">
                        <p>【官网价直降1100】Apple iPhone 14 Pro Max 256G 暗紫色 移动联通电信5G手机</p>
                        <span>定金：¥100.00</span>
                    </li>
                    <li class="main_link">
                        <img :src="`./images/1.jpeg`" alt="">
                        <p>【官网价直降1100】Apple iPhone 14 Pro Max 256G 暗紫色 移动联通电信5G手机</p>
                        <span>定金：¥100.00</span>
                    </li>
                    <li class="main_link">
                        <img :src="`./images/2.jpeg`" alt="">
                        <p>【官网价直降1100】Apple iPhone 14 Pro Max 256G 暗紫色 移动联通电信5G手机</p>
                        <span>定金：¥100.00</span>
                    </li>
                    <li class="main_link">
                        <img :src="`./images/3.jpeg`" alt="">
                        <p>【官网价直降1100】Apple iPhone 14 Pro Max 256G 暗紫色 移动联通电信5G手机</p>
                        <span>定金：¥100.00</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name:"app_rank",
        data() {
            return {
                
            }
        },
    }

</script>

<style scoped lang="less">

    .rank{
        width: 100%;
        height: 420px;
        margin: 5px 0;
        margin-top: 25px;

        .rank_wrapper{
            width: 80%;
            height: 100%;
            margin: auto;

            .rank_top{
                width: 100%;
                height: 80px;
                margin-bottom: 20px;

                .top_main{
                    width: 400px;
                    height: 80px;
                    margin: auto;

                    .top_list{
                        width: 100%;
                        height: 100%;
                        padding: 0;
                        list-style: none;
                        display: flex;
                        justify-content: space-around;

                        .top_link{
                            width: 80px;
                            height: 100%;
                            border-radius: 50%;
                            border: 1px solid black;
                            text-align: center;
                            line-height: 50px;
                        }
                    }
                }
            }

            .rank_main{
                width: 100%;
                height: 300px;

                .main_list{
                    width: 100%;
                    height: 100%;
                    padding: 0;
                    list-style: none;
                    display: flex;
                    justify-content: space-around;

                    .main_link{
                        width: 22%;
                        height: 100%;
                        border: 1px solid black;
                        padding: 10px;

                        img{
                            display: block;
                            width: 210px;
                            height: 210px;
                            margin: auto;
                        }

                        p{
                            font-size: 12px;
                            margin-top: 20px;
                        }

                        span{
                            font-size: 18px;
                            color: orangered;
                        }
                    }
                }
            }
        }
    }

</style>