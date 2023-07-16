<template>
    <nav class="header">
      <div>
        <h1>JDM Exporters</h1>
      </div>
           <ul>
             <li>
              <router-link to="/">Home</router-link>
             </li>
             <li>
               <a class="pagelink" href="#projects">
                 Services
                </a>
              </li>
              <li>
                <a class="pagelink" href="#contact">
                  Contact
                </a>
              </li>
              <li>
                <router-link to="/about">About</router-link>
              </li>
           </ul>
         </nav>
 </template>
 
 <script>
 export default {
 
 }
 </script>
 
 <style scoped>
 /* Header */
 .header {
     
     top: 0;
     width: 100%;
     padding: 20px 0;
     background-color: #fff;
     font-size: 14px;
     font-weight: 900;
     
   }
   
   .header li {
     display: inline-block;
     padding: 10px;
 }
 
 .header a {
     color: #4A4A4A;
   }
   
   a.home {
     color: #4D00FF;
   }
 
   a {
     text-decoration: none;
   }

   h1 {
    color:black;
   }
 </style>