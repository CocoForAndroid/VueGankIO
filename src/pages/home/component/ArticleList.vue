<template>
  <div class="article-wrapper">
    <div class="item" v-for="(item, index) in items" :key="index">
      <div class="desc" @click="handleItemClick(item.url)">{{item.desc}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleList.vue',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleItemClick (url) {
      window.location.href = url
    }
  }
}
</script>

<style scoped lang="stylus">
  .article-wrapper
    display flex
    flex-flow column nowrap
    margin-top 80px
    .item
      background white
      padding 20px
      margin 10px
      font-size 26px
      height 100px
      line-height 40px
      box-shadow 3px 3px 3px 3px #eee
      border-right 5px
      .desc
        overflow hidden
        width 100%
        text-overflow  ellipsis
        white-space nowrap

</style>
