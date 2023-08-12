<template>
  <div>
    <footer role="contentinfo" class="footer">
      <div class="container">
        <nav role="navigation" class="clearfix">
          <ul class="col-1-4 footer-section">
            <li>
              <box-icon type='solid' name='car'></box-icon>
            </li>
            <li>
              <p><smalL>All Rights Reserved | &copy; <time>2023</time></smalL></p>
            </li>
          </ul>
          <div class="col-1-4 footer-section" aria-labelledby="product-pages">
            <p id="product-pages"><b>About</b></p>
            <ul>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              
            </ul>
          </div>
          <div class="col-1-4 footer-section" aria-labelledby="support-pages">
            <p id="support-pages"><b>Support</b></p>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Documentation</a>
              </li>
              
            </ul>
          </div>
          <div class="col-1-4 footer-section" arai-labelledby="social-links">
            <p id="support-pages"><b>Links</b></p>
            <ul>
        <li>
          <box-icon type="solid" name="envelope" ></box-icon>
          jdmexporters@gmail.com
        </li>
        <li>
          <box-icon type="solid" name="phone"></box-icon>
          555-5555
        </li>
        <li>
          <box-icon
            name="whatsapp-square"
            type="logo"
            flip="horizontal"
            color="#58e855"
          ></box-icon>
          WhatappName
        </li>
      </ul>
          </div>
        </nav>
      </div>
    </footer>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.footer {
  margin-top:auto;
  padding: 30px 30px 60px;
  position: relative;
  bottom: 0;
  
}

.footer-section {
  margin-bottom: 15px;
}

@media(min-width: 720px) {
  .footer-section {
    margin-bottom: 0;
  }
}

.footer .logo {
  margin-bottom: 5px;
  width: 100px;
}

.footer a  {
  color: #959595;
  text-decoration: none;
}

.footer p  {
  margin-bottom: 5px;
}

.footer-email-input {
  margin-right: 2.5%;
  width: 68% !important;
}

.footer-email-button {
  font-size: 12px !important;
  padding: 10px !important;
  width: 27.5% !important;
}

@media(min-width: 768px) {
  .footer-email-input {
    width: 57% !important;
  }

  .footer-email-button {
    width: 37.5% !important;
  }
}
</style>
