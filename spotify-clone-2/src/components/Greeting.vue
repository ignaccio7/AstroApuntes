<template>
  <!-- NOTA:
  Esto aunque esta en Vue esta funcionando como un ReactServerComponent
  si quisieramos que se renderize y tenga funciones en el cliente tendriamos que usar la directiva -->
  <div>
    <h1 class="text-4xl pt-6 pb-2 text-white font-bold">
      {{ greeting }}
    </h1>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const greeting = ref('')
const currentHour = ref()

onMounted(() => {
  const currentTime = new Date()
  currentHour.value = currentTime.getHours()
})

if (currentHour < 12) {
  greeting.value = 'Buenos dias'
} else if (greeting < 18) {
  greeting.value = 'Buenas tardes'
} else {
  greeting.value = 'Buenas noches'
}

</script>

<style scoped></style>