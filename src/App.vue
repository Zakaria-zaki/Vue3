<template>
    <input v-model="toggle" type="text"/>
    <h1 v-show="toggle"> Hellooo</h1>

    <h2 v-pre> {{ toogle }}</h2>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const toggle = ref('')
</script>

<style scoped lang="scss"
></style>
 