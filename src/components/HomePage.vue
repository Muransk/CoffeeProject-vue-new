<script>
import TheHeader from '@/components/TheHeader.vue';
import Hero from '@/components/Hero.vue';
export default {
    components: {
        TheHeader,
        Hero
    }
}

</script>
<template>
    <div class="home-page">
        <TheHeader />
        <Hero />
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