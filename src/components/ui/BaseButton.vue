<template>
    <component :is="tag" 
    v-bind="attrs" 
    @click="onClick" 
    :class="buttonClass ? buttonClass : 'btn'">
        <slot />
    </component>
</template>

<script>
export default {
    props: {
        href: String,
        to: [String, Object],
        buttonClass: String
    },

    computed: {
        tag() {
            if (this.to) return 'router-link'
            if (this.href) return 'a'
            return 'button'
        },

        attrs() {
            if (this.tag === 'a') {
                return { href: this.href }
            }

            if (this.tag === 'button') {
                return { type: 'button' }
            }

            if (this.tag === 'router-link') {
                return { to: this.to }
            }

            return {}
        }
    },

    methods: {
        onClick(e) {
            this.$emit('click', e)
        }
    }
}
</script>

<style scoped>
.btn {
    text-decoration: none;
    display: inline-flex;
    min-width: 134px;
    min-height: 48px;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--color-accent);
    border-radius: 999px;
    color: var(--color-dark);
    background-color: var(--color-accent);
    box-shadow: 0 8px 18px rgba(249, 192, 106, 0.25);
    font-size: 16px;
    font-weight: 700;
    transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
}

.btn:hover,
.btn:focus-visible {
    transform: translateY(-2px);
    background-color: #ffd08a;
    box-shadow: 0 12px 24px rgba(249, 192, 106, 0.35);
}

.btn-small {
    min-width: 100px;
}
</style>