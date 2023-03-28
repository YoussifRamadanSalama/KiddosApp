<template>
<div>
  <div class="intro">
    <div class="layout"></div>
    <div class="linked">
      <a href="/">Home ></a>
      <a href="/about">About Us ></a>
      <a href="/teacher">Teacher ></a>
      <p>Courses ></p>
    </div>
  </div>
  <div class="container">
    <CoursesBlock />
  </div>
  <FooterBlock />
</div>
</template>

<script>
import CoursesBlock from '@/components/HomeViewComponent.vue/CoursesBlock.vue';
import FooterBlock from '@/components/HomeViewComponent.vue/FooterBlock.vue';
  export default{
    name:'CoursesView',
    components:{CoursesBlock,FooterBlock}
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
a {
  text-decoration: none;
  color: #fff;
  &:hover {
    color: #fafafa;
  }
}
.intro {
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
