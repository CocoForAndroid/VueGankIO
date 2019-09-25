<template>
  <div class="wrapper">
    <tab-bar :arrays="tabs"></tab-bar>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" v-if="isArticle">
      <van-list   v-model="loading"
                  :finished="finished"
                  finished-text="没有更多了"
                  @load="onLoad">

      </van-list>
    </van-pull-refresh>
    <girl-list :img-array="girlImages" @refreshGirl="getRandomGirls"  :animateFinish="finishAnimate" ></girl-list>
  </div>
</template>

<script>
import {
  getLatestGankData,
  getCategoriesList,
  getXianDuCategory
} from '../../request/api'
import TabBar from './component/TabBar'
import GirlList from './component/GirlList'
import { PullRefresh, List } from 'vant'
export default {
  data () {
    return {
      inAnimate: false, // 是否处于动画中
      finishAnimate: false,
      isArticle: false, // 是否显示文章列表
      isLoading: false,
      loading: false,
      finished: false,
      page: 1,
      pageSize: 15,
      tabs: ['福利', '闲读', 'Android', 'IOS', '前端'],
      type: '福利',
      girlImages: [] // 福利图片
    }
  },
  name: 'Home',
  components: { GirlList,
    TabBar,
    [PullRefresh.name]: PullRefresh,
    [List.name]: List },
  mounted () {
    this.getGirlsData()
  },
  methods: {
    onLoad () {

    },
    // 更新福利列表
    getRandomGirls () {
      // 生成随机页数
      const randomPage = this._.random(1, 5, false)
      console.log(`currentPage:${randomPage}`)
      this.type = '福利'
      this.page = randomPage
      this.finishAnimate = false
      this.inAnimate = true
      this.getGirlsData()
    },
    onRefresh () {
      this.page = 1
    },
    getGirlsData () {
      getCategoriesList(this.type, this.pageSize, this.page).then(res => {
        if (this.type == '福利') {
          // 图片类型
          this.girlImages = res.results
          if (this.inAnimate) {
            setTimeout(() => {
              this.finishAnimate = true
            }, 500)
          }
        } else {
          // 文章类型
        }
      })
    }
  }
}
</script>

<style scoped lang="stylus"></style>
