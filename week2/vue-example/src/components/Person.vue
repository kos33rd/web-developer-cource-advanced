<template>
  <el-card :body-style="{ padding: '0px' }">
    <img src="../assets/logo.png" class="image">
    <div style="padding: 14px;">
      <h3>{{data.name}}</h3>
      <div>Date of Birth: {{data.birth_year}}</div>
      <a :href="data.url">Details</a>
    </div>
  </el-card>
</template>


<script>
export default {
  name: 'person',
  props: ['data'],
};
</script>
