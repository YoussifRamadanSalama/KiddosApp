<template>
  <div class="offer-content container">
    <div class="OfferBlock row">
      <div class="Offer col-md-7">
        <h2>What We Offer</h2>
        <p>
          On her way she met a copy. The copy warned the Little Blind Text, that
          where it came from it would have been rewritten a thousand times and
          everything that was left from its origin would be the word.
        </p>
        <div class="services-cards">
          <div class="services">
            <span class="shield">
              <i class="fa-solid fa-shield"></i>
            </span>
            <div class="services-txt">
              <h3>Safety First</h3>
              <p>
                Certified Teachers Far far away, behind the word mountains, far
                from the countries Vokalia.
              </p>
            </div>
          </div>
          <div class="services reading">
            <span>
              <i class="fa-solid fa-book-open-reader"></i>
            </span>
            <div class="services-txt">
              <h3>Regular Classes</h3>
              <p>
                Certified Teachers Far far away, behind the word mountains, far
                from the countries Vokalia.
              </p>
            </div>
          </div>
          <div class="services certification">
            <span>
              <i class="fa-solid fa-certificate"></i>
            </span>
            <div class="services-txt">
              <h3>Certified Teachers</h3>
              <p>
                Certified Teachers Far far away, behind the word mountains, far
                from the countries Vokalia.
              </p>
            </div>
          </div>
          <div class="services education">
            <span>
              <i class="fa-solid fa-person-chalkboard"></i>
            </span>
            <div class="services-txt">
              <h3>Sufficient Classrooms</h3>
              <p>
                Certified Teachers Far far away, behind the word mountains, far
                from the countries Vokalia.
              </p>
            </div>
          </div>
          <div class="services jigsaw">
            <span>
              <i class="fa-solid fa-puzzle-piece"></i>
            </span>
            <div class="services-txt">
              <h3>Creative Lessons</h3>
              <p>
                Certified Teachers Far far away, behind the word mountains, far
                from the countries Vokalia.
              </p>
            </div>
          </div>
          <div class="services kids">
            <span>
              <i class="fa-solid fa-children"></i>
            </span>
            <div class="services-txt">
              <h3>Sports Facilities</h3>
              <p>
                Certified Teachers Far far away, behind the word mountains, far
                from the countries Vokalia.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="Add col-md-5">
        <h2 class="mb-20">Welcome to Kiddos Learning School</h2>
        <p class="mb-20">
          On her way she met a copy. The copy warned the Little Blind Text, that
          where it came from it would have been rewritten a thousand times and
          everything that was left from its origin would be the word.
        </p>
        <p class="mb-20">
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean. A small river named Duden flows by
          their place and supplies it with the necessary regelialia. And if she
          hasn’t been rewritten, then they are still using her.
        </p>
        <div class="btn btn-warning">read more</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OfferBlock",
};
</script>

<style lang="scss" scoped>
.offer-content {
  color: #1f1f1f;
  .Offer {
    padding: 2rem 0.5rem;
    .services-cards {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      .services {
        width: 48%;
        display: flex;
        align-items: center;
        span {
          padding: 1.5rem;
          border-radius: 50%;
          background-color: #1eabf1ea;
          display: flex;
          align-items: center;
          justify-content: center;
          i {
            font-size: 40px;
            color: #fff;
          }
        }
        .services-txt {
          margin-left: 0.5rem;
          h3 {
            font-size: 18px;
            opacity: 0.8;
          }
          p {
            opacity: 0.6;
          }
        }
      }
    }
  }
  .Add {
    padding: 2rem 1rem;
    background-color: #fafafa;
    h2 {
      padding: 10px 5px;
    }
    p {
      opacity: 0.6;
    }
    .btn {
      color: #fff;
      text-transform: capitalize;
      &:hover{
        color: orange;
        background-color: #fff;
      }
    }
  }
}
@media (max-width: 992px) {
  .offer-content {
    .Offer {
      .services-cards {
        display: block;
        .services {
          width: 100%;
        }
      }
    }
  }
}
</style>
