<template>
  <div class="end bg-dark mr-auto ml-auto">
    <footer class="container">
      <div class="row">
        <div class="question col-md-3">
          <h2>Have a Questions?</h2>
          <div class="icontxt">
            <i class="fa-solid fa-location-dot"></i>
            <p style="display:inline-block;">203 Fake St. Mountain View, San Francisco, California, USA</p>
          </div>
          <div class="icontxt">
            <i class="fa-solid fa-phone"></i><span> +2 392 3929 210</span>
          </div>
          <div class="icontxt">
            <i class="fa-solid fa-envelope"></i
            ><span> info@yourdomain.com</span>
          </div>
        </div>

        <div class="Rblog col-md-3">
          <h2>Recent Blog</h2>
          <div class="txt">
            <img src="@/assets/images/image_1.jpg" alt="img..." />
            <p>Even the all-powerful Pointing has no control about</p>
          </div>
          <span
            ><i class="fa-solid fa-calendar-days"></i>Dec 25, 2018
            <i class="fa-solid fa-user"> </i>Admin
            <i class="fa-solid fa-envelope-open-text"></i>19</span
          >
          <div class="txt">
            <img src="@/assets/images/image_1.jpg" alt="img..." />
            <p>Even the all-powerful Pointing has no control about</p>
          </div>
          <span
            ><i class="fa-solid fa-calendar-days"></i>Dec 25, 2018
            <i class="fa-solid fa-user"> </i>Admin
            <i class="fa-solid fa-envelope-open-text"></i>19</span
          >
        </div>

        <div class="links col-md-3">
          <h2></h2>
          <div class="link" rel="stylesheet" href="">
            <i class="fa-solid fa-arrow-right-long"></i> <a href="/">Home</a>
          </div>
          <div class="link" rel="stylesheet" href="">
            <i class="fa-solid fa-arrow-right-long"></i
            > <a href="/about">About</a>
          </div>
          <div class="link" rel="stylesheet" href="">
            <i class="fa-solid fa-arrow-right-long"></i
            > <a href="#">Services </a>
          </div>
          <div class="link" rel="stylesheet" href="">
            <i class="fa-solid fa-arrow-right-long"></i
            > <a href="#"> Deparments </a>
          </div>
          <div class="link" rel="stylesheet" href="">
            <i class="fa-solid fa-arrow-right-long"></i> <a href="#">Contact</a>
          </div>
        </div>

        <div class="subscribe col-md-3">
          <div class="up">
            <h2>Subscribe Us!</h2>
            <input type="email" placeholder="e-mail" />
            <div class="btn btn-info m-1">Send</div>
          </div>
          <div class="down">
            <h2>Connect With Us</h2>
            <div class="icons">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
  <div class="copy bg-dark">
    <div class="container" style="padding: 0 0 1rem 0;">
        Copyright ©2023 All rights reserved | This template is made with ♥ by Colorlib [Modified by YOUSSIF JURO]
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterBlock",
};
</script>

<style lang="scss" scoped>
.end{
    padding: 2rem 0;
}
*{
    margin: auto;
    color: #fff;
}
.Rblog {
  .txt {
    display: flex;
    margin: 0.5rem;
  }
  img {
    width: 30%;
    margin-right: 0.5rem;
  }
  span{
    margin: auto;
  }
}
a{
    color: #fff;
    text-decoration: none;
    opacity: 0.8;
}
i{
    color: orange;
    padding: 5px;
}
p{
    opacity: 0.6;
}
span{
    opacity: 0.8;
}
.icons i{
    background-color: #fafafa;
    margin: 5px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.question,.subscribe,.links,.Rblog{
    margin: 20px 0;
}
.copy{
    text-align: center;
}
</style>
