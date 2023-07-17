<template>
  <div>
    <footer>
      <ul>
        <li>
          <box-icon type="solid" name="envelope" color="#FFFFFF"></box-icon>
          jdmexporters@gmail.com
        </li>
        <li>
          <box-icon type="solid" name="phone" color="#FFFFFF"></box-icon>
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
      <div class="border"></div>
      <h6 class="cc">
        © 2023 JDM Exporters. Authorized Used-Car Dealer in Japan.
      </h6>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: #232628;
  color: white;
  padding: 0px 100px;
}

p {
  text-align: center;
}

#box-icon {
  color: white;
}

ul {
}

li {
  display: flex;
  list-style: none;
}
.cc {
  position: relative;
}
/* .border {
  border-top:solid black 1px;
  width: 75%;
  left: 50px;
} */
</style>
