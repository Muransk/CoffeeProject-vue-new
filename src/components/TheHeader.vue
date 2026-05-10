<template>
    <header class="header">
        <nav class="navbar" aria-label="Main navigation">
            <div class="logo">Bean Scene</div>
            <ul class="nav-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>

            <div class="auth-actions" aria-label="Account actions">
                <a class="sign-in" href="#signin">Sign In</a>
                <BaseButton href="#signup">Sign Up</BaseButton>
            </div>

        </nav>
    </header>
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
.logo {
    font-family: "Clicker Script", cursive;
    font-size: clamp(34px, 4vw, 54px);
    line-height: 1;
    white-space: nowrap;

}

a {
    color: inherit;
    text-decoration: none;
}

ul {
    list-style: none;
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
}

.header {
    margin-top: 3px;
}

.logo,
.auth-actions {
    margin-left: 93px;
    margin-right: 93px;
}
</style>