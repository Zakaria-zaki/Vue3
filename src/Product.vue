<template>
    <h1>{{ title }}</h1>
    <h2>{{ product.prix }}</h2>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface ProductInterface{
    available: boolean;
    prix: number;
    name: string;
}

const props = defineProps<{ product: ProductInterface }>();

const title = computed(() => props.product.name.toUpperCase());

</script>