<template>
  <section class="teachers">
    <div class="upper-sec ">
      <h2>
        <p class="first">Certified</p>
        <p class="second">Teachers</p>
      </h2>
      <p>
        Separated they live in. A small river named Duden flows by their place
        and supplies it with the necessary regelialia. It is a paradisematic
        country
      </p>
    </div>
    <div class="down-sec row container">
      <div class="block col-md-3">
        <div class="image">
          <img src="@/assets/images/teacher-1.jpg" alt="card-img" />
          <div class="social-icons">
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-google-plus-g"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
        <h3>Bianca Wilson</h3>
        <span>TEACHER</span>
        <p>
          I am an ambitious workaholic, but apart from that, pretty simple
          person.
        </p>
      </div>
      <div class="block col-md-3">
        <div class="image">
          <img src="@/assets/images/teacher-2.jpg" alt="card-img" />
          <div class="social-icons">
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-google-plus-g"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
        <h3>Stella Smith</h3>
        <span>ENGLISH TEACHER</span>
        <p>
          I am an ambitious workaholic, but apart from that, pretty simple
          person.
        </p>
      </div>
      <div class="block col-md-3">
        <div class="image">
          <img src="@/assets/images/teacher-3.jpg" alt="card-img" />
          <div class="social-icons">
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-google-plus-g"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
        <h3>Stella Smith</h3>
        <span>ART TEACHER</span>
        <p>
          I am an ambitious workaholic, but apart from that, pretty simple
          person.
        </p>
      </div>
      <div class="block col-md-3">
        <div class="image">
          <img src="@/assets/images/teacher-4.jpg" alt="card-img" />
          <div class="social-icons">
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-google-plus-g"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
        <h3>Monshe Henderson</h3>
        <span>SCIENCE TEACHER</span>
        <p>
          I am an ambitious workaholic, but apart from that, pretty simple
          person.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TeacherSection",
};
</script>

<style lang="scss" scoped>
.teachers {
    padding: 3rem 0;
  .upper-sec {
    text-align: center;
    padding: 1rem 0;
    h2 p{
      display: inline-block;
      margin: 5px;
      font-size: 50px;
      &.first{
        color: orange;
      }
      &.second{
        color: #1eabf1ea;
      }
    }
    p{
        opacity: 0.6;
    }
  }
  .down-sec{
    margin: auto;
    padding: 1rem 0;
    .block{
        text-align: center;
        overflow: hidden;
        transition: 0.5s ease-in-out;
        &:hover .social-icons{
            display: block;
            opacity: 1;
            top: 85%;
        }
        &:hover h3{
            color: #1eabf1ea;
        }
        &:hover .image img{
             transform: scale(1.1);
        }
        .image{
            transition: 0.5s ease-in-out;
            overflow: hidden;
            position: relative;
            img{
                width: 100%;
                transition: transform 0.2s;
            }
        }
        span,p{
            font-size: 15px;
            opacity: 0.6;
        }
        span{
            font-size: 18px;
        }
        .social-icons{
            position: absolute;
            top: 75%;
            width: 100%;
            padding: 1rem ;
            left: 0;
            color: orange;
            background-color: #fff;
            opacity: 0;
            display: none;
            transition: 0.5s ease;
            *{
                margin: 0 5px;
                &:hover{
                    cursor: pointer;
                }
            }
        }
    }
  }
}
</style>
