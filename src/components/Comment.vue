<template>
  <div id="comment">
    <header>
      <yd-flexbox>
        <div class="comment__header" @click="goBack">
          <yd-icon name="error-outline" size=".54rem" class="comment__icon" @click="goBack"></yd-icon>
          <span class="comment__heading">评论</span>
        </div>
        <yd-flexbox-item></yd-flexbox-item>
      </yd-flexbox>
    </header>

    <div class="container">
      <commentContent :comment="comment" :isRequested="isRequested" @change="changCommentator"></commentContent>
    </div>

    <footer>
      <commentTextarea :type="type" @name="oldComment" @submit="addComment" @cancel="cancelCommit" @post="postData"></commentTextarea>
    </footer>
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
          type: 0,                //0为评论作者,1为评论别人的评论,2为评论别人的别人
          oldComment: null,
          chosedIndex: -1,        //被选中的评论的index
          isRequested: false,     //判断数据是否获取到
          comment: [
       /*     {
              name: "新垣结衣",
              time: "2017-12-05 14:25:00",
              content: "王智是我的老公，我爱王智",
              reply: [
                {
                  responder: "王小智",
                  reviewers: "新垣结衣",
                  time: "2017-12-05 14:25:59",
                  content: "怕是老公抱抱哦"
                },
                {
                  responder: "新垣结衣",
                  reviewers: "王智",
                  time: "2017-12-05 14:26:01",
                  content: "爱你"
                }
              ]
            },
            {
              name: "可怜的屌丝",
              time: "2017-12-05 14:27:00",
              content: "结衣不要走！啊！",
              reply: []
            }*/
          ]
        }
    },
    mounted(){
      this.getData();
    },
    methods: {
      goBack(){
        this.$router.go(-1);
      },
      addComment: function(data) {
        if(this.type == 0) {
          this.comment.push({
            name: 'session',
            time: new Date().format("yyyy-MM-dd hh:mm:ss"),
            content: data,
            reply: []
          });
          //服务器端变
        }else if(this.type == 1){
          this.comment[this.chosedIndex].reply.push({
            responder: 'session',
            reviewers:this.comment[this.chosedIndex].name,
            time: new Date().format("yyyy-MM-dd hh:mm:ss"),
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
      },
      getData(){
        var that=this;/* axios的两个回调函数都有各自独立的作用域，如果直接在里面访问 this，无法访问到 Vue 实例 */
        this.$http.post('http://localhost:8090/api/comment').then(function(res){
          that.comment = res.data;
          that.isRequested = true;
//          console.log(res.data);
//          console.log(that.comment);
        }).catch(function(error){
          console.log('error init'+error);
        });
      },
      postData(){
        var _this = this;
        this.$http.post('../../mock/data.json').then(function(res){
          _this.comment = res.data;
          console.log(res.data);
        }).catch(function(error){
          console.log('error init'+error);
        });
      }
    },
    components:{
      commentContent,
      commentTextarea
    }
  }

  /* 格式化时间 */
  Date.prototype.format = function(fmt) {
    var o = {
      "M+": this.getMonth() + 1, //月份
      "d+": this.getDate(), //日
      "h+": this.getHours(), //小时
      "m+": this.getMinutes(), //分
      "s+": this.getSeconds(), //秒
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度
      "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
      if (new RegExp("(" + k + ")").test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      }
    }
    return fmt;
  };
</script>

<style scoped>
  #comment{
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .container{
    overflow: auto;
    flex: 1;
  }
  header{
    height: 1rem;
    width: 100vw;
    background-color: #fff;
    box-shadow: 1px 1px 16px 1px #aaa;

    z-index: 10;
  }
  footer{
    height: 1rem;
    width: 100vw;
  }
  /* 导航栏 */
  .comment__icon{
    display: inline-block;
    margin-top: .1rem;
  }
  .comment__heading {
    display: inline-block;
    font-size: .4rem;
    margin-left: .1rem;
  }
  .comment__header{
    height: 1rem;
    display: flex;
    align-items: center;
    margin-left: .4rem;
  }

</style>
