<template>
  <section class="hero is-fullheight">

    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="columns is-vcentered">
          <div class="column is-5">
            <figure class="image is-4by3">
              <img src="https://media.giphy.com/media/l0MYtjhrNDLnlKf28/giphy.gif" class="promo-img" alt="Smiiile">
            </figure>
          </div>
          <div class="column is-6 is-offset-1 is-warning">
            <h1 class="title is-2">
              Embark on the happiness challenge now!
            </h1>
            <h2 class="subtitle is-4">
              It's free, simple and easy.
              <br> And it will change your life.
            </h2>
            <br>
            <p class="control has-addons has-text-centered">
              <router-link to="/signup" class="button is-large is-warning">
                Yes, I'm ready. Let's go!
              </router-link>
            </p>
          </div>
        </div>
        <div class="container has-text-centered">
          <div class="columns is-vcentered">
            <div class="column is-3">
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'welcome',
}
</script>

<style>
.subtitle {
  padding-top: 30px
}

.promo-img {
  height: 200px
}


.hero-body {
  padding-top: 0px;
}
























/* 
happy: https://media.giphy.com/media/26BkNItrjPoIhB4Bi/giphy.gif
smile cute: https://media.giphy.com/media/l0MYtjhrNDLnlKf28/giphy.gif

 */
</style>