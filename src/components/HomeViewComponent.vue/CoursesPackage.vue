<template>
  <div class="courses">
    <div class="container">
      <div class="up">
        <h2>
          <p class="first">Our</p>
          <p class="second">Pricing</p>
        </h2>
        <p>
          Separated they live in. A small river named Duden flows by their place
          and supplies it with the necessary regelialia. It is a paradisematic
          country
        </p>
      </div>
      <div class="down row">
        <div class="block ">
          <div class="kind">Basic</div>
          <div class="price">
            <span>$24.50</span>
            <p>/ 5mos</p>
          </div>
          <img src="@/assets/images/bg_1.jpg.webp" alt="img..." />
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          <div class="btn btn-success">test</div>
        </div>
        <div class="block">
          <div class="kind">Standard</div>
          <div class="price">
            <span>$34.50</span>
            <p>/ 5mos</p>
          </div>
          <img src="@/assets/images/bg_2.jpg.webp" alt="img..." />
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          <div class="btn btn-danger">test</div>
        </div>
        <div class="block ">
          <div class="kind">Premium</div>
          <div class="price">
            <span>$54.50 </span>
            <p>/ 5mos</p>
          </div>
          <img src="@/assets/images/bg_3.jpg" alt="img..." />
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          <div class="btn btn-info">test</div>
        </div>
        <div class="block ">
          <div class="kind">Platinum</div>
          <div class="price">
            <span>$89.50 </span>
            <p>/ 5mos</p>
          </div>
          <img src="@/assets/images/course-2.jpg" alt="img..." />
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          <div class="btn btn-warning">test</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoursesPackage",
};
</script>

<style lang="scss" scoped>
.courses {
    padding: 4rem 0.5rem;
  .container {
    .up {
      text-align: center;
      h2 {
        font-size: 50px;
        margin: auto;
        * {
          display: inline-block;
        }
        .first {
          color: orange;
        }
        .second {
          color: #1eaaf1;
        }
      }
      p {
        opacity: 0.6;
      }
    }
    .down{
        display: flex;
        align-items: center;
        *{
            padding: 0.5rem 0;
        }
        .block{
            text-align: center;
            background-color: #fafafa;
            margin: 1%;
            width: 23%;
            padding: 0.5rem 0;
            .btn{
                padding: 0.5rem 1.5rem;
                color: #fff;
            }
            .price {
                *{
                    display: inline-block;
                    margin: 0 5px;
                }
                span{
                    color: #1eaaf1;
                }
                p{
                    opacity: 0.8;
                    font-size: 14px;
                }
            }
            img{
                width: 100%;
                object-fit: cover;
            }
            p{
                opacity: 0.6;
                padding: 0 0.5rem;
            }
        }
    }
  }
}
@media (max-width:760px) {
    .courses{
        .container{
            .down{
                flex-wrap: wrap;
                .block{
                    width: 80%;
                    margin: 1rem auto;
                }
            }
        }
    }
}
</style>
