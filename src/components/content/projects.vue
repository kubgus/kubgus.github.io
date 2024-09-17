<script setup>
    import ProjectPreview from "../project-preview.vue";
    import CountHeading from "../count-heading.vue";

    const props = defineProps(["projects"]);

    const random_project = props.projects[Math.floor(Math.random() * props.projects.length)];
    const projects_random = props.projects.sort(() => Math.random() - 0.5);
    const projects_sorted = projects_random.sort((a, b) => {
        return a.year == b.year ? b.rating - a.rating : b.year - a.year
    });

    let pinned_projects = [], open_source_projects = [], other_projects = [];
    for (const project of projects_sorted) {
        if (project.rating >= 4) pinned_projects.push(project);
        else if (project.github) open_source_projects.push(project);
        else other_projects.push(project);
    }
</script>

<template>
    <h2>Random Project</h2>
    <ProjectPreview :project="random_project" />

    <CountHeading :count="pinned_projects.length">Pinned Projects</CountHeading>
    <div class="projects">
        <ProjectPreview v-for="(project, index) in pinned_projects" :key="index" :project="project" />
    </div>

    <CountHeading :count="open_source_projects.length">Open Source Projects</CountHeading>
    <div class="projects">
        <ProjectPreview v-for="(project, index) in open_source_projects" :key="index" :project="project" />
    </div>

    <CountHeading :count="other_projects.length">Other Projects</CountHeading>
    <div class="projects">
        <ProjectPreview v-for="(project, index) in other_projects" :key="index" :project="project" />
    </div>
</template>

<style scoped>
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
