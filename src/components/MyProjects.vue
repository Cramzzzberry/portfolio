<script setup>
import { reactive } from 'vue';
import almostMaterialImg from '@/assets/images/projects/almost-material.png';
import wordxImg from '@/assets/images/projects/wordx.png';

const projectItems = reactive([
  {
    title: "Almost Material UI",
    imgsrc: almostMaterialImg,
    desc: "A Tailwind CSS Plugin heavily based on Material Design 3.",
    url: "https://cramzzzberry.github.io/almost-material/home",
  },
  {
    title: "WordX",
    imgsrc: wordxImg,
    desc: "A very basic online dictionary. Words are requested from Free Dictionary API.",
    url: "https://wordx.vercel.app/",
  },
]);
</script>

<template>
  <div class="mp-wrapper">
    <div class="hideFromRight" id="my-projects">
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
  </div>
</template>

<style scoped>
hr {
  width: 100%;
  border: 1px solid var(--gray-800);
  margin: 1rem 0;
}

.mp-wrapper {
  min-height: calc(200vh - 8rem - 3.75rem);
  background-color: var(--gray-950);
  padding: 4rem 12rem;

  & > div {
    position: sticky;
    top: 3.75rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: calc(100vh - 3.75rem);
  }
}

.heading {
  font-size: 3rem;
  color: var(--primary-500);
}

.project-list {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  & > .project-item {
    display: flex;
    flex-direction: row;
    align-items: center;

    & > .project-img {
      flex-shrink: 0;
      width: 426px;
      height: 240px;
      border-radius: 0.5rem;
      object-fit: cover;
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

@media only screen and (max-width: 1366px) {
  .project-list {
    & > .project-item {
      & > .project-img {
        width: 360px;
        height: 180px;
      }
    }
  }
}

@media only screen and (max-width: 1280px) {
  .mp-wrapper {
    padding: 4rem 5rem;
  }
}

@media only screen and (max-width: 1024px) {
  .heading {
    font-size: 2rem;
  }

  .project-list {
    & > .project-item {
      & > .project-img {
        width: 240px;
        height: 160px;
      }

      & > .project-description {
        width: 100%;
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  hr {
    display: none;
  }

  .mp-wrapper {
    padding: 4rem 2rem;

    & > div {
      align-items: center;
      gap: 1rem;
    }
  }

  .heading {
    font-size: 2rem;
  }

  .project-list {
    & > .project-item {
      flex-direction: column;
      text-align: center;

      & > .project-img {
        width: 240px;
        height: 160px;
      }

      & > .project-description {
        font-size: 1rem;
        width: 100%;

        & > .title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
      }
    }
  }
}

@media only screen and (max-width: 640px) {
  .mp-wrapper {
    padding: 4rem 2rem;
    height: fit-content;

    & > div {
      position: static;
      top: 0;
      min-height: calc(100vh - 3.75rem - 8rem);
      height: fit-content;
    }
  }

  .heading {
    font-size: 2rem;
  }

  .project-list {
    & > .project-item {
      flex-direction: column;
      text-align: center;

      & > .project-img {
        width: 240px;
        height: 160px;
      }

      & > .project-description {
        font-size: 1rem;
        width: 100%;

        & > .title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
      }
    }
  }
}
</style>