<template>
  <div id="scrolltab">
    <yd-scrolltab>

     <!-- <yd-scrolltab-panel label="学习分类" icon="demo-icons-category1" active>
        <div style="height: 350px;background-color: gray;"></div>
      </yd-scrolltab-panel>-->

      <yd-scrolltab-panel label="Java Web" active>
        <div class="scrolltab__content" style="margin-top:.5rem">
          <div class="scrolltab__content-row">
            <div class="scrolltab__content-item">
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages'}">Java语言学习</router-link></p>
            </div>
            <div class="scrolltab__content-item" >
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p>数据库</p>
            </div>
            <div class="scrolltab__content-item">
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p>java工具</p>
            </div>
          </div>
          <div class="scrolltab__content-row">
            <div class="scrolltab__content-item">
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p>J2EE</p>
            </div>
            <div class="scrolltab__content-item" >
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p>框架学习</p>
            </div>
          </div>
       </div>
      </yd-scrolltab-panel>

      <yd-scrolltab-panel label="PHP Web">
        <div class="scrolltab__content" style="margin-top:.5rem">
          <div class="scrolltab__content-row">
            <div class="scrolltab__content-item">
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p>PHP语言学习</p>
            </div>
            <div class="scrolltab__content-item" >
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p>实现CURD</p>
            </div>
            <div class="scrolltab__content-item">
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p>PHP框架学习</p>
            </div>
          </div>
          <div class="scrolltab__content-row">
            <div class="scrolltab__content-item">
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p>环境搭建</p>
            </div>
            <div class="scrolltab__content-item" >
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p>MVC编程模式</p>
            </div>
          </div>
        </div>
      </yd-scrolltab-panel>

      <yd-scrolltab-panel label="Web前端">
        <div class="scrolltab__content" style="margin-top:.5rem">
          <div class="scrolltab__content-row">
            <div class="scrolltab__content-item">
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p>HTML</p>
            </div>
            <div class="scrolltab__content-item" >
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p>JavaScript</p>
            </div>
            <div class="scrolltab__content-item">
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p>前端工具</p>
            </div>
          </div>
          <div class="scrolltab__content-row">
            <div class="scrolltab__content-item">
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p>CSS</p>
            </div>
            <div class="scrolltab__content-item" >
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p>前端框架</p>
            </div>
          </div>
        </div>
      </yd-scrolltab-panel>

      <yd-scrolltab-panel label="产品经理">
        <div class="scrolltab__content" style="margin-top:.5rem;height:4.8rem;">
          <div class="scrolltab__content-row">
            <div class="scrolltab__content-item">
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p>产品策划</p>
            </div>
            <div class="scrolltab__content-item" >
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p>产品管理</p>
            </div>
          </div>
          <div class="scrolltab__content-row">
            <div class="scrolltab__content-item">
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p>产品设计</p>
            </div>
            <div class="scrolltab__content-item" >
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p>产品运营</p>
            </div>
          </div>
        </div>
      </yd-scrolltab-panel>

      <yd-scrolltab-panel label="AI大数据" style="height: 12rem;">
        <div class="scrolltab__content" style="margin-top:.5rem">
          <div class="scrolltab__content-row">
            <div class="scrolltab__content-item">
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p>Spark</p>
            </div>
            <div class="scrolltab__content-item" >
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p>Storm</p>
            </div>
            <div class="scrolltab__content-item">
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p>Scala</p>
            </div>
          </div>
          <div class="scrolltab__content-row">
            <div class="scrolltab__content-item">
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p>Hadoop</p>
            </div>
            <div class="scrolltab__content-item" >
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p>Kafka</p>
            </div>
          </div>
        </div>
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
  .scrolltab__content{
    flex-wrap:wrap;
    width: 4.8rem;
    color: #fff;
    height: 7rem;
    display: flex;
    justify-content: space-between;
    padding: 0 .2rem;
  }
  .scrolltab__content-item{
    margin-bottom: .4rem;
    width: 2rem;
    height: 2rem;
    padding-top: .4rem ;
    background-color: rgba(51, 51, 51, 0.5);
    border-radius: .2rem;
  }
</style>
