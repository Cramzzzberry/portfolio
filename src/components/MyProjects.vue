<script setup>
import { reactive } from 'vue';

const projectItems = reactive([
  {
    title: "Almost Material UI",
    imgsrc: "/almost-material.png",
    desc: "A Tailwind CSS Plugin heavily based on Material Design 3.",
    url: "https://cramzzzberry.github.io/almost-material/home",
  },
  {
    title: "WordX",
    imgsrc: "/wordx.png",
    desc: "A very basic online dictionary. Words are requested from Free Dictionary API.",
    url: "https://wordx.vercel.app/",
  },
]);
</script>

<template>
  <div class="mp-wrapper" id="my-projects">
    <div class="heading"><b>My Projects</b></div>
    <div class="project-list">
      <template v-for="(item, index) in projectItems" :key="item.title">
        <a :href="item.url" class="project-item" target="_blank">
          <img :src="item.imgsrc" class="project-img">
          <div class="project-description">
            <div class="title"><b>{{ item.title }}</b></div>
            <p>{{ item.desc }}</p>
          </div>
        </a>
        <hr v-if="index+1 != projectItems.length">
      </template>
    </div>
  </div>
</template>

<style scoped>
hr {
  width: 100%;
  border: 1px solid var(--gray-800);
  margin: 1rem 0;
}
.mp-wrapper {
  background-color: var(--gray-950);
  padding: 4rem 12rem;
}

.heading {
  font-size: 3rem;
  color: var(--primary-500);
  margin-bottom: 1rem;
}

.project-list {
  display: flex;
  flex-direction: column;

  & > .project-item {
    display: flex;
    flex-direction: row;

    & > .project-img {
      flex-shrink: 0;
      width: 426px;
      height: 240px;
      border-radius: 0.5rem;
      background-color: var(--primary-400);
    }

    & > .project-description {
      font-size: 1.25rem;
      padding: 1rem 6rem;
      width: calc(100% - 426px);

      & > .title {
        font-size: 1.75rem;
        margin-bottom: 1rem;
      }
    }
  }
}
</style>