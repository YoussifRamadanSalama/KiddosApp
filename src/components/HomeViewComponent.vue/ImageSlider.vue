<template>
  <div class="ImageSlider">
    <div
      id="carouselExampleIndicators"
      class="carousel slide slideParent"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/images/bg_1.jpg.webp" alt="bg_1" class="Simage" />
          <div class="carcap">
            <h5>kids are the bet explorers in the world</h5>
            <p class="btn btn-warning">read more</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/assets/images/bg_2.jpg.webp" alt="bg_2" class="Simage" />
          <div class="carcap">
            <h5>perfect learning for your child</h5>
            <p class="btn btn-warning">read more</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageSlider",
};
</script>

<style lang="scss" scoped>
:root {
  -main-paint: #1eaaf1;
}
.ImageSlider {
  height: 82vh;
  .slideParent {
    height: 100%;
    .carousel-indicators {
      top: 90%;
      button{
        width: 10px;
        height: 10px;
        background-color: #1eaaf1;
        border-radius: 50%;
      }
    }
    .carousel-inner {
      height: 100%;
      .carousel-item {
        height: 100%;
        position: relative;
        .Simage {
          width: 100%;
          height: 120%;
          object-fit: cover;
        }
        .carcap {
          position: absolute;
          top: 40%;
          left: 33%;
          text-align: center;
          color: #fff;
          width: 35%;
          text-transform: capitalize;
          h5 {
            font-size: 40px;
          }
          .btn {
            color: #fff;
            &:hover {
              background-color: #1eaaf1;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 830px) {
  .ImageSlider {
    .slideParent {
      .carousel-inner {
        .carousel-item {
          .carcap {
            width: 100%;
            left: 0;
            }
          }
        }
      }
    }
  }
</style>
