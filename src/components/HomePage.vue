<script>
import Header from '@/components/Header.vue';
import HeroSection from '@/components/HeroSection.vue';
export default {
    components: {
        Header,
        HeroSection
    }
}

</script>
<template>
    <div class="home-page">
        <Header />
        <HeroSection />
    </div>
</template>

<style scoped>
.home-page {
    color: white;
    width: 100%;
    min-height: 100vh;
    background-image: linear-gradient(to right, #1E1E1E, #00000000),
        url(@/assets/images/coffee_image.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
</style>