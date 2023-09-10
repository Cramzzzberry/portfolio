<script setup>
import { ref, onMounted } from 'vue';

const tallMountain2 = ref(null);
const tallMountain1 = ref(null);
const mountain2 = ref(null);
const introText = ref(null);
const mountain1 = ref(null);
const tree2 = ref(null);
const tree1 = ref(null);

onMounted(() => window.addEventListener('scroll', () => {
  let scrollDis = window.scrollY;

  tallMountain2.value.style.top = scrollDis * 0.84 + 'px';
  tallMountain1.value.style.top = scrollDis * 0.68 + 'px';
  mountain2.value.style.top = scrollDis * 0.52 + 'px';
  introText.value.style.top = scrollDis * 0.44 + 'px';
  mountain1.value.style.top = scrollDis * 0.36 + 'px';
  tree2.value.style.top = scrollDis * 0.28 + 'px';
  tree1.value.style.top = scrollDis * 0.16 + 'px';
}))
</script>

<template>
  <div class="introduction">
    <!-- tall mountains -->
    <img ref="tallMountain2" src="../assets/images/Tall-Mountain-2.webp" alt="" class="tall-mountain-2 intro-img">
    <img ref="tallMountain1" src="../assets/images/Tall-Mountain-1.webp" alt="" class="tall-mountain-1 intro-img">
    
    <!-- mountains -->
    <img ref="mountain2" src="../assets/images/Mountain-2.webp" alt="" class="mountain-2 intro-img">

    <div ref="introText" class="intro-text">
      <p class="dev-position">FRONTEND DEVELOPER</p>
      <p class="name">JAN ROE BANTUAN</p>
    </div>

    <img ref="mountain1" src="../assets/images/Mountain-1.webp" alt="" class="mountain-1 intro-img">
    
    <!-- tree -->
    <img ref="tree2" src="../assets/images/Tree-2.webp" alt="" class="tree-2 intro-img">
    <img ref="tree1" src="../assets/images/Tree-1.webp" alt="" class="tree-1 intro-img">
  </div>
</template>

<style scoped>
.introduction {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to bottom, #8fbed0, white);
  z-index: -1;
}

.intro-img {
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.intro-text {
  position: absolute;
  width: 100%;
  height: 100%;
  font-weight: 900;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  color: #cdf5ee;
  filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.175));
}

.dev-position {
  font-size: 2rem;
  margin-left: 12rem;
}

.name {
  line-height: 0.8;
  font-size: 12rem;
  margin-left: 12rem;
}

@media only screen and (max-width: 1536px) {
  .name {
    font-size: 10rem;
  }
  .dev-position {
    font-size: 2rem;
  }
}

@media only screen and (max-width: 1280px) {
  .intro-text {
    width: 100%;
    height: 100%;
    align-items: center;
    text-align: center;
  }

  .dev-position {
    margin-left: 0;
  }

  .name {
    margin-left: 0;
  }
}

@media only screen and (max-width: 1024px) {

  .dev-position {
    font-size: 1.5rem;
  }

  .name {
    font-size: 8rem;
  }
}

@media only screen and (max-width: 768px) {

  .dev-position {
    font-size: 1.25rem;
  }

  .name {
    font-size: 6rem;
  }
}

@media only screen and (max-width: 640px) {

  .dev-position {
    font-size: 1rem;
  }

  .name {
    font-size: 4rem;
    width: 90%;
  }
}

@media only screen and (max-width: 480px) {
  .name {
    font-size: 3rem;
    width: 90%;
  }
}
</style>