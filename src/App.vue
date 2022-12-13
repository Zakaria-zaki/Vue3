<template>
    <Product :product="product"/> 
</template>

<script setup lang="ts">
import Product from './Product.vue'
import { reactive } from 'vue';

const product = reactive({
    available: true,
    prix: 1500,
    name: "Voiture"
})


</script>

<style></style>
 