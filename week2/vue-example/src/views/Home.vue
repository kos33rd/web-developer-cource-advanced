<template>

  <div class="home">
    <h1>{{appName}} search</h1>
    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col"></el-col>
      <el-col :span="8" class="col">
        <el-input placeholder="Character name" v-model="input"></el-input>
        <el-button type="primary" v-on:click="onSearchClick">Search</el-button>
      </el-col>
      <el-col :span="8" class="col"></el-col>
    </el-row>
    <a v-bind:href="searchUrl">Test API search link</a>
  </div>
</template>

<style>
  .col {
    flex: 1;
    display: inline-block;
  }
</style>

<script>
export default {
  name: 'home',
  components: {
  },
  data() {
    return {
      input: null,
      appName: 'Star Wars',
    };
  },
  computed: {
    searchUrl() {
      return this.input ? `https://swapi.co/api/people/?search=${this.input}` : '';
    },
  },
  methods: {
    onSearchClick() {
      this.$router.push({ name: 'search', query: { query: this.input } });
    },
  },
};
</script>
