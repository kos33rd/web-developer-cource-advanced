<template>
  <div class="about">
    <h1>Search results for "{{query}}"</h1>
    <hr/>
      <el-row :gutter="20">
        <el-col :span="8" v-for="result in results" :key="result.name">
          <person :data="result"/>
        </el-col>
      </el-row>
    <br/>
    <h3>Previous requests:</h3>
    <ul>
      <li v-for="search in searches" :key="search">
        <router-link :to="{path: '/search', query: {query: search}}">{{search}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';

import Person from '../components/Person.vue';


export default {
  name: 'results',
  components: {
    Person,
  },
  data() {
    const { query } = this.$route.query;
    return {
      query,
      results: [],
    };
  },

  computed: {
    ...mapGetters(['searches']),
  },

  created() {
    axios.get(`https://swapi.co/api/people/?search=${this.query}`)
      .then((resp) => {
        if (resp.data.results) {
          this.results = resp.data.results;
        }
      });
  },
};
</script>
