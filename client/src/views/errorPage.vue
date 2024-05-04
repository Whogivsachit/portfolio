<template>
    <appLayout title="blogView">
        <div class="flex flex-col items-center text-white py-16 mb-12 text-center bg-foreground">
            <div class="container mx-auto items-center px-2 md:px-0" id="header">
                <h1 class="text-6xl font-bold">Error ???</h1>
                <h2 class="text-muted">Woops! Looks like my raccoon buddy broke something. He's working hard on fixing it!</h2>
            </div>
        </div>

        <div class="container mx-auto items-center text-center">
            <img src="@/assets/raccoonerror.png" alt="error" class="mx-auto">
        </div>
    </appLayout>
</template>

<script>
import appLayout from '@/layouts/appLayout.vue';

export default {
    name: '404Page',
    components: {
        appLayout
    },
}
</script>
