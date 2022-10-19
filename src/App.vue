<template>
  <form @submit.prevent="submit()">
  <button>Submit</button>
  </form>

  <input @keyup.enter="mykeyup()"/>
</template>

<script setup lang="ts">

const submit = () => {
  console.log('submit')
}

const mykeyup = () => {
  console.log('mykeyup')
}

</script>

<style></style>
