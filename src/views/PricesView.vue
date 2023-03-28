<template>
<div>
  <div class="intro">
    <div class="layout"></div>
    <div class="linked">
      <a href="/">Home ></a>
      <a href="/about">About Us ></a>
      <a href="/teacher">Teacher ></a>
      <a href="/courses">Courses ></a>
      <p>Pricing ></p>
    </div>
  </div>
  <div class="container">
    <CoursesPackage />
  </div>
  <FooterBlock />
</div>
</template>

<script>
import CoursesPackage from '@/components/HomeViewComponent.vue/CoursesPackage.vue';
import FooterBlock from '@/components/HomeViewComponent.vue/FooterBlock.vue';
  export default{
    name:'PricesView',
    components:{CoursesPackage,FooterBlock}
  }
</script>

<style lang="scss" scoped>
p {
  font-size: 30px;
  display: inline-block;
}
a,
p {
  position: relative;
  z-index: 3;
}

.intro {
  a{
    text-decoration: none;
    color: #fff;
    &:hover {
      color: #fafafa;
    }
  }
  *:not(p){
    display: inline-block;
    font-size: 20px;
    margin-right: 5px;
  }
  position: relative;
  z-index: 1;
  background-image: url("@/assets/images/bg_2.jpg.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100% 50%;
  color: #fff;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}
.layout {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgba(227, 53, 44, 0.333);
}
</style>
