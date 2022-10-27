<template>
    <button @click="Add()">+</button>
    <h1 :style="{
        fontSize: fontSize + 'px'
    }">Bonjour Zakaria </h1>
    <button @click="min()">-</button>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const fontSize = ref(10)

const Add = () => fontSize.value += 10

const min = () => fontSize.value -= 10
</script>

<style scoped>
</style>
 