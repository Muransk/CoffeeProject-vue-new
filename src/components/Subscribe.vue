<template>
<section class="subscribe" aria-labelledby="subscribe-title" id="subscribe"  >    
    <div class="textik">
                    <div class="news">Subscribe to get the Latest News</div>
                    <img class="wing1" src="@/assets/images/pngwing1.png" alt="chashka1">
                    <img class="wing2" src="@/assets/images/pngwing2.png" alt="chashka2">
                    <div class="miss">Don’t miss out on our latest news, updates, tips and special offers</div>
                    <div class="email">
                        <input type="email" placeholder="Enter your mail">
                        <BaseButton class="quat">Subscribe</BaseButton>
                    </div>
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
.subscribe {
    margin-top: 82px;
    height: 374px;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    background-image: url('@/assets/images/Group46.png');
}

.textik {
    position: relative;
    top: 82px;
}

.news {
    font-family: Playfair Display;
    color: white;
    font-size: 54px;
    font-weight: bold;
    text-align: center;
}

.miss {
    margin-top: 16px;
    font-family: Playfair Display;
    color: white;
    line-height: 34px;
    text-align: center;
}

.email {
    margin-top: 26px;
    display: flex;
    justify-content: space-between;
    background-color: #FFF9F1;
    width: 642px;
    height: 66px;
    border: 1px solid #f9c06a74;
    border-radius: 7px;
    margin-left: auto;
    margin-right: auto;
}

input {
    margin-left: 26px;
    background-color: #fff6f1;
    border: 0;
    color: #00000055;
    font-size: 20px;
    font-family: Playfair Display;
}

input:focus {
    outline: 0;
}

.wing1 {
    position: absolute;
}

.wing2 {
    position: absolute;
    right: 0;
}

.quat{
    border-radius: 20px;
}

</style>