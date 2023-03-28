<template>
  <div>
    <IntroBlock />
    <OfferBlock />
    <ExperBlock />
    <OpinionPackage />
    <ContactBlock />
    <ImageBlock />
    <FooterBlock />
  </div>
</template>

<script>
import IntroBlock from '@/components/AboutViewComponent/IntroBlock.vue';
import OfferBlock from '@/components/HomeViewComponent.vue/OfferBlock.vue';
import ExperBlock from '@/components/HomeViewComponent.vue/ExperBlock.vue';
import OpinionPackage from '@/components/HomeViewComponent.vue/OpinionPackage.vue';
import ContactBlock from '@/components/HomeViewComponent.vue/ContactBlock.vue';
import ImageBlock from '@/components/HomeViewComponent.vue/ImageBlock.vue';
import FooterBlock from '@/components/HomeViewComponent.vue/FooterBlock.vue'
  export default{
    name:'AboutView',
    components:{IntroBlock,OfferBlock,ExperBlock,OpinionPackage,ContactBlock,ImageBlock,FooterBlock}
  }
</script>