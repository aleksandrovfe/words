<template>
    <div class="find-word">
        <form @submit.prevent="handleForm" class="find-word__form">
            <label class="find-word__label">
                <input
                    v-model.trim="word"
                    class="find-word__input"
                    type="text">
            </label>
        </form>
    </div>
</template>

<script>
import {gsap} from "gsap";

export default {
    data() {
        return {
            word: ''
        }
    },
    mounted() {
        this.startAnimations()
    },
    methods: {
        handleForm() {
            if (this.word.length > 0) {
                this.sendRequest(this.word)
            }
        },
        async sendRequest(word) {
            await this.$store.dispatch('words/getWordFullInfo', word)
            this.animateWordFrom()
        },
        startAnimations() {
            gsap.from(".find-word__input", {translateY: '-200px', duration: 5, ease: "elastic"});
        },
        animateWordFrom() {
            const tl = gsap.timeline({defaults: {ease: 'power2.inOut', duration: 1.5}})

            tl.from(".word__info", {translateY: 1000, duration: 1.5,})
                .from(".word", {y: 70, clipPath: 'inset(0 0 100% 0)'}, "-=.8")
        },
    }
}
</script>

<style scoped lang="scss">
.find-word {
    max-width: 600px;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;

    &__form {
        width: 100%;
    }

    &__label {
        width: 100%;
    }

    &__input {
        font-family: 'Cabin', sans-serif;
        color: white;
        width: 100%;
        height: 50px;
        padding: 0 30px;
        font-size: 25px;
        background-color: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(30px);
        border: 2px solid transparent;
        background-clip: border-box;
        box-shadow: 10px 10px 10px rgba(46, 54, 68, 0.03);
        box-sizing: border-box;
        border-radius: 10px;
        text-transform: uppercase;
        transition: 0.3s;

        &:focus {
            box-shadow: 10px 10px 10px rgba(46, 54, 68, 0.3);
        }
    }
}
</style>