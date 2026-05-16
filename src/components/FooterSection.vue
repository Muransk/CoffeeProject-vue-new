<template>
     <section id="contact" aria-labelledby="footer-title">
            <div class="lastflexes">
                <div class="beanlast">
                    <div class="scene">Bean Scene</div>
                    <div class="loremlast">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                    <img class="social" src="@/assets/images/Group54.png" alt="Social Media Icons">
                </div>
                <div class="aboutlast">
                    <a class="textlast" href="#about">About</a>
                    <div class="elements">
                        <a class="menu" href="#menu">Menu <br></a>
                        <a class="features" href="#features">Features</a> 
                        <div class="newslast">News & Blogs</div>
                        <div class="help">Help&Supports</div>
                    </div>
                </div>
                <div class="companylast">
                    <div class="textlast">Company</div>
                    <div class="elements">
                        <div class="how">How we work</div>
                        <div class="tearms">Tearms&service</div>
                        <div class="pricing">Pricing</div>
                        <div class="faq">FAQ</div>
                    </div>
                </div>
                <div class="contactslast">
                    <div class="textlast">Contact Us</div>
                    <div class="elements">
                        <div class="geo">Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</div>
                        <div class="phone">+1 202-918-2132</div>
                        <div class="mail">beanscene@mail.com</div>
                        <div class="site">www.beanscene.com</div>
                    </div>
                </div>
            </div>
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

section {
    width: 100%;
    height: 492px;
    background-color: #4c2c07;
}

.lastflexes {
    display: flex;
    justify-content: space-between;
    gap: 60px;
    margin-left: 100px;
    margin-right: 100px;
}

.lastflexes > * {
    margin-top: 161px;
    color: white;
    font-family: Playfair Display;
}

.scene {
    font-family: Clicker Script;
    font-size: 54px;
}

.loremlast {
    margin-top: 20px;
    width: 380px;
    font-size: 14px;
    line-height: 22px;
}

.social {
    margin-top: 20px;
}

.companylast {
    width: 145px;
}

.textlast {
    font-weight: bold;
    font-size: 26px;
}

.elements {
    margin-top: 55px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.elements > div,
.elements > a {
    font-size: 18px;
    line-height: 1.4;
    display: inline-block;
    width: fit-content;
    color: inherit;
    text-decoration: none;
    position: relative;
}

.textlast {
    font-weight: bold;
    font-size: 26px;
    display: inline-block;
    width: fit-content;
    position: relative;
}

.textlast::after,
.elements > div::after,
.elements > a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 2px;
    border-radius: 999px;
    background-color: #F9C06A;
    transition: width 0.2s ease;
}

.textlast:hover::after,
.elements > div:hover::after,
.elements > a:hover::after,
.textlast:focus-visible::after,
.elements > div:focus-visible::after,
.elements > a:focus-visible::after {
    width: 100%;
}

.geo {
    width: 332px;
}

a {
    position: relative;
    display: inline-block;
    color: inherit;
    text-decoration: none;
}

.elements a::after,
.sign-in::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 0;
    height: 2px;
    border-radius: 999px;
    background-color: var(--color-accent);
    transition: width 0.2s ease;
}

.elements a:hover::after,
.sign-in:hover::after {
    width: 100%;
}


.navbar,
.auth-actions,
.nav-list {
    gap: 25px;
}

.navbar,
.auth-actions,
.nav-list {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    white-space: nowrap;
}


</style>