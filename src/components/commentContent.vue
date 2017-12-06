<template>
  <div class="commentContent">
    <p v-if="comment.length==0" class="comment__blank">暂无评论，快来抢沙发吧！</p>
    <div v-else>
      <div class="comment" v-for="(item,index) in comment" v-bind:index="index" >
        <b>{{item.name}}<span class="comment__span">{{item.time}}</span></b>
        <p @click="changeCommenter(item.name,index)" class="comment__p">{{item.content}}</p>
        <div v-if="item.reply.length > 0">
          <div class="reply" v-for="reply in item.reply">
            <b>{{reply.responder}}  回复  {{reply.reviewers}}<span class="comment__span">{{reply.time}}</span></b>
            <p @click="changeCommenter(reply.responder,index)" class="comment__p">{{reply.content}}</p>
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
  .commentContent{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .comment{
    width: 90vw;
    padding: .2rem;
    word-wrap: break-word;/* 控制文字折行 */

    background-color: #fff;
    margin-top: .2rem;
    border-radius: .1rem;
    border: 1px solid #d3d3d3;
    box-shadow: 2px 2px 20px #ccc;
  }
  .reply{
    margin-left: .4rem;
  }
  .comment,.reply{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .comment__span{
    display: inline-block;
    margin-left: .4rem;
  }
  .comment__p{
    line-height: .32rem;
    padding: .2rem;
    width: 80vw;
    text-align: left;
  }

  /* 评论为空的样式 */
  .comment__blank{
    width: 90vw;
    padding: .2rem;
    line-height: 1rem;
    font-size: .26rem;

    background-color: #fff;
    margin-top: .4rem;
    border-radius: .1rem;
    border: 1px solid #d3d3d3;
    box-shadow: 2px 2px 14px #b6b6b6;
  }

</style>
