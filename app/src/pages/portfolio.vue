<template>
<main class="section onLight">
  <header-bar :library="library"></header-bar>
  <div class="grid">
    <div class="container">
      <h3>{{photos.name}}</h3>
      <span v-if="photos.blog" class="blog">
        <h6>
          <a :href="photos.blog" target="_blank">Blog Post</a>
        </h6>
      </span>
      <div class="credits">
        <h6>
          <a :href="photos.model.link" target="_blank">Model: {{photos.model.name}}</a> | <a :href="photos.mua.link" target="_blank">MUA: {{photos.mua.name}}</a>
        </h6>
        <div class="next">
          <router-link :to="'/photos/' + photos.next">Next</router-link>
        </div>
      </div>
    </div>
    <br>
    <div class="photos">
      <a v-for="(photo, index) in photos.images" :href="photo" :data-lightbox="photos.name">
        <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
        <img :src="photo" style="display:none;"/>
      </a>
    </div>
  </div>
  <footer-bar></footer-bar>
</main>
</template>

<script>
const _ = require('lodash')
const library = require('../photos.json')

const HeaderBar = require('../components/header.vue')
const FooterBar = require('../components/footer.vue')

module.exports = {
  data () {
    const photos = {}
    
    return {
      library,
      loading: true,
      photos
    }
  },
  created () {
    this.fetchData()
  },
  mounted () {
    this.loadImages()
  },
  watch: {
    '$route': 'routeChange'
  },
  updated () {
    this.loadImages()
  },
  methods: {
    routeChange () {
      this.fetchData()
      this.loadImages()
    },
    fetchData () {
      this.loading = false
      
      let slug = 'photoshoot-1'
      if ( this.$route.params.slug ) {
        slug = this.$route.params.slug
      }

      this.photos = _.find(library, {slug})
    },
    loadImages () {
      $(".grid img").each(function() {
        $(this).hide()
        $(this).siblings("i.fa").show()
        var image = $(this)[0];
        if ( image.complete ) {
          $(this).show()
          $(this).siblings("i.fa").hide()
        } else {
          image.onload = function() {
            $(this).show()
            $(this).siblings("i.fa").hide()
          }
        }
      })
    }
  },
  
  components: {
    HeaderBar,
    FooterBar
  }
}

</script>
