<template>
  <PageLayout>
    <HeaderBlog/>
    <div class="block">
      <h2 class="block__text">DATE</h2>
      <input 
        v-model="date"
        class="block__input" 
        type="text" 
      />
      <h2 class="block__text">TITLE</h2>
      <input 
        v-model="title"
        class="block__input" 
        type="text" 
      />
      <h2 class="block__text">IMAGE</h2>
      <input 
        v-model="image"
        class="block__input" 
        type="text" 
      />
      <h2 class="block__text">TEXT</h2>
      <input 
        v-model="text"
        class="block__input" 
        type="text" 
      />
      <button class="block__button" @click="() => createNews()">CREATE</button>
    </div>
    <FooterBlog/>
  </PageLayout>
</template>

<script>
import PageLayout from '../../parts/PageLayout';
import { mapActions } from 'vuex';
import HeaderBlog from "@/components/pages/blog/components/HeaderBlog.vue";
import FooterBlog from "@/components/pages/blog/components/FooterBlog.vue";

export default {
  name: 'CreateNewsBlog',
  components: {
    FooterBlog,
    HeaderBlog,
    PageLayout
  },
  data () {
    return {
      image: '',
      date:'',
      title: '',
      text: ''
    };
  },
  methods: {
    ...mapActions('newsStore', [
      'addNews'
    ]),
    createNews () {
      const newNews = {
        date: this.date,
        title: this.title,
        image: this.image,
        text: this.text
      };
      this.addNews(newNews);
      this.date = '';
      this.title = '';
      this.image = '';
      this.text = '';
    }
  }
}
</script>

<style lang="less">
.block {
  background-color: white;
  text-align: center;
  padding: 20px;

  &__text {
    display: block;
    margin-bottom: 10px;
    color: grey;
    font-family: 'Calibri';
    font-size: 14px;
    text-align: center;
  }

  &__input {
    width: 100%;
    height: 36px;
    margin: 0;
    background-color: transparent;
    border: 1px solid grey;
    color: grey;
    font-family: 'Calibri';
    font-size: 14px;
    text-align: center;
  }

  &__button {
    background-color: transparent;
    border: 1px solid grey;
    padding: 5px 10px;
    margin: 10px;
    font-size: 14px;
    cursor: pointer;
    color: #808080;
  }
}
</style>
