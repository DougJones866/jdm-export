<template>
  <div class="container">
    <div class="logo">
      <h1>JDM Exporters</h1>
    </div>
    <nav class="header">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <a class="pagelink" href="#projects"> Services </a>
        </li>
        <li>
          <a class="pagelink" href="#contact"> Contact </a>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  background-color: #fff;
  top: 0;
  padding: 20px 0;
  align-content: center;
  width: 100%;
  
  
}
.logo {
  
  display: inline-block;  
  left:0;
  
   

}
.header {
  display: inline-block;
  font-size: 14px;
  font-weight: 900;
  margin-left: 20px;
  
  
}

.header li {
  display: inline-block;
  padding: 10px;
}

.header ul {
  margin: 0;
  padding: 0;
  
  display: flex; /* Display the navigation links horizontally */
}

.header a {
  color: #4a4a4a;
}

a.home {
  color: #4d00ff;
}

a {
  text-decoration: none;
}

h1 {
  color: black;
}
</style>
