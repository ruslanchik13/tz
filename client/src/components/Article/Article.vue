<template>
<div class="article" v-for="article in articles">
  <div class="container" >
    <h2 class="title">{{article.title}}</h2>
    <p class="text">{{article.body}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: "Article",
  props: {
    articles: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.article {
  border: 2px solid black;
  width: 350px;
}

.container {
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 350px;
}

.title {
  margin-bottom: 15px;
  text-align: center;
  font-size: 30px;
}

.text {
  height: 240px;
  font-size: 20px;
  word-wrap: break-word;
}
</style>