<template>
  <div class="am-wrapper" id="about-me">
    <div class="hideFromRight">
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--gray-950);
  min-height: calc(100vh - 3.75rem);
  padding: 0 12rem;
  font-size: 1.5rem;

  & > div > span:first-child {
    font-size: 3rem;
    color: var(--primary-500);
  }
}

.tagline {
  font-weight: 900;
  font-size: 5rem;
}
</style>