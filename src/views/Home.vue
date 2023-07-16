<template>
  <div class="banner">
    <div class="bannerimg">
      <img src="../assets/images/car.png" />
    </div>
    <h1>JDM EXPORTORS</h1>
    <p>
      At jdmexporters, we take immense pride in being a leading exporter of
        Japanese Domestic Market (JDM) cars to destinations across the globe.
        With a passion for automobiles and a commitment to excellence, we offer
        a comprehensive range of JDM vehicles that embody the spirit of Japanese
        engineering, style, and innovation.
    </p>
  </div>

  <div id="serif">
    <div class="services">
      <h2>Services</h2>
      <p>
        At jdmexporters, we take immense pride in being a leading exporter of
        Japanese Domestic Market (JDM) cars to destinations across the globe.
        With a passion for automobiles and a commitment to excellence, we offer
        a comprehensive range of JDM vehicles that embody the spirit of Japanese
        engineering, style, and innovation.
      </p>
    </div>

    <div class="font-card garamond">
      <h2>Placeholder</h2>
      
    </div>
  </div>

  <!-- <div id="projects">
    <div class="editorial">
      <h2>Placeholder</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>

    <div class="font-card helvetica">
      <h2>Projects</h2>
      <h5 class="creator">List of Projects</h5>
    </div>
  </div> -->

  <div id="contact">
    <div class="editorial">
      <h2>Placeholder</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>

    <div class="font-card space">
      
      <ContactForm />
    </div>
  </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue'

export default {
  components: {ContactForm},
};
</script>

<style scoped>
.banner {
  position: relative;
  overflow: hidden;
  z-index: -2;
}
h1,
p {
  color: white;
}

.bannerimg {
  position: absolute;
  z-index: -1;
  right: 5%;
}
.bannerimg img {
  height: 300px;
}

.services p {
  color:black;
}

/* Banner Section */
</style>
