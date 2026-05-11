<template>
    <section class="about-section" id="about" aria-labelledby="about-title">
        <div class="about-grid">
            <div class="section-content">
                <p class="section-label">About our coffee</p>
                <h2 class="about-title">Discover the best coffee</h2>
                <p class="beanscene">
                    Bean Scene is a coffee shop that provides quality coffee that helps boost productivity and improve
                    your mood.
                    Having a cup of coffee is good, but having a cup of real coffee is greater.
                    There is no doubt that you will enjoy this coffee more than others you have ever tasted.
                </p>
                <BaseButton href="#features">Learn More</BaseButton>

            </div>
            <figure class="about-image">
                <img src="@/assets/images/stylized-cup-coffee-out-coffee-beans-flat-lay 1.png"
                    alt="A cup of coffee surrounded by roasted coffee beans">
            </figure>
        </div>
    </section>
</template>

<script>
import BaseButton from '@/components/Ui/BaseButton.vue';

export default {
    components: {
        BaseButton
    }
}
</script>

<style scoped>
.about-section::after {
    left: 0;
    bottom: 0;
    width: 415px;
    height: 300px;
    content: "";
    position: absolute;
    z-index: 0;
    background-image: url("@/assets/images/coffee_blast.png");
    background-repeat: no-repeat;
    background-size: contain;
    opacity: 0.9;
}

.about-section {
    position: relative;
    overflow: hidden;
    padding-top: 82px;
    padding-bottom: 96px;
}

.about-grid {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.9fr);
    align-items: center;
    gap: 54px;
    width: min(var(--container), calc(100% - 48px));
    margin-inline: auto;
}

.about-title {
    margin: 0;
    color: var(--color-brown);
    font-size: clamp(36px, 5vw, 54px);
    line-height: 1.15;
}

.section-label {
    margin: 0 0 10px;
    color: var(--color-accent);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
}

.beanscene {
    font-family: Playfair Display;
    font-size: 20px;
    line-height: 34px;
    font-style: normal;
    color: #707070;
    max-width: 585px;
    margin: 24px 0;
}
</style>