<template>
  <div class="banner">
    <div class="bannerimg">
      <img src="../assets/images/car.png" />
    </div>
    <h1>JDM EXPORTORS</h1>
    <p>
      At jdmexporters, we take immense pride in being a leading exporter of
      Japanese Domestic Market (JDM) cars to destinations across the globe. With
      a passion for automobiles and a commitment to excellence, we offer a
      comprehensive range of JDM vehicles that embody the spirit of Japanese
      engineering, style, and innovation.
    </p>
  </div>

  <div id="services">
    <div class="card">
      <h2>Services</h2>
      <p>
        At jdmexporters, we take immense pride in being a leading exporter of
        Japanese Domestic Market (JDM) cars to destinations across the globe.
        With a passion for automobiles and a commitment to excellence, we offer
        a comprehensive range of JDM vehicles that embody the spirit of Japanese
        engineering, style, and innovation.
      </p>
    </div>
  </div>

  <div id="placeholderblock">
    <div class="card">
      <h2>Placeholder</h2>
    </div>
  </div>

  <div id="info">
    <div class="card">
      <h2>Title</h2>
      <p>
        Our team of dedicated professionals works tirelessly to ensure that each
        exported JDM car meets the highest standards of quality, reliability,
        and authenticity. We have established strong partnerships with trusted
        suppliers and dealerships in Japan, allowing us to source meticulously
        inspected and well-maintained vehicles. Through rigorous quality control
        processes, we verify the authenticity of each vehicle's documentation,
        ensuring our customers receive genuine JDM cars.
      </p>
    </div>
  </div>
  <div id="contact">
    <div class="contactForm">
      <ContactForm />
    </div>
  </div>
</template>

<script>
import ContactForm from "../components/ContactForm.vue";

export default {
  components: { ContactForm },
};
</script>

<style scoped>
.banner {
  margin-top: 74px;
  padding: 40px 0 100px 0;
  position: relative;
  overflow: hidden;
  z-index: -2;
  background-color: #4d00ff;
}

.banner p {
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  color: #ffffff;
  font-weight: lighter;
  word-spacing: 0.25em;
  line-height: 1.4;
  background-color: rgba(0, 0, 0, 0.4);
}

.bannerimg {
  position: absolute;
  z-index: -1;
  right: 5%;
}
.bannerimg img {
  max-height: 300px;
  max-width: auto;
}

#contact {
  padding-bottom: 50px;
}

#info,
#services {
  background-color: white;
}

/* Banner Section */

@media only screen and (max-width: 500px) {
  .bannerimg img {
    max-width: 100%;
    max-height: auto;
  }
}
</style>
