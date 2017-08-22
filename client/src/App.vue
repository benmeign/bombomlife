<template>
  <div id="app">
    <div class="block container">
      <nav class="nav">

        <div class="nav-left">
          <a class="nav-item" href="/#/mymoments">
            <span class="icon">
              <img src="./assets/yoga-green.png" alt="Profile" height="28">
            </span>
            <router-link to="/login" v-if="!$root.user">Login</router-link>
          </a>
        </div>

        <div class="nav-center">
          <a class="nav-item" href="/">
            <img src="./assets/logo-bicolor.png" alt="BomBomLife" height="42">
          </a>
        </div>

        <div class="nav-right">
          <a class="nav-item" href="/#/walloflife">
            <span class="icon">
              <img src="./assets/lotus-green.png" alt="Profile" height="28">
            </span>
          </a>
        </div>

      </nav>
    </div>

    <router-view></router-view>

    <footer class="footer" style="margin-top: 50px">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>BomBomLife</strong> x
            <a href="http://ironhack.com">Ironhack</a>
          </p>
          <p>
            <a class="icon" href="xx">
              <i class="fa fa-facebook"></i>
            </a>
          </p>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>

export default {
  name: 'app'
}

</script>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #00d1b2;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: ( "white": ($white, $black),
"black": ($black, $white),
"light": ($light, $light-invert),
"dark": ($dark, $dark-invert),
"primary": ($primary, $primary-invert),
"info": ($info, $info-invert),
"success": ($success, $success-invert),
"warning": ($warning, $warning-invert),
"danger": ($danger, $danger-invert),
"twitter": ($twitter, $twitter-invert));

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
