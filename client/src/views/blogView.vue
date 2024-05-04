<template>
    <appLayout title="blogView">
        <div class="flex flex-col items-center text-white py-16 mb-12 text-center bg-foreground">
            <div class="container mx-auto items-center px-2 md:px-0" id="header">
                <h1 class="text-6xl font-bold">{{ blog.title }}</h1>
                <h2 class="text-xl pt-2 text-muted">{{ blog.description }}</h2>
                <span class="text-muted">Author: {{ blog.author }}</span>
            </div>
        </div>

        <div class="container mx-auto">
            <div class="flex flex-col text-white px-4 md:px-0">
                <div class="flex place-self-end space-x-3">
                    <span v-if="user" @click="editPost" class="px-2 py-1 bg-foreground text-white hover:text-accent w-fit text-2xl hover:cursor-pointer -mt-5">Edit</span>
                    <span v-if="user" @click="deletePost" class="px-2 py-1 bg-foreground text-white hover:text-accent w-fit text-2xl hover:cursor-pointer -mt-5">Delete</span>
                </div>
                <p v-html="markdown" class="markdown-content bg-foreground p-5 rounded-md my-2"></p>
                <div class="flex text-muted place-content-between">
                    <span>Created: {{ blog.createdAt }}</span>
                    <span>{{  blog.wordCount }} Words </span>
                </div>
            </div>
        </div>
    </appLayout>
</template>

<script>
import markdownit from 'markdown-it';
import blogService from '@/services/blogService';
import appLayout from '@/layouts/appLayout.vue';

const md = new markdownit({
    html: true,
    linkify: true,
    typographer: true
});

export default {
    name: 'blogView',
    components: {
        appLayout
    },
    data() {
        return {
            blog: {}
        }
    },

    computed: {
        markdown() { return this.blog.body ? md.render(this.blog.body) : '' },
        user() { return this.$store.getters.user; }
    },

    async mounted() {
        this.blog = await blogService.blog(this.$route.params.id);
        if(this.blog.status === 404) return this.$router.push('/404');
        this.blog.createdAt = new Date(this.blog.createdAt).toDateString();
    },

    methods: {
        async deletePost() {
            const response = await blogService.blogDelete(this.blog.id);
            if(response.status === 200) this.$router.push('/blog');
        },
        async editPost() {
            this.$router.push(`/blog/${this.blog.id}/edit`);
        }

    }

}
</script>


<style scoped>
/* eslint-disable */
textarea {
    width: 100%;
    height: 200px;
}

:deep(.markdown-content>h1) {
    @apply mb-4 text-4xl font-bold leading-tight;
}

:deep(.markdown-content>h2) {
    @apply mb-2 text-2xl font-bold leading-tight;
}

:deep(.markdown-content>p) {
    @apply mb-4 text-base leading-relaxed;
}

:deep(.markdown-content>strong) {
    @apply font-semibold;
}

:deep(.markdown-content>em) {
    @apply italic;
}

:deep(.markdown-content>ul) {
    @apply mb-4 pl-8 list-disc;
}

:deep(.markdown-content>ol) {
    @apply mb-4 pl-8 list-decimal;
}

:deep(.markdown-content>li) {
    @apply mb-2;
}

:deep(.markdown-content>a) {
    @apply text-blue-600 underline;
}

:deep(.markdown-content>code) {
    @apply px-2 py-1 bg-gray-200 rounded;
}

:deep(.markdown-content>pre) {
    @apply mb-4 p-4 bg-gray-100 rounded overflow-auto;
}

:deep(.markdown-content>pre) .markdown-content>code {
    @apply p-0 bg-transparent;
}

:deep(.markdown-content>blockquote) {
    @apply mb-4 pl-4 border-l-4 border-gray-300 italic;
}
</style>