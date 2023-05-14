<template>
  <div class="articles">
    <div class="tables">
      <Article v-bind:articles="articles" />
    </div>
  </div>
</template>

<script>
import Article from "../../components/Article/Article.vue";
import axios from "axios";
import ArticleInner from "@/pages/ArticleInner/ArticleInner.vue";

export default {
  name: "Articles",
  components: {ArticleInner, Article},
  data() {
    return {
      articles: []
    }
  },
  beforeCreate() {
    axios.get("http://localhost:8000/api/articles")
        .then(res => this.articles = res.data)
        .catch(err => console.log(err))
  }

}


</script>

<style scoped>
  .articles {
    margin: 0 auto;
    padding-bottom: 100px;
    display: flex;
    justify-content: center;
    padding-top: 100px;
    width: 1200px;
  }

  .tables {
    display: grid;
    column-gap: 50px;
    row-gap: 30px;
    grid-template-columns: repeat(3, 1fr);
  }

</style>