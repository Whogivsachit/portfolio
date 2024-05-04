export default {
    strict: true,
    state: {
        backendOnline: true,
    },

    mutations: {
        setBackendStatus(state, status) {
            state.backendOnline = status;
        },
    },

    getters: {
        backendOnline: state => state.backendOnline,
    },

    actions: {
        updateBackendStatus({ commit }, status) {
            commit('setBackendStatus', status);
        }
    },
}