<template>
  <div class="introduction">
    <!-- tall mountains -->
    <img src="../assets/images/Tall-Mountain-2.webp" alt="" class="tall-mountain-2 intro-img">
    <img src="../assets/images/Tall-Mountain-1.webp" alt="" class="tall-mountain-1 intro-img">
    
    <!-- mountains -->
    <img src="../assets/images/Mountain-2.webp" alt="" class="mountain-2 intro-img">

    <div class="intro-text">
      <p class="dev-position">FRONTEND DEVELOPER</p>
      <p class="name">JAN ROE BANTUAN</p>
    </div>

    <img src="../assets/images/Mountain-1.webp" alt="" class="mountain-1 intro-img">
    
    <!-- tree -->
    <img src="../assets/images/Tree-2.webp" alt="" class="tree-2 intro-img">
    <img src="../assets/images/Tree-1.webp" alt="" class="tree-1 intro-img">
  </div>
</template>

<style scoped>
.introduction {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  z-index: -1;
  transform-style: preserve-3d;
}

.intro-img {
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.intro-text {
  position: absolute;
  width: 100%;
  height: 100%;
  font-weight: 900;
  transform: translateZ(-0.77px) scale(1.81);
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  color: #c0e8e1;
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
}

.dev-position {
  font-size: 2rem;
  margin-left: 12rem;
}

.name {
  line-height: 0.8;
  font-size: 12rem;
  margin-left: 12rem;
}

.tree-1 {
  transform: translateZ(0) scale(1.01);
}

.tree-2 {
  transform: translateZ(-0.25px) scale(1.26);
}

.mountain-1 {
  transform: translateZ(-0.75px) scale(1.76);
}

.mountain-2 {
  transform: translateZ(-1.25px) scale(2.26);
}

.tall-mountain-1 {
  transform: translateZ(-1.5px) scale(2.51);
}

.tall-mountain-2 {
  transform: translateZ(-2.25px) scale(3.26);
}

@media only screen and (max-width: 1536px) {
  .name {
    font-size: 10rem;
  }
  .dev-position {
    font-size: 2rem;
  }
}

@media only screen and (max-width: 1280px) {
  .intro-text {
    width: 100%;
    height: 100%;
    align-items: center;
    text-align: center;
  }

  .dev-position {
    font-size: 2rem;
    margin-left: 0;
  }

  .name {
    line-height: 0.875;
    font-size: 12rem;
    margin-left: 0;
  }
}

@media only screen and (max-width: 1024px) {

  .dev-position {
    font-size: 1.5rem;
  }

  .name {
    font-size: 8rem;
  }
}

@media only screen and (max-width: 768px) {

  .dev-position {
    font-size: 1.25rem;
  }

  .name {
    font-size: 6rem;
  }
}

@media only screen and (max-width: 640px) {

  .dev-position {
    font-size: 1rem;
  }

  .name {
    font-size: 4rem;
    width: 90%;
  }
}

@media only screen and (max-width: 480px) {
  .name {
    font-size: 3rem;
    width: 90%;
  }
}
</style>