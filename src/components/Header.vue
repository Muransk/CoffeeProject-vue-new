<template>
    <section id="home" class="header">
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
.logo {
    font-family: "Clicker Script", cursive;
    font-size: clamp(34px, 4vw, 54px);
    line-height: 1;
    white-space: nowrap;
    margin: 0 0 24px;
}

a {
    position: relative;
    display: inline-block;
    color: inherit;
    text-decoration: none;
}

.nav-list a::after,
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

.nav-list a:hover::after,
.sign-in:hover::after {
    width: 100%;
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
    white-space: nowrap;
}

.header {
    padding-top: 8px;
}

.logo,
.auth-actions {
    margin-inline: 93px;
}



.nav-list {
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.92); /* или #333 */
  padding: 10px 24px;
  border-radius: 999px;
  display: flex;
  gap: 25px;
}

.nav-list a {
  color: white;
}

.nav-list a::after {
  background-color: #F9C06A;
}
</style>