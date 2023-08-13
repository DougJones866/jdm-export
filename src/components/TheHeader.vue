<template>
  <header role="banner" aria-label="site-wide-navigation" class="site-header">
      <div class="container">
        <nav role="navigation" aria-label="navigation" class="site-header-nav">
          <ul class="site-nav-left">
            <li>
              <router-link to="/home" class="logo">
                <!-- <box-icon type='solid' name='car'></box-icon> -->
                <span class="logo1">JDM</span> Exportors
              </router-link>
            </li>
            <li>
              <router-link to="/home">
                Home
              </router-link>
            </li>
            <li>
              <router-link to="/about" >About</router-link>
            </li>
            <li>
              <router-link to="/contact">Contact Us</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
</template>

<script>
export default {};
</script>

<style scoped>

.logo {
  font-weight: 700;
  
}
.logo1 {
  color:red;
}

.site-header {
  background-color: #34474F;
  padding: 30px 15px 0;
}

.site-header-nav {
  align-items: center;
  display: flex;
}

.site-nav-left,
.site-nav-right {
  align-items: center;
  display: flex;
}

.site-nav-right {
  float: right;
  margin-left: auto;
}

.site-nav-left li:not(:first-child),
.site-nav-right li {
  font-weight: 700;
  display: inline-block;
  line-height: 0;
}

.site-nav-mobile li {
  display: inline-block;
}

.site-nav-left li:not(:last-child),
.site-nav-right li:not(:last-child),
.site-nav-mobile li:not(:last-child) {
  margin-right: 45px;
}

.site-nav-left .logo {
  width: 120px;
}

a {
  color: #FFFFFF;
  text-decoration: none;
}


a:hover {
  color: red;
}
</style>
