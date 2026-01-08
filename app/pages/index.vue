<script setup lang="ts">
const { data: sortedProjects } = await useAsyncData("projects", () => {
  // Order ensures projects are loaded in date order, else its alphabetical
  return queryCollection('projects')
      .all()
})
</script>

<template>
  <div class="p-4 flex flex-col gap-4 justify-center items-center content-center w-full">
    <div class="text-6xl text-yellow-500 font-bold">Welcome!</div>
    <div class="h-10 w-1/2 border-b-4 border-b-yellow-500"/>
    <div class="text-2xl text-blue-400">Projects</div>
    <div class="flex flex-row items-center justify-center w-fit min-h-20 gap-2 p-2 border-2 border-blue-400 rounded-2xl">
      <div v-for="project in sortedProjects" class="p-2 border-2 border-red-500 hover:bg-red-800 hover:-translate-y-2 rounded-2xl transition-all duration-200">
        <NuxtLink :to="project.path">{{project.title}}</NuxtLink>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>