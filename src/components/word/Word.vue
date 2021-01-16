<template>
    <div class="word__container">
        <p class="word" v-if="word && !error">{{ word.word }}</p>
        <p class="word word--error" v-else-if="error" >{{ error }}</p>
        <div v-if="word && !error" class="word__info">
            <div class="word__wrapper word__box" v-if="word.pronunciation">
                <p class="word__title">pronunciation</p>
                <p class="word__value">{{ word.pronunciation.all }}</p>
            </div>
            <div class="word__wrapper word__box" v-if="word.syllables">
                <p class="word__title">syllables</p>
                <div v-for="(item, index) in word.syllables.list" :key="index" class="word__box--loop" >
                    <p class="word__value">{{ item }}</p>
                </div>
            </div>
            <div v-for="(el, index) in word.results" :key="index" class="word__wrapper">
                <div class="word__box">
                    <p class="word__title">definition</p>
                    <p class="word__value">{{ el.definition }}</p>
                </div>
                <div class="word__box">
                    <p class="word__title">part Of Speech</p>
                    <p class="word__value">{{ el.partOfSpeech }}</p>
                </div>
                <div v-if="el.hasTypes">
                    <p class="word__title">has Types</p>
                    <div v-for="(item, index) in el.hasTypes" :key="index" class="word__box--loop" >
                        <p class="word__value">{{ item }}</p>
                    </div>
                </div>
                <div v-if="el.partOf">
                    <p class="word__title">part Of</p>
                    <div v-for="(item, index) in el.partOf" :key="index" class="word__box--loop" >
                        <p class="word__value">{{ item }}</p>
                    </div>
                </div>
                <div v-if="el.synonyms">
                    <p class="word__title">synonyms</p>
                    <div v-for="(item, index) in el.synonyms" :key="index" class="word__box--loop" >
                        <p class="word__value">{{ item }}</p>
                    </div>
                </div>
                <div v-if="el.typeOf">
                    <p class="word__title">type Of</p>
                    <div v-for="(item, index) in el.typeOf" :key="index" class="word__box--loop" >
                        <p class="word__value">{{ item }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    computed: {
        ...mapGetters({
            word: 'words/word',
            error: 'words/error'
        }),
    },
}
</script>

<style scoped lang="scss">
.word {
    text-align: center;
    font-size: 50px;
    font-weight: bolder;
    font-style: italic;
    letter-spacing: 5px;
    margin: 30px;
    text-transform: uppercase;

    &__container {
        width: 100%;
        max-width: 1000px;
    }

    &__wrapper {
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(30px);
        border: 2px solid transparent;
        background-clip: border-box;
        box-shadow: 10px 10px 10px rgba(46, 54, 68, 0.03);
        padding: 20px;
        margin: 30px 0;
    }

    &__box {
        display: flex;
        align-items: center;
        margin: 20px 0;

        &--loop {
            margin: 20px 0;
            padding-left: 20px;
        }
    }

    &__title {
        font-size: 28px;
        margin-right: 10px;
        font-weight: bolder;
        font-style: italic;
        text-transform: capitalize;
        letter-spacing: 1px;
    }

    &__value {
        font-size: 20px;
        word-break: break-word;
    }
}
</style>