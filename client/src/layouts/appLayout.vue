<template>
    <div>
     <navbarComponent />
   
     <main class="min-h-screen">
       <slot />
     </main>
   
     <footerComponent />
   </div>
   </template>
   
   <script>
   import navbarComponent from '@/components/navbarComponent.vue';
   import footerComponent from '@/components/footerComponent.vue';
   
   export default {
     components: {
       navbarComponent,
       footerComponent,
     }
   };
   </script>