<template>
  <div class="slider">
    <div
      v-for="(slide, index) in slides"
      :key="index"
      :class="{ 'slider__circle--active': currentSlide === index }"
      class="slider__circle"
      @click="() => { handleClick(index) }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    slides: Array,
    currentSlide: Number
  },
  methods: {
    handleClick(index) {
      if (this.currentSlide !== index) {
        this.changeSlide(index);
      }
    },
    changeSlide (index) {
      this.$emit('changeSlideIndex', index);
    }
  }
};
</script>

<style lang="less" scoped>
.slider {
  display: flex;
  flex-direction: row;
  align-items: center;

  &__circle {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin: 5px;
    cursor: pointer;
    background-color: lightgrey;
    transition: background-color 0.3s;

    &--active {
      background-color: white;
    }
  }
}
</style>
