<template>
  <PageLayout>
    <HeaderBlog/>
    <div class="news-block">
      <p class="news-block__date">POSTED ON {{getNewsById(this.$route.params.id).date}}</p>
      <h2 class="news-block__title">{{getNewsById(this.$route.params.id).title}}</h2>
      <img 
        :src="getNewsById(this.$route.params.id).image" 
        alt="Card Image" 
        class="news-block__image"
      />
      <p class="news-block__discribe"> {{getNewsById(this.$route.params.id).text}}</p>
    </div>
    <FooterBlog/>
  </PageLayout>
</template>

<script>
import PageLayout from '../../parts/PageLayout';
import HeaderBlog from "@/components/pages/blog/components/HeaderBlog.vue";
import FooterBlog from "@/components/pages/blog/components/FooterBlog.vue";
import { mapGetters } from 'vuex';

export default {
  name: 'NewsBlog',
  components: {
    FooterBlog,
    HeaderBlog,
    PageLayout
  },
  computed: {
    ...mapGetters("newsStore", [
      "getNewsById"
    ])
  }
}
</script>

<style lang="less">
.news-block {
  background-color: white;
  padding: 20px; 
  font-family: 'Colibri';
  color: #808080;

  &__date {
    margin: 10px;
    text-align: left;
  }

  &__title {
    text-align: center;
    font-family: 'Colibri';
    color: #808080; 
    margin: 10px 0;
  }

  &__image {
    display: block;
    margin: 0 auto;
    padding: 10px;
  }

  &__discribe {
    padding: 10px;
    text-align: justify;
  }
}
</style>
