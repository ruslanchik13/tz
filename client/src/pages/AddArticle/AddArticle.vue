<template>
 <div class="main">

   <div class="wrapper">
     <input placeholder="Введите заголовок..."
            type="text"
            v-bind:value="title"
            @input= 'title = $event.target.value'
     >
     <div class="errDis" :class="{'errActive': hasError}">Заголовок должен быть менее, чем 50 символов!</div>
     <textarea placeholder="Введите текст..."
               name=""
               id=""
               cols="30"
               rows="10"
               v-bind:value="text"
               @input= 'text = $event.target.value'
     ></textarea>
   </div>
   <button @click="titleError" class="btn">Добавить</button>
 </div>
</template>

<script>
export default {
  name: "AddArticle",
  data() {
    return {
      text: '',
      title: '',
      hasError: false,
    }
  },
  methods: {
    titleError() {
      return this.title.length >= 50 ? this.hasError = true : this.hasError = false ;
    },
  },
  computed: {


  }
}


</script>

<style scoped>

.main {
  margin: 0 auto;
  width: 1200px;
}

.wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
}

input {
  padding-left: 20px;
  color: black;
  font-size: 20px;
  height: 50px;
  margin-top: 50px;
  border-radius: 20px;
  border: 2px solid black;
}

.errDis {
  display: none;
  position: absolute;
  color: red;
  top: 110px;
  left: 20px;
}

.errActive {
  display: block;
}

textarea {
  padding: 20px;
  font-size: 20px;
  height: 300px;
  margin-top: 50px;
  border-radius: 20px;
  border: 2px solid black;
  resize: none
}

.btn {
  padding: 10px 20px;
  border: 2px solid black;
  border-radius: 20px;
  margin-top: 50px;
  background-color: #fff;
  color: black;
  font-size: 20px;
}

.btn:hover {
  border: 3px solid black;
  font-weight: bold;
}
</style>