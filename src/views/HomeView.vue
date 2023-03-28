<template>
  <div class="home">
    <ImageSlider />
    <MediaBlock />
    <OfferBlock />
    <IntroSection />
    <TeacherSection />
    <CoursesBlock />
    <ExperBlock />
    <OpinionPackage />
    <ContactBlock />
    <CoursesPackage />
    <ImageBlock />
    <FooterBlock />
  </div>
</template>

<script>
//import IMageSlider
import ImageSlider from "@/components/HomeViewComponent.vue/ImageSlider.vue";
import MediaBlock from "@/components/HomeViewComponent.vue/MediaBlock.vue";
import OfferBlock from "@/components/HomeViewComponent.vue/OfferBlock.vue";
import IntroSection from "@/components/HomeViewComponent.vue/IntroSection.vue";
import TeacherSection from "@/components/HomeViewComponent.vue/TeacherSection.vue";
import CoursesBlock from "@/components/HomeViewComponent.vue/CoursesBlock.vue";
import ExperBlock from "@/components/HomeViewComponent.vue/ExperBlock.vue";
import OpinionPackage from "@/components/HomeViewComponent.vue/OpinionPackage.vue";
import ContactBlock from "@/components/HomeViewComponent.vue/ContactBlock.vue";
import CoursesPackage from "@/components/HomeViewComponent.vue/CoursesPackage.vue";
import ImageBlock from "@/components/HomeViewComponent.vue/ImageBlock.vue";
import FooterBlock from "@/components/HomeViewComponent.vue/FooterBlock.vue";
export default {
  name: "HomeView",
  components: { ImageSlider, MediaBlock, OfferBlock, IntroSection,TeacherSection,CoursesBlock,ExperBlock,OpinionPackage,ContactBlock,CoursesPackage, ImageBlock, FooterBlock,},
};
</script>

<style lang="scss">
.home {
  :root {
    --blue: #007bff;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #dc3545;
    --orange: #fd7e14;
    --yellow: #ffc107;
    --green: #28a745;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #fff;
    --gray: #6c757d;
    --gray-dark: #343a40;
    --primary: #007bff;
    --secondary: #6c757d;
    --success: #28a745;
    --info: #17a2b8;
    --warning: #ffc107;
    --danger: #dc3545;
    --light: #f8f9fa;
    --dark: #343a40;
  }
  font-weight: 600;
}
</style>
