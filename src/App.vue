<template>
    <input type="number" v-model="product.quantity" />
    <h2>Prix HT: {{ prixHT }}</h2>
    <h2>Prix TTC: {{ prixTTC }}</h2>
</template>

<script setup lang="ts">
import { computed, reactive, watch } from 'vue';


const product = reactive({
    name: 'Book',
    quantity: 3,
    priceHT: 10,
    nbOfModification: 0
});

const prixHT = computed(() => product.priceHT * product.quantity)
const prixTTC = computed(() => product.priceHT * product.quantity * 1.2 )

const unwatch = watch(() => product.quantity, (new1, old) => {
    product.nbOfModification++;
    console.log(new1);
    console.log(old);
})

</script>

<style></style>
 