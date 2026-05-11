<template>
    <section class="features-section" id="features" aria-labelledby="features-title">
        <div class="section-heading">
            <h2 id="features-title">Why are we different?</h2>
            <p>We don’t just make your coffee, we make your day!</p>
        </div>
        <div class="card-grid">
            <article v-for="card in featureCards" :key="card.id" class="feature-card">
                <img :src="card.image" :alt="card.alt">

                <h3>{{ card.title }}</h3>

                <p>{{ card.description }}</p>
            </article>
        </div>

        <div class="cta-small">
            <p>Great ideas start with great coffee. Let’s help you achieve that.</p>
            <strong>Get started today.</strong>
            <BaseButton href="#subscribe">Join Us</BaseButton>
        </div>
    </section>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue';
export default {
    components: {
        BaseButton
    },
    props: {
        featureCards: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.section-heading {
    position: relative;
    z-index: 1;
    max-width: 980px;
    text-align: center;
    width: min(var(--container), calc(100% - 48px));
    margin-inline: auto;
}

.section-heading h2 {
    margin: 0;
    color: var(--color-brown);
    font-size: clamp(36px, 5vw, 54px);
    line-height: 1.15;
}

.section-heading p {
    margin: 16px auto 0;
    color: var(--color-muted);
    font-size: 20px;
    line-height: 1.7;
}

.feature-card {
    min-height: 284px;
    padding: 36px 24px;
    text-align: center;
}

.card-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    margin-top: 32px;
    position: relative;
    z-index: 1;
    display: grid;
    gap: 20px;
    width: min(var(--container), calc(100% - 48px));
    margin-inline: auto;
}

.cta-small {
    display: grid;
    justify-items: center;
    gap: 10px;
    margin-top: 32px;
    text-align: center;
    width: min(var(--container), calc(100% - 48px));
    margin-inline: auto;
}

.cta-small strong {
    color: var(--color-brown);
    font-size: 30px;
}

.cta-small p {
    color: var(--color-muted);
    font-size: 20px;
    line-height: 1.7;
}
</style>