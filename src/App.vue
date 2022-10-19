<template>
  <h1> {{ getTitle() }}</h1>
  <input :type="inputType()"/>
</template>

<script setup lang="ts">

const inputType = () => {
  return 'number'
};

const getTitle = () => {
  return 'Hello World'
};

</script>

<style></style>
