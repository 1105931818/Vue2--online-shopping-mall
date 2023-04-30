<template>
    <div class="typeNav">
        <div class="type_top">
                <div class="top_main">
                    <h3 @mouseleave="leaveShow" @mouseenter="enterShow">全部商品分类</h3>
                    <ul class="top_list">
                        <li class="top_link">
                            <a href="" class="top_item">服装城</a>
                         </li>
                        <li class="top_link">
                            <a href="" class="top_item">美妆馆</a>
                        </li>
                        <li class="top_link">
                            <a href="" class="top_item">天猫超市</a>
                        </li>
                        <li class="top_link">
                            <a href="" class="top_item">全球购</a>
                        </li>
                        <li class="top_link">
                            <a href="" class="top_item">闪购</a>
                        </li>
                        <li class="top_link">
                            <a href="" class="top_item">团购</a>
                        </li>
                        <li class="top_link">
                            <a href="" class="top_item">有趣</a>
                        </li>
                        <li class="top_link">
                            <a href="" class="top_item">秒杀</a>
                        </li>
                    </ul>
                </div>
        </div>
        <transition name="animent">
            <div class="type_wrapper" v-show="show"  @mouseleave="leaveShow" @mouseenter="enterShow">
            <div class="type_left">
                <ul class="left_list" @click="goSearch">
                    <li class="left_link"
                        v-for="(category , index) in categoryList"
                        :key="category.categoryId"
                        @mouseenter="changIndex(index)"
                        :class="{cur:curIndex==index}"
                        @mouseleave="leaveIndex">
                        <a class="left_item" 
                        :data-categoryName="category.categoryName"
                        :data-category1Id="category.categoryId">{{ category.categoryName }}</a>
                        <div class="left_message" v-show="curIndex==index">
                            <div class="left_main"
                                v-for="child in category.categoryChild"
                                :key="child.categoryId">
                                <h5 :data-categoryName="child.categoryName"
                                    :data-category2Id="child.categoryId">{{ child.categoryName }}</h5>
                                <ul class="list">
                                    <li class="link"
                                        v-for="catechild in child.categoryChild"
                                        :key="catechild.categoryId">
                                        <a :data-categoryName="catechild.categoryName"
                                            :data-category3Id="catechild.categoryId">{{ catechild.categoryName }}</a>
                                    </li>
                                </ul>
                            </div>  
                        </div>  
                    </li>
                </ul>

            </div>
        </div>
        </transition>
    </div>
</template>

<script>

    import { mapState } from 'vuex'
    //引入防抖节流
    import throttle from "lodash/throttle"

    export default {
        name:"app_typeNav",
        data() {
            return {
                curIndex:-1,
                show:true
            }
        },
        mounted(){
            this.show = !(this.$route.name === "Cont" || this.$route.name === "Detail")
        },
        computed:{
            ...mapState({
                //当使用这个计算属性，函数会立即执行一次，state为大仓库中的数据
                categoryList:state => state.homeOptions.categoryList
              
            })
            /* ...mapState("homeOptions" , ["categoryList"]) */
        },
        methods:{
            //事件触发非常频繁，而且每一次的触发，回调函数都要去执行（如果时间很短，而回调函数内部又有计算，那么很可能出现浏览器卡顿）
            //节流：在规定的间隔时间范围内不会重复触发回调，把频繁触发变为少量触发
            //防抖：前面的所有的触发都被取消，最后一次执行在规定的时间之后才会触发，也就是说如果连续快速的触发，只会触发一次
           /*  changIndex(index){
                this.curIndex = index  
            }, */
            //throttle回调函数别用箭头函数，可能出现上下文this
            changIndex:throttle(function(index){
                this.curIndex = index
            } , 50),
            leaveIndex(){
                this.curIndex = -1
            },
            goSearch(event){
                /* console.log(event.target.dataset)
                console.log(event.target.nodeName) */
                let {categoryname , category1id , category2id , category3id} = event.target.dataset
                if(categoryname){
                    let location = {name:"Cont"}
                    let query = {categoryName:categoryname}
                    
                    
                    if(category1id){
                        query.category1Id = category1id
                    }else if(category2id){
                        query.category2Id = category2id
                    }else{
                        query.category3Id = category3id
                    }
                    location.query = query
                    //判断：如果路由跳转的时候，是否带有params参数，参数要一起传输给服务器
                    if(this.$route.params){
                        location.params = this.$route.params
                    }
                    this.$router.push(location)
                    
                }
    
            },
            leaveShow(){
                if(this.$route.name === "Cont" || this.$route.name === "Detail" || this.$route.path === "/detail/aside1" || this.$route.path === "/detail/aside2"){
                    this.show = false
                }
            },
            enterShow(){
                if(this.$route.name === "Cont" || this.$route.name === "Detail" || this.$route.path === "/detail/aside1" || this.$route.path === "/detail/aside2"){
                    this.show = true
                }
            }
                
        }
    }

</script>

<style scoped lang="less">

    .typeNav{
        width: 100%;
        padding: 0;
        margin: 0;
        margin-top: 20px;
        position: relative;

        .type_top{
            width: 100%;
            height: 50px;
            border-bottom: 2px solid orangered;

            .top_main{
                width: 80%;
                height: 100%;
                margin: auto;
                display: flex;
                justify-content: flex-start;
                align-items: center;

                h3{
                    width: 225px;
                    height: 50px;
                    background-color: orangered;
                    text-align: center;
                    line-height: 50px;
                    color: white;
                }

                .top_list{
                    flex:1;
                    height: 50px;
                    margin: 0;
                    padding: 0;
                    list-style: none;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;

                    .top_link{
                       margin-left: 50px;

                        .top_item{
                            text-decoration: none;
                            color: black;
                        }
                    }
                }
            }
        }

        .type_wrapper{
            position: absolute;
            width: 15%;
            margin-left: 10%;
            float: left;
            z-index: 5;

            .type_left{
                width: 225px;

                .left_list{
                    width: 100%;
                    background-color: rgb(237, 237, 237);
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    padding-top:10px;
                    padding-bottom: 8px;
                    box-sizing: border-box;
                    position: relative;

                    .left_link{
                        width: 100%;
                        height: 31px;
                        padding-left: 25px;
                        line-height: 31px;
                        box-sizing: border-box;

                       /*  &:hover{
                            background-color: orange;
                        } */

                        .left_message{
                            width: 920px;
                            height: 545px;
                            background-color: rgb(249, 249, 249);
                            position: absolute;
                            left: 225px;
                            top: 0px;
                            /* display: none; */
                            z-index: 5;

                            .left_main{
                                width: 100%;
                                height: 45px;
                                display: flex;
                                justify-content: flex-start;
                                align-items: center;

                                h5{
                                    text-align: right;
                                    width: 70px;
                                    font-size: 12px;
                                }
                                 .list{
                                    margin: 0;
                                    padding: 0;
                                    flex: 1;
                                    margin-left: 10px;
                                    list-style: none;
                                    display: flex;
                                    justify-content: flex-start;
                                    flex-wrap: wrap;
                                    align-content: space-between;

                                    .link{
                                        border-left: 1px solid rgb(81, 81, 81);
                                        height: 14px;
                                        line-height: 14px;

                                        a{
                                            height: 14px;
                                            display: inline-block;
                                            text-decoration: none;
                                            color: rgb(81, 81, 81);
                                            margin:0 5px;
                                            font-size: 12px;
                                        }

                                        
                                    }
                                 }
                            }
                        }

                        /* &:hover .left_message{
                            display: block;
                        } */

                        .left_item{
                            text-decoration: none;
                            color: black;
                            font-size: 14px;
                        }
                    }

                    .cur{
                        background-color: orange;
                    }
                }

                
            }
        }
    }

    .animent-enter,
    .animent-leave-to{
        opacity: 0;
    }

    .animent-enter-to,
    .animent-leave{
        opacity: 1;
    }

    .animent-enter-active{
        transition: 0.5s;
    }

    .animent-leave-active{
        transition: 0.2s;
    }

</style>