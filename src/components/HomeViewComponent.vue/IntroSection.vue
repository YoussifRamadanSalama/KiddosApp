<template>
  <section class="intro">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="leftsec col-md-9 m-auto">
          <h2>Teaching Your Child Some Good Manners</h2>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
        </div>
        <div class="rightsec col-md-3 m-auto">
          <p class="btn">Take a Course</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "IntroSection",
};
</script>

<style lang="scss" scoped>
    .intro{
        color: #fff;
        text-transform: capitalize;
        background-image: url("@/assets/images/bg_3.jpg");
        background-attachment: fixed;
        background-size: cover;
        height: 40vh;
        position: relative;
        z-index: 1;
        overflow: hidden;
        .overlay{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            background-color: #1f1f1f92;
        }
        .container{
            position: relative;
            z-index: 3;
            padding: 6em 2em;
            .leftsec{
                p{
                    opacity: 0.6;
                }
            }
            .rightsec{
                .btn{
                    background-color: orange;
                    color: #fff;
                    padding: 0.5rem;
                    text-transform: none;
                    &:hover{
                        background-color: #fff;
                        color: orange;
                    }
                }
            }
        }
    }
</style>