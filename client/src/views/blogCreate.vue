<template>
    <appLayout title="blogPage">
        <div class="flex flex-col items-center text-white py-16 mb-12 text-center bg-foreground">
            <h1 class="text-4xl font-bold mb-4">Create a new post</h1>
            <p class="text-muted">Create the next world ending post!</p>
        </div>

        <div class="px-4 md:px-[16rem] mx-auto">
            <div class="flex flex-col md:flex-row gap-6">
                <div class="flex flex-col items-center text-white w-full bg-foreground p-5 rounded-md">
                    <form @submit.prevent="createPost" class="flex flex-col w-full">
                        <div class="text-red-600 text-center pb-2" v-html="error"></div>

                        <div class="flex gap-4 pr-4 md:pr-0">
                            <div class="flex flex-col w-1/2">
                                <label for="title" class="pl-1 text-sm text-muted">Title</label>
                                <input type="text" name="title" v-model="title" placeholder="My New post" class="border border-borders rounded-md p-2 my-2 bg-background/75">
                            </div>
                            <div class="flex flex-col w-1/2">
                                <label for="author" class="pl-1 text-sm text-muted">Author</label>
                                <input type="text" name="author" v-model="author" placeholder="author" class="border border-borders rounded-md p-2 my-2 bg-background/75">
                            </div>
                        </div>

                        <label for="Description" class="pl-1 text-sm text-muted">Description</label>
                        <input type="text" name="Description" v-model="description" placeholder="Description" class="border border-borders rounded-md p-2 my-2 bg-background/75">

                        <label for="body" class="pl-1 text-sm text-muted">Markdown</label>
                        <textarea type="text" name="body" v-model="body" placeholder="# Example Markdown" class="border border-borders rounded-md p-2 my-2 bg-background/75"></textarea>

                        <div class="flex items-center">
                            <input type="checkbox" value="" name="published" v-model="published" class="border border-borders rounded-md p-2 my-2 bg-background/75">
                            <label for="published" class="pl-1 text-sm text-muted">Published</label>
                        </div>
                        <button type="submit" class="bg-accent hover:bg-blue-800 text-white rounded-md p-2 my-2">Post</button>
                    </form>
                </div>
                <div class="flex flex-col text-white w-full">
                    <div class="flex flex-col bg-foreground p-5 rounded-md">
                        <span class="text-3xl">{{ title }}</span>
                        <span class="text-muted">{{ author }}</span>
                        <p class="text-muted">{{ description }}</p>
                        <p v-html="markdown" class="text-muted w-full h-full border-t-2 border-borders p-2 mt-5 markdown-content"></p>
                    </div>             
                </div>
            </div>
        </div>

    </appLayout>
</template>

<script>
import blogService from '@/services/blogService';
import appLayout from '@/layouts/appLayout.vue';
import markdownit from 'markdown-it';

const md = new markdownit({
    html: true,
    linkify: true,
    typographer: true
});

export default {
    name: 'blogCreate',
    components: {
        appLayout
    },
    data() {
        return {
            title: "",
            author: "",
            description: "",
            body: "",
            published: false,
            error: ""
        }
    },

    computed: {
        user() { return this.$store.getters.user; },
        markdown() { return md.render(this.body); }
    },

    methods: {
        async createPost() {
            try {
                await blogService.blogCreate({
                    title: this.title,
                    author: this.author,
                    description: this.description,
                    body: this.body,
                    published: this.published
                });
                this.$router.push('/blog');
            } catch (error) {
                this.error = error.response.data.error
            }
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