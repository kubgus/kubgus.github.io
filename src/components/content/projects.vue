<script setup>
    import ProjectPreview from "../project-preview.vue";

    const props = defineProps(["projects"]);

    const projects_sorted = props.projects.sort(() => Math.random() - 0.5);
    const random_project = props.projects[Math.floor(Math.random() * props.projects.length)];
</script>

<template>
    <div>
        <div id="random-project">
            <h1>Random Project</h1>
            <p>This project was picked just for you to check out!</p>
            <ProjectPreview :project="random_project" />
        </div>

        <h1>All Projects</h1>
        <div class="projects">
            <ProjectPreview v-for="(project, index) in projects_sorted" :key="index" :project="project" />
        </div>
    </div>
</template>

<style scoped>
    #random-project p {
        margin-bottom: 0.8rem;
    }

    .projects {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 1rem;
        margin-top: 1rem;
    }

    @media (max-width: 500px) {
        .projects {
            grid-template-columns: 1fr;
        }
    }
</style>
