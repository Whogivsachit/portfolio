<template>
    <div class="fixed inset-0 flex items-center justify-center z-50">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="bg-foreground text-white p-6 rounded-lg shadow-xl w-full max-w-sm z-10">
      <faIcon class="h-5 w-5 text-white -mt-4 -mr-4 float-right cursor-pointer transform hover:scale-110" :icon="['fas', 'x']" @click="$emit('login-success');" />
        <h2 class="text-xl font-semibold mb-6 text-center">Log In</h2>
        <form @submit.prevent="login" class="flex flex-col">
            <div class="text-red-600 text-center pb-2" v-html="error"></div>
                <label for="username" class="pl-1 text-sm text-muted">Username</label>
                <input type="text" name="username" v-model="username" placeholder="Username" class="border border-borders rounded-md p-2 my-2 bg-background/75">

                <div class="flex place-content-between text-muted text-sm pl-1 pt-2">
                    <label for="password">Password</label>
                    <router-link to="/forgotpass" tabindex="-1">Forgot Password?</router-link>
                </div>
                <input type="password" name="password" v-model="password" placeholder="Password" class="border border-borders rounded-md p-2 my-2 bg-background/75">
            <button type="submit" class="bg-accent hover:bg-blue-800 text-white rounded-md p-2 my-2">Login</button>
        </form>
        <p class="text-muted text-center text-sm pt-2">Signups disabled.</p>
      </div>
    </div>
  </template>
  
<script>
  export default {
    data () {
    return {
      username: '',
      password: '',
      error: null,
    }
  },
  methods: {
    async login () {
      try {
        await this.$store.dispatch('login', {
          username: this.username,
          password: this.password
        });
        this.$emit('login-success');
        this.$router.push('/dashboard');
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
}
</script>