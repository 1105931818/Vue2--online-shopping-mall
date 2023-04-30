<template>
    <div class="search">
        <div class="search_wrapper">
            <div class="search_left">
                <router-link to="/home"><img src="./images/search.png" alt=""></router-link>
            </div>
            <div class="search_right" 
                v-show="isShow">
                <input type="text" v-model="keyword">
                <button @click="goSearch">搜索</button>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name:"app_search",
        data() {
            return {
                keyword:""
            }
        },
        methods:{
            goSearch(){
                /* if(!this.keyword.trim()){
                    this.keyword = ""
                    return alert("搜索不能为空")
                } */

                //返回值为Promise对象
                /* this.$router.push({
                    name:"Cont",
                    params:{
                        keyword:this.keyword || undefined
                    }
                }) */
                let search = {name:"Cont"}
                let params = {keyword:this.keyword || undefined}
                search.params = params
                 //判断：如果路由跳转的时候，是否带有query参数，参数要一起传输给服务器
                if(this.$route.query){
                    search.query = this.$route.query   
                }
                this.$router.push(search)
                

                //属性值为VueRouter类的一个实例，当在入口文件注册路由的时候，给组件实例添加$router|$route属性
                /* console.log(this.$router) */
                /* this.keyword = "" */
            }
        },
        computed:{
            isShow(){
                return this.$route.meta.isShow
            },
            /* keyword(){
                return this.$route.query.keyword
            } */
        },
        mounted(){
            this.$bus.$on("clear" , () => {
                this.keyword = ""
            })
        }
    }

</script>

<style scoped lang="less">

    .search{
        width: 100%;
        height: 120px;

        .search_wrapper{
            width: 80%;
            height: 100%;
            margin: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            
            .search_left{
                flex:1;
                position: relative;
                
                a{
                    display: inline-block;
                    width: 180px;
                    height: 80px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50% , -50%);

                    img{
                        height: 80px;
                    }
                }
            }

            .search_right{
                width: 600px;
                height: 30px;
                margin-left: 300px;
                border: 2px solid rgb(248, 87, 69);

                input{
                    width: 500px;
                    height: 27px;
                    border: none;
                    outline: none;
                }

                button{
                    width: 96px;
                    height: 30px;
                    margin: 0;
                    padding: 0;
                    color: white;
                    background-color: rgb(248, 87, 69);
                    border: none;
                }
            }

        }
    }

</style>