<template>
    <div class="app">
        <FindWord />
        <Word/>
    </div>
</template>
<script>
import {gsap} from "gsap";
import Word from "@/components/word/Word";
import FindWord from "@/components/word/FindWord";

export default {
    components: {
        Word,
        FindWord
    },
    async mounted() {
        this.startAnimations()
    },
    methods: {
        startAnimations() {
            gsap.from("#title", {rotation: 360, duration: 5, ease: "elastic"});
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');

.app {
    font-family: 'Cabin', sans-serif;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: white;
    background-image: url("assets/images/jason-leung-AxKqisRPQSA-unsplash.jpg");
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    min-height: 100vh;
}
</style>
