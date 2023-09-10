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

  var windowHeight = window.innerHeight;
  var visibility = (window.innerHeight/4) * 3;

  function isInView(value) {
    return value < windowHeight - visibility && value > -windowHeight/2
  }
  
  window.addEventListener('scroll', () => {
    let aboutMeContentY = aboutMeContent.getBoundingClientRect().top;
    let techStackContentY = techStackContent.getBoundingClientRect().top;
    let myProjectsContentY = myProjectsContent.getBoundingClientRect().top;
    let contactMeContentY = contactMeContent.getBoundingClientRect().top;

    if (isInView(aboutMeContentY)) {
      aboutMeLink.classList.add('active');
    } else {
      aboutMeLink.classList.remove('active');
    }

    if (isInView(techStackContentY)) {
      techStackLink.classList.add('active');
    } else {
      techStackLink.classList.remove('active');
    }

    if (isInView(myProjectsContentY)) {
      myProjectsLink.classList.add('active');
    } else {
      myProjectsLink.classList.remove('active');
    }

    if (isInView(contactMeContentY)) {
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
    <ul class="links">
      <li v-for="link in navLinks" :key="link.id">
        <a :href="link.url" :id="link.id">{{ link.text }}</a>
      </li>
    </ul>

    <label class="drawer-btn" for="drawer">
      <span class="material-icons">menu</span>
    </label>

    <!-- drawer -->
    <input type="checkbox" id="drawer">
    <label class="drawer-container" for="drawer">
      <ul class="drawer">
        <li v-for="link in navLinks" :key="link.id">
          <a :href="link.url" :id="link.id">{{ link.text }}</a>
        </li>
      </ul>
    </label>
  </div>
</template>

<style scoped>
ul, ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

.drawer-container {
  display: none;
  visibility: hidden;
  position: absolute;
  top: 3.75rem;
  right: 0;
  z-index: 1;
  width: 100vw;
  height: calc(100vh - 3.75rem);
  max-width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-x: hidden;
  opacity: 0;
  transition: 300ms opacity cubic-bezier(0.4, 0, 0.2, 1), 0ms visibility 300ms;
}
ul.drawer {
  font-size: 2rem;
  font-weight: 600;
  position: absolute;
  right: calc(26rem * -1);
  width: calc(26rem - 8rem);
  height: calc(100vh - 3.75rem - 8rem);
  padding: 4rem;
  background-color: var(--gray-950);

  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: 300ms right cubic-bezier(0.4, 0, 0.2, 1);
}

input[type='checkbox']#drawer {
  top: -10rem;
  position: absolute;

  &:checked+.drawer-container {
    opacity: 1;
    visibility: visible;
    transition: 300ms opacity cubic-bezier(0.4, 0, 0.2, 1), 0ms visibility 0ms;
    & > .drawer {
      right: 0%;
    }
  }
}

.drawer-btn {
  display: none;
  align-items: center;
  justify-content: center;
  margin: 0.25rem 0;
  color: var(--gray-400);
  transition: 150ms color;
  cursor: pointer;

  &:hover {
    color: var(--gray-200);
  }
}

.navbar {
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 12rem;
  border-bottom: 1px solid var(--gray-800);
  background-color: var(--gray-950);
  height: calc(3.75rem - 2rem);
  z-index: 1;
  width: calc(100% - 24rem);

  & > ul.links {
    display: flex;
    flex-direction: row;

    & > li > a {
      display: block;
      margin: 0.25rem 1rem;

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
    width: calc(100% - 10rem);
  }
}

@media only screen and (max-width: 768px) {
  .drawer-btn {
    display: flex;
  }

  .drawer-container {
    display: block;
  }

  .navbar {
    padding: 1rem 2rem;
    width: calc(100% - 4rem);

    & > ul.links {
      display: none;
    }
  }
}

@media only screen and (max-width: 640px) {
  ul.drawer {
    width: calc(100vw - 8rem);
  }
}
</style>
