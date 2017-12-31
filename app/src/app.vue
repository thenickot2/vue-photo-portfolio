<template>
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
</template>
<script>
  module.exports = {
    /**
     * Fires when the app has been mounted
     */
    mounted () {}
  }
</script>
