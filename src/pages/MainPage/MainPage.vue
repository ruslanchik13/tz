<script>
  export default {
    name: "MainPage",
  }
</script>

<template>
  <div class="main">
    <div class="links">
      <router-link class="item" to="/add-article">Добавить статью</router-link>
      <router-link class="item" to="/articles">Статьи</router-link>
    </div>
  </div>
</template>

<style scoped>
.main {
  margin: 10px auto;
  width: 1200px;
  height: 900px;
}

.links {
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item {
  width: 300px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
}

.item + .item {
  margin-left: 10px;
}

.item:hover {
  border: 3px solid black;
  font-weight: bold;
}

</style>