<template>
  <div class="container">
    <div class="up">
        <h2>what people say about us</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, laborum?</p>
    </div>
    <div class="container">
      <swiper
        :slides-per-view="3"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide class="sslide">
          <div class="image">
            <img src="@/assets/images/teacher-1.jpg" alt="img..." />
          </div>
          <div class="txt">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, quibusdam.
            </p>
            <span>name</span>
            <h6>gender</h6>
          </div>
        </swiper-slide>
        <swiper-slide class="sslide">
          <div class="image">
            <img src="@/assets/images/teacher-2.jpg" alt="img..." />
          </div>
          <div class="txt">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, quibusdam.
            </p>
            <span>name</span>
            <h6>gender</h6>
          </div>
        </swiper-slide>
        <swiper-slide class="sslide">
          <div class="image">
            <img src="@/assets/images/teacher-3.jpg" alt="img..." />
          </div>
          <div class="txt">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, quibusdam.
            </p>
            <span>name</span>
            <h6>gender</h6>
          </div>
        </swiper-slide>
        <swiper-slide class="sslide">
          <div class="image">
            <img src="@/assets/images/teacher-4.jpg" alt="img..." />
          </div>
          <div class="txt">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, quibusdam.
            </p>
            <span>name</span>
            <h6>gender</h6>
          </div>
        </swiper-slide>
        <swiper-slide class="sslide">
          <div class="image">
            <img src="@/assets/images/teacher-1.jpg" alt="img..." />
          </div>
          <div class="txt">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, quibusdam.
            </p>
            <span>name</span>
            <h6>gender</h6>
          </div>
        </swiper-slide>
        ...
      </swiper>
    </div>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

export default {
  name: "OpinionPackage",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>
<style lang="scss" scoped>
.container {
  padding: 4rem 1rem;
  .up{
    padding: 1rem 0;
    text-align: center;
    h2{
        color: #1eaaf1;
        font-size: 50px;
    }
    p{
        opacity: 0.6;
    }
  }
  .image {
    width: 40%;
    height: 40%;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 1rem;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .sslide {
    text-transform: capitalize;
    display: flex;
    align-items: start;
    cursor: grab;
  }
}
@media (max-width:1000px) {
        .container .sslide{
            display: block;
            text-align: center;
        }
        .container .image {
            width: 100%;
            height: 100%;
        }
}
</style>
