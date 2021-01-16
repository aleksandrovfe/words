import Vue from 'vue'

export const state = () => ({
    word: null,
    error: null,
})

export const mutations = {
    setFullWordInfo: (state, response) => {
        state.word = response
    },
    setError: (state, response) => {
        state.error = response
    },
    clearError: (state) => {
        state.error = null
    },
    clearWord: (state) => {
        state.word = null
    }
}

export const actions = {
    async getWordFullInfo({commit}, payload) {
        commit('setError')
        commit('clearWord')
        try {
            const response = await Vue.axios.get(
                `https://wordsapiv1.p.rapidapi.com/words/${payload}`,
                {
                    headers: {
                        'x-rapidapi-key': '51142fbe37mshac56c2c02f803c0p1a913ajsn107faec50d67',
                        'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
                        "useQueryString": true
                    }
                })

            commit('setFullWordInfo', response.data)
        } catch (error) {
            const {message} = error.response.data

            commit('setError', message)
        }
    },
}

export const getters = {
    word: s => s.word,
    error: s => s.error,
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
