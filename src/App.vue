<template>
  <h1 :class="h1Title" :id="unid">Bonjour monde !</h1>
  <h1 v-bind="obj" >Bonjour monde 2 !</h1>
  <input :type="inputType"/>
</template>

<script setup lang="ts">

const h1Title = 'montitre2';
const unid = 'monid';
const key = 'class';
const inputType = 'date';


const obj = {
  'class': h1Title,
  'id': unid
}

</script>

<style></style>
