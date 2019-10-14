<template>
  <div class="wrapper">
    <tab-bar :arrays="tabs" @getSelectTab="handleTabChange"></tab-bar>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" v-if="currentTabIndex!=0">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <article-list :items="articleList"></article-list>
      </van-list>
    </van-pull-refresh>
    <girl-list
      v-if="currentTabIndex==0"
      :img-array="girlImages"
      @handleImgClick="previewImg"
      @refreshGirl="getRandomGirls"
      :animateFinish="finishAnimate"
    ></girl-list>
  </div>
</template>

<script>
import {
  getLatestGankData,
  getCategoriesList,
  getXianDuCategory
} from "../../request/api";
import TabBar from "./component/TabBar";
import GirlList from "./component/GirlList";
import ArticleList from "./component/ArticleList";
import { PullRefresh, List } from "vant";
export default {
  data() {
    return {
      inAnimate: false, // 是否处于动画中
      finishAnimate: false,
      isLoading: false,
      loading: false,
      finished: false,
      page: 1,
      pageSize: 15,
      tabs: ["福利", "闲读", "Android", "IOS", "前端"],
      type: "福利",
      currentTabIndex: 0,
      articleList: [], //文章内容
      girlImages: [] // 福利图片
    };
  },
  name: "Home",
  components: {
    GirlList,
    TabBar,
    ArticleList,
    [PullRefresh.name]: PullRefresh,
    [List.name]: List
  },
  mounted() {
    this.getGirlsData(false);
  },
  methods: {
    //tab切换
    handleTabChange(index) {
      this.currentTabIndex = index;
      this.type = this.tabs[index];
      if (index == 0) {
        this.getRandomGirls();
      } else {
        this.page = 1;
        this.getGirlsData(false);
      }
    },
    previewImg(index) {
      this.$router.push({
        name: "preview",
        params: {
          imgs: this.girlImages,
          currentIndex: index
        }
      });
    },
    onLoad() {
      console.log('loadMore')
      this.page += 1;
      this.getGirlsData(true);
    },
    // 更新福利列表
    getRandomGirls() {
      // 生成随机页数
      const randomPage = this._.random(1, 5, false);
      console.log(`currentPage:${randomPage}`);
      this.type = "福利";
      this.page = randomPage;
      this.finishAnimate = false;
      this.inAnimate = true;
      this.getGirlsData(false);
    },
    onRefresh() {
      this.page = 1;
      this.getGirlsData(false);
    },
    getGirlsData(loadMore) {
      getCategoriesList(this.type, this.pageSize, this.page).then(res => {
        if (this.type === "福利") {
          // 图片类型
          this.girlImages = res.results;
          if (this.inAnimate) {
            setTimeout(() => {
              this.finishAnimate = true;
            }, 500);
          }
        } else {
          // 文章类型
          if (loadMore) {
            if (res.results.length==0) {
              console.log('empty')
              this.loading = false;
              this.finished = true;
            } else {
               this.articleList.push(...res.results)
              this.loading = false;
            }
          } else {
            this.articleList = res.results;
            this.isLoading = false;
          }
        }
      });
    }
  }
};
</script>

<style scoped lang="stylus"></style>
