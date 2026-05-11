<template>
    <section class="hero" aria-labelledby="hero-title">
        <p class="eyebrow">We’ve got your morning covered with</p>
        <h1 id="hero-title">Coffee</h1>
        <p class="hero-text">
            It is best to start your day with a cup of coffee. Discover the best flavours coffee you will ever have.
            We provide the best for our customers.
        </p>
        <BaseButton href="#menu">Order now</BaseButton>
    </section>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue';

export default {
    components: {
        BaseButton
    }
}
</script>

<style scoped>
.hero {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: baseline;
    margin-top: 116px;
    margin-left: 93px;
}

.hero h1 {
    height: clamp(210px, 21vw, 291px);
    margin: 0;
    font-family: "Clicker Script", cursive;
    font-size: clamp(155px, 16vw, 220px);
    font-weight: 400;
    line-height: clamp(210px, 21vw, 291px);
}

.eyebrow {
    margin: 0;
    font-size: 22px;
    font-weight: 600;
}

.hero-text {
    max-width: 527px;
    margin: 0 0 24px;
    color: rgba(255, 255, 255, 0.96);
    font-size: 20px;
    line-height: 34px;
}
</style>