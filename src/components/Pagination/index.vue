<template>
    <div class="pagination">
        <div class="fr page">
            <div class="sui-pagination clearfix">
                <ul>
                    <li class="prev disabled">
                        <button :disabled="pageNo == 1" @click="setPageNo(pageNo-1)">«上一页</button>
                    </li>
                    <li :class="{active:pageNo == 1}" v-if="startNumendNum.start > 1">
                        <a @click="setPageNo(1)">1</a>
                    </li>
                    <li class="dotted" v-if="startNumendNum.start > 2"><span>...</span></li>
                    <li v-for="(page , index) in pages"
                        :key="index"
                        :class="{active:pageNo == page}">
                        <a @click="setPageNo(page)">{{ page }}</a>
                    </li>
                    <li class="dotted" v-if="pageSum > startNumendNum.end + 1"><span>...</span></li>
                    <li :class="{active:pageNo == pageSum}" v-if="pageSum > startNumendNum.end">
                        <a @click="setPageNo(pageSum)">{{ pageSum }}</a>
                    </li>
                    <li class="next">
                        <button :disabled="pageNo == pageSum" @click="setPageNo(pageNo+1)">下一页»</button>
                    </li>
                </ul>
                <div><span>共 &nbsp;{{ total }}&nbsp; 条数据，总&nbsp;{{ pageSum }}&nbsp;页</span></div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: "app_pagin",
    data() {
        return {

        }
    },
    props:["pageNo" , "pageSize" , "total" , "continues"],
    computed:{
        pageSum(){
            return Math.ceil(Number(this.total) / Number(this.pageSize))
        },
        startNumendNum(){
            let start = 0
            let end = 0
            //当总页数没有连续页码多时
            if(this.continues > this.pageSum){
                start = 1
                end = this.pageSum
            }else{
                start = this.pageNo - Math.floor(this.continues / 2)
                end = this.pageNo + Math.floor(this.continues / 2)
                if(start <= 0){
                    start = 1
                    end = this.continues
                }
                if(end > this.pageSum){
                    start = this.pageSum - this.continues + 1
                    end = this.pageSum
                }
            }
            return {start,end}
        },
        pages(){
            let arr = []
            for(let i = 0 ;  i < (this.startNumendNum.end - this.startNumendNum.start + 1) ; i++){
                arr[i] = this.startNumendNum.start + i
            }
            return arr
        }
    },
    methods:{
        setPageNo(value){
            this.$bus.$emit("sendPageNo" , value)
        }
    },
    mounted(){           
        
    }
}

</script>

<style scoped lang="less">
.pagination {
    width: 100%;

    .page {
        width: 100%;
        height: 66px;

        .sui-pagination {
            width: 65%;
            height: 100%;
            margin: auto;
            display: flex;
            justify-content: space-around;
            align-items: center;

            ul {
                padding: 0;
                margin: 0;
                vertical-align: middle;
                width: 78%;
                height: 100%;
                float: left;

                li {
                    line-height: 18px;
                    display: inline-block;
                    margin-top: 13px;

                    a {
                        position: relative;
                        float: left;
                        line-height: 18px;
                        text-decoration: none;
                        background-color: #fff;
                        border: 1px solid #e0e9ee;
                        margin-left: -1px;
                        font-size: 14px;
                        padding: 9px 18px;
                        color: #333;
                    }

                    button{
                        position: relative;
                        float: left;
                        line-height: 18px;
                        text-decoration: none;
                        background-color: #fff;
                        border: 1px solid #e0e9ee;
                        margin-left: -1px;
                        font-size: 14px;
                        padding: 9px 18px;
                        color: #333;
                    }

                    &.active {
                        a {
                            background-color: orangered;
                            color: white;
                            border-color: #fff;
                            cursor: default;
                        }
                    }

                    &.prev {
                        a {
                            background-color: #fafafa;
                        }
                    }

                    &.disabled {
                        a {
                            color: #999;
                            cursor: default;
                        }
                    }

                    &.dotted {
                        span {
                            margin-left: -1px;
                            position: relative;
                            float: left;
                            line-height: 18px;
                            text-decoration: none;
                            background-color: #fff;
                            font-size: 14px;
                            border: 0;
                            padding: 9px 18px;
                            color: #333;
                        }
                    }

                    &.next {
                        a {
                            background-color: #fafafa;
                        }
                    }
                }
            }

            div {
                color: #333;
                font-size: 14px;
                float: right;
                width: 22%;
                height: 66px;
                line-height: 66px;

            }
        }
    }
}</style>