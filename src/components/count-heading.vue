<template>
    <h1><slot /> <span class="count faded">({{ count }})</span></h1>
</template>

<script setup>
    defineProps({
        count: Number
    })
</script>

<style scoped>
    .count {
        font-size: 1.75rem;
        font-weight: 600;
    }
</style>
