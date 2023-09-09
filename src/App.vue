<script setup>
import { onMounted } from 'vue';
import NavigationBar from './components/NavigationBar.vue';
import IntroBlock from './components/IntroBlock.vue';
import AboutMe from './components/AboutMe.vue';
import TechStack from './components/TechStack.vue';
import MyProjects from './components/MyProjects.vue';
import ContactMe from './components/ContactMe.vue';

onMounted(() => {
  var wrapper = document.getElementsByClassName('wrapper')[0];
  var elements = document.querySelectorAll('.hideFromRight');
  var windowHeight = window.innerHeight;
  var visibility = window.innerHeight/4;

  wrapper.addEventListener('scroll', () => {
    for (var i = 0; i < elements.length; i++) {
      var yPosTop = elements[i].getBoundingClientRect().top;
      var yPosCenter = (elements[i].getBoundingClientRect().top + elements[i].getBoundingClientRect().bottom)/2;

      if (yPosCenter < windowHeight - visibility) {
        elements[i].classList.add('show');
      } else if (yPosTop > windowHeight) {
        elements[i].classList.remove('show');
      }
    }
  })
});
</script>

<template>
  <NavigationBar />
  <div class="wrapper">
    <IntroBlock />
    <div class="spacer-block gradient"></div>
    <AboutMe />
    <div class="spacer-block"></div>
    <TechStack />
    <div class="spacer-block"></div>
    <MyProjects />
    <div class="spacer-block"></div>
    <ContactMe />
  </div>
</template>

<style scoped>
.spacer-block {
  height: 100vh;
  background-color: #222222;
}

.gradient {
  background-image: linear-gradient(to bottom, #17232d, #222222);
}

.wrapper {
  height: calc(100vh - 3.75rem);
  overflow-y: auto;
  overflow-x: hidden;
  perspective: 1px;
  background-image: linear-gradient(to bottom, #8fbed0, white);
  scroll-behavior: smooth;
}
</style>