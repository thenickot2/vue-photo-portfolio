<template>
<main class="section onLight">
  <header-bar :library="library"></header-bar>
  <div class="grid">
    <div id="contact" style="text-align:left;">
      <div class="container">
        <h3>Contact</h3>
        <br />
        <table class="table">
          <tr>
            <td>Services</td>
            <td>Photo Retouching / Editing</td>
          </tr>
          <tr>
            <td></td>
            <td>Headshots</td>
          </tr>
          <tr>
            <td></td>
            <td>Creative / Artistic</td>
          </tr>
          <tr><td>&nbsp;</td><td>&nbsp;</td></tr>
          <tr>
            <td>Email</td>
            <td>EMAIL HERE</td>
          </tr>
          <tr>
            <td>Location</td>
            <td>LOCATION HERE</td>
          </tr>
          <tr>
            <td>500px</td>
            <td><a href="http://example.com/" target="_blank">http://example.com/</a></td>
          </tr>
          <tr>
            <td>Model Mayhem</td>
            <td><a href="http://example.com/" target="_blank">http://example.com/</a></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
  <footer-bar></footer-bar>
</main>
</template>

<script>

const library = require('../photos.json')

const HeaderBar = require('../components/header.vue')
const FooterBar = require('../components/footer.vue')

module.exports = {  
  data () {
    return {
      library
    }
  },
  components: {
    HeaderBar,
    FooterBar
  }
}

</script>
