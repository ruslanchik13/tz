<template>
  <div class="article">
    <div class="wrapper">
      <h1 class="title" :class="{'disable': activeUpdate}">{{article.title}}</h1>
      <div class="btns">
        <button @click="deleteArticle" class="redBtn" :class="{'disable': activeUpdate}" >Удалить</button>
        <button @click="updateArticle" class="greenBtn" :class="{'disable': activeUpdate}">Редактировать</button>
        <button @click="cancelUpdate" class="disable" :class="{'active redBtn': activeUpdate}">Отменить</button>
        <button @click="confirmUpdate" :class="{'active greenBtn': activeUpdate}" class="disable" >Применить</button>
      </div>
    </div>
    <p class="body" :class="{'disable': activeUpdate}">{{article.body}}</p>
      <div :class="{'warning':hasErr}" class="disable">Отредактируйте оба поля!</div>
    <input
        class="disable"
        :class="{'active': activeUpdate}"
        :value="article.title"
        @input= 'this.title = $event.target.value'
    >
    <textarea
        class="disable "
        :class="{'active': activeUpdate}"
        :value="article.body"
        @input= 'this.body = $event.target.value'
    >{{article.body}}</textarea>
  </div>
  <div class="comments">
    <div>
      <input placeholder="Введите комментарий"
             type="text"
             v-bind:value="comments.body"
             @input='this.text = $event.target.value'
      >
    </div>
    <button :class="{'disable': activeCommentUpd}" class="addComment" @click="addComment">Добавить</button>
    <Comment v-for="comment in comments" v-bind:comment="comment" :id="article.id"/>
  </div>
</template>

<script>
import axios from "axios";
import AddComment from "@/components/AddComment/AddComment.vue";
import Comment from "@/components/Comment/Comment.vue";

export default {
  name: "ArticleInner",
  components: {Comment, AddComment},
  data() {
    return {
      activeCommentUpd: false,
      hasErr: false,
      activeUpdate: false,
      comments: {},
      article: {},
      title: "",
      body: "",
      text: ""
    }
  },
  props: ['id'],
  beforeCreate() {
    axios.get(`http://localhost:8000/api/article/${this.id}`)
        .then(res => this.article = res.data)
        .catch(err => console.log(err))
    axios.get(`http://localhost:8000/api/article/${this.id}/comments`)
        .then(res => this.comments = res.data)
        .catch(err => console.log(err))
  },

  methods: {
    deleteArticle() {
      axios.delete(`http://localhost:8000/api/article/${this.id}`)
          .then(res => console.log(res))
          .catch(err => console.log(err))
      this.$router.push('/')
    },

    addComment() {
      axios.post(`http://localhost:8000/api/article/${this.id}/comment`, {
        body: this.text,
        articleId: this.id
      })
          .then(res => console.log(res))
          .catch(err => console.log(err))
      this.$router.push('/articles')
    },

    updateArticle() {

      return this.activeUpdate = true
    },

    confirmUpdate() {
      if(!this.title || !this.body) {
        return this.hasErr = true;
      }
      axios.put(`http://localhost:8000/api/article/${this.id}`, {
        title: this.title,
        body: this.body
      })
          .then(res => console.log(res))
          .catch(err => console.log(err))

      this.$router.push('/')
      return this.activeUpdate = false

    },

    cancelUpdate() {
      return `${this.activeUpdate = false }  ${this.hasErr = false}`
    },



  }
}
</script>

<style scoped>
  .article {
    padding-top: 100px;
    margin: 0 auto;
    width: 1200px;
  }

  .wrapper {
    height: 50px;
    display: flex;
    justify-content: space-between;
  }


  .disable {
    display: none;
  }

  .active {
    display: block;
  }

  .btns {
    display: flex;
    width: 220px;
  }

  .redBtn {
    margin-right: 10px;
    cursor: pointer;
    font-size: 15px;
    font-weight: bold;
    padding: 2px 5px;
    background-color: red;
    border: 1px solid black;
  }

  .greenBtn {
    cursor: pointer;
    font-size: 15px;
    font-weight: bold;
    padding: 2px 5px;
    background-color: green;
    border: 1px solid black;
  }

  .warning {
    display: block;
    margin-top: 10px;
    color: red;
  }

  input {
    width: 900px;
    padding-left: 20px;
    color: black;
    font-size: 20px;
    height: 50px;
    margin-top: 50px;
    border-radius: 20px;
    border: 2px solid black;
  }

  textarea {
    width: 900px;
    padding: 20px;
    font-size: 20px;
    height: 300px;
    margin-top: 10px;
    border-radius: 20px;
    border: 2px solid black;
    resize: none
  }

  .comments {
    width: 900px;
    margin: 0 auto;
  }

  .addComment {
    margin-top: 15px;
    margin-bottom: 15px;
    padding: 5px 10px;
    background-color: #fff;
    border: 1px solid black;
  }
</style>