<template>
  <div class="bg-background min-h-screen">
    <RouterView />
  </div>
</template>

<script>
import features from '@/services/features';


  export default {
      name: 'portfolioApp',

      // Check if the backend is online
      async mounted() {
        const status = await features.heartbeat();
        if(status) {
          this.$store.dispatch('updateBackendStatus', true);
          console.log(`Heartbeat`)
        } else {
          this.$router.push('/error');
          this.$store.dispatch('updateBackendStatus', false);
          console.log(`Backend Offline`)
        }
      },
}

</script>

<style>
</style>
