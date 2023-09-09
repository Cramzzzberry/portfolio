<script setup>
import { reactive } from 'vue';

const navLinks = reactive([
  {
    text: "About Me",
    url: "#about-me",
  },
  {
    text: "Tech Stack",
    url: "#tech-stack",
  },
  {
    text: "My Projects",
    url: "#my-projects",
  },
  {
    text: "Contact Me",
    url: "#contact-me",
  },
]);
</script>

<template>
  <div class="navbar">
    <a href="https://github.com/Cramzzzberry" target="_blank" class="github-button">
      <font-awesome-icon icon="fa-brands fa-github" />
      GitHub
    </a>
    <ul>
      <li v-for="link in navLinks" :key="link.text">
        <a :href="link.url">{{ link.text }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul, ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 12rem;
  border-bottom: 1px solid var(--gray-800);
  background-color: var(--gray-950);

  & > ul {
    display: flex;
    flex-direction: row;

    & > li > a {
      display: block;
      padding: 0.25rem 1rem;
    }
  }
}

.github-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}

.fa-github {
  font-size: 1.25rem;
}
</style>
