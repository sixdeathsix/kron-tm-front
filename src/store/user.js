export default {
    state () {
        return {
            user: {}
        }
    },
    getters: {
        getUser(state) {
            return state.user;
        }
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        }
    },
    actions: {}
}