<template>
    <div class="home">
        <!-- 使用全局组件 -->
        <TypeNav />

        <ListContainer />
        <Recommend />
        <Rank />
        <Like />
        <Floor v-for="floor in floors" :key="floor.id" :floors="floor" />
        <Brand />
    </div>
</template>

<script>

import { mapState } from "vuex"
import ListContainer from "./ListContainer"
import Recommend from "./Recommend"
import Rank from "./Rank"
import Like from "./Like"
import Floor from "./Floor"
import Brand from "./Brand"

export default {
    name: "app_home",
    data() {
        return {

        }
    },
    components: {
        ListContainer,
        Recommend,
        Rank,
        Like,
        Floor,
        Brand
    },
    computed: {
        ...mapState({
            floors: state => state.homeOptions.floors
        })
    },
    mounted() {
        this.$store.dispatch("homeOptions/getfloors")
    }
}

</script>

<style scoped lang="less"></style>