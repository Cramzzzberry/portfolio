<script setup>
import { onMounted, reactive } from 'vue';

const navLinks = reactive([
  {
    text: "About Me",
    url: "#about-me",
    id: "about-me-link",
  },
  {
    text: "Tech Stack",
    url: "#tech-stack",
    id: "tech-stack-link",
  },
  {
    text: "My Projects",
    url: "#my-projects",
    id: "my-projects-link",
  },
  {
    text: "Contact Me",
    url: "#contact-me",
    id: "contact-me-link",
  },
]);

onMounted(() => {
  var aboutMeContent = document.getElementById('about-me');
  var aboutMeLink = document.getElementById('about-me-link');
  var techStackContent = document.getElementById('tech-stack');
  var techStackLink = document.getElementById('tech-stack-link');
  var myProjectsContent = document.getElementById('my-projects');
  var myProjectsLink = document.getElementById('my-projects-link');
  var contactMeContent = document.getElementById('contact-me');
  var contactMeLink = document.getElementById('contact-me-link');

  var wrapper = document.getElementsByClassName('wrapper')[0];
  var windowHeight = window.innerHeight;
  var visibility = window.innerHeight/4;
  
  wrapper.addEventListener('scroll', () => {
    let aboutMeContentY = (aboutMeContent.getBoundingClientRect().top + aboutMeContent.getBoundingClientRect().bottom)/2;
    let techStackContentY = (techStackContent.getBoundingClientRect().top + techStackContent.getBoundingClientRect().bottom)/2;
    let myProjectsContentY = (myProjectsContent.getBoundingClientRect().top + myProjectsContent.getBoundingClientRect().bottom)/2;
    let contactMeContentY = (contactMeContent.getBoundingClientRect().top + contactMeContent.getBoundingClientRect().bottom)/2;

    if (aboutMeContentY < windowHeight - visibility && aboutMeContentY > -windowHeight) {
      aboutMeLink.classList.add('active');
    } else {
      aboutMeLink.classList.remove('active');
    }

    if (techStackContentY < windowHeight - visibility && techStackContentY > -windowHeight) {
      techStackLink.classList.add('active');
    } else {
      techStackLink.classList.remove('active');
    }

    if (myProjectsContentY < windowHeight - visibility && myProjectsContentY > -windowHeight) {
      myProjectsLink.classList.add('active');
    } else {
      myProjectsLink.classList.remove('active');
    }

    if (contactMeContentY < windowHeight - visibility && contactMeContentY > -windowHeight) {
      contactMeLink.classList.add('active');
    } else {
      contactMeLink.classList.remove('active');
    }
  })
});
</script>

<template>
  <div class="navbar">
    <a href="https://github.com/Cramzzzberry" target="_blank" class="github-button">
      <font-awesome-icon icon="fa-brands fa-github" />
      <span>GitHub</span>
    </a>
    <ul>
      <li v-for="link in navLinks" :key="link.id">
        <a :href="link.url" :id="link.id">{{ link.text }}</a>
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
  height: calc(3.75rem - 2rem);

  & > ul {
    display: flex;
    flex-direction: row;

    & > li > a {
      display: block;
      padding: 0.25rem 1rem;

      &.active {
        color: var(--gray-200);
      }
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

@media only screen and (max-width: 1280px) {
  .navbar {
    padding: 1rem 5rem;
  }
}

@media only screen and (max-width: 768px) {
  .navbar {
    padding: 1rem 2rem;

    & > ul {
      display: none;
    }
  }
}
</style>
