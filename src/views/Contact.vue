<template>
  <main role="main" class="site-main">
    <header aria-labelledby="page-title" class="clearfix site-main-header">
      <div class="container">
        <div class="textbox">
        <h1 id="page-title">Contact Us</h1>
        <p class="col-1-2">
          We are standing by for your questions, comments or concerns. If there
          is anything we can do, please reach out and let us know.
        </p>
        </div>
      </div>
    </header>
    <contact-form />
    
  </main>
</template>

<script>
export default {};
</script>

<style scoped>

@media (max-width: 500px) {
  .container .textbox {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    box-shadow: 0 0 40px 2px rgba(0, 0, 0, 0.1);
    padding: 0 10px;
  }
}

</style>
