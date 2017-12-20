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
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'Java Web',sub_tag:'Java语言学习'}}">Java语言学习</router-link></p>
            </div>
            <div class="scrolltab__content-item" >
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'Java Web',sub_tag:'数据库'}}">数据库</router-link></p>
            </div>
            <div class="scrolltab__content-item">
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'Java Web',sub_tag:'java工具'}}">java工具</router-link></p>
            </div>
          </div>
          <div class="scrolltab__content-row">
            <div class="scrolltab__content-item">
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'Java Web',sub_tag:'J2EE'}}">J2EE</router-link></p>
            </div>
            <div class="scrolltab__content-item" >
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'Java Web',sub_tag:'框架学习'}}">框架学习</router-link></p>
            </div>
          </div>
       </div>
      </yd-scrolltab-panel>

      <yd-scrolltab-panel label="PHP Web">
        <div class="scrolltab__content" style="margin-top:.5rem">
          <div class="scrolltab__content-row">
            <div class="scrolltab__content-item">
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'PHP Web',sub_tag:'PHP语言学习'}}">PHP语言学习</router-link></p>
            </div>
            <div class="scrolltab__content-item" >
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'PHP Web',sub_tag:'实现CURD'}}">实现CURD</router-link></p>
            </div>
            <div class="scrolltab__content-item">
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'PHP Web',sub_tag:'PHP框架学习'}}">PHP框架学习</router-link></p>
            </div>
          </div>
          <div class="scrolltab__content-row">
            <div class="scrolltab__content-item">
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'PHP Web',sub_tag:'环境搭建'}}">环境搭建</router-link></p>
            </div>
            <div class="scrolltab__content-item" >
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'PHP Web',sub_tag:'MVC编程模式'}}">MVC编程模式</router-link></p>
            </div>
          </div>
        </div>
      </yd-scrolltab-panel>

      <yd-scrolltab-panel label="Web前端">
        <div class="scrolltab__content" style="margin-top:.5rem">
          <div class="scrolltab__content-row">
            <div class="scrolltab__content-item">
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'Web 前端',sub_tag:'HTML'}}">HTML</router-link></p>
            </div>
            <div class="scrolltab__content-item" >
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'Web 前端',sub_tag:'JavaScript'}}">JavaScript</router-link></p>
            </div>
            <div class="scrolltab__content-item">
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'Web 前端',sub_tag:'前端工具'}}">前端工具</router-link></p>
            </div>
          </div>
          <div class="scrolltab__content-row">
            <div class="scrolltab__content-item">
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'Web 前端',sub_tag:'CSS'}}">CSS</router-link></p>
            </div>
            <div class="scrolltab__content-item" >
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'Web 前端',sub_tag:'前端框架'}}">前端框架</router-link></p>
            </div>
          </div>
        </div>
      </yd-scrolltab-panel>

      <yd-scrolltab-panel label="产品经理">
        <div class="scrolltab__content" style="margin-top:.5rem;height:4.8rem;">
          <div class="scrolltab__content-row">
            <div class="scrolltab__content-item">
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'产品经理',sub_tag:'产品策划'}}">产品策划</router-link></p>
            </div>
            <div class="scrolltab__content-item" >
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'产品经理',sub_tag:'产品管理'}}">产品管理</router-link></p>
            </div>
          </div>
          <div class="scrolltab__content-row">
            <div class="scrolltab__content-item">
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'产品经理',sub_tag:'产品设计'}}">产品设计</router-link></p>
            </div>
            <div class="scrolltab__content-item" >
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'产品经理',sub_tag:'产品运营'}}">产品运营</router-link></p>
            </div>
          </div>
        </div>
      </yd-scrolltab-panel>

      <yd-scrolltab-panel label="AI大数据" style="height: 12rem;">
        <div class="scrolltab__content" style="margin-top:.5rem">
          <div class="scrolltab__content-row">
            <div class="scrolltab__content-item">
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'AI大数据',sub_tag:'Spark'}}">Spark</router-link></p>
            </div>
            <div class="scrolltab__content-item" >
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'AI大数据',sub_tag:'Storm'}}">Storm</router-link></p>
            </div>
            <div class="scrolltab__content-item">
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'AI大数据',sub_tag:'Scala'}}">Scala</router-link></p>
            </div>
          </div>
          <div class="scrolltab__content-row">
            <div class="scrolltab__content-item">
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'AI大数据',sub_tag:'Hadoop'}}">Hadoop</router-link></p>
            </div>
            <div class="scrolltab__content-item" >
              <yd-icon name="compose" size=".6rem"></yd-icon>
              <p><router-link tag="a" :to="{name:'detailPages',query:{tag:'AI大数据',sub_tag:'Kafka'}}">Kafka</router-link></p>
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
