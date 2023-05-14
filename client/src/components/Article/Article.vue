<template>
<div class="article" v-for="article in articles">
  <div class="container" >
    <h2 class="title">{{article.title}}</h2>
    <p class="text">{{article.body}}</p>
    <router-link :to="'/article/' + article.id" class="wrap">
      <button class="btn">Читать далее...</button>
    </router-link>
  </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "Article",
  data() {
    return {
      article: {},
    }
  },
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
  height: 100px;
  word-wrap: break-word;
  margin-bottom: 15px;
  text-align: center;
  font-size: 30px;
}

.text {
  margin-bottom: 5px;
  height: 300px;
  font-size: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 13;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.wrap {
  height: 20px;
}

.btn {
  font-size: 10px;
  background-color: #fff;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid black;
  width: 100px;
  cursor: pointer;
}

.btn:hover {
  font-weight: bold;
  border: 2px solid black;

}
</style>