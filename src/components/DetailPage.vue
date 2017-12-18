<template>
  <div id="detailPage">
    <!--导航栏组件-->
    <header>
      <NavView></NavView>
    </header>

    <!--详情页内容-->
    <div class="detailPage__warp">
      <div class="detailPage__content" v-html="pageContent">

      </div>
    </div>



    <!--页脚-->

    <yd-flexbox class="footerContent">
      <yd-flexbox-item class="footerContent__back">
        <p class="footerContent__back-p" @click="goBack"><yd-icon name="share2" size=".4rem" color="#888"></yd-icon>返回</p>
      </yd-flexbox-item>
      <footer>
        <yd-icon name="feedback" size=".4rem" color="#888"></yd-icon>
        <span><router-link :to="{name:'comment'}">评论</router-link></span>
      </footer>
    </yd-flexbox>


  </div>
</template>

<script>
  import NavView from './Nav.vue'

  export default{
    name: 'detailPages',
    components:{
      NavView
    },
    mounted(){
//      this.getData();
      this.getParams();
    },
    data(){
      return{
        pageContent:[]
      }

    },
    methods: {
      goBack(){
        this.$router.go(-1);
      },
      getData:function () {
          var _this = this;
          var params = new URLSearchParams();
          params.append('tag', this.$route.query.tag);
          params.append('sub_tag', this.$route.query.sub_tag);
          this.$http.post('https://www.baidu.com/s?ie=UTF-8&wd=%E9%82%AE%E7%AE%B1',params,{
            headers:{
              'Access-Control-Allow-Origin':'*'
            }
          }).then(res=>{
            var str = res.data;
            console.log(str);
            _this.pageContent = str.substring(1,str.length-1);
          }).catch((error)=>{
            console.log('error init'+error);
          })
       },
      getParams(){
        console.log(this.$route.query)
      }
    }
  }

</script>

<style scoped>
  #detailPage {
    height:100vh;
    display: flex;
    flex-direction: column;
  }
  header{
    height: 1.4rem;
  }
  .detailPage__warp{
    height: 8rem;
    background-color: #fff;
    flex: 1;
    overflow: auto;
  }
  .footerContent{
    height: 1rem;
    background-color: #eee;
  }
  .footerContent__back{
    display: flex;
    justify-content: flex-start;
  }
  .footerContent__back-p{
    font-size: .28rem;
    padding-left: .8rem;
  }
  footer{
    display: flex;
    align-items: center;
    padding-right: .8rem;
    font-size: .28rem;
  }
  /* 对内容的样式添加 */
  .detailPage__content p{
    color: #111;
    font-size: 1rem;
    line-height: 3rem;
    padding: 1.8rem;
  }
  .detailPage__content p:nth-child(1){
    font-weight: bold;
    font-size: 2rem;
    padding: 1.8rem;
  }
  .detailPage__content img{
    width: 90vw;
    margin: 0 auto;
    padding: 1rem 0;
    display: block;
  }
  .detailPage__content a{
    display: block;
    margin: 0 auto;
    height: 4rem;
    font-size: 1.8rem;
    line-height: 3rem;
    padding-left: 1.8rem;
    color: #111111;
  }
  .detailPage__content a:active{
    color: #00a0e8;
  }

</style>
