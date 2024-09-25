<template>
  <p class="text-3xl font-bold text-red-500">{{ testText }}</p>
  <input v-model="inputRef" class="border border-green-900" type="text" />
  <button
    class="p-1 ml-2 bg-green-500 rounded text-white"
    @click="changeText()"
  >
    CLICK ME
  </button>
  <RouterView></RouterView>
</template>
<script setup lang="ts">
import router from "./router";
import { useRoute } from "vue-router";
import { ref } from "vue";
const route = useRoute();
const testText = ref("Hello World!");
const inputRef = ref("");
const changeText = () => {
  testText.value = inputRef.value;
};
</script>

<style></style>
