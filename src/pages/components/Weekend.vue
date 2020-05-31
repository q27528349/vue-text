<template>
  <div>
    <div class="re-title">热销推荐</div>
    <ul>
      <li class="re-item" v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/shenlue.styl'
  .re-title
    line-height :.8rem
    background :#eee
    text-indent: .2rem
  .item-img-wrapper
    overflow:hidden
    height:0
    padding-bottom:37.9%
    .item-img
      width:100%
  .item-info
    padding:.1rem
    min-width:0
    .item-title
      line-height:.54rem
      font-size:.30rem
      shenlue()
    .item-desc
      line-height:.4rem
      color:#ccc
      shenlue()
</style>
