<template>
    <div class="header">
        <div class="header-left"><div class="iconfont back-icon">&#xe6bc;</div></div>
        <div class="header-input"><span class="iconfont">&#xe66d;输入城市/景点</span></div>
        <router-link to= "/city">
        <div class="header-right">
            {{this.city}}
        <span class="iconfont right-icon">&#xe658;
        </span>
        </div>
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/shenlue.styl'

.header
    display:flex
    line-height :.86rem
    background:$bgcolor
    color:#fff
    .header-left
        width:.64rem
        float:left
        .back-icon
            text-align :center
            font-size: .4rem
    .header-input
        flex:1
        height :.64rem
        margin-top :.12rem
        margin-left :.2rem
        padding-left:.2rem
        background:#fff
        border-radius:.1rem
        color:#ccc
        line-height :.64rem
    .header-right
        min-width:1.04rem
        padding-left:0.1rem
        float:right
        text-align: center
        color:#fff
        .right-icon
            font-size: .24rem
</style>
