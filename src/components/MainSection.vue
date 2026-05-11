<template>
    <AboutSection />
    <Menu :cards="coffeeCards" />
    <FeateruSection :featureCards="featureCards" />
    <PromoSection />
</template>

<script>
import AboutSection from '@/components/AboutSection.vue';
import Menu from '@/components/Menu.vue';
import FeateruSection from '@/components/FeateruSection.vue';
import PromoSection from '@/components/PromoSection.vue';
import { coffeeCards, featureCards } from '@/lib/mock/constant.js'

export default {
    components: {
        AboutSection,
        Menu,
        FeateruSection,
        PromoSection
    },
    data() {
        return {
            coffeeCards,
            featureCards
        }
    }
}
</script>

<style scoped></style>