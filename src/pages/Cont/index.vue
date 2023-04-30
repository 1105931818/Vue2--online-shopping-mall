<template>
    <div class="cont">

        <TypeNav />

        <div class="main">
            <div class="py-container">
                <!--bread-->
                <div class="bread">
                    <ul class="fl sui-breadcrumb">
                        <li>
                            <a>全部结果</a>
                        </li>
                    </ul>
                    <ul class="fl sui-tag">
                        <li class="with-x" 
                            v-if="searchParams.categoryName">{{ searchParams.categoryName }} 
                            <span @click="removeCategoryName">x</span>
                        </li>
                        <li class="with-x" 
                            v-if="searchParams.keyword">{{ searchParams.keyword }} 
                            <span @click="removeKeyWord">x</span>
                        </li>
                        <li class="with-x" 
                            v-if="searchParams.trademark">{{ searchParams.trademark.split(":")[1] }} 
                            <span @click="removeTrademark">x</span>
                        </li>
                        <li class="with-x" 
                            v-for="(value , index) in searchParams.props"
                            :key="index">{{ value.split(":")[1] }} 
                            <span @click="removeProps(index)">x</span>
                        </li>
                    </ul>
                </div>
               
                <SearchSelector />
                <!--details-->
                <div class="details clearfix">
                    <div class="sui-navbar">
                        <div class="navbar-inner filter">
                            <ul class="sui-nav">
                                <li :class="{active:isOne}"
                                    @click="changOrder('1')">
                                    <a>综合<span v-show="isOne">{{isDesc?'⬇':'⬆'}}</span></a>
                                </li>
                                <li :class="{active:isTwo}"
                                    @click="changOrder('2')">
                                    <a>价格<span v-show="isTwo">{{isDesc?'⬇':'⬆'}}</span> </a>
                                </li>
                                <li>
                                    <a>销量</a>
                                </li>
                                <li>
                                    <a>新品</a>
                                </li>
                                <li>
                                    <a>评价</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div class="goods-list">
                        <ul class="yui3-g">
                            <li class="yui3-u-1-5" v-for="goodlist in goodsList"
                                :key="goodlist.id">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <router-link :to="{
                                            name:'Detail',
                                            params:{
                                                skuid:goodlist.id
                                            }
                                        }">
                                            <img v-lazy="goodlist.defaultImg" />
                                        </router-link>
                                    </div>
                                    <div class="price">
                                        <strong>
                                                <em>¥</em>
                                                <i>{{ goodlist.price }}.00</i>
                                            </strong>
                                    </div>
                                    <div class="attr">
                                        <a target="_blank" href="item.html"  :title="goodlist.title">{{ goodlist.title }}</a>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有<span>2000</span>人评价</i>
                                    </div>
                                    <div class="operate">
                                        <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                                        <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <PaginaTion :pageNo="searchParams.pageNo"  :pageSize="searchParams.pageSize" :total="total"  :continues="5"/>

                <!--hotsale-->
                <div class="clearfix hot-sale">
                    <h4 class="title">热卖商品</h4>
                    <div class="hot-list">
                        <ul class="yui3-g">
                            <li class="yui3-u-1-4">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img :src="`./images/0.jpeg`" />
                                    </div>
                                    <div class="attr">
                                        <em>Apple苹果iPhone 6s (A1699)</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                                <em>¥</em>
                                                <i>4088.00</i>
                                            </strong>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有700人评价</i>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-4">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img :src="`./images/2.jpeg`" />
                                    </div>
                                    <div class="attr">
                                        <em>金属A面，360°翻转，APP下单省300！</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                                <em>¥</em>
                                                <i>4088.00</i>
                                            </strong>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有700人评价</i>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-4">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img :src="`./images/4.jpeg`" />
                                    </div>
                                    <div class="attr">
                                        <em>256SSD商务大咖，完爆职场，APP下单立减200</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                                <em>¥</em>
                                                <i>4068.00</i>
                                            </strong>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有20人评价</i>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-4">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img :src="`./images/3.jpeg`" />
                                    </div>
                                    <div class="attr">
                                        <em>Apple苹果iPhone 6s (A1699)</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                                <em>¥</em>
                                                <i>4088.00</i>
                                            </strong>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有700人评价</i>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import SearchSelector from "./SearchSelector"
import { mapGetters , mapState } from "vuex"

export default {
    name: "app_cont",
    data() {
        return {
            searchParams:{
                //一级分类ID
                category1Id:"",

                //二级分类ID
                category2Id:"",

                //三级分类ID
                category3Id:"",

                //分类名字
                categoryName:"",

                //搜索框关键字
                keyword:"",

                //价格排序
                order:"1:desc",

                //分页器初始页
                pageNo:1,

                //每一页展示数据的个数
                pageSize:10,

                //平台售卖属性操作带的参数
                props:[],

                //品牌
                trademark:""
            }
        }
    },
    components:{
        SearchSelector
    },
    beforeMount(){
        //在发送请求之前，把接口需要传递的参数进行整理（在给服务器发请求之前，把参数整理好，服务器就会返回查询的数据）
        Object.assign(this.searchParams , this.$route.params , this.$route.query)
    },
    mounted(){
        this.getData()
        this.$bus.$on("sendtrademark" , (value) => {
            this.searchParams.trademark = `${value.tmId}:${value.tmName}`
            this.getData()
        })
        this.$bus.$on("sendprops" , (value) => {
            //数组去重
            if(this.searchParams.props.indexOf(value) == -1){
                this.searchParams.props .push(value)
                this.getData()
            }
        })
        this.$bus.$on("sendPageNo" , (value) => {
            this.searchParams.pageNo = value
            this.getData()
        })
    },
    computed:{
        ...mapGetters("searchOptions" , ["goodsList" , "attrsList" , "trademarkList"]),
        isOne(){
            return this.searchParams.order.indexOf('1') != -1
        },

        isTwo(){
            return this.searchParams.order.indexOf('2') != -1
        },

        isDesc(){
            return this.searchParams.order.indexOf('desc') != -1
        },
        ...mapState({
            total: state => state.searchOptions.searchList.total
        })
    },
    methods:{
        //根据不同的参数，返回不同的相应结果
        getData(){
            this.$store.dispatch("searchOptions/searchSelector" ,this.searchParams)
        },
        removeCategoryName(){
            //带给服务器的参数可有可无，如果属性值为空的字符串还是会把相应的的字段传给服务器，设置为undefined不会把字段传递给服务器
            this.searchParams.category1Id = undefined
            this.searchParams.category2Id = undefined
            this.searchParams.category3Id = undefined

            this.searchParams.categoryName = undefined
            this.getData()
            if(this.$route.params){
                this.$router.push({name:"Cont" , params:this.$route.params})
            }
        },
        removeKeyWord(){
            this.searchParams.keyword = undefined
            this.getData()
            if(this.$route.query){
                this.$router.push({name:"Cont" , query:this.$route.query})
            }
            this.$bus.$emit("clear")
        },
        removeTrademark(){
            this.searchParams.trademark = undefined
            this.getData()
        },
        removeProps(index){
            this.searchParams.props.splice(index,1)
            this.getData()
        },
       /*  tradeMarkInfo(trademark){
            this.searchParams.trademark = `${trademark.tmId}:${trademark.tmName}`
            this.getData()
        } */
        changOrder(value){
            let orginFlag = this.searchParams.order.split(":")[0]
            let orginSort = this.searchParams.order.split(":")[1]
            if(value === orginFlag){
                this.searchParams.order = `${orginFlag}:${orginSort == "desc" ? "esc" : "desc"}`
            }else{
                this.searchParams.order = `${value}:${"desc"}`
            }
            this.getData()
        }
    },
    //数据监听：监听组件实例身上的属性属性值的变化
    watch:{
        //监听路由的信息是否发生变化，如果发生变化，再次发生请求
        $route(newValue){
            //每次请求前，应该把相应的1，2，3级分类的ID置空，让他接收下一次的请求相应的1，2，3级分类ID
            this.searchParams.category1Id = ""
            this.searchParams.category2Id = ""
            this.searchParams.category3Id = ""

            Object.assign(this.searchParams , newValue.params , newValue.query)
            this.getData()

        }
    }
}
</script>

<style scoped lang="less">

    .cont{
        width: 100%;
        margin: 10px 0;
        .main{
         
        .py-container{
            width: 80%;
            margin: 0 auto;
            margin-top: 10px;
            .bread{
                overflow: hidden;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                margin-bottom: 10px;
                .sui-breadcrumb{
                    padding: 3px 15px;
                    margin: 0;
                    font-weight: 400;
                    border-radius: 3px;
                    float:left;
                    li{
                        display: inline-block;
                        line-height: 18px;
                        a{
                            color: #666;
                            text-decoration: none;
                            &:hover{
                                color: #4cb9fc;
                            }
                        }
                    }
                }
                .sui-tag{
                    list-style: none;
                    font-size: 0;
                    line-height: 0;
                    padding: 5px 0 0;
                    float: left;
                    .with-x{
                        font-size: 12px;
                        margin: 0 5px 5px 0;
                        display: inline-block;
                        overflow: hidden;
                        color: #000;
                        background: #f7f7f7;
                        padding: 0 7px;
                        height: 20px;
                        line-height: 20px;
                        border: 1px solid #dedede;
                        white-space: nowrap;
                        transition:color 400ms;
                        cursor: pointer;
                        i{
                            margin-left: 10px;
                            cursor: pointer;
                            font: 400 14px tahoma;
                            display: inline-block;
                            height: 100%;
                            vertical-align: middle;
                        }
                        &:hover{
                            color: #28a3ef;
                        }
                    }
                }
            }
           
            .details{
                margin-bottom: 5px;
                .sui-navbar{
                    overflow: visible;
                    margin-bottom: 0;
                    .filter{
                        min-height: 40px;
                        padding-right: 20px;
                        background: #fbfbfb;
                        border: 1px solid #e2e2e2;
                        padding-left: 0;
                        border-radius: 0;
                        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);
                        .sui-nav{
                            padding: 0;
                            list-style: none;
                            position: relative;
                            left: 0;
                            display: block;
                            float: left;
                            margin: 0 10px 0 0;
                            li{
                                float: left;
                                line-height: 18px;
                                a{
                                    display: block;
                                    cursor: pointer;
                                    padding: 11px 15px;
                                    color: #777;
                                    text-decoration: none;
                                }
                                &.active{
                                    a{
                                        background: orangered;
                                        color: #fff;
                                    }
                                }
                            }
                        }
                    }
                }
                .goods-list{
                    margin: 20px 0;
                    ul{
                        padding: 0;
                        list-style: none;
                        display:flex;
                        flex-wrap:wrap;
                        li{
                            height: 100%;
                            width: 20%;
                            margin-top: 10px;
                            line-height: 28px;
                            .list-wrap{
                                .p-img{
                                    padding-left: 15px;
                                    width: 215px;
                                    height: 255px;
                                    a{
                                        color: #666;
                                        img{
                                            max-width: 100%;                                  
                                            height: 250px;
                                            vertical-align: middle;
                                        }
                                    }
                                }
                                .price{
                                    padding-left: 15px;
                                    font-size: 18px;
                                    color: #c81623;
                                    strong{
                                        font-weight: 700;
                                    }
                                }
                                .attr{
                                    padding-left: 15px;
                                    width: 85%;
                                    overflow: hidden;
                                    margin-bottom: 8px;
                                    min-height: 38px;
                                    cursor: pointer;
                                    line-height: 1.8;
                                    display: -webkit-box;
                                    -webkit-box-orient: vertical;
                                    -webkit-line-clamp: 2;
                                    a{
                                        color: #333;
                                        text-decoration: none;
                                    }
                                }
                                .commit{
                                    padding-left: 15px;
                                    height: 22px;
                                    font-size: 13px;
                                    color: #a7a7a7;
                                    span{
                                        font-weight: 700;
                                        color: #646fb0;
                                    }
                                }
                                .operate{
                                    padding: 12px 15px;

                                    a{
                                        text-decoration: none;
                                    }
                                    .sui-btn{
                                        display: inline-block;
                                        padding: 2px 14px;
                                        box-sizing: border-box;
                                        margin-bottom: 0;
                                        font-size: 12px;
                                        line-height: 18px;
                                        text-align: center;
                                        vertical-align: middle;
                                        cursor: pointer;
                                        border-radius: 0;
                                        background-color: transparent;
                                        margin-right: 15px;
                                    }
                                    .btn-bordered{
                                        min-width: 85px;
                                        background-color: transparent;
                                        border: 1px solid #8c8c8c;
                                        color: #8c8c8c;
                                        &:hover{
                                            border: 1px solid #666;
                                            color: #fff!important;
                                            background-color: #666;
                                            text-decoration: none;
                                        }
                                    }
                                    .btn-danger{
                                        border: 1px solid #e1251b;
                                        color: #e1251b;
                                        &:hover{
                                            border: 1px solid #e1251b;
                                            background-color: #e1251b;
                                            color:white!important;
                                            text-decoration: none;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                
            }

            .hot-sale{
                width: 100%;
                margin-top: 20px;
                margin-bottom: 5px;
                border: 1px solid #ddd;
                .title{
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 21px;
                    border-bottom: 1px solid #ddd;
                    background: #f1f1f1;
                    color: #333;
                    margin: 0;
                    padding: 5px 0 5px 15px;
                }
                .hot-list{
                    padding: 15px;
                    ul{
                        list-style: none;
                        padding: 0;
                        margin: 0;
                        display:flex;
                        li{
                            width:25%;
                            height: 100%;
                           
                            .list-wrap{
                                .p-img,.price,.attr,.commit{
                                    padding-left: 15px;
                                }
                                .p-img{
                                    img{
                                        max-width: 100%;
                                        vertical-align: middle;
                                        border: 0;
                                    }
                                }
                                .attr{
                                    width: 85%;
                                    height: 48px;
                                    display: -webkit-box;
                                    -webkit-box-orient: vertical;
                                    -webkit-line-clamp: 2;
                                    overflow: hidden;
                                    margin-bottom: 5px;
                                    min-height: 38px;
                                    cursor: pointer;
                                    line-height: 1.8;
                                    font-size: 14px;
                                }
                                .price{
                                    font-size: 18px;
                                    color: #c81623;
                                    strong{
                                        font-weight: 700;
                                    }
                                }
                                .commit{
                                    height:22px;
                                    font-size: 13px;
                                    color: #a7a7a7;
                                }
                            }
                        }
                    }
                }
            }
        }
        }
    }

</style>

