<template>
  <div class="introduction">
    <!-- tall mountains -->
    <img src="../assets/images/Tall-Mountain-2.webp" alt="" class="tall-mountain-2 intro-img">
    <img src="../assets/images/Tall-Mountain-1.webp" alt="" class="tall-mountain-1 intro-img">
    
    <!-- mountains -->
    <img src="../assets/images/Mountain-2.webp" alt="" class="mountain-2 intro-img">
    <img src="../assets/images/Mountain-1.webp" alt="" class="mountain-1 intro-img">

    <div class="intro-text">
      <p class="dev-position">FRONTEND DEVELOPER</p>
      <p class="name">JAN ROE BANTUAN</p>
    </div>
    
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
  transform: translateZ(-0.125px) scale(1.125);
  pointer-events: none;
}

.dev-position {
  position: absolute;
  color: #bfe8e0;
  font-size: 2rem;
  bottom: 24rem;
  right: 18.5%;
}

.name {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  position: absolute; 
  width: 1000px;
  text-align: right;
  line-height: 0.875;
  color: transparent;
  background-clip: text;
  font-size: 12rem;
  background-image: linear-gradient(to bottom, #bfe8e0, #3d484f);
  bottom: 3rem;
  right: 18%;
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
</style>