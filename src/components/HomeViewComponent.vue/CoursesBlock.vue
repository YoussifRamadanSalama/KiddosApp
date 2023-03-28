<template>
  <section class="courses">
    <div class="container">
      <div class="up-courses">
        <h2>
          <p class="first">Our</p>
          <p class="second">Courses</p>
        </h2>
        <p>
          Separated they live in. A small river named Duden flows by their place
          and supplies it with the necessary regelialia. It is a paradisematic
          country
        </p>
      </div>
      <div class="down-courses row">
        <div class="block bl1 col-md-6 col-12">
          <div class="bg">
            <img src="@/assets/images/course-1.jpg" alt="bg-courses-1">
          </div>
          <div class="content">
            <a href="#"> Arts Lesson </a>
            <p class="sub"><span>Class time:</span>9:00am - 10am</p>
            <p>
              Separated they live in. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It is a
              paradisematic country
            </p>
          </div>
        </div>
        <div class="block bl2 col-md-6 col-12">
          <div class="bg">
            <img src="@/assets/images/course-2.jpg" alt="bg-courses-2">
          </div>
          <div class="content">
            <a href="#"> Language Lesson </a>
            <p class="sub"><span>Class time:</span>9:00am - 10am</p>
            <p>
              Separated they live in. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It is a
              paradisematic country
            </p>
          </div>
        </div>
        <div class="block bl3 col-md-6 col-12">
          <div class="bg">
            <img src="@/assets/images/course-3.jpg" alt="bg-courses-3">
          </div>
          <div class="content">
            <a href="#"> Music Lesson </a>
            <p class="sub"><span>Class time:</span>9:00am - 10am</p>
            <p>
              Separated they live in. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It is a
              paradisematic country
            </p>
          </div>
        </div>
        <div class="block bl4 col-md-6 col-12">
          <div class="bg">
            <img src="@/assets/images/course-4.jpg" alt="bg-courses-4">
          </div>
          <div class="content">
            <a href="#"> Sports Lesson </a>
            <p class="sub"><span>Class time:</span>9:00am - 10am</p>
            <p>
              Separated they live in. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It is a
              paradisematic country
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CoursesBlock",
};
</script>

<style lang="scss" scoped>
    .courses{
        a{
            text-decoration: none;
        }
        padding: 3rem 0;
        .container{
            .up-courses{
                padding: 1rem 0;
                text-align: center;
                h2{
                    font-size: 50px;
                }
                h2 p{
                    display: inline-block;
                    margin:  0 5px ;
                    &.first{
                        color: orange;
                    }
                    &.second{
                        color: #1eaaf1;
                    }
                }
                p{
                    opacity: 0.6;
                }
            }
            .down-courses{
                .block{
                    display: flex;
                    margin: 1rem 0;
                    .bg{
                        width: 120%;
                        height:100% (".block");
                        img{
                            width: 100%;
                            height: 100% ;
                            object-fit: cover;
                        }
                    }
                    .content{
                        padding: 0.5rem 1rem ;
                        background-color: #fafafa;
                        a{
                            color: #1eaaf1;
                        }
                        .sub span{
                            color: orange;
                            margin-right: 5px;
                            font-size: 16px;
                        }
                        .sub{
                            opacity: 0.8;
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }
</style>