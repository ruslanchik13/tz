<template>
  <div class="container">
    <div class="text" :class="{'disable': activeUpd}">{{comment.body}}</div>
    <textarea
        :class="{'disable': !activeUpd}"
        :value="comment.body"
        @input= 'this.body = $event.target.value'
    >{{comment.body}}</textarea>
    <div :class="{'warning':hasErr}" class="disable">Отредактируйте!</div>
    <div class="btns">
      <button @click="deleteComment" class="btn" :class="{'disable': activeUpd}">Удалить</button>
      <button @click="preUpd" :class="{'disable': activeUpd}" class="btn">Редактировать</button>
      <button @click="updateComment" class="btn" :class="{'disable': !activeUpd}">Принять</button>
    </div>

  </div>
</template>

<script>
import axios from "axios";
export default {

  name: "Comment",
  data() {
    return {
      activeUpd: false,
      body: '',
      hasErr: false
    }
  },
  props: {
    comment: {
      type: Object,
      required: true,
    },
    id: {
      type: String,
      required: true
    },
  },
  methods: {
    deleteComment() {
      axios.delete(`http://localhost:8000/api/article/${this.id}/comment/${this.comment.id}`)
          .then(res => console.log(res))
          .catch(err => console.log(err))
      this.$router.push('/articles')
    },

    updateComment() {
      if(!this.body) {
        return this.hasErr = true;
      }
      axios.put(`http://localhost:8000/api/article/${this.id}/comment/${this.comment.id}`, {
        body: this.body
      })
          .then(res => console.log(res))
          .catch(err => console.log(err))

      this.$router.push('/articles')
    },

    preUpd() {
      return this.activeUpd = true
    }

  }
}
</script>

<style scoped>
 .container {
   position: relative;
   margin-bottom: 5px;
   height: 150px;
   border: 1px solid black;
   border-radius: 10px;
 }

 .text {
   font-size: 17px;
   height: 95px;
   padding: 15px;
 }

 textarea {
   margin: 5px;
   width: 600px;
   font-size: 17px;
   height: 80px;
   padding: 15px;
   resize: none
 }

 .btns {
   padding: 15px;
 }

 .btn {
   font-size: 13px;
   cursor: pointer;
   margin-right: 10px;
   padding: 5px;
   border-radius: 5px;
   border: 1px solid black;
   background-color: #fff;
 }

 .disable {
    display: none;
 }

 .warning {
   display: block;
   top: 87px;
   position: absolute;
   padding-left: 10px;
   color: red;
   font-size: 15px;
 }

</style>