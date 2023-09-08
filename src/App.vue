<script>
import NavigationBar from './components/NavigationBar.vue';
import IntroBlock from './components/IntroBlock.vue';

export default {
  components: {
    NavigationBar,
    IntroBlock
  }
}
</script>

<template>
  <NavigationBar />
  <div class="wrapper bg-gradient-to-b from-[#8fbed0] to-white">
    <IntroBlock />
    <div class="h-screen bg-gradient-to-b from-[#17242d] to-gray-950">
    </div>
    <div class="h-[calc(100vh-3.563rem)] bg-gray-950">
      <span>Hello Again</span>
    </div>
  </div>
</template>