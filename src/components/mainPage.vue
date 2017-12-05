<template>
  <div id="mainPage">
    <ScrollTab></ScrollTab>
    <NavView></NavView>
  </div>
</template>

<script>
  import NavView from './Nav.vue'
  import ScrollTab from './ScrollTab.vue'

  export default{
    name: 'mainPage',
    components:{
      NavView,
      ScrollTab
    }
  }
</script>

