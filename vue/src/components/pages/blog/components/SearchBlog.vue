<template>
  <div>
    <div class="container">
    <el-select v-model="value" placeholder="CATEGORIES">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <h2 class="container__label">NEWEST ARTICLES</h2>
    <input 
      v-model="inputData"
      type="text" 
      placeholder="SEARCH BY KEYWORDS" 
      class="container__search-input"
    >
    <el-button 
      class="container__button" 
      icon="el-icon-search" 
      @click="() => sendData()">
    </el-button>
  </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBlog',
  data () {
    return {
      value: '',
      inputData: ''
    }
  },
  computed: {
    options() {
      return [
        {
          value: 'Option1',
          label: 'Option1'
        },
        {
          value: 'Option2',
          label: 'Option2'
        }
      ]
    }
  },
  methods: {
    sendData () {
      this.$emit('search', this.inputData);
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  align-items: center;
  background-color: transparent;
  padding: 30px;

  &__label {
    color: #504040;
    font-family: 'Calibri';
    font-size: 14px;
    flex: 1; 
    text-align: center;
  }

  &__search-input {
    width: 150px; 
    height: 37px; 
    margin: 0; 
    background-color: transparent; 
    border: 1px solid grey;
    color: grey;
    font-family: 'Calibri';
    font-size: 14px;
    text-align: center;
  }

  &__button {
    margin: 0; 
    border: 1px solid grey;
    border-radius: 0;
  }
} 
</style>

