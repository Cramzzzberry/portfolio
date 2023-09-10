<template>
  <div class="am-wrapper">
    <div class="hideFromRight" id="about-me">
      <span><b>Hello!</b></span>
      <div>
        <p>I am Jan Roe Bantuan, a frontend web developer. I create</p>
        <p class="tagline">SIMPLE BUT IMPACTFUL DESIGN.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.am-wrapper {
  background-color: var(--gray-950);
  min-height: calc(200vh - 3.75rem);
  padding: 0 12rem;
  font-size: 1.5rem;

  & > div {
    position: sticky;
    top: 3.75rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: calc(100vh - 3.75rem);

    & > span:first-child {
      font-size: 3rem;
      color: var(--primary-500);
    }
  }
}

.tagline {
  font-weight: 900;
  font-size: 5rem;
}

@media only screen and (max-width: 1280px) {
  .am-wrapper {
    padding: 0 5rem;
  }
}

@media only screen and (max-width: 1024px) {
  .am-wrapper {
    font-size: 1.25rem;

    & > div {
      & > span:first-child {
        font-size: 2rem;
      }
    }
  }
  .tagline {
    font-weight: 900;
    font-size: 4rem;
  }
}

@media only screen and (max-width: 768px) {
  .am-wrapper {
    padding: 0 2rem;
  }
  .tagline {
    font-weight: 900;
    font-size: 3rem;
  }
}

@media only screen and (max-width: 640px) {
  .am-wrapper {
    text-align: center;
    font-size: 1rem;
    min-height: fit-content;

    & > div {
      position: static;
      top: 0;
      min-height: calc(100vh - 3.75rem - 8rem);
      height: fit-content;
    }
  }
  .tagline {
    font-weight: 900;
    font-size: 2rem;
  }
}
</style>