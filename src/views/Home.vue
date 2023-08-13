<template>
  <div id="app">
    <main role="main" class="site-main">
      <header aria-labelledby="page-title" class="clearfix site-main-header">
        <div class="container">
          <div class="textbox">
            <h1 id="page-title"><span class="logo1">JDM</span> Exportors</h1>
            <p class="col-1-2">
              At <strong>jdmexporters</strong>, we take immense pride in being a
              leading exporter of
              <strong>Japanese Domestic Market (JDM)</strong> cars to
              destinations across the globe. With a passion for automobiles and
              a commitment to excellence, we offer a comprehensive range of JDM
              vehicles that embody the spirit of Japanese engineering, style,
              and innovation.
            </p>
          </div>
        </div>
      </header>
    </main>
    <section role="region" class="site-main-section">
      <div class="container">
        <div class="card">
          <div class="clearfix">
            <div class="col-1-2">
              <p>
                Our team of dedicated professionals works tirelessly to ensure
                that each exported JDM car meets the highest standards of
                quality, reliability, and authenticity. 
                <br>
                <br>
                We have established
                strong partnerships with trusted suppliers and dealerships in
                Japan, allowing us to source meticulously inspected and
                well-maintained vehicles. Through rigorous quality control
                processes, we verify the authenticity of each vehicle's
                documentation, ensuring our customers receive genuine JDM cars.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.logo1 {
  color: red;
}

/* .container {
  position:relative;
  background-color:red;
} */

/* .container img {
  z-index: -1;
  height: 300px;
  width: auto;
} */

@media (max-width: 500px) {
  .container .textbox {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    box-shadow: 0 0 40px 2px rgba(0, 0, 0, 0.1);
    padding: 0 10px;
  }
}
</style>
