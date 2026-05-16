<template>
<FeedbackSection />
  <TestiomonalCard />
  <Subscribe />
  <FooterSection />
</template>

<script>
import FeedbackSection from './FeedbackSection.vue';   
import TestiomonalCard from './TestiomonalCard.vue';
import Subscribe from './Subscribe.vue';
import FooterSection from './FooterSection.vue';

export default {
    components: {
        FeedbackSection,
        TestiomonalCard,
        Subscribe,
        FooterSection
    }
}
</script>

<style></style>