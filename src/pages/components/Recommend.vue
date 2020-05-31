<template>
  <div>
    <div class="re-title">热销推荐</div>
    <ul>
      <router-link tag='li' :to="'/detail/' + item.id" class="re-item" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/shenlue.styl'
  .re-title
    margin-top:.2rem
    line-height :.8rem
    background :#eee
    text-indent: .2rem
  .re-item
    display:flex
    overflow:hidden
    height:1.9rem
    .item-img
      width:1.7rem
      height 1.7rem
      padding: .1rem
    .item-info
      flex:1
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
      .item-button
        line-height:.44rem
        margin-top:.16rem
        background:#ff9300
        padding:0 .1rem
        border-radius:.06rem
        color:#fff
</style>
