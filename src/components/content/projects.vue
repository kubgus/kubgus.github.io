<script setup>
import ProjectPreview from "../project-preview.vue";
import CountHeading from "../count-heading.vue";

const props = defineProps({
    projects: Object,
    tech: Object,
});

const categoriesMap = {};
for (const project of props.projects) {
    const [categoryName, categoryIndex] = project.category;
    if (!categoriesMap[categoryName]) {
        categoriesMap[categoryName] = { name: categoryName, index: categoryIndex, projects: [] };
    }
    categoriesMap[categoryName].projects.push(project);
}

const categories = Object.values(categoriesMap)
.sort((a, b) => a.index - b.index)
.map(category => {
    category.projects.sort((a, b) => {
        if (b.rating !== a.rating) return b.rating - a.rating;
        return b.year - a.year;
    });
    return category;
});
</script>

<template>
  <div v-for="(category, index) in categories" :key="index" class="category-section">
    <details>
      <summary class="category-summary">
        <span class="triangle"></span>
        <span class="summary-text">
          <CountHeading :count="category.projects.length">{{ category.name }}</CountHeading>
        </span>
      </summary>
      <div class="projects">
        <ProjectPreview
          v-for="(project, i) in category.projects"
          :key="i"
          :project="project"
          :tech="tech"
        />
      </div>
    </details>
  </div>
</template>

<style scoped>
.projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
}

.category-section:not(:last-child) {
    margin-bottom: 1.5rem;
}

.category-summary {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: color 0.1s ease-in-out;
}

.category-summary:hover {
    color: var(--primary-accent-dark);
}

.category-summary::-webkit-details-marker {
    display: none;
}

.summary-text {
  user-select: none;
  -webkit-user-select: none; /* Safari/Chrome */
  -moz-user-select: none;    /* Firefox */
  -ms-user-select: none;     /* IE/Edge */
}

.triangle {
    display: inline-block;
    transition: transform 0.2s ease;
    font-weight: bold;
    font-size: 1.5rem;
    transform: translateY(6px) translateX(-4px);
}

.triangle::before {
    content: '☞';
}

details[open] .triangle {
    transform: translateY(5px) translateX(-10px) rotate(80deg);
}
</style>
