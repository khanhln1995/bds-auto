<template>
  <PageContent>
    <router-view />
  </PageContent>
</template>

<script setup lang="ts">
import { Layout } from "ant-design-vue";
const PageContent = Layout.Content;
</script>
