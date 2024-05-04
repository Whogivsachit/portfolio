import authService from '@/services/authService';

export default {
    strict: true,
    state: {
        user: JSON.parse(localStorage.getItem('user')) || null,
        token: localStorage.getItem('token') || null,
    },

    mutations: {
        setUser(state, user) {
            state.user = user;
            localStorage.setItem('user', JSON.stringify(user));
        },

        setToken(state, token) {
            state.token = token;
            localStorage.setItem('token', token);
        },

        logout(state) {
            state.user = null;
            state.token = null;
            localStorage.removeItem('user');
            localStorage.removeItem('token');
        },
    },

    getters: {
        user: state => state.user,
        token: state => state.token,
    },

    actions: {
        async login({ commit }, credentials) {
            const response = await authService.login(credentials);
            commit('setUser', response.data.user);
            commit('setToken', response.data.token);
        },

        async register({ commit }, credentials) {
            const response = await authService.register(credentials);
            commit('setUser', response.data.user);
            commit('setToken', response.data.token);
        },

        async logout({ commit }) {
            commit('logout');
            this.$router.push('/');
        },

        async validateToken({commit}) {
            const token = localStorage.getItem('token');
            if (!token) { throw new Error('Token not found'); }
            try {
                const response = await authService.validateToken({token, userId: JSON.parse(localStorage.getItem('user')).id });
                const isValid = response.data.isValid;
                if (!isValid) { throw new Error('Token invalid'); }
                return true;
            } catch (err) {
                commit('logout');
                throw new Error('Token invalid');
            }
        }

    },

}