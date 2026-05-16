<template>
    <section class="menu-section" id="menu" aria-labelledby="menu-title">
        <div class="section-heading">
            <h2 class="title" id="menu-title">Enjoy a new blend of coffee style</h2>
            <p class="explore">Explore all flavours of coffee with us. There is always a new cup worth experiencing.</p>
        </div>

        <div class="cards-grid">
            <article class="menu-card" v-for="card in cards" :key="card.id">
                <img :src="card.src" :alt="card.name">
                <div class="card-body">
                    <h3>{{ card.name }}</h3>
                    <p>{{ card.structure }}</p>
                    <strong class="price">{{ card.price }}</strong>
                    <div class="subscribe">
                        <BaseButton href="#subscribe">Order Now</BaseButton>
                    </div>
                </div>
            </article>
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
        cards: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>

.menu-card {
  border: 3px solid  #ffd08a;
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
  display: block;
  width: 100%;
  height: auto;

}

.explore {
    font-size: 20px;
    font-family: Playfair Display;
    color: #707070;
    text-align: center;
    line-height: 34px;
}

.title {
    margin: 0;
    color: var(--color-brown);
    font-size: clamp(36px, 5vw, 54px);
    text-align: center;
    line-height: 1.15;
}

.price {
    margin-top: 6px;
    font-size: 18px;
    font-family: Playfair Display;
    color: #603809;
    font-weight: bold;
}

.cards-grid {
    position: relative;
    z-index: 1;
    display: grid;
    gap: 20px;
    margin-inline: auto;
    margin-top: 32px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    width: min(var(--container), calc(100% - 48px));
}

.card-body {
    display: grid;
    justify-items: center;
    gap: 8px;
    padding: 14px 18px 24px;
}
</style>