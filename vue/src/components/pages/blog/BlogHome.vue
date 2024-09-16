<template>
  <PageLayout>
    <HeaderBlog />
    <FirstCard
      :currentNews="currentNews"
      :currentSlide="currentSlide"
      @changeSlideIndex="(index) => changeSlideHandler(index)"
    />
    <SearchBlog @search="(data) => handleSearch(data)" />
    <div class="card-grid">
      <SecondCard
        v-for="news in secondTypeNews"
        :key="news.id"
        :card="news"
      />
    </div>
    <FooterBlog />
  </PageLayout>
</template>

<script>
import PageLayout from "../../parts/PageLayout";
import HeaderBlog from "@/components/pages/blog/components/HeaderBlog.vue";
import FirstCard from "@/components/pages/blog/components/FirstCard.vue";
import SecondCard from "@/components/pages/blog/components/SecondCard.vue";
import SearchBlog from "@/components/pages/blog/components/SearchBlog.vue";
import FooterBlog from "@/components/pages/blog/components/FooterBlog.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "BlogHome",
  components: {
    PageLayout,
    FooterBlog,
    HeaderBlog,
    FirstCard,
    SecondCard,
    SearchBlog,
  },
  data () {
    return {
      currentSlide: 0,
      inputData: ""
    };
  },
  computed: {
    ...mapGetters("newsStore", [
      "getFirstTypeNews",
      "getSecondTypeNews"
    ]),
    firstTypeNews () {
      return this.getFirstTypeNews;
    },
    secondTypeNews () {
      return this.getSecondTypeNews; 
    },
    currentNews () {
      return this.firstTypeNews[this.currentSlide];
    }
  },
  methods: {
    changeSlideHandler (index) {
      this.currentSlide = index;
    },
    handleSearch (data) {
      this.inputData = data;
      this.loadSecondList(this.inputData);
    },
    ...mapActions('newsStore', [
      'loadSecondList',
      'loadFirstList'
    ]),
  },
  created () {
    this.loadSecondList(this.inputData);
    this.loadFirstList();
  }
};
</script>

<style lang="less">
.card-grid {
  columns: 180px auto;
  padding-left: 30px;
}
</style>
