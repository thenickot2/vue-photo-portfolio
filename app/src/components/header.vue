<template>
  <div class="navbar navbar-default">
    <div class="container">
      <div class="tabWrap">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link to="/"><h1>LOGO HERE</h1></router-link>
        </div>
        <div class="collapse navbar-collapse" id="navbar-collapse">
          <ul class="nav navbar-nav">
            <li>
              <div class="dropdown">
                <a href="#" class="dropdown-toggle btn" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  Photos
                  <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                  <li v-for="(shoot, index) in library">
                    <router-link :to="'/photos/' + shoot.slug"><span>{{shoot.name}}</span></router-link>
                  </li>
                </ul>
              </div>
            </li>
            <li><a href="http://example.com/" class="btn"><span>Blog</span></a></li>
            <li><router-link to="/contact" class="btn"><span>Contact</span></router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

module.exports = {  
  props: ['library']
}

</script>
