<template>
  <div class="card" :style="{ backgroundImage: 'url(' + currentNews['image'] + ')' }">
    <div class="card__content">
      <h2 class="card__title">{{ currentNews['title'] }}</h2>
      <p class="card__text">{{ currentNews['text'] }}</p>
      <div class="card__buttons">
        <ButtonBlog @click="() => incrementCount('like')">
          <img 
            src="https://img.icons8.com/ios-glyphs/30/737373/like--v1.png" 
            alt="like-icon"
            class="card__buttons__image"
          /> 
          {{ getButtonValues.like }}
        </ButtonBlog>
        <ButtonBlog @click="() => incrementCount('comment')">
          <img 
            src="https://img.icons8.com/ios-filled/50/737373/speech-bubble--v1.png" 
            alt="comment-icon"
            class="card__buttons__image"
          />
          {{ getButtonValues.comment }}
        </ButtonBlog>
        <RouterLink :to="{ name: routeNames.NEWS_BLOG, params: { id:currentNews['id'] } }">
          <ButtonBlog />
        </RouterLink>
      </div>
    </div>
    <div class="card__slide-button-container">
      <SlideButton
        :slides="slides"
        :currentSlide="currentSlide"
        @changeSlideIndex="(index) => changeSlide(index)"
      />
    </div>
  </div>
</template>

<script>
import ButtonBlog from "@/components/pages/blog/components/ButtonBlog.vue";
import SlideButton from "@/components/pages/blog/components/SlideButton.vue";
import { mapGetters, mapActions } from 'vuex';
import { RouteNames } from "@/router/routes";

export default {
  name: 'FirstCard',
  props: {
    currentNews: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      slides: [0, 1, 2],
      currentSlide: 0
    };
  },
  components: {
    ButtonBlog,
    SlideButton
  },
  computed: {
    ...mapGetters('button', [
      'getButtonValues'
    ]),
    ...mapGetters('newsStore', [
      'getFirstTypeNews'
    ]),
    routeNames () {
      return RouteNames;
    }
  },
  methods: {
    ...mapActions('button', [
      'incrementButtonValue'
    ]),
    changeSlide (index) {
      this.currentSlide = index;
      this.$emit('changeSlideIndex', index);
    },
    incrementCount (index) {
      this.incrementButtonValue(index);
    }
  }
};
</script>

<style lang="less" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  padding: 10%;
  background-size: cover;
  background-position: center;
  font-family: 'Calibri', sans-serif;
  position: relative;
  transition: background-image 0.5s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 5px;
  }

  &__content {
    text-align: center;
    position: relative;
    z-index: 1;
    padding: 8% 10%;
  }

  &__date {
    margin: 0 10px;
  }

  &__image {
    width: 100%;
    margin-bottom: 10px;
  }

  &__title {
    color: white;
    font-family: 'Calibri', sans-serif;
    font-size: 43px;
    font-weight: 548;
    text-transform: uppercase;
    letter-spacing: 3px;
  }

  &__text {
    color: white;
    font-size: 18px;
    font-weight: 520;
    letter-spacing: 1px;
    text-align: justify;
  }

  &__buttons {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &__image {
      height: 12px;
      width: 12px;
    }
  }

  &__slide-button-container {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }
}
</style>
