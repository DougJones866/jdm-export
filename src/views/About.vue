<template>
  <main role="main" class="site-main">
    <header aria-labelledby="page-title" class="clearfix site-main-header">
      <div class="container">
        <div class="textbox">
          <h1 id="page-title">Who We Are</h1>
          <p class="col-1-2">
            As a company deeply rooted in the automotive industry, we understand
            the allure and demand for JDM cars worldwide. We meticulously curate
            our inventory to include an extensive selection of iconic and
            sought-after models, encompassing legendary brands such as Honda,
            Toyota, Nissan, Subaru, Mitsubishi, and more.
            <br />
            <br />From performance-driven sports cars to reliable family
            vehicles, we cater to diverse preferences and requirements.
          </p>
        </div>
        <!-- <div class="image"></div> -->
      </div>
    </header>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
.image {
  width: 250px;
  height: 250px;
  background-color: aqua;
  float: right;
}
@media (max-width: 500px) {
  .container .textbox {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    box-shadow: 0 0 40px 2px rgba(0, 0, 0, 0.1);
    padding: 0 10px;
  }
}
</style>
