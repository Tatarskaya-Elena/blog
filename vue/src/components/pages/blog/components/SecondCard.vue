<template>
  <div class="second-card">
    <img 
      :src="card.image" 
      alt="Card Image" 
      class="second-card__image" 
    />
    <p class="second-card__date">POSTED ON {{ card.date }}</p>
    <h2 class="second-card__title">{{ card.title }}</h2>
    <p class="second-card__text">{{ card.text }}</p>
    <div class="second-card__buttons">
      <ButtonBlog @click="() => incrementCount('like')">
        <img
          src="https://img.icons8.com/ios-glyphs/30/737373/like--v1.png"
          alt="like-icon"
          class="second-card__buttons__image"
        />
        {{ getButtonValues.like }}
      </ButtonBlog>
      <ButtonBlog @click="() => incrementCount('comment')">
        <img
          src="https://img.icons8.com/ios-filled/50/737373/speech-bubble--v1.png"
          alt="comment-icon"
          class="second-card__buttons__image"
        />
        {{ getButtonValues.comment }}
      </ButtonBlog>
      <RouterLink :to="{ name: routeNames.NEWS_BLOG_TATARSKAYA_FEDOTOVA, params: { id:card.id } }">
        <ButtonBlog />
      </RouterLink>
    </div>
  </div>
</template>

<script>
    import ButtonBlog from "@/components/pages/blog/components/ButtonBlog.vue";
import { mapGetters, mapActions } from "vuex";
import { RouteNames } from "../../../../router/routes";

export default {
  name: "SecondCard",
  components: {
    ButtonBlog,
  },
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters("button", [
      "getButtonValues"
    ]),
    routeNames () {
      return RouteNames;
    }
  },
  methods: {
    ...mapActions("button", [
      "incrementButtonValue"
    ]),
    incrementCount (index) {
      this.incrementButtonValue(index);
    }
  }
};
</script>

<style lang="less" scoped>
.second-card {
  display: inline-block;
  width: 180px;
  height: auto;
  margin-bottom: 20px;
  padding-bottom: 10px;
  font-family: "Calibri", sans-serif;
  font-size: 10px;
  color: #938787;
  background-color: #ffffff;

  &__date {
    margin: 0 10px;
  }

  &__image {
    width: 100%;
    height: 150px;
    margin-bottom: 10px;
    object-fit: cover;
  }

  &__title {
    padding: 0 10px;
    font-size: 14px;
    color: #504040;
    font-family: "Calibri", sans-serif;
    text-transform: uppercase;
  }

  &__text {
    padding: 0 10px;
    font-size: 12px;
  }

  &__buttons {
    display: flex;
    justify-content: space-around;

    &__image {
      height: 12px;
      width: 12px;
    }
  }
}
</style>
