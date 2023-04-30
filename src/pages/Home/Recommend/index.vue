<template>
    <div class="recommend">
        <div class="recommend_wrapper">
            <div class="recommend_left">

            </div>
            <div class="recommend_right">
                <ul class="right_list">
                    <li class="right_link"><img :src="`./images/banner1.jpg`" alt=""></li>
                    <li class="right_link"><img :src="`./images/banner2.jpg`" alt=""></li>
                    <li class="right_link"><img :src="`./images/banner3.jpg`" alt=""></li>
                    <li class="right_link"><img :src="`./images/banner4.jpg`" alt=""></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name:"app_recommend",
        data() {
            return {
                
            }
        },
    }

</script>

<style scoped lang="less">

    .recommend{
        width: 100%;
        height: 180px;
        margin: 5px 0;

        .recommend_wrapper{
            width: 80%;
            height: 100%;
            margin: auto;
            display: flex;
            
            .recommend_left{
                width: 210px;
                height: 180px;
                background-color: rgba(73, 73, 73, 0.5);
            }

            .recommend_right{
                flex: 1;
                height: 100%;
                background-color:rgb(226, 226, 226);

                .right_list{
                    width: 100%;
                    height: 90%;
                    margin-top: 10px;
                    padding: 0;
                    list-style: none;
                    display: flex;

                   
                    .right_link{
                        width: 25%;
                        height: 100%;
                        
                        border-left: 1px solid rgb(139, 139, 139);

                        &:first-child{
                        border-left: none;
                        }

                        img{
                            width: 90%;
                            height: 100%;
                            margin-left: 10px;
                           
                        }
                    }
                }
            }

        }
    }

</style>