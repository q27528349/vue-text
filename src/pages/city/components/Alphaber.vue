<template>
    <div class="list">
        <li class="item" v-for="item of letters" :key="item" :ref="item"
        @click="handleclick" @touchstart.prevent="handletouchstart" @touchmove="handletouchmove"
        @touchend="handletouchend">{{item}}</li>
    </div>
</template>

<script>
export default {
  name: 'CityAlphaber',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = [] // 解决不是对象
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop // 取得A距离本组件上方距离
  },
  methods: {
    handleclick (e) {
      this.$emit('change', e.target.innerText) // 传递给List
    },
    handletouchstart () {
      this.touchStatus = true
    },
    handletouchmove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20) // 小于20为0从A开始
          if (index >= 0 && index < this.letters.length) { // 解决位置不在字母表上
            this.$emit('change', this.letters[index]) // 利用数组传递到List
          }
        }, 8)
      }
    },
    handletouchend () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
  display :flex
  flex-direction:column
  justify-content:center
  position:absolute
  top:1.58rem
  right:0
  bottom:0
  width:.4rem
  .item
    line-height :.4rem
    text-align :center
    color:$bgcolor
    list-style :none
</style>
