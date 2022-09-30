<template>
  <div
    class="d-flex flex-column align-items-center justify-content-center mt-4"
  >
    <div class="spinner-border text-primary text-center" role="status"></div>
    <p>{{ text }}</p>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
  },
});
</script>
