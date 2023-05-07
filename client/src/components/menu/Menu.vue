<template>
    <router-link class="item" to="/">
        Меню
    </router-link>

</template>

<script>
export default {
  name: 'Menu',

}
</script>

<style scoped>

 .item {
    margin: 10px auto;
    width: 300px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid black;
  }

  .item:hover {
    border: 3px solid black;
    font-weight: bold;
  }
</style>