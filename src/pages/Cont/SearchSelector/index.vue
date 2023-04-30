<template>
     <!--selector-->
     <div class="selector">
                    <div class="selector_main">
                        <div class="main_title">
                            <p>品牌</p>
                        </div>
                        <div class="main_item">
                            <ul class="main_list">
                                <li v-for="trademark in trademarkList"
                                    :key="trademark.tmId"
                                    @click="tradeMarkHandler(trademark)">{{ trademark.tmName }}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="selector_main" v-for="attrs in attrsList"
                        :key="attrs.attrId">
                        <div class="main_title">
                            <p>{{ attrs.attrName }}</p>
                        </div>
                        <div class="main_item">
                            <ul class="main_list">
                                <li v-for="(value , index) in attrs.attrValueList"
                                    :key="index" 
                                    @click="propsHandler(attrs.attrId , value , attrs.attrName)">
                                    <a>{{ value }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="selector_btn">
                        <a href="">多选</a>
                        <p>更多</p>
                    </div>
    </div>
</template>

<script>

    import { mapGetters } from 'vuex';

    export default {
        name:"app_searchselector",
        data() {
            return {
                
            }
        },
        mounted(){
           
        },
        computed:{
            ...mapGetters("searchOptions" , ["attrsList" , "trademarkList"])
        },
        methods:{
            tradeMarkHandler(trademark){
                this.$bus.$emit("sendtrademark" ,trademark)
            },
            propsHandler(id , value , name){
                let cont = id + ":" + value + ":" + name
                this.$bus.$emit("sendprops" , cont)
            }
        }
    }

</script>

<style scoped lang="less">

.selector{
                width: 100%;
                border: 1px solid #ddd;
                margin-bottom: 5px;
                position: relative;

                .selector_btn{
                    position: absolute;
                    right: 10px;
                    top: 10px;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    font-size: 13px;

                    a{
                        display: inline-block;
                        width: 50px;
                        height: 20px;
                        margin: auto;
                        line-height: 20px;
                        text-align: center;
                        border: 1px solid #a7a7a7;
                        text-decoration: none;
                    }
                }

                .selector_main{
                    width: 100%;
                    height: 50px;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    border-top: 1px solid #a7a7a7;

                    &:first-child{
                        height: 140px;
                        border-top: none;
                    }

                    &:first-child .main_item .main_list{
                        height: 120px;
                        margin: 0;
                        padding: 0;
                        margin-right: 60px;
                        margin-left: 10px;
                        margin-top: 10px;
                    }

                    &:first-child .main_item .main_list li{
                        width: 110px;
                        height: 60px;
                        line-height: 60px;
                        margin: 0;
                        padding: 0;
                        border: 1px solid #d1d1d1;
                        margin: 0px -1px -1px 0px;
                        white-space: nowrap;
                        font-size: 14px;
                        color: orangered;
                        font-weight: 700 ;
                        text-align: center;
                        overflow: hidden;
                    }

                    .main_title{
                        width: 120px;
                        height: 100%;
                        background-color: #d1d1d1;
                        text-align: center;
                        position: relative;

                        p{
                            width: 100%;
                            display: block;
                            margin: 0;
                            padding: 0;
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50% , -50%);
                            font-size: 14px;

                        }

                    }

                    .main_item{
                        flex:1;
                        height: 100%;
                        

                        .main_list{
                            height: 100%;
                            margin-left: 30px;
                            padding: 0;
                            list-style: none;
                            display: flex;
                            flex-wrap: wrap;
                            
                            li{
                                font-size: 14px;
                                margin-right: 35px;
                                color: #8c8c8c;
                                padding-top: 16px;
                            }
                        }
                    }

                }
              
            }

</style>