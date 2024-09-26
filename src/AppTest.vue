<template>
  <div class="container px-5 flex flex-col gap-8">
    <p class="text-3xl font-bold text-red-500 text-center">
      DEMO BATDONSAN.COM.VN
    </p>
    <a-form
      name="custom-validation"
      class="w-50"
      layout="horizontal"
      @finish="handleSubmit"
      :model="formState"
    >
      <a-form-item label="Nhập Email">
        <a-input
          placeholder="Email"
          v-model:value.trim="formState.email"
          class="w-50"
          autocomplete="off"
        />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" class="w-full mt-2"
          >Submit</a-button
        >
      </a-form-item>
    </a-form>
  </div>
</template>
<script setup lang="ts">
import { message } from "ant-design-vue";
import { reactive } from "vue";
import { onMounted } from "vue";

const formState = reactive({
  email: "",
});

const handleSubmit = () => {
  console.log(formState.email);
};
onMounted(() => {
  setTimeout(() => {
    message.success("Hello World!");
  }, 3000);
});
</script>

<style></style>
