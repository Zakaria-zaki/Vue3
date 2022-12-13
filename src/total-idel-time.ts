import { onMounted, onUnmounted, ref } from 'vue';

export const getIdelTime = () => {
const seconds = ref(0);
const totalIdelTime = ref(0);

setInterval(() => {
    seconds.value++;
}, 1000);

const mouseMouve = (event: MouseEvent) => {
    totalIdelTime.value += seconds.value;
    seconds.value = 0;
}

onMounted(() => window.addEventListener('mousemove', mouseMouve));
onUnmounted(() => window.removeEventListener('mousemove', mouseMouve));

return {
    seconds,
    totalIdelTime
}
}