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
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'java',sub_tag:'01'}}">Java语言学习</router-link></p>
            </div>
            <div class="scrolltab__content-item" >
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'java',sub_tag:'02'}}">数据库</router-link></p>
            </div>
            <div class="scrolltab__content-item">
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'java',sub_tag:'02'}}">java工具</router-link></p>
            </div>
          </div>
          <div class="scrolltab__content-row">
            <div class="scrolltab__content-item">
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'java',sub_tag:'04'}}">J2EE</router-link></p>
            </div>
            <div class="scrolltab__content-item" >
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'java',sub_tag:'05'}}">框架学习</router-link></p>
            </div>
          </div>
       </div>
      </yd-scrolltab-panel>

      <yd-scrolltab-panel label="PHP Web">
        <div class="scrolltab__content" style="margin-top:.5rem">
          <div class="scrolltab__content-row">
            <div class="scrolltab__content-item">
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'php',sub_tag:'01'}}">PHP语言学习</router-link></p>
            </div>
            <div class="scrolltab__content-item" >
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'php',sub_tag:'02'}}">实现CURD</router-link></p>
            </div>
            <div class="scrolltab__content-item">
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'php',sub_tag:'03'}}">PHP框架学习</router-link></p>
            </div>
          </div>
          <div class="scrolltab__content-row">
            <div class="scrolltab__content-item">
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'php',sub_tag:'04'}}">环境搭建</router-link></p>
            </div>
            <div class="scrolltab__content-item" >
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'php',sub_tag:'05'}}">MVC编程模式</router-link></p>
            </div>
          </div>
        </div>
      </yd-scrolltab-panel>

      <yd-scrolltab-panel label="Web前端">
        <div class="scrolltab__content" style="margin-top:.5rem">
          <div class="scrolltab__content-row">
            <div class="scrolltab__content-item">
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'web',sub_tag:'01'}}">HTML</router-link></p>
            </div>
            <div class="scrolltab__content-item" >
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'web',sub_tag:'02'}}">JavaScript</router-link></p>
            </div>
            <div class="scrolltab__content-item">
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'web',sub_tag:'03'}}">前端工具</router-link></p>
            </div>
          </div>
          <div class="scrolltab__content-row">
            <div class="scrolltab__content-item">
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'web',sub_tag:'04'}}">CSS</router-link></p>
            </div>
            <div class="scrolltab__content-item" >
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'web',sub_tag:'05'}}">前端框架</router-link></p>
            </div>
          </div>
        </div>
      </yd-scrolltab-panel>

      <yd-scrolltab-panel label="产品经理">
        <div class="scrolltab__content" style="margin-top:.5rem;height:4.8rem;">
          <div class="scrolltab__content-row">
            <div class="scrolltab__content-item">
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'product',sub_tag:'01'}}">产品策划</router-link></p>
            </div>
            <div class="scrolltab__content-item" >
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'product',sub_tag:'02'}}">产品管理</router-link></p>
            </div>
          </div>
          <div class="scrolltab__content-row">
            <div class="scrolltab__content-item">
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'product',sub_tag:'03'}}">产品设计</router-link></p>
            </div>
            <div class="scrolltab__content-item" >
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'product',sub_tag:'04'}}">产品运营</router-link></p>
            </div>
          </div>
        </div>
      </yd-scrolltab-panel>

      <yd-scrolltab-panel label="AI大数据" style="height: 12rem;">
        <div class="scrolltab__content" style="margin-top:.5rem">
          <div class="scrolltab__content-row">
            <div class="scrolltab__content-item">
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'bigData',sub_tag:'01'}}">Spark</router-link></p>
            </div>
            <div class="scrolltab__content-item" >
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'bigData',sub_tag:'02'}}">Storm</router-link></p>
            </div>
            <div class="scrolltab__content-item">
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'bigData',sub_tag:'03'}}">Scala</router-link></p>
            </div>
          </div>
          <div class="scrolltab__content-row">
            <div class="scrolltab__content-item">
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'bigData',sub_tag:'04'}}">Hadoop</router-link></p>
            </div>
            <div class="scrolltab__content-item" >
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'bigData',sub_tag:'05'}}">Kafka</router-link></p>
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
