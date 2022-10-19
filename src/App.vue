<template>
  <h1 @click="mgs" >Hello Monde</h1>()
  <input type="text" @input="count++" />
</template>

<script setup lang="ts">

let count = 0;

const mgs = (event: MouseEvent) => {
  console.log('Hello World', event)
}

const userEnter = () => {
  console.log('User Enter')
}

const userInput = (event: Event, test: string) => {
  const target = event.target as HTMLInputElement;
  target.value = 'zakaria'

  console.log(test)
}

</script>

<style></style>
