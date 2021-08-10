<template>
  <div>
    <h2 class="title">{{schoolName}}</h2>
    <h2>真垃圾</h2>
  </div>
</template>
<script>
export default {
  name: 'School',
  data() {
    return {
      schoolName: '武汉生物工程学院',
    }
  },
}
</script>
<style scoped>
  .title{
    color: brown;
  }
</style>