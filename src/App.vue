<template>
    <h2> Count: {{ count }} </h2>
    <h2> Count for Ref: {{ countRef }} </h2>
    <button @click="add">Add</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';

const count = ref(0);

const countRef = ref(0);

const add = () => {
    count.value++;
}

const getRef = (num: Ref<number>) => {
    num.value++;
}

getRef(countRef);


</script>

<style></style>
 