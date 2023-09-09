<template>
  <div class="ts-wrapper" id="tech-stack">
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
      <div>
        <i class="ci ci-html ci-4x"></i>
        <i class="ci ci-css ci-4x"></i>
        <i class="ci ci-js ci-4x"></i>
        <i class="ci ci-ts ci-4x"></i>
        <i class="ci ci-react ci-4x"></i>
        <i class="ci ci-git ci-4x"></i>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ts-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #222222;
  min-height: calc(100vh - 3.75rem - 8rem);
  padding: 4rem 12rem;
}

ul {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.75rem;
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
    padding: 2rem 4rem;
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
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
  }
}

.heading {
  text-align: center;
  font-size: 3rem;
  color: #1eab6a;
}
</style>