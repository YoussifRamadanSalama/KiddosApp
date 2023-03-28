<template>
  <div class="backg1">
    <div class="container">
      <div class="FixedHead row">
        <div class="ContactDetails col-12 col-md-4">
          <i class="fa-solid fa-map"></i>
          <p>198 West 21th Street, Suite 721 New York NY 10016</p>
        </div>
        <div class="ContactDetails col-12 col-md-4">
          <i class="fa-solid fa-paper-plane"></i>
          <p>youremail@email.com</p>
        </div>
        <div class="ContactDetails col-12 col-md-4">
          <i class="fa-solid fa-phone"></i>
          <p>+ 1235 2355 98</p>
        </div>
      </div>
    </div>
  </div>
  <div class="StickyBar">
    <div class="backg2">
      <div class="container">
        <div class="header row">
          <div class="logo col-lg-4 col-6 m-auto">
            <a href="/">kiddos</a>
          </div>
          <div class="nav col-lg-7 m-auto">
            <router-link class="rlink1" to="/">home</router-link>
            <router-link class="rlink2" to="/about">about</router-link>
            <router-link class="rlink3" to="/teacher">teacher</router-link>
            <router-link class="rlink4" to="/courses">courses</router-link>
            <router-link class="rlink5" to="/prices">pricing</router-link>
            <router-link class="rlink6" to="/blog">blog</router-link>
            <router-link class="rlink7" to="/contact">contact</router-link>
          </div>
          <i class="fa-solid fa-bars col-2 m-auto drop_menu">
            <div class="sidenav">
              <a class="rlink1" href="/">home</a>
              <a class="rlink2" href="/about">about</a>
              <a class="rlink3" href="/teacher">teacher</a>
              <a class="rlink4" href="/courses">courses</a>
              <a class="rlink5" href="/prices">pricing</a>
              <a class="rlink6" href="/blog">blog</a>
              <a class="rlink7" href="/contact">contact</a>
            </div>
          </i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style lang="scss" scoped>
// cummon styles
* {
  text-decoration: none;
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: "Advent Pro", sans-serif;
}
.container {
  margin: auto;
}
// start fixedhead style
.backg1 {
  background-color: #1eaaf1;
}
.FixedHead {
  padding: 0.5rem 0;
  * {
    margin: auto;
  }
  .ContactDetails {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.5rem 0;
    p {
      padding: 0;
      margin: 0;
      color: #fff;
      opacity: 0.8;
    }
    i {
      margin-right: 1rem;
      color: #fff;
      padding: 0.5rem;
      margin: 0 5px 0 0;
      border-radius: 50%;
      &.fa-map {
        background-color: rgb(160, 70, 245);
      }
      &.fa-paper-plane {
        background-color: rgb(255, 145, 0);
      }
      &.fa-phone {
        background-color: rgb(19, 215, 19);
      }
    }
  }
}
// end fixedhead style
// start header style
.StickyBar {
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #fff;
}
.header {
  text-transform: capitalize;
  padding: 1.5rem 0;
  .logo {
    a {
      color: #1f1f1f;
      font-size: 30px;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    a {
      position: relative;
      color: #1f1f1f;
      font-size: 20px;
      &::before {
        content: "";
        position: absolute;
        top: 100%;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #1eaaf1;
        transition: 0.5s;
      }
      &:hover::before {
        width: 100%;
      }
    }
  }
  i {
    display: none;
  }
}
@media (max-width: 1000px) {
  .header {
    position: relative;
    .nav {
      display: none;
      a::before,
      a::after {
        display: none;
      }
    }
    i {
      display: block;
      position: relative;
      &:hover .sidenav{
        display: block;
      }
      .sidenav{
        display: none;
          position: absolute;
          top: 110%;
          left: -10%;
        *{
          text-align: center;
          display: block;
          margin: 0.5rem 0;
          padding: 1rem 2rem;
          background-color: #1f1f1f;
          color: #fff;
          cursor: pointer;
          &:hover{
            background-color: #1eaaf1;
          }
        }
      }
      .rlink1,.rlink3,.rlink5,.rlink7{
        transform: translate(-20%);
      }
      .rlink2,.rlink4,.rlink6{
        transform: translate(-70%);
      }
    }
  }
}
@media (max-width: 770px) {
  .FixedHead {
    .ContactDetails {
      justify-content: start;
    }
  }
}
</style>
