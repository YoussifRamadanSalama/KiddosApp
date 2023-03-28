<template>
  <div class="intro">
    <div class="layout"></div>
    <div class="linked">
      <a href="/">Home ></a>
      <p>About Us ></p>
    </div>
  </div>
</template>
<script>
export default {
  name: "IntroBlock",
};
</script>

<style lang="scss" scoped>
* {
  font-size: 20px;
  display: inline-block;
  margin-right: 5px;
}
p {
  font-size: 30px;
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
