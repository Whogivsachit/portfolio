<template>
    <appLayout title="blogPage">
        <div class="flex flex-col items-center text-white py-16 mb-12 text-center bg-foreground">
            <div class="container mx-auto items-center px-2 md:px-0" id="header">
                <h1 class="text-6xl font-bold">Welcome to my blog</h1>
                <h2 class="text-xl pt-2 text-muted">Interested in what this random raccoon loving developer has been up to?<br class="hidden md:block"/> I post my thoughts and opinions on a diverse range of topics from Gaming, Coding,<br class="hidden md:block"/> System Administration and more.</h2>
            </div>
        </div>

        <div class="container mx-auto w-full md:w-1/2 px-4 md:px-0">
            <div class="flex flex-col gap-4">
                <router-link to="/blog/create" v-if="user" class="px-2 py-1 bg-foreground text-white w-fit place-self-end text-2xl rounded-md drop-shadow-md hover:text-accent cursor-pointer">Create</router-link>
                <router-link :to='`/blog/${post.id}`' class="transition ease-in-out duration-700 hover:scale-105" v-for="post in posts" :key="post.id"> 
                    <div class="bg-foreground rounded-md p-5 w-full text-white">
                        <h1 class="text-white text-2xl">{{ post.title }}</h1>
                        <div class="flex items-center text-muted gap-2">
                            <span>{{ post.author }}</span>
                            <span><faIcon class="h-2 pb-1" :icon="['fas', 'circle']"/></span>
                            <span>{{ post.createdAt }}</span>
                        </div>
                        <p class="line-clamp-2"> {{ post.content }}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </appLayout>
</template>

<script>
import blogService from '@/services/blogService';
import appLayout from '@/layouts/appLayout.vue';

export default {
    name: 'blogHome',
    components: {
        appLayout
    },
    data() {
        return {
            posts: []
        }
    },

    computed: {
        user() { return this.$store.getters.user; }
    },

    async mounted() {
        this.posts = await blogService.blogs();
        this.posts.forEach(post => {
            post.createdAt = new Date(post.createdAt).toDateString();
        })
    },
}

</script>