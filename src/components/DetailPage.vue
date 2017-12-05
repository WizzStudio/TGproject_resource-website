<template>
  <div id="detailPage">
    <!--导航栏组件-->
    <header>
      <NavView></NavView>
    </header>

    <!--详情页内容-->
    <div class="mainContent">

    </div>


    <!--页脚-->

    <yd-flexbox class="footerContent">
      <yd-flexbox-item></yd-flexbox-item>
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
  .mainContent{
    height: 8rem;
    background-color: #fff;
    flex: 1;
    overflow: auto;
  }
  .footerContent{
    height: 1rem;
    background-color: #eee;
  }
  footer{
    display: flex;
    align-items: center;
    padding-right: .8rem;
    font-size: .28rem;

  }

</style>
