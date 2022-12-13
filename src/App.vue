<template>
    <h1> {{ seconds }}</h1>
    <h1> {{ totalIdelTime }}</h1>

    <h2 v-if="isloading"> LOADING ... </h2>
    <ul v-for="todo in todos">
        <ul v-for="i in todo">
            <li> {{ i }} </li>
        </ul>
    </ul>
    <div> {{ errors }} </div>
</template>

<script setup lang="ts">
import { getIdelTime } from './total-idel-time';
import { useFetchTodo } from './user.service';

const {seconds, totalIdelTime} = getIdelTime();
const {todos, isloading, errors  } = useFetchTodo();
</script>

<style scoped lang="scss"
></style>
 