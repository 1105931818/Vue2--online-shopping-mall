<template>
    <div class="header">
        <div class="header_wrapper">
            <div class="header_left">
                <p>淘宝欢迎你！</p>
                <ul class="login_list" v-if="!userlist.name">
                    <li class="login_link">
                        <span>请 &nbsp; &nbsp;</span>
                        <router-link to="/login">登录</router-link>
                    </li>
                    <li class="login_link">
                        <router-link to="/register">免费注册</router-link>
                    </li>
                </ul>
                <ul class="login_list" v-if="userlist.name">
                    <li class="login_link">
                        <a>{{ userlist.name }}</a>
                    </li>
                    <li class="login_link" @click="logout">
                        <a>退出登录</a>
                    </li>
                </ul>
            </div>
            <div class="header_right">
                <ul class="header_list">
                    <li class="header_link">
                        <router-link class="header_item" to="/center/myorder">我的订单</router-link>
                    </li>
                    <li class="header_link">
                        <router-link class="header_item" to="/shopcart">我的购物车</router-link>
                    </li>
                    <li class="header_link">
                        <a class="header_item">我的淘宝</a>
                    </li>
                    <li class="header_link">
                        <a class="header_item">淘宝会员</a>
                    </li>
                    <li class="header_link">
                        <a class="header_item">企业采购</a>
                    </li>
                    <li class="header_link">
                        <a class="header_item">关注淘宝</a>
                    </li>
                    <li class="header_link">
                        <a class="header_item">合作招商</a>
                    </li>
                    <li class="header_link">
                        <a class="header_item">商家后台</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
    name: "app_header",
    data() {
        return {

        }
    },
    mounted() {
    
    },
    computed: {
        ...mapState("loginOptions", ["userlist"]),
    },
    methods:{
        async logout(){
            await this.$store.dispatch("loginOptions/getUserLogout").then((a) => {
                console.log(a)
                this.$router.push({
                    name:"Home"
                })
            }).catch((error) => {
                console.log(error.message)
            })
        }
    }
}

</script>

<style scoped lang="less">
.header {
    width: 100%;
    height: 30px;
    background-color: rgb(214, 214, 214);
    margin: 0;
    padding: 0;

    .header_wrapper {
        width: 80%;
        height: 100%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .header_left {
            width: 300px;
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;

            p {
                font-size: 14px;
            }

            .login_list {
                list-style: none;
                width: 200px;
                display: flex;

                margin: 0;
                padding: 0;

                .login_link {
                    font-size: 14px;
                    width: 45%;
                    text-align: center;

                    &:last-child a {
                        border-left: 1px solid rgb(89, 89, 89);
                        padding-left: 15px;
                    }

                    a {
                        text-decoration: none;
                        display: inline-block;
                        color: rgb(89, 89, 89)
                    }
                }
            }
        }

        .header_right {
            height: 100%;

            .header_list {
                height: 100%;
                margin: 0;
                padding: 0;
                list-style: none;
                display: flex;
                align-items: center;

                .header_link {
                    font-size: 14px;
                    margin-left: 10px;
                    border-left: 1px solid rgb(89, 89, 89);
                    padding-left: 10px;

                    &:first-child {
                        border-left: none;
                    }

                    a {
                        text-decoration: none;
                        color: rgb(89, 89, 89);
                    }
                }

            }
        }
    }
}
</style>