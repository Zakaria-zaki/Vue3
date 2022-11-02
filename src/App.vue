<template>
    <ul>
        <li v-for="(fruit, index) in fruits">{{ fruit }} : {{ index }}</li>
    </ul>
    <ul>
        <li v-for="({ name }, index) in users">{{ name }} : {{ index }}</li>
    </ul>

</template>

<script setup lang="ts">
import { reactive } from 'vue';


const fruits = reactive([ 'fraises', 'pommes', 'kiwis', 'bananes' ]);
const users = reactive([
    { name: 'zakaria' },
    { name: 'hocine' },
    { name: 'test' },
    { name: 'test 2' },
]);

</script>

<style scoped lang="scss"
></style>
 