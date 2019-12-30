<template>
    <div class="footer-links">
      <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
        <div v-container class="container-footer">
          <div class="row">
            <p>Website built with VueJS, Font Awesome, Bootstrap, and love</p>
          </div>
          <div class="row">
            <div class="col">
              <ul class="footer-social-icons">
                <li>
                  <a href="https://www.linkedin.com/in/olivia-sandvold-192821143/" target="_blank"
                  title="Follow me on LinkedIn">
                    <i class="fab fa-linkedin fa-3x" style="color:#737992"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/osandvold302" target="_blank" title="Check out my Github">
                    <i class="fab fa-github fa-3x" style="color:#737992"></i>
                  </a>
                </li>
                <li>
                  <a href="mailto: osandvold@outlook.com" target="_blank" title="Send me an email">
                    <i class="fas fa-envelope-square fa-3x" style="color:#737992"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div> 
</template>

<script>
//import Vue from 'vue'
export default {
    name: 'footer-component',
    components: {}
}
</script>

<style scoped>
.container-footer {
  margin-top: 20px;
  max-height: 100%;
}

.row p {
  margin-left: auto;
  margin-right: auto;
  width: 100em;
  text-align: center;
  font-size: 12px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  justify-content: center;
  display: flex;
}

ul li {
  display: inline;
}

li {
  float: center;
}

li a {
  position: relative;
  top: 0;
  transition: top ease 0.5s;
  text-align: center;
  padding: 16px; 
}

li a:hover {
  top: -10px;
}
</style>
