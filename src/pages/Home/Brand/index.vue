<template>
    <div class="brand">
        <div class="brand_wrapper">
            <ul class="brand_list">
                <li class="brand_link"></li>
                <li class="brand_link"></li>
                <li class="brand_link"></li>
                <li class="brand_link"></li>
                <li class="brand_link"></li>
                <li class="brand_link"></li>
                <li class="brand_link"></li>
                <li class="brand_link"></li>
                <li class="brand_link"></li>
                <li class="brand_link"></li>
            </ul>
        </div>
    </div>
</template>

<script>

    export default {
        name:"app_brand",
        data() {
            return {
                
            }
        },
    }

</script>

<style scoped lang="less">

    .brand{
        width: 100%;
        height: 60px;
        margin:10px 0;


        .brand_wrapper{
            width: 80%;
            height: 100%;
            margin: auto;
            background-color: rgb(223, 224, 224);

            .brand_list{
                width: 100%;
                height: 100%;
                list-style: none;
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: space-around;
                align-items: center;

                .brand_link{
                    width: 10%;
                    height: 80%;
                    display: block;
                    border-right: 1px solid black;

                    &:last-child{
                        border-right: none;
                    }
                }
            }
        }
    }

</style>