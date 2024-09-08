<script setup>
    defineProps({
        project: Object
    });
</script>

<template>
    <figure class="container">
        <a :href="project.website ?? project.github ?? '#'" target="_blank">
            <div class="info">
                <img v-if="project.image" :src="project.image" alt="" />
                <figcaption>
                    <h3>{{ project.title }}</h3>
                    <p>{{ project.description }}</p>
                </figcaption>
            </div>
        </a>
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
        padding: 0.7rem 1.3rem 0.7rem 1rem;
    }

    a {
        text-decoration: none;
    }

    .info {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.9rem;
    }

    img {
        max-height: 70px;
        max-width: 100px;
    }

    img[src=""] {
        display: none;
    }

    figcaption {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .links {
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }

    i {
        font-size: 1.5rem;
    }

    @media (max-width: 500px) {
        figure {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
        }

        .info {
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
        }
    }
</style>
