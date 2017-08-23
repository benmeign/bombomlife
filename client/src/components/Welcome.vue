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
            Change your life in 21 days
          </h1>
          <h2 class="subtitle">
            Every day, you will receive new instructions to make your life happier.
          </h2>
          <div class="columns">
            <div class="column is-large">
              <p class="is-medium">Get a new challenge every day!</p>
              <p class="is-small">We thought about small actions that will make you enjoy your day.</p>
            </div>
            <div class="column">
              <p class="is-medium">Collect your happy memories</p>
              <p class="is-small">Write every day what you are grateful about and save it, just for you.</p>
            </div>
            <div class="column">
              <p class="is-medium">Access to your past data</p>
              <p class="is-small">Access any time to what made you happy in the previous days</p>
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