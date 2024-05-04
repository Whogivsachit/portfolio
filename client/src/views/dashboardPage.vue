<template>
    <appLayout title="dashboardPage">
        <div class="flex flex-col items-center text-white py-16 mb-12 text-center bg-foreground">
            <div class="container mx-auto items-center px-2 md:px-0" id="header">
                <h1 class="text-6xl font-bold">Welcome back {{ username }}</h1>
                <h2 class="text-xl pt-2 text-muted">Nothing to really see here. But enjoy the view!<br /> This page will be a homepage for all of my projects.<br/> I'll add more statistics soon!</h2>
            </div>
        </div>
        
        <div class="container mx-auto">
            <div class="flex flex-col px-4 md:px-0">
                <div class="p-5 bg-foreground rounded-md w-full md:w-1/3 mx-auto text-white">
                    Blog Posts: <span class="text-accent">{{ posts }}</span>
                </div>
            </div>
        </div>
    </appLayout>
</template>

<script>
import features from '@/services/features';
import appLayout from '@/layouts/appLayout.vue';

export default {
    name: 'dashboardPage',
    components: {
        appLayout
    },
    data() {
        return {
            posts: 0,
            username: this.$store.getters.user.username,
        }
    },
    async mounted() {
        const stats = await features.stats();
        this.posts = stats.blogPosts;

    }
};
</script>