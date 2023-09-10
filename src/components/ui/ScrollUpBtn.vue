<script setup>
import { onMounted, ref } from 'vue';

const btn = ref(null);

function scrollUp() {
  window.scrollTo(0, 0);
}

onMounted(() => {
  var windowHeight = window.innerHeight;
  var aboutMeContent = document.getElementById('about-me');

  window.addEventListener("scroll", () => {
    let aboutMeContentY = aboutMeContent.getBoundingClientRect().top;

    if (aboutMeContentY < windowHeight/2) {
      btn.value.classList.add('active');
    } else {
      btn.value.classList.remove('active');
    }
  });
});
</script>

<template>
  <button @click="scrollUp" ref="btn">
    <span class="material-icons">expand_less</span>
  </button>
</template>

<style scoped>
button {
  background-color: var(--gray-800);
  border: none;
  border-radius: 0.625rem;
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  color: var(--gray-200);
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  opacity: 0;
  transition: 75ms background-color, 150ms opacity;

  & > span {
    font-size: 2rem;
  }

  &:hover {
    background-color: var(--gray-900);
  }

  &.active {
    opacity: 1;
  }
}
</style>