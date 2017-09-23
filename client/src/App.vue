<template>
  <div id="app">
    <nav class="nav container">

      <div class="nav-left">
        <a class="nav-item" href="/">
          <img src="./assets/logo-bicolor.png" alt="BomBomLife" height="42">
        </a>
      </div>

      <div class="nav-right">
        <a class="nav-item">
          <router-link to="/login" v-if="!$root.user">
            <span class="icon">
              <img src="./assets/yoga-green.png" alt="Profile" height="28">
            </span>
            <span class="navbar-start is-primary is-hidden-mobile">Login</span>
          </router-link>
          <router-link to="/mymoments" v-else>
            <span class="icon">
              <img src="./assets/yoga-green.png" alt="Profile" height="28">
            </span>
            <span class="navbar-start is-primary is-active is-hidden-mobile">My Profile</span>
          </router-link>
        </a>
      </div>

    </nav>
    <hr style="margin-top: 0px">

    <router-view></router-view>

    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>BomBomLife</strong>
          </p>
          <p>
            <a class="icon" href="https://www.facebook.com/bombomchallenge">
              <i class="fa fa-facebook"> </i>
            </a>
          </p>
          <button class="button is-primary" @click="logout" v-if="$root.user">Logout</button>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>

import auth from './Auth/api'

export default {
  name: 'app',
  created() {
    auth.loadUser(this)
  },
  methods: {
    logout() {
      auth.logout(this);
      this.$router.push({ path: '/' });
    }
  }
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

.container {
  margin-bottom: 0.5rem,
}

.block {
  margin-bottom: 1rem !important,
}

.footer {
  margin-top: 0px;
}
</style>
