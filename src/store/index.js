import Vue from 'vue'
import Vuex from 'vuex'

import words from './words'

Vue.use(Vuex);
export const store = new Vuex.Store({
    modules: {
        words,
    },
});

export default {
    store,
    install (Vue) {
        Vue.prototype.$store = store
    }
}