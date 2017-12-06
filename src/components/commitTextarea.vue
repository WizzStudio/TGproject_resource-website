<template>
  <div class="commentTextarea">
    <b v-if="type">你回复 {{name}}</b>
    <textarea placeholder="请在此填写评论内容" v-model="commentText"></textarea>
    <button class="btn" @click="addComment">发表</button>
    <button class="btn" @click="cancelComment">取消</button>
  </div>
</template>

<script>
  export default{
    props: ['type','name'],
    data: function(){
      return {commentText:""}
    },
    methods: {
      addComment: function() {
        this.$emit("submit",this.commentText);
        this.commentText = "";
      },
      cancelComment: function() {
        this.$emit("cancel");
        this.commentText = "";
      }
    }
  }
</script>

<style scoped>
  .commentTextarea{
    display: flex;
    align-items: center;
    height: 1rem;
    width: 100vw;
    background-color: #fff;
    box-shadow: 2px 2px 50px 2px #bbb;

  }

  .btn{
    width: 1rem;
    height: .6rem;

    color: #333;
    border:1px solid #ccc;
    background-color: white;
    box-shadow: 1px 1px 8px 1px #ccc;
    border-radius: .1rem;

    margin: 0 .1rem;

  }
  b{
    display: inline-block;
    padding: 0 .2rem;
  }
  textarea{
    /*flex: 1;*/
    height: auto;
    margin-left: 1rem;
    color: #666464;
    width: 4rem;

    border:0;
    background-color:transparent;
  }
</style>
