<script setup>
    defineProps({
        project: Object,
        tech: Object,
    });

    // TODO: Sort project.tech array
</script>

<template>
    <figure class="container">
        <div class="contents">
            <a :href="project.website ?? project.github ?? '#'" target="_blank">
                <img class="logo" v-if="project.image" :src="project.image" alt="" />
                <div class="title">
                    <h3>{{ project.title }}</h3>
                    <div class="tech">
                        <img class="icon" v-for="data in project.tech" :key="data" :src="tech[data].src" :alt="tech[data].title" :title="tech[data].title" >
                    </div>
                </div>
            </a>
            <p>{{ project.description }}</p>
        </div>
        <div class="links">
            <a v-if="project.github" :href="project.github" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
            <a v-if="project.website" :href="project.website" target="_blank"><i class="fas fa-link"></i></a>
        </div>
    </figure>
</template>

<style scoped>
    figure {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 20px;
        align-items: center;
        padding: 0.7rem 1rem 0.7rem 1rem;
        word-break: break-all;
    }

    .contents {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    a {
        text-decoration: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1.1rem;
    }

    img.logo {
        max-height: 70px;
        max-width: 100px;
    }

    img[src=""] {
        display: none;
    }

    .title {
        display: flex;
        flex-direction: column;
        gap: 0.1rem 0.5rem;
    }

    .contents a:not(:has(.logo)) > .title {
        flex-direction: row;
        flex-wrap: wrap;
    }

    .tech {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
    }

    .tech > img {
        margin-top: 3px;
    }

    .links {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    i {
        font-size: 1.3rem;
    }
</style>
