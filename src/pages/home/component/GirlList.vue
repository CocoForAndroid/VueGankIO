<template>
    <div class="girl-list-wrapper">
        <img v-lazy="item" alt="" v-for="item of imgArray">
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

</style>
