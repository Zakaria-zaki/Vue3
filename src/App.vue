<template>
    <div v-if="state.user">
        <h1>Profile:</h1>
        <ul>
            <li>Name: {{ state.user.name }}</li>
            <li>Age: {{ state.user.age }}</li>
        </ul>
    </div>
    <div v-else>
        <h1>Chargement ...</h1>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const state = reactive<any>({})

setTimeout(() => {
    state.user = {
        name: 'zakaria',
        age: 24
    }
}, 2000)

</script>

<style scoped lang="scss"
></style>
 