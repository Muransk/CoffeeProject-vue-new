<template>
<section class="Testiomonal-card" id="Testiomonal" aria-labelledby="testimonial-title">
<div>
    <div class="chto">“</div>
    <div class="lorem">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....
    </div>
    <div class="names">
        Jonny Thomas
    </div>
    <div class="manager">
        Project Manager
    </div>

    <img class="kotik" src="@/assets/images/eba.png" alt="kotik">

    <div class="strel">
            <BaseButton class="strelka1"><b><</b></BaseButton>
            <BaseButton class="strelka2"><b>></b></BaseButton>
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
.Testiomonal-card {
    width: 980px;
    height: 550px;
    background-color: #FFF9F1;
    border: 1px solid #f9c06a69;
    margin: 45px auto;
     box-shadow: 0 10px 12px rgba(0, 0, 0, 0.15);

}

.chto {
    font-size: 220px;
    color: #603809;
    font-weight: bold;
    line-height: 112px;
    font-family: Playfair Display;
    margin-top: 54px;
    margin-left: 29px;
    text-align: left;
}

.lorem {
    font-size: 18px;
    color: #707070;
    line-height: 36px;
    font-family: Playfair Display;
    font-weight: bolder;
    width: 780px;
    margin: 0 auto;
    text-align: center;
}

.names {
    font-size: 32px;
    color: #603809;
    font-weight: bold;
    font-family: Playfair Display;
    margin: 28px auto 0px auto;
    text-align: center;
}

.manager {
    font-size: 20px;
    color: #707070;
    line-height: 34px;
    margin-top: 4px;
    text-align: center;
}

.kotik {
    width: 112px;
    height: 112px;
    display: flex; justify-content: center; align-items: center;
    background-position: center;
    background-size: contain;
    margin-top: 45px;
    border-radius: 16px;
    margin-left: auto;
    margin-right: auto;
}

.strel {
    display: flex;
    justify-content: space-between;
    position: relative;
    bottom: 350px;
}

.strelka1 {
    min-width: 60px ;
    min-height: 60px ;
    position: relative;
    right: 41px;
    border-radius: 8px;
    background-color: #F9C06A;
    align-self: flex-start;
    box-shadow: 0 10px 12px rgba(0, 0, 0, 0.15);
}

.strelka2 {
    min-width: 60px;
    min-height: 60px;
    position: relative;
    left: 41px;
    border-radius: 8px;
    background-color: #F9C06A;
    align-self: flex-end;
    box-shadow: 0 10px 12px rgba(0, 0, 0, 0.15);
}

.str {
    line-height: 70px;
    text-align: center;
    vertical-align: middle;
    font-size: 40px;
}

</style>