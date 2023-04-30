<template>
    <div class="like">
        <div class="like_wrapper">
            <div class="like_top">
                <p>猜你喜欢</p>
                <a href="">换一换 ></a>
            </div>
            <div class="like_cont">
                <ul class="like_list">
                    <li class="like_link">
                        <img :src="`./images/2.jpeg`" alt="">
                        <div class="like_title">
                            <p>阳光美包新款单肩包女包时尚母子包四件套</p>
                            <span>¥116.00</span>
                        </div>
                    </li>
                    <li class="like_link">
                        <img :src="`./images/3.jpeg`" alt="">
                        <div class="like_title">
                            <p>阳光美包新款单肩包女包时尚母子包四件套</p>
                            <span>¥116.00</span>
                        </div>
                    </li>
                    <li class="like_link">
                        <img :src="`./images/4.jpeg`" alt="">
                        <div class="like_title">
                            <p>阳光美包新款单肩包女包时尚母子包四件套</p>
                            <span>¥116.00</span>
                        </div>
                    </li>
                    <li class="like_link">
                        <img :src="`./images/0.jpeg`" alt="">
                        <div class="like_title">
                            <p>阳光美包新款单肩包女包时尚母子包四件套</p>
                            <span>¥116.00</span>
                        </div>
                    </li>
                    <li class="like_link">
                        <img :src="`./images/1.jpeg`" alt="">
                        <div class="like_title">
                            <p>阳光美包新款单肩包女包时尚母子包四件套</p>
                            <span>¥116.00</span>
                        </div>
                    </li>
                    <li class="like_link">
                        <img :src="`./images/2.jpeg`" alt="">
                        <div class="like_title">
                            <p>阳光美包新款单肩包女包时尚母子包四件套</p>
                            <span>¥116.00</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name:"app_like",
        data() {
            return {
                
            }
        },
    }

</script>

<style scoped lang="less">

    .like{
        width: 100%;
        height: 320px;
        margin-top: 30px;

        .like_wrapper{
            width: 80%;
            height: 100%;
            margin: auto;

            .like_top{
                width: 100%;
                height: 40px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                p{
                    font-size: 18px;
                    font-weight: 700;
                }

                a{
                    text-decoration: none;
                    color: rgb(144, 144, 144);
                    font-size: 14px;
                }
            }

            .like_cont{
                width: 100%;
                height: 260px;
                border: 1px solid rgb(104, 104, 104);

                .like_list{
                    width: 100%;
                    height: 100%;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;

                    .like_link{
                        width: 15%;
                        height: 100%;
                        padding: 10px;
                        box-sizing: border-box;

                        img{
                            width: 150px;
                            height: 150px;
                            display: block;
                            margin: auto;
                        }

                        .like_title{
                            width: 155px;
                            margin: auto;
                            padding: 5px;
                            box-sizing: border-box;
                            border-right: 1px solid rgb(101, 101, 101);
                            p{
                                font-size: 12px;
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
    }

</style>