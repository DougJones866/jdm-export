<script setup></script>

<template>
  <the-header />
  <div class="site-main-background" arai-hidden="true">
    <div class="imagebox">
      <img src="./assets/images/car1.png" alt="car" />
    </div>
  </div>
  <router-view />
  <!-- <home /> -->
  <the-footer class="footer" />
</template>

<style scoped>

.imagebox {
  position: absolute;
  right: 20%;
  top: 25%;
  
}
.imagebox img {
  height: 300px;
  width: auto;
  
  
}

@media (max-width: 500px) {
  .imagebox {
   top: 25%;
    left:0;
    right: 0;
  }

  .imagebox img{
    width: 100%;
    height:auto;
  margin: auto;
  display: block;
  }
}


</style>
