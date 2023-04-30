<template>
    <div class="detail">

        <TypeNav />

        <div id="content">

            <!-- 主要元素 -->
            <div class="contentMain">

                <!-- 路径导航 -->
                <div id="navPath">

                    <a>手机、数码、通讯 /&nbsp;</a>
                    <a v-show="categoryView.category1Name">{{ categoryView.category1Name }} /&nbsp;</a>
                    <a v-show="categoryView.category2Name">{{ categoryView.category2Name }} /&nbsp;</a>
                    <a v-show="categoryView.category3Name">{{ categoryView.category3Name }} &nbsp;</a>

                </div>

                <!-- 图片中间效果 -->
                <div id="center">

                    <!-- 左侧放大镜 -->
                    <div id="left">

                        <Zoom :skuImageList="skuImageList || []" />
                        <ImageList :skuImageList="skuImageList || []" />

                    </div>
                    <!-- 右侧商品详细 -->
                    <div id="right">

                        <!-- 商品详情介绍 -->
                        <div id="rightTop">

                            <h2>{{ skuInfo.skuDesc }}</h2>
                            <p>{{ skuInfo.skuName }}</p>
                            <div class="priceWrap">

                                <div class="priceTop">

                                    <span>价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</span>
                                    <div class="price">

                                        <span>¥</span>
                                        <p>{{ goodsInfo.price }}</p>
                                        <i>降价通知</i>

                                    </div>
                                    <p>
                                        <span>累计评价</span>
                                        <span>670000</span>

                                    </p>

                                </div>
                                <div class="priceBottom">

                                    <span>促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</span>
                                    <p>

                                        <span>加价购</span>
                                        <span>满1000元另加120元，满3000元另加80元，或满5000元另加50元，或满8000元另加20元，即可在购物车换购热销产品</span>

                                    </p>

                                </div>

                            </div>
                            <div class="support">

                                <span>支&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;持</span>
                                <p>以旧换新，闲置手机上门回收 5G套餐超值抢 礼品购</p>

                            </div>
                            <div class="address">

                                <span>配&nbsp;送&nbsp;至</span>
                                <p>江西省 南昌市 红谷滩</p>

                            </div>

                        </div>
                        <!-- 商品参数 -->
                        <div id="rightBottom">

                            <!-- 选择结果的显示 -->
                            <div class="choose">

                                <div id="mask" v-for="(item, index) in choose" :key="index">
                                    <span>{{ item }}</span>
                                    <a>x</a>
                                </div>

                            </div>

                            <!-- 商品参数的选择 -->
                            <div class="chooseWrap">

                                <dl v-for="skuSaleAttrValue in skuSaleAttrValueList" :key="skuSaleAttrValue.id">
                                    <dt>{{ skuSaleAttrValue.saleAttrName }}</dt>
                                    <dd v-for="spuSaleAttrValueList in skuSaleAttrValue.spuSaleAttrValueList"
                                        :key="spuSaleAttrValueList.id"
                                        :class="{ active1: spuSaleAttrValueList.isChecked == 1 }"
                                        @click="changeActive(spuSaleAttrValueList, skuSaleAttrValue.spuSaleAttrValueList)">
                                        {{ spuSaleAttrValueList.saleAttrValueName }}
                                    </dd>
                                </dl>

                            </div>

                            <!-- 加入购物车 -->
                            <div class="addCart">

                                <div class="count">

                                    <input type="text" v-model="skuNum" @change="changeSkunum">
                                    <a @click="addSkunum(1)">+</a>
                                    <a @click="addSkunum(-1)" :disabled="skuNum == 1">-</a>

                                </div>
                                <button @click="addShopCart">加入购物车</button>

                            </div>

                        </div>

                    </div>

                </div>

                <!-- 商品详情 -->
                <div id="goodsDetailWrap">

                    <!-- 侧边栏标签,左边 -->
                    <aside class="liftAside">

                        <div class="asideTop">

                            <a :class="{ active: isShow }" @click="isShow = true">
                                相关分类
                            </a>
                            <a :class="{ active: !isShow }" @click="isShow = false">
                                推荐品牌
                            </a>

                        </div>
                        <div class="asideBottom">


                            <!-- 显示区域 -->

                            <div class="aside1" v-show="isShow">

                                <ul class="goodslist1">

                                    <li>iPone</li>
                                    <li>手机壳</li>
                                    <li>MagSafe</li>
                                    <li>AirPods</li>
                                    <li>HomePod</li>
                                    <li>iPad</li>
                                    <li>Mac</li>
                                    <li>Apple Watch</li>

                                </ul>
                                <ul class="goodslist2">

                                    <li>
                                        <img :src="`./images/5.jpeg`" alt="">
                                        <span>iPone14系列</span>
                                        <p>¥5999</p>
                                        <p class="button">
                                            <a href="javascript: ;">加入购物车</a>
                                        </p>
                                    </li>
                                    <li>
                                        <img :src="`./images/6.jpeg`" alt="">
                                        <span>官方手机壳</span>
                                        <p>¥399</p>
                                        <p class="button">
                                            <a href="javascript: ;">加入购物车</a>
                                        </p>
                                    </li>
                                    <li>
                                        <img :src="`./images/8.jpeg`" alt="">
                                        <span>MagSafe配件</span>
                                        <p>¥399</p>
                                        <p class="button">
                                            <a href="javascript: ;">加入购物车</a>
                                        </p>
                                    </li>
                                    <li>
                                        <img :src="`./images/9.jpeg`" alt="">
                                        <span>AirPods Pro 第二代</span>
                                        <p>¥1999</p>
                                        <p class="button">
                                            <a href="javascript: ;">加入购物车</a>
                                        </p>
                                    </li>
                                    <li>
                                        <img :src="`./images/10.jpeg`" alt="">
                                        <span>HomePod 第二代</span>
                                        <p>¥2299</p>
                                        <p class="button">
                                            <a href="javascript: ;">加入购物车</a>
                                        </p>
                                    </li>
                                    <li>
                                        <img :src="`./images/11.jpeg`" alt="">
                                        <span>iPad Pro 12.9寸 2023款</span>
                                        <p>¥7999</p>
                                        <p class="button">
                                            <a href="javascript: ;">加入购物车</a>
                                        </p>
                                    </li>
                                    <li>
                                        <img :src="`./images/12.jpeg`" alt="">
                                        <span>Macbook Pro 16寸 M2</span>
                                        <p>¥15999</p>
                                        <p class="button">
                                            <a href="javascript: ;">加入购物车</a>
                                        </p>
                                    </li>
                                    <li>
                                        <img :src="`./images/5.jpeg`" alt="">
                                        <span>Apple Watch Ultra</span>
                                        <p>¥6299</p>
                                        <p class="button">
                                            <a href="javascript: ;">加入购物车</a>
                                        </p>
                                    </li>
                                    <li>
                                        <img :src="`./images/6.jpeg`" alt="">
                                        <span>MagSafe配件</span>
                                        <p>¥399</p>
                                        <p class="button">
                                            <a href="javascript: ;">加入购物车</a>
                                        </p>
                                    </li>
                                    <li>
                                        <img :src="`./images/7.jpeg`" alt="">
                                        <span>AirPods Pro 第二代</span>
                                        <p>¥1999</p>
                                        <p class="button">
                                            <a href="javascript: ;">加入购物车</a>
                                        </p>
                                    </li>
                                    <li>
                                        <img :src="`./images/8.jpeg`" alt="">
                                        <span>HomePod 第二代</span>
                                        <p>¥2299</p>
                                        <p class="button">
                                            <a href="javascript: ;">加入购物车</a>
                                        </p>
                                    </li>
                                    <li>
                                        <img :src="`./images/9.jpeg`" alt="">
                                        <span>iPad Pro 12.9寸 2023款</span>
                                        <p>¥7999</p>
                                        <p class="button">
                                            <a href="javascript: ;">加入购物车</a>
                                        </p>
                                    </li>

                                </ul>

                            </div>


                            <div class="aside2" v-show="!isShow">

                                <ul class="goodslist3">

                                    <li>华为</li>
                                    <li>三星</li>
                                    <li>小米</li>
                                    <li>索尼</li>
                                    <li>一加</li>
                                    <li>谷歌</li>
                                    <li>OPPO</li>
                                    <li>vivo</li>

                                </ul>
                                <ul class="goodslist4">

                                    <li>

                                        <img :src="`./images/hw.jpeg`" alt="">
                                        <span>华为 Mate50 系列</span>
                                        <p class="button">

                                            <a href="javascript: ;">前往进入</a>

                                        </p>


                                    </li>
                                    <li>

                                        <img :src="`./images/sx.jpeg`" alt="">
                                        <span>三星 Galaxy S23系列</span>
                                        <p class="button">

                                            <a href="javascript: ;">前往进入</a>

                                        </p>


                                    </li>
                                    <li>

                                        <img :src="`./images/xm.jpeg`" alt="">
                                        <span>小米 13系列</span>
                                        <p class="button">

                                            <a href="javascript: ;">前往进入</a>

                                        </p>


                                    </li>
                                    <li>

                                        <img :src="`./images/sn.jpeg`" alt="">
                                        <span>索尼 Xpreai系列</span>
                                        <p class="button">

                                            <a href="javascript: ;">前往进入</a>

                                        </p>


                                    </li>
                                    <li>

                                        <img :src="`./images/yj.jpeg`" alt="">
                                        <span>一加 11系列</span>
                                        <p class="button">

                                            <a href="javascript: ;">前往进入</a>

                                        </p>


                                    </li>
                                    <li>

                                        <img :src="`./images/gg.jpeg`" alt="">
                                        <span>谷歌 pixel7系列</span>
                                        <p class="button">

                                            <a href="javascript: ;">前往进入</a>

                                        </p>


                                    </li>
                                    <li>

                                        <img :src="`./images/6.jpeg`" alt="">
                                        <span>OPPO find6系列</span>
                                        <p class="button">

                                            <a href="javascript: ;">前往进入</a>

                                        </p>


                                    </li>
                                    <li>

                                        <img :src="`./images/vv.jpeg`" alt="">
                                        <span>vivo X90系列</span>
                                        <p class="button">

                                            <a href="javascript: ;">前往进入</a>

                                        </p>


                                    </li>
                                    <li>

                                        <img :src="`./images/sn.jpeg`" alt="">
                                        <span>魅族 20系列</span>
                                        <p class="button">

                                            <a href="javascript: ;">前往进入</a>

                                        </p>


                                    </li>
                                    <li>

                                        <img :src="`./images/sx.jpeg`" alt="">
                                        <span>锤子 T系列</span>
                                        <p class="button">

                                            <a href="javascript: ;">前往进入</a>

                                        </p>


                                    </li>
                                    <li>

                                        <img :src="`./images/11.jpeg`" alt="">
                                        <span>vivo X90系列</span>
                                        <p class="button">

                                            <a href="javascript: ;">前往进入</a>

                                        </p>


                                    </li>
                                    <li>

                                        <img :src="`./images/10.jpeg`" alt="">
                                        <span>vivo X90系列</span>
                                        <p class="button">

                                            <a href="javascript: ;">前往进入</a>

                                        </p>


                                    </li>

                                </ul>

                            </div>



                        </div>

                    </aside>
                    <!-- 右边结构 -->
                    <div class="rightDetail">

                        <!-- 选择搭配 -->
                        <div class="chooseBox">

                            <!-- 标题 -->
                            <h4>选择搭配</h4>
                            <!-- 内容 -->
                            <div class="listWrap">

                                <div class="left">

                                    <img :src="`./images/0.jpeg`" alt="">
                                    <p>¥8999</p>
                                    <i>+</i>

                                </div>
                                <ul class="middle">

                                    <li>
                                        <img :src="`./images/8.jpeg`" alt="">
                                        <span>AirPods Pro 第二代</span>
                                        <div>
                                            <input type="checkbox" value="1999">
                                            <span>¥1999</span>
                                        </div>
                                    </li>
                                    <li>
                                        <img :src="`./images/11.jpeg`" alt="">
                                        <span>Macbook Pro 16寸 M2</span>
                                        <div>
                                            <input type="checkbox" value="15999">
                                            <span>¥15999</span>
                                        </div>
                                    </li>
                                    <li>
                                        <img :src="`./images/12.jpeg`" alt="">
                                        <span>Apple Watch Ultra</span>
                                        <div>
                                            <input type="checkbox" value="6299">
                                            <span>¥6299</span>
                                        </div>
                                    </li>

                                </ul>
                                <div class="right">

                                    <div>已购0件商品</div>
                                    <p>套餐价</p>
                                    <i>¥33296</i>
                                    <div>
                                        <button>加入购物车</button>
                                    </div>

                                </div>

                            </div>
                            <div class="listWrap1">

                                <div class="left">

                                    <img :src="`./images/0.jpeg`" alt="">
                                    <p>¥8999</p>
                                    <i>+</i>

                                </div>
                                <ul class="middle">

                                    <li>
                                        <img :src="`./images/8.jpeg`" alt="">
                                        <span>HomePod 第二代</span>
                                        <div>
                                            <input type="checkbox" value="2299">
                                            <span>¥2299</span>
                                        </div>
                                    </li>
                                    <li>
                                        <img :src="`./images/10.jpeg`" alt="">
                                        <span>iPad Pro 12.9寸 2023款</span>
                                        <div>
                                            <input type="checkbox" value="7999">
                                            <span>¥7999</span>
                                        </div>
                                    </li>
                                    <li>
                                        <img :src="`./images/12.jpeg`" alt="">
                                        <span>Apple Watch Ultra</span>
                                        <div>
                                            <input type="checkbox" value="6299">
                                            <span>¥6299</span>
                                        </div>
                                    </li>

                                </ul>
                                <div class="right">

                                    <div>已购0件商品</div>
                                    <p>套餐价</p>
                                    <i>¥25596</i>
                                    <div>
                                        <button>加入购物车</button>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <!-- 选择详细参数 -->
                        <div class="bottomDetail">

                            <ul class="tabBtns">

                                <li class="active"><a href="javascript: ;">商品介绍</a></li>
                                <li><a href="javascript: ;">规格包装</a></li>
                                <li><a href="javascript: ;">售后服务</a></li>
                                <li><a href="javascript: ;">商品评价</a></li>
                                <li><a href="javascript: ;">手机社区</a></li>

                            </ul>
                            <div class="tabContents">

                                <div class="active">

                                    <ul>

                                        <li>机型：Apple iPhone 14 Pro Max</li>
                                        <li>入网型号：A2896</li>
                                        <li>机身尺寸：宽77.6mm，长160.7mm，厚7.85mm</li>
                                        <li>机身重量：240g</li>
                                        <li>CPU型号：A16</li>
                                        <li>屏幕尺寸：6.7英寸</li>
                                        <li>屏幕分辨率：2796 X 1290</li>
                                        <li>生物识别：人脸识别</li>
                                        <li>后摄主像素：4800万像素</li>
                                        <li>后摄超广角像素：1200万像素</li>
                                        <li>后摄长焦像素：1200万像素</li>
                                        <li>前摄主像素：1200万像素</li>
                                        <li>充电接口：Lightning</li>
                                        <li>系统：IOS</li>
                                        <li>充电功率：20W</li>

                                    </ul>

                                </div>
                                <div>规格包装</div>
                                <div>售后服务</div>
                                <div>商品评价</div>
                                <div>手机社区</div>

                            </div>
                            <div class="tabBottom">

                                <img :src="`./images/s1.jpeg`" alt="">
                                <img :src="`./images/s2.jpeg`" alt="">
                                <img :src="`./images/s3.jpeg`" alt="">
                                <img :src="`./images/s4.png`" alt="">


                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script>

import { mapState, mapGetters } from 'vuex';
import ImageList from './ImageList';
import Zoom from './Zoom'


export default {
    name: "app_detail",
    data() {
        return {
            skuNum: 1,
            choose: ["金色", "128GB", "全网通", "官网标配"],
            isShow: true
        }
    },
    mounted() {
        this.$store.dispatch("detailOptions/getGoodsInfo", this.$route.params.skuid)
        this.$store.dispatch("detailOptions/getDetailInfo")
        this.$store.dispatch("detailOptions/getSkulist")

    },
    computed: {
        ...mapState({
            goodsInfo: state => state.detailOptions.goodsInfo,
            skuImageList: state => state.detailOptions.skuImageList,
            skuSaleAttrValueList: state => state.detailOptions.skuSaleAttrValueList
        }),
        ...mapGetters("detailOptions", ["categoryView", "skuInfo"])
    },
    components: {
        ImageList,
        Zoom
    },
    methods: {
        changeActive(a, arr) {
            arr.forEach(item => {
                item.isChecked = 0
            });
            a.isChecked = 1

            let i = 0
            this.skuSaleAttrValueList.forEach(items => {
                items.spuSaleAttrValueList.forEach(item => {
                    if (item.isChecked == 1) {
                        this.choose[i] = item.saleAttrValueName
                        i++
                    }
                })
            })
        },
        addSkunum(value) {
            this.skuNum += value
            if (this.skuNum < 1) {
                this.skuNum = 1
            }
        },
        changeSkunum(event) {
            let value = event.target.value * 1
            if (value == '' || isNaN(value) || value < 1) {
                this.skuNum = 1
            } else {
                this.skuNum = parseInt(value)
            }
        },
        async addShopCart() {
            /* try{
                await this.$store.dispatch("detailOptions/addShopCart" , {skuId:this.$route.params.skuId , skuNum:this.skuNum})
            }catch(error){
                alert(error.message , "添加失败")
            } */
            //调用的addShopCart函数是一个async函数，执行返回的结果是一个Promise
            await this.$store.dispatch("detailOptions/addShopCart", { skuId: this.$route.params.skuid, skuNum: this.skuNum }).then((a) => {
                this.$router.push({
                    name: "AddCartSuccess",
                    query: {
                        skuNum: this.skuNum
                    }
                })
                sessionStorage.setItem("SKUINFO", JSON.stringify(this.skuInfo))
                sessionStorage.setItem("SKUIMG", this.skuImageList[0].imgUrl)
                sessionStorage.setItem("CHOOSE", this.choose.join())
                console.log(a)
            }).catch((error) => {
                console.log(error.message, "添加失败")
            })



        }
    }
}

</script>

<style lang="less">
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

.detail {

    #content {

        width: 100%;

        //主要元素
        .contentMain {

            width: 80%;
            margin: 12px auto 0 auto;
            background: #f3f1f0;
            border: 2px solid #f3f1f0;
            border-radius: 12px;
            margin-bottom: 20px;

            //路径导航
            #navPath {

                padding: 9px 15px 9px 0;
                font-size: 12px;

                a {

                    color: #666;

                    &:first-child {

                        margin-left: 35px;

                    }

                }

                i {

                    color: #666;
                    padding: 0 5px;

                }

            }

            //图片效果
            #center {

                margin: 5px 0 15px;
                .clearFix();

                #left {

                    width: 400px;
                    float: left;




                }

                #right {

                    width: 700px;
                    float: right;

                    #rightTop {
                        padding-right: 20px;

                        h2 {

                            font-size: 16px;
                            line-height: 21px;
                            margin-left: 5px;
                            font-weight: 900;


                        }

                        >p {

                            color: #e12228;
                            margin-top: 12px;
                            font-size: 13px;

                        }

                        .priceWrap {

                            margin-top: 10px;
                            margin-right: 50px;
                            line-height: 28px;
                            background: #e68275;
                            padding: 7px;
                            border-radius: 8px;

                            .priceTop {
                                .clearFix();
                                padding: 5px 10px;

                                >span {

                                    margin-right: 15px;
                                    float: left;
                                    font-size: 14px;

                                }

                                .price {

                                    float: left;
                                    color: #cc1122;

                                    >span {

                                        font-size: 16px;
                                        float: left;

                                    }

                                    >p {

                                        font-size: 24px;
                                        float: left;
                                        font-weight: bold;
                                        margin: 0;
                                        padding: 0;

                                    }

                                    >i {

                                        font-size: 12px;
                                        color: #cc1122;
                                        float: left;

                                    }

                                }

                                >p {

                                    float: right;
                                    margin: 0;
                                    padding: 0;
                                    font-size: 14px
                                }

                            }

                            .priceBottom {

                                padding: 5px 10px;
                                .clearFix();

                                >span {

                                    float: left;
                                    margin-right: 15px;
                                    font-size: 14px;

                                }

                                >p {

                                    width: 520px;
                                    line-height: 28px;
                                    float: left;
                                    padding: 0;
                                    margin: 0;
                                    font-size: 14px;

                                    >span {



                                        &:first-child {

                                            background: #c81623;
                                            padding: 3px;
                                            color: #fff;
                                            border-radius: 4px;

                                        }

                                    }

                                }

                            }

                        }

                        .support {

                            margin-top: 10px;
                            line-height: 28px;
                            margin-right: 50px;
                            margin-left: 10px;
                            .clearFix();

                            >span {

                                margin-right: 15px;
                                float: left;
                                font-size: 14px;

                            }

                            >p {

                                float: left;
                                color: #999;
                                margin: 0;
                                padding: 0;
                                margin-left: 10px;
                                font-size: 14px;

                            }

                        }

                        .address {

                            border-bottom: 1px solid #b1b1b1;
                            padding-bottom: 5px;
                            line-height: 28px;
                            margin-right: 50px;
                            margin-left: 10px;
                            .clearFix();

                            >span {

                                margin-right: 15px;
                                float: left;
                                margin-left: 1px;
                                font-size: 14px;

                            }

                            >p {

                                float: left;
                                color: #999;
                                margin: 0;
                                padding: 0;
                                font-size: 14px;
                                margin-left: 10px;

                            }

                        }
                    }

                    #rightBottom {

                        margin-top: 10px;
                        line-height: 28px;

                        .choose {

                            .clearFix();

                            #mask {

                                height: 30px;
                                background: snow;
                                border: 1px solid #ddd;
                                padding: 0 20px;
                                margin-right: 15px;
                                margin-left: 10px;
                                border-radius: 6px;
                                float: left;

                                a {

                                    color: red;
                                    margin-left: 20px;
                                    text-align: center;

                                }

                                span {
                                    font-size: 14px;
                                }

                            }

                        }

                        .chooseWrap {



                            dl {

                                margin-left: 10px;
                                margin-top: 13px;
                                margin-bottom: 13px;
                                .clearFix();

                                dt {

                                    margin-right: 15px;
                                    float: left;
                                    font-size: 14px;

                                }

                                dd {

                                    float: left;
                                    margin: 0;
                                    margin-right: 5px;
                                    color: #666;
                                    line-height: 24px;
                                    padding: 2px 14px;
                                    border: 1px solid #f05743;
                                    border-radius: 4px;
                                    font-size: 14px
                                }

                                .active1 {
                                    background-color: orangered;
                                    color: white
                                }

                            }

                        }

                        .addCart {

                            .clearFix();

                            .count {

                                width: 55px;
                                margin-right: 15px;
                                float: left;
                                position: relative;

                                input {

                                    width: 46px;
                                    height: 32px;
                                    margin-left: 10px;
                                    margin-top: 10px;
                                    border: 1px solid #ddd;
                                    border-top-left-radius: 4px;
                                    border-bottom-left-radius: 4px;
                                    color: #555;
                                    text-align: center;

                                }

                                a {

                                    width: 16px;
                                    height: 16px;
                                    background: #f05743;
                                    color: #fff;
                                    text-align: center;
                                    line-height: 16px;
                                    border-top-right-radius: 4px;
                                    border: 1px solid #f05743;
                                    position: absolute;
                                    left: 58px;
                                    top: 10px;
                                    right: 1px;

                                    &:last-child {
                                        top: 27px;
                                        border-bottom-right-radius: 4px;
                                        border-top-right-radius: 0px;
                                        border-top: 0px;
                                    }

                                }

                            }

                            button {

                                padding-left: 20px;
                                padding-right: 20px;
                                margin-top: 11px;
                                margin-left: 30px;
                                height: 32px;
                                background: #f05743;
                                border: none;
                                border-radius: 4px;
                                float: left;
                                font-size: 16px;
                                color: #fff;

                            }

                        }

                    }

                }

            }

            //商品详情
            #goodsDetailWrap {

                width: 100%;
                margin: 30px auto 0;
                .clearFix();
                margin-top: 80px;
                margin-bottom: 20px;

                .liftAside {

                    width: 20%;
                    border: 1px solid rgb(230, 225, 225);
                    margin-left: 20px;
                    border-radius: 12px;
                    float: left;
                    overflow: hidden;

                    .asideTop {

                        .clearFix();
                        width: 100%;

                        a {

                            width: 48%;
                            height: 40px;
                            margin: 0;
                            padding: 0;
                            background: rgb(230, 225, 225);
                            text-align: center;
                            line-height: 40px;
                            border: 2px solid rgb(255, 255, 255);
                            float: left;

                            &:first-child {

                                border-top-left-radius: 11px;

                            }

                            &:last-child {

                                border-top-right-radius: 11px;

                            }



                        }

                        .active {

                            background: #f05743;
                            width: 48%;
                            font-size: 15px;
                            line-height: 37px;
                            text-align: center;
                            line-height: 40px;
                            color: white;


                        }

                    }

                    .asideBottom {

                        padding: 10px;
                        background: rgb(230, 225, 225);
                        .clearFix();

                        .aside1 {

                            ul {


                                &.goodslist1 {

                                    li {

                                        width: 50%;
                                        border-bottom: 1px dashed #f05743;
                                        line-height: 28px;
                                        float: left;
                                        text-align: center;
                                        font-size: 14px;

                                        &:last-child {
                                            margin-bottom: 10px;
                                        }

                                    }

                                }

                                &.goodslist2 {

                                    margin: 5px 0 15px;


                                    li {

                                        border-bottom: 1px solid #f05743;
                                        margin-bottom: 10px;
                                        margin: auto;
                                        margin-top: 5px;

                                        img {

                                            display: block;
                                            margin: auto;
                                            width: 198px;
                                            border-radius: 8px;

                                        }

                                        p {
                                            margin: 0;
                                            padding: 0;
                                            font-size: 16px;
                                            color: #c81623;
                                            margin-left: 15px;

                                        }

                                        span {
                                            font-size: 14px;
                                            margin-left: 15px;
                                        }

                                        .button {

                                            margin-top: 5px;
                                            margin-bottom: 5px;
                                            font-size: 12px;
                                            text-align: center;


                                            a {

                                                color: #000000;
                                                padding: 2px 14px;
                                                line-height: 18px;
                                                border-radius: 4px;
                                                border: 1px solid #e1251b;

                                            }

                                        }

                                    }

                                }

                            }

                        }

                        .aside2 {

                            .goodslist3 {

                                margin: 5px 0 10px;

                                li {

                                    width: 50%;
                                    border-bottom: 1px dashed #f05743;
                                    line-height: 24px;
                                    float: left;
                                    text-align: center;
                                    font-weight: bold;

                                }

                            }

                            .goodslist4 {
                                margin: 5px 0 15px;

                                li {

                                    border-bottom: 1px solid #f05743;
                                    margin-bottom: 10px;
                                    margin-top: 5px;

                                    img {
                                        display: block;
                                        margin: auto;
                                        width: 198px;
                                        border-radius: 8px;

                                    }

                                    span {

                                        font-size: 16px;
                                        color: #c81623;

                                    }

                                    .button {

                                        margin-top: 5px;
                                        margin-bottom: 5px;
                                        font-size: 12px;
                                        text-align: center;

                                        a {

                                            color: #000000;
                                            padding: 2px 14px;
                                            line-height: 18px;
                                            border-radius: 4px;
                                            border: 1px solid #e1251b;

                                        }

                                    }

                                }

                            }

                        }



                    }

                }

                .rightDetail {

                    width: 75%;
                    margin-left: 20px;
                    float: left;

                    .chooseBox {

                        border: 1px solid rgb(230, 225, 225);
                        border-radius: 12px;
                        margin-bottom: 15px;
                        overflow: hidden;

                        h4 {

                            border-bottom: 1px solid #f05743;
                            background: rgb(230, 225, 225);
                            color: #333;
                            padding: 5px 0 5px 25px;
                            .clearFix();

                        }

                        .listWrap {

                            width: 100%;
                            height: 165px;
                            float: right;
                            background: rgb(230, 225, 225);
                            border-bottom: 1px solid #f05743;

                            .left {

                                width: 170px;
                                height: 160px;
                                position: relative;
                                float: left;
                                text-align: center;
                                padding-top: 5px;

                                img {

                                    width: 130px;
                                    height: 110px;
                                    border-radius: 6px;
                                    margin: 0 auto;
                                }

                                p {

                                    color: #c81623;
                                    font-size: 16px;

                                }

                                i {

                                    position: absolute;
                                    top: 48px;
                                    right: -8px;
                                    font-size: 16px;

                                }


                            }

                            .middle {

                                width: 668px;
                                height: 175px;
                                float: left;
                                text-align: center;
                                padding-top: 5px;

                                li {

                                    width: 175px;
                                    margin-left: 20px;
                                    margin-right: 20px;
                                    float: left;

                                    img {

                                        width: 170px;
                                        height: 100px;
                                        border-radius: 6px;
                                        margin: 0 auto;

                                    }

                                }

                            }

                            .right {

                                border-left: 1px solid rgb(230, 225, 225);
                                float: left;
                                width: 153px;
                                height: 175px;
                                padding-left: 20px;

                                div {

                                    margin-top: 10px;
                                    margin-bottom: 10px;

                                }

                                p {

                                    font-weight: bold;
                                    margin-bottom: 10px;

                                }

                                i {

                                    color: #b1191a;
                                    font-size: 16px;
                                    margin-bottom: 10px;

                                }

                                button {

                                    padding: 10px 25px;
                                    font-size: 16px;
                                    color: #fff;
                                    background: #f05743;
                                    border: none;
                                    border-radius: 6px;

                                }

                            }

                        }

                        .listWrap1 {

                            width: 100%;
                            height: 165px;
                            float: right;
                            background: rgb(230, 225, 225);

                            .left {

                                width: 170px;
                                height: 160px;
                                position: relative;
                                float: left;
                                text-align: center;
                                padding-top: 5px;

                                img {

                                    width: 130px;
                                    height: 110px;
                                    border-radius: 6px;
                                    margin: 0 auto;
                                }

                                p {

                                    color: #c81623;
                                    font-size: 16px;

                                }

                                i {

                                    position: absolute;
                                    top: 48px;
                                    right: -8px;
                                    font-size: 16px;

                                }


                            }

                            .middle {

                                width: 668px;
                                height: 175px;
                                float: left;
                                text-align: center;
                                padding-top: 5px;

                                li {

                                    width: 175px;
                                    margin-left: 20px;
                                    margin-right: 20px;
                                    float: left;

                                    img {

                                        width: 170px;
                                        height: 100px;
                                        border-radius: 6px;
                                        margin: 0 auto;

                                    }

                                }

                            }

                            .right {

                                border-left: 1px solid rgb(230, 225, 225);
                                float: left;
                                width: 153px;
                                height: 175px;
                                padding-left: 20px;

                                div {

                                    margin-top: 10px;
                                    margin-bottom: 10px;

                                }

                                p {

                                    font-weight: bold;
                                    margin-bottom: 10px;

                                }

                                i {

                                    color: #b1191a;
                                    font-size: 16px;
                                    margin-bottom: 10px;

                                }

                                button {

                                    padding: 10px 25px;
                                    font-size: 16px;
                                    color: #fff;
                                    background: #f05743;
                                    border: none;
                                    border-radius: 6px;

                                }

                            }

                        }

                    }

                    .bottomDetail {

                        background: rgb(230, 225, 225);
                        border: 1px solid #ddd;
                        border-radius: 12px;
                        margin-top: 20px;

                        .tabBtns {

                            background: rgb(230, 225, 225);
                            text-align: center;
                            border-top-left-radius: 11px;
                            border-top-right-radius: 11px;
                            border-bottom: 1px solid #f05743;
                            .clearFix();

                            li {

                                font-size: 14px;
                                font-weight: bold;
                                border-top: 1px solid #ddd;
                                border-bottom: 1px solid #ddd;
                                border-right: 1px solid #ddd;
                                background: #fff;
                                height: 40px;
                                padding-left: 11px;
                                padding-right: 11px;
                                text-align: center;
                                line-height: 40px;
                                float: left;

                                &:first-child {

                                    border-top-left-radius: 11px;
                                    border-left: 1px solid #ddd;

                                }

                                &:last-child {

                                    border-top-right-radius: 11px;

                                }

                                &.active {

                                    background: #f05743;

                                    a {

                                        color: #fff;

                                    }

                                }


                            }

                        }

                        .tabContents {

                            margin-top: 10px;
                            margin-bottom: 10px;

                            div {

                                padding-left: 25px;
                                line-height: 30px;
                                font-size: 14px;
                                display: none;

                                &.active {

                                    margin: 10px 0;
                                    display: block;

                                }

                            }

                        }

                        .tabBottom {

                            margin-top: 10px;
                            margin-bottom: 20px;

                            img {

                                width: 100%;

                            }

                        }

                    }

                }

            }
        }

    }

}
</style>