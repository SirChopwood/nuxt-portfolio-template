<script setup lang="ts">

let {data: items } = await useFetch("/api/test")

async function getItems() {
  items.value = await $fetch("/api/test")
}

async function addItem(){
  await $fetch("/api/test", {
    method: "POST"
  })
}
</script>

<template>
  <div class="p-4 bg-red-700 hover:bg-red-600 text-white rounded-2xl border-red-400 border-2 flex flex-col gap-2">
    <div class="text-3xl">ITEMS</div>
    <div v-for="item of items">
      {{item.id}} - {{item.name}}
    </div>
  </div>
  <button class="p-4 bg-blue-700 hover:bg-blue-600 text-white rounded-2xl border-blue-400 border-2" @click="addItem()">
    <div class="text-3xl">ADD ITEM</div>
  </button>
  <button class="p-4 bg-green-700 hover:bg-green-600 text-white rounded-2xl border-green-400 border-2" @click="getItems()">
    <div class="text-3xl">REFRESH</div>
  </button>
</template>

<style scoped>

</style>