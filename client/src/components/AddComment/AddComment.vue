<template>
  <div>
    <input placeholder="Введите комментарий"
           type="text"
           v-bind:value="text"
           @input='text = $event.target.value'
    >
  </div>
  <button @click="addComment">Добавить</button>
</template>

<script>
import axios from "axios";

export default {
  name: "AddComment",

  data() {
    return {
      text: '',
    }
  },
  props: ['id'],
  methods: {

  },
}
</script>

<style lang="scss" scoped>

</style>