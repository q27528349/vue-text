<template>
<div>
    <router-link tag="div" to="/" class="header-dis" v-show="showAbs">
      <div class="iconfont back-icon">&#xe6bc;</div>
    </router-link>
    <div class="header-fiexd" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-fiexd-back">&#xe6bc;</div>
      </router-link>
      景点详情
    </div>
</div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handlescroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handlescroll)
  },
  methods: {
    handlescroll () {
      const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.header-dis
  position:absolute
  left:.2rem
  top:.2rem
  width:.8rem
  height:.8rem
  border-radius:.4rem
  line-height:.8rem
  text-align:center
  background :rgba(0,0,0,0.8)
  .back-icon
    color:#fff
    font-size:.4rem
.header-fiexd
  z-index:2
  position:fixed
  top:0
  left:0
  right:0
  height:.86rem
  line-height :.86rem
  text-align :center
  color: #000
  background:#00bcd4
  font-size: .4rem
  .header-fiexd-back
    position:absolute
    top:0
    left:0
    width:.64rem
    text-align :center
    font-size:.4rem
    color: #fff
</style>
