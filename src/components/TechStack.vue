<template>
  <div class="ts-wrapper" id="tech-stack">
    <div class="hideFromRight">
      <span class="heading"><b>My Tech Stack</b></span>

      <div class="table">
        <div>
          <h2>Frontend Frameworks</h2>
          <ul>
            <li>
              <i class="ci ci-angular ci-2x"></i>
              Angular
            </li>
            <li>
              <i class="ci ci-vuejs ci-2x"></i>
              Vue.js
            </li>
            <li>
              <i class="ci ci-nextjs ci-2x"></i>
              Next.js
            </li>
          </ul>
        </div>
        <div>
          <h2>CSS Frameworks</h2>
          <ul>
            <li>
              <i class="ci ci-tailwindcss ci-2x"></i>
              Tailwind CSS
            </li>
            <li>
              <i class="ci ci-bootstrap ci-2x"></i>
              Bootstrap
            </li>
          </ul>
        </div>
      </div>

      <div class="others">
        <h2>Others</h2>
        <div class="xl">
          <i class="ci ci-html ci-3x"></i>
          <i class="ci ci-css ci-3x"></i>
          <i class="ci ci-js ci-3x"></i>
          <i class="ci ci-ts ci-3x"></i>
          <i class="ci ci-react ci-3x"></i>
          <i class="ci ci-git ci-3x"></i>
        </div>
        <div class="sm">
          <i class="ci ci-html ci-2x"></i>
          <i class="ci ci-css ci-2x"></i>
          <i class="ci ci-js ci-2x"></i>
          <i class="ci ci-ts ci-2x"></i>
          <i class="ci ci-react ci-2x"></i>
          <i class="ci ci-git ci-2x"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ts-wrapper {
  background-color: #222222;
  height: calc(200vh - 3.75rem);
  padding: 0 12rem;

  & > div {
    position: sticky;
    top: 3.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 3.75rem);
  }
}

ul {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;

  & > li {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.25rem;
    gap: 1rem
  }
}

.table {
  display: flex;
  flex-direction: row;
  width: 80%;
  
  & > div {
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
    align-items: center;
    justify-content: start;

    & > h2 {
      text-align: center;
    }
  }
}

.others {
  text-align: center;
  
  & > div {
    padding: 0 4rem;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;

    &.xl {
      display: flex;
    }

    &.sm {
      display: none;
    }
  }
}

.heading {
  text-align: center;
  font-size: 3rem;
  color: #1eab6a;
}

@media only screen and (max-width: 1280px) {
  .ts-wrapper {
    padding: 0 5rem;
  }
}

@media only screen and (max-width: 1024px) {
  h2 {
    margin: 0.75rem 0;
    font-size: 1.25rem;
  }
  
  .ts-wrapper {
    & > div {
      gap: 1rem;
    }
  }
  
  .table {
    flex-direction: column;
    width: 100%;
    gap: 1rem;
  
    & > div {
      padding: 0;
    }
  }

  .others {
    & > div {
      &.xl {
        display: none;
      }

      &.sm {
        display: flex;
      }
    }
  }
  .heading {
    font-size: 2rem;
  }

  ul {
    & > li {
      font-size: 1rem;
    }
  }
}

@media only screen and (max-width: 768px) {

  .others {
    text-align: center;
    
    & > div {
      padding: 0 4rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;
    }
  }
}

@media only screen and (max-width: 640px) {

  .ts-wrapper {
    height: fit-content;
    padding: 4rem 2rem;

    & > div {
      position: static;
      top: 0;
      min-height: calc(100vh - 3.75rem - 8rem);
      height: fit-content;
    }
  }

  .others {
    text-align: center;
    
    & > div {
      padding: 0 4rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;
    }
  }
}
</style>