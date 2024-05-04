import Api from '@/services/api'

export default {
    async blogs() {
        return Api().get(`blogs`)
        .then(response => response.data)
        .catch(error => {
            return { error: 'No blogs found', status: error.response.status}
        });
    },

    async blog(id) {
        return Api().get(`blog/${id}`)
        .then(response => response.data)
        .catch(error => {
            return { error: 'No blog found', status: error.response.status}
        });
    },

    async blogCreate(post) {
        return Api().post('blog/create', post)
        .then(response => response.data)
    }
}
