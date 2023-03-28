<template>
  <div class="exp">
    <div class="container">
      <div class="up-exp">
        <h2>
          <p class="first">20 Years of</p>
          <p class="second">Experience</p>
        </h2>
        <p class="txt">
          Separated they live in. A small river named Duden flows by their place
          and supplies it with the necessary regelialia. It is a paradisematic
          country
        </p>
      </div>
      <div class="down-exp row">
        <div class="counter1 col-md-3">
          <vue3-autocounter class="count"
            ref="counter"
            :startAmount="0"
            :endAmount="18"
            :duration="3"
            separator=""
            autoinit="true"
          />
          <span class="title"> Certified Teachers </span>
        </div>
        <div class="counter2 col-md-3">
          <vue3-autocounter class="count"
            ref="counter"
            :startAmount="0"
            :endAmount="351"
            :duration="3"
            separator=""
            autoinit="true"
          />
          <span class="title"> Successful Kids </span>
        </div>
        <div class="counter3 col-md-3">
          <vue3-autocounter class="count"
            ref="counter"
            :startAmount="0"
            :endAmount="564"
            :duration="3"
            separator=""
            autoinit="true"
          />
          <span class="title"> Happy Parents </span>
        </div>
        <div class="counter4 col-md-3">
          <vue3-autocounter class="count"
            ref="counter"
            :startAmount="0"
            :endAmount="300"
            :duration="3"
            separator=""
            autoinit="true"
          />
          <span class="title"> Awards Won </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Vue3autocounter from "vue3-autocounter";

export default defineComponent({
  name: "ExperBlock",
  components: {
    "vue3-autocounter": Vue3autocounter,
  },
});
</script>

<style lang="scss" scoped>
.exp {
  background-image: url("@/assets/images/bg_4.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  .container {
    text-align: center;
    padding: 2rem 0;
    .up-exp {
      padding: 1rem 0;
      h2 {
        font-size: 50px;
        * {
          display: inline-block;
          margin: 0 5px;
        }
        .first {
          color: darkorchid;
        }
        .second {
          color: orange;
        }
      }
      .txt {
        opacity: 0.6;
      }
    }
    .down-exp{
        padding: 1rem 0;
        .count{
            font-size: 40px;
            color: #1eabf1ea;
        }
        span:not(.count){
            display: block;
            font-size: 25px;
        }
    }
  }
}
</style>
