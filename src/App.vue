<template>
    <input type="number" v-model="product.quantity" />
    <h2>Prix HT: {{ prixHT }}</h2>
    <h2>Prix TTC: {{ prixTTC }}</h2>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';


const product = reactive({
    name: 'Book',
    quantity: 3,
    priceHT: 10
});

const prixHT = computed(() => product.priceHT * product.quantity)

const prixTTC = computed(() => product.priceHT * product.quantity * 1.2 )

</script>

<style></style>
 