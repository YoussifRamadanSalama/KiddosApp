<template>
<div class="mr-auto ml-auto">
  <div class="intro">
    <div class="layout"></div>
    <div class="linked">
      <a href="/">Home ></a>
      <a href="/about">About Us ></a>
      <p>Teacher ></p>
    </div>
  </div>
  <div class="container">
    <TeacherSection />
  </div>
  <FooterBlock />
</div>
</template>

<script>
import TeacherSection from '@/components/HomeViewComponent.vue/TeacherSection.vue';
import FooterBlock from '@/components/HomeViewComponent.vue/FooterBlock.vue';
export default{
  name:'TeacherView',
  components:{TeacherSection,FooterBlock}
}
</script>

<style lang="scss" scoped>
p {
  font-size: 30px;
}
a,
p {
  position: relative;
  z-index: 3;
  display: inline-block;
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
