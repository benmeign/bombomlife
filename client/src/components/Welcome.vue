<template>
  <div>
    <section class="hero">
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

    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Change your life in just 21 days
          </h1>
          <h2 class="subtitle">
            "Life is short and then you die. Make the most of it today, not tomorrow." Ricardo Radaeli
          </h2>
          <div class="columns">
            <div class="column is-large">
              <p>
                <i class="fa fa-trophy fa-3" aria-hidden="true"></i>
              </p>
              <h3 class="is-large">Get a new challenge every day!</h3>
              <h4 class="is-small">We thought about small actions that will make you enjoy your day.</h4>
            </div>
            <div class="column">
              <i class="fa fa-file-text fa-3" aria-hidden="true"></i>
              <h3 class="is-medium">Collect your happy memories</h3>
              <h4 class="is-small">Write every day what you are grateful about and save it, just for you.</h4>
            </div>
            <div class="column">
              <i class="fa fa-gittip fa-3" aria-hidden="true"></i>
              <h3 class="is-medium">Access to your past data</h3>
              <h4 class="is-small">Access any time to what made you happy in the previous days</h4>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
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
  margin-top: 10px;
}





































/* 
happy: https://media.giphy.com/media/26BkNItrjPoIhB4Bi/giphy.gif
smile cute: https://media.giphy.com/media/l0MYtjhrNDLnlKf28/giphy.gif

 */
</style>