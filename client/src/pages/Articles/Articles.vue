<template>
  <div class="articles">
    <div class="tables">
      <Article v-bind:articles="articles" />
    </div>
  </div>
</template>

<script>
import Article from "../../components/Article/Article.vue";

export default {
  name: "Articles",
  components: {Article},
  data() {
    return {
      articles: [
        {id: 1, title: 'title', body: 'body'},
        {id: 2, title: 'title2', body: 'body1'},
        {id: 3, title: 'title3', body: 'body2'},
        {id: 4, title: 'title4', body: 'body3'}
      ]
    }
  },
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