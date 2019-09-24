<template>
    <div class="girl-list-wrapper">
       <div class="item" v-for="item of imgArray" :key='item._id'>
         <img v-lazy="item.url"  alt="" />
       </div>
    </div>
</template>

<script>
export default {
  name: 'GirlList.vue',
  props: {
    imgArray: {
      type: Array
    }
  }
}
</script>

<style lang="stylus" scoped>
  .girl-list-wrapper
      column-count 2
      column-width 50%
      margin-top 80px
      column-gap 5px
      &>div
        margin-bottom 10px
        padding 5px
        &>img
          width 100%
          height 100%
</style>
