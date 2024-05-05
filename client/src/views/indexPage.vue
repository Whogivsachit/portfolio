<template>
    <appLayout title="indexPage">
        <div class="flex flex-col items-center text-white py-16 mb-12 text-center bg-foreground">
            <!-- Header -->
            <div class="container mx-auto items-center px-2 md:px-0" id="header">
                <div class="pb-4">
                    <img class="w-64 h-64 rounded-full border-[12px] border-borders/50 mx-auto" src="@/assets/logo.png" alt="Whogi" /> 
                    <span class="bg-borders/50 px-2 py-2 rounded-full text-sm relative -top-4 w-3/4 mx-auto">
                        <faIcon class="anim-flashing" :icon="['fas', 'circle']" :class="available ? 'text-green-600' : 'text-red-600'" /> Available For Work
                    </span>
                </div>
                <h1 class="text-6xl font-bold">My name's Whogi.</h1>
                <h2 class="text-xl pt-2 text-muted">I'm a freelance web developer with a passion for coding and system administration.<br class="hidden md:block"/> You can find a list of my featured projects and interests below. If you're looking to hire me,<br class="hidden md:block"/> feel free to contact me at one of my contact details below.</h2>
            </div>
        </div>

        <div class="container mx-auto flex flex-col pb-6">
            <h1 class="text-4xl font-bold text-left text-white pb-4">My Stack and Socials</h1>
            <!-- Stack Details -->
            <div class="grid grid-cols-2 gap-2">
                <div class="flex flex-col p-5 bg-foreground rounded-md border-accent">
                    <span class="text-2xl text-white">Programming Languages</span>
                    <span class="text-md text-muted">Php, Javascript, SQL</span>

                    <span class="text-2xl text-white pt-2">Frameworks</span>
                    <span class="text-md text-muted">Express, Vue, Laravel, Sequelize, TailwindCss, Bootstrap, EJS, HTMX</span>
                </div>
                <div class="flex flex-col p-5 bg-foreground rounded-md border-accent">
                    <span class="text-2xl text-white">Interests</span>
                    <span class="text-md text-muted">System Administration, Web Development, Networking, Programming</span>

                    <span class="text-2xl text-white pt-2">Software</span>
                    <span class="text-md text-muted">Docker, Nginx, Proxmox, cPanel, Plesk, Visual Studio Code, Git, Insomnia</span>
                </div>
            </div>

            <!-- Socials -->
            <div class="flex flex-col md:flex-row pt-2 gap-2 text-white">
                <div class="p-5 bg-foreground rounded-md border-accent text-2xl space-x-2 w-full md:w-1/4">
                    <faIcon :icon="[ 'fab', 'discord' ]" />
                    <a href="https://discordapp.com/users/202967961298927616" class="hover:text-accent underline">Whogi</a>
                </div>
                <div class="p-5 bg-foreground rounded-md border-accent text-2xl space-x-2 w-full md:w-1/4">
                    <faIcon :icon="[ 'fab', 'github' ]" />
                    <a href="https://github.com/whogivsachit" class="hover:text-accent underline">Whogivsachit</a>
                </div>
                <div class="p-5 bg-foreground rounded-md border-accent text-2xl space-x-2 w-full md:w-1/4">
                    <faIcon :icon="[ 'fas', 'envelope' ]" />
                    <a href="mailto:contact@chit.sh" class="hover:text-accent underline">whogi@chit.sh</a>
                </div>
                <div class="p-5 bg-foreground rounded-md border-accent text-2xl space-x-2 w-full md:w-1/4">
                    <faIcon :icon="[ 'fab', 'steam' ]" />
                    <a href="https://steamcommunity.com/id/Whogi" class="hover:text-accent underline">Whogi</a>
                </div>
            </div>
        </div>
        

        <!-- Featured projects -->
        <div id="featuredProjects">
            <div class="container mx-auto py-6 px-4 md:px-0">
                <h1 class="text-4xl font-bold text-left text-white pb-4">Featured Projects</h1>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
                    <div class="bg-foreground p-5 rounded-md border-t-4 border-accent" v-for="project in projects" :key="project.id">
                        <div class="flex place-content-between">
                            <h1 class="font-bold text-2xl hover:text-accent"><a :href="project.link">{{ project.title }}</a></h1>
                        </div>
                        <h2 class="text-muted">{{ project.time }}</h2>
                        <p class="py-2">{{ project.description }}</p>
                        <span class="text-muted">Stack: {{ project.stack }}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Work Experience -->
        <div id="workExperience">
            <div class="container mx-auto py-6 px-4 md:px-0">
                <h1 class="text-4xl font-bold text-left text-white pb-4">Work Experience</h1>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
                    <div class="bg-foreground p-5 rounded-md border-t-4 border-accent" v-for="experience in experiences" :key="experience.id">
                        <div class="flex place-content-between">
                            <h1 class="font-bold text-2xl hover:text-accent"><a :href="experience.link">{{ experience.title }}</a></h1>
                        </div>
                        <h2 class="text-muted">{{ experience.time }}</h2>
                        <span class="text-white">{{ experience.description }}</span>
                    </div>
                </div>
            </div>
        </div>
    </appLayout>
</template>

<script>
import appLayout from '@/layouts/appLayout.vue';
import projects from '@/assets/projects.json';
import experiences from '@/assets/experience.json';

export default {
    name: 'indexPage',
    components: {
        appLayout,
    },
    data() {
        return {
            projects,
            experiences,
            available: true,
        };
    },
}
</script>
