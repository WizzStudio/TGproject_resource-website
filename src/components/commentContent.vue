<template>
  <div class="commentBox">
    <h3>评论</h3>
    <p v-if="comment.length==0">暂无评论，我来发表第一篇评论！</p>
    <div v-else>
      <div class="comment" v-for="(item,index) in comment" v-bind:index="index" >
        <b>{{item.name}}<span>{{item.time}}</span></b>
        <p @click="changeCommenter(item.name,index)">{{item.content}}</p>
        <div v-if="item.reply.length > 0">
          <div class="reply" v-for="reply in item.reply">
            <b>{{reply.responder}}  回复  {{reply.reviewers}}<span>{{reply.time}}</span></b>
            <p @click="changeCommenter(reply.responder,index)">{{reply.content}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props: ['comment'],
    methods: {
      changeCommenter: function(name,index) {
        this.$emit("change",name,index);
      }
    }
  }
</script>

<style scoped>

</style>
