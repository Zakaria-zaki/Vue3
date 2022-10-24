<template>
    <h1> Hello {{ user.name  }}</h1>
    <h2> Count: {{ state.count }} </h2>
    <button @click="add">Add</button>
</template>

<script setup lang="ts">
import { nextTick, reactive } from 'vue';

const state  = reactive({
    user: {
        name: 'zakaria',
        age: 25
    },
    count: 0
})

let { user } = state

const add = () => {
    user.name = user.name === 'zakaria' ? 'Salim' : 'zakaria' 
    state.count++;
    nextTick(() => {
        console.log('tick');
    })
}


</script>

<style></style>
 