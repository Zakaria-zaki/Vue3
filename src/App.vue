<template>
  <div>
    <h1>My App</h1>
    <h1> {{ user.age }}</h1>
  </div>
</template>

<script setup lang="ts">

interface User {
  name: string;
  age: number;
}

let user: User;

const createUser = (name: string): User => {
  return {
    name,
    age: 24
  }
}

user = createUser('zakaria');

</script>

<style></style>
