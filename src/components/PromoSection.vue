<template>
    <section class="promo-section" aria-labelledby="promo-title">
        <div class="promo-content">
            <h2 id="promo-title">Get a chance to have an amazing morning</h2>
            <p>We are giving you a one-time opportunity to experience a better life with coffee.</p>
            <BaseButton href="#menu">Order now</BaseButton>
        </div>
    </section>
</template>

<script>
import BaseButton from './ui/BaseButton.vue';

export default {
    components: {
        BaseButton
    }
}
</script>

<style scoped>
.promo-content p {
    max-width: 430px;
    margin: 18px 0 24px;
}

.promo-content h2 {
    margin: 0;
    font-size: clamp(36px, 5vw, 54px);
    line-height: 1.15;
}

.promo-content {
    max-width: 575px;
    margin-inline: max(24px, calc((100% - var(--container)) / 2));
    width: min(var(--container), calc(100% - 48px));
}

.promo-section {
    min-height: 460px;
    display: flex;
    align-items: center;
    padding-block: 56px;
    color: var(--color-white);
    background-image: linear-gradient(90deg, rgba(46, 26, 4, 0.62), rgba(96, 56, 9, 0.16)), url("@/assets/images/Group 36.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
</style>