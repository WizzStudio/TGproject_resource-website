<template>
  <div id="comment">
    <commentContent v-bind:comment="comment" v-on:change="changCommentator"></commentContent>
    <commentTextarea v-bind:type="type" v-bind:name="oldComment" v-on:submit="addComment" v-on:cancel="cancelCommit"></commentTextarea>
  </div>
</template>

<script>
  import commentContent from './commentContent.vue'
  import commentTextarea from  './commitTextarea.vue'

  export default{
    name: "comment",
    data(){
        return{
          commenter: "session",   //评论人
          type: 0,                //0为评论作者1为评论别人的评论2为评论别人的别人
          oldComment: null,
          chosedIndex: -1,        //被选中的评论的index
          comment: [
            {
              name: "新垣结衣",
              time: "2017-12-05",
              content: "王智是我的老公，我爱王智",
              reply: [
                {
                  responder: "王小智",
                  reviewers: "新垣结衣",
                  time: "2017-12-05",
                  content: "怕是老公抱抱哦"
                },
                {
                  responder: "新垣结衣",
                  reviewers: "王智",
                  time: "2017-12-05",
                  content: "爱你"
                }
              ]
            },
            {
              name: "可怜的屌丝",
              time: "2017-12-05",
              content: "结衣不要走！啊！",
              reply: []
            }
          ]
        }
    },
    methods: {
      addComment: function(data) {
        if(this.type == 0) {
          this.comment.push({
            name: 'session',
            time: getTime(),
            content: data,
            reply: []
          });
          //服务器端变
        }else if(this.type == 1){
          this.comment[this.chosedIndex].reply.push({
            responder: 'session',
            reviewers:this.comment[this.chosedIndex].name,
            time: getTime(),
            content: data
          });
          this.type = 0;
        }
      },
      changCommentator: function(name,index) {
        this.oldComment = name;
        this.chosedIndex = index;
        this.type = 1;
      },
      cancelCommit: function() {
        this.type = 0;
      }
    },
    components:{
      commentContent,
      commentTextarea

    }
  }

  //格式化时间
  function getTime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth()+1;
    var day = now.getDate();
    month.length < 2 ?  "0" + month : month;
    day.length < 2 ?  "0" + day : day;
    return year+"-"+month+"-"+day;
  }
</script>

<style scoped>

</style>
