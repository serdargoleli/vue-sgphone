<template>
  <div class="grid grid-nogutter flex-column-reverse md:flex-row">
    <div class="col-12 md:col-7">
      <div
        class="flex flex-column justify-content-center align-items-start h-full md:w-9"
      >
        <h1
          class="text-xl md:text-4xl mb-4 flex align-items-center"
          v-html="title"
        />
        <ul class="pl-4">
          <li
            v-for="(content, index) in contents"
            :key="index"
            class="mb-3 text-xs md:text-sm"
          >
            {{ content }}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-12 md:col-5">
      <img class="w-full max-w-full" src="@/assets/header-image.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const title = ref(
  "Handmade  <span class='mx-3 text-xl opacity-50'> - International <span>"
);
const contents = ref([
  "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
  "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive.",
  "Sequi ducimus qui non mollitia est cupiditate sunt.",
]);
</script>
<style lang=""></style>
