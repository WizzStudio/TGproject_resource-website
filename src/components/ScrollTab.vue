<template>
  <div class="scrolltab">
    <yd-scrolltab>

      <yd-scrolltab-panel label="学习分类" icon="demo-icons-category1" active>
        <div style="height: 350px;background-color: gray;"></div>
      </yd-scrolltab-panel>

      <yd-scrolltab-panel label="Java Web" icon="demo-icons-category1">
        <div style="height: 350px;background-color: gray;"></div>
      </yd-scrolltab-panel>

      <yd-scrolltab-panel label="PHP Web" icon="demo-icons-category2">
        <div style="height: 350px;background-color: blue;"></div>
      </yd-scrolltab-panel>

      <yd-scrolltab-panel label="Web前端" icon="demo-icons-category3">
        <div style="height: 350px;background-color: yellow;"></div>
      </yd-scrolltab-panel>

      <yd-scrolltab-panel label="产品经理" icon="demo-icons-category3">
        <div style="height: 350px;background-color: yellow;"></div>
      </yd-scrolltab-panel>

      <yd-scrolltab-panel label="AI大数据" icon="demo-icons-category3">
        <div style="height: 350px;background-color: yellow;"></div>
      </yd-scrolltab-panel>

    </yd-scrolltab>
  </div>
</template>

<script>
export default {
  name: 'ScrollTab',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
