<template>
  <div class="nav">
    <yd-accordion>
      <yd-accordion-item title="TG STUDIO" class="nav__bar">
        <div slot="icon" class="nav__icon" @click.native="open"><yd-icon name="type" size=".38rem" color="#FFF" ></yd-icon></div>
        <div class="nav__content">
          <ul class="nav__content-ul">
            <li class="nav__content-ul_li_1">
              <yd-icon name="home" size=".4rem" color="#888"></yd-icon><a href="">首页</a>
            </li>
            <li class="nav__content-ul_li_2">
              <yd-icon name="feedback" size=".4rem" color="#888"></yd-icon><a href="">TG博客</a>
            </li>
            <li class="nav__content-ul_li_3">
              <yd-icon name="ucenter-outline" size=".4rem" color="#888"></yd-icon><a href="">关于我们</a>
            </li>
          </ul>
        </div>
      </yd-accordion-item>
    </yd-accordion>
  </div>
</template>

<script>
  export default {
    name: 'Nav',
      data() {
        return {
          isOpen: false
        }
      },
      methods: {
        open() {
          this.isOpen = !this.isOpen;
          if (this.isOpen) {
            this.$refs.accordion.openItem();
          } else {
            this.$refs.accordion.closeItem();
          }
        }
      }
    }
</script>

<style scoped>
  .nav{
    color: #ddd;
  }
  .nav__bar{
    background-color: #00a0e8;
    width: 100%;
    height: 1.4rem;
  }
  .nav__bar-title span{
    display: inline-block;
    line-height: 1.4rem;
    margin-left: .2rem;
    font-size: .3rem;
  }
  .nav__icon{
    margin-right: .2rem;
  }
  .nav__content{
    width: 100%;
    height: 4.2rem;
    background-color: #1d2225;
    font-size: .3rem;
  }
  .nav__content-ul{
    border: 1px solid #1d2225;

  }
  .nav__content-ul li{
    line-height: .6rem;
    margin-top: .5rem;
    display: flex;
    padding-left: 1.4rem;
  }
  .nav__content-ul>li a{
    display: inline-block;
    margin-left: .4rem;
  }

</style>
