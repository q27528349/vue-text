<template>
    <div class="List" ref="wrapper">
      <div>
          <div class="area">
            <div class="title border-bottom">当前城市</div>
              <div class="buttom-list">
                <div class="buttom-wrapper" >
                    <div class="buttom">{{this.currentCity}}</div>
                </div>
              </div>
          </div>
          <div class="area">
            <div class="title border-bottom">热门城市</div>
              <div class="buttom-list">
                <div class="buttom-wrapper" v-for="item of hotcities" :key="item.id" @click="handlecityclick(item.name)">
                  <div class="buttom">{{item.name}}</div>
                </div>
              </div>
          </div>
          <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
            <div class="title border-bottom">{{key}}</div>
              <div class="item-list">
                <div class="item border-bottom" v-for="inneritem of item" :key='inneritem.id' @click="handlecityclick(inneritem.name)">
                  {{inneritem.name}}
                  </div>
              </div>
          </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex' // mapstate 简易获取state数据$store.state mapmutations 让$store.commit简写
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotcities: Array,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handlecityclick (city) {
      this.changecity(city)
      this.$router.push('/') // 点击之后到首页
    },
    ...mapMutations(['changecity'])
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true
    })
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0] // 利用ref取到dom
        this.scroll.scrollToElement(element) // scroll的方法 可以自动滚动到某个位置 这个数据从alphaber传递 解决右边快速滚动
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-bottom
  &:before
    border-color:#777
  &:after
    border-color:#777
.List
  overflow:hidden
  position:absolute
  top:1.8rem
  left:0
  right:0
  bottom:0
  .title
    line-height:.4rem
    background:#eee
    padding-left:.2rem
    color:#666
    font-size:.26rem
  .buttom-list
    overflow:hidden
    padding:.1rem .6rem .1rem .1rem
    .buttom-wrapper
      float:left
      width:33.33%
      .buttom
        margin:.1rem
        text-align :center
        border:.02rem solid #ccc
        border-radius:.06rem
  .item-list
    .item
      line-height :.76rem
      padding-left:.2rem
</style>
