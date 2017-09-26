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
                Apprends le bonheur <br>en 21 jours !
              </h1>
              <h2 class="subtitle is-4">
                C'est gratuit, simple et facile.
                <br> Et ça va changer ta vie.
              </h2>
              <br>
              <p class="control has-addons has-text-centered">
                <router-link to="/signup" class="button is-large is-warning">
                  C'est parti, je me lance !
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
            Parce que nous pensons que le bonheur s'apprend, <br>entraine toi à la pratique du bonheur pendant 21 jours.
          </h1>
          <h2 class="subtitle">
            <i>"Celui qui déplace la montagne, c’est celui qui commence à enlever les petites pierres."</i> Confucius
          </h2>
          <div class="columns">
            <div class="column is-large">
              <p>
                <i class="fa fa-trophy fa-3x" aria-hidden="true"></i>
              </p>
              <h3 class="subtitle">Chaque matin, reçois <br>un BomBomChallenge <br> à relever</h3>
              <h4 class="is-small">Nous avons concocté pour toi de petits défis pour enchanter ton quotidien.</h4>
            </div>
            <div class="column">
              <i class="fa fa-file-text fa-3x" aria-hidden="true"></i>
              <h3 class="subtitle">Collecte tes <br>BomBomMoments de <br>bonheur quotidien</h3>
              <h4 class="is-small">Chaque soir, note ce qui t'a rendu heureux et garde le précieusement, rien que pour toi.</h4>
            </div>
            <div class="column">
              <i class="fa fa-gittip fa-3x" aria-hidden="true"></i>
              <h3 class="subtitle">Accède <br>facilement à ton <br>BomBomJournal</h3>
              <h4 class="is-small">A tout moment, retrouve tous tes BomBomMoments des jours précédents.</h4>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>

import auth from '../Auth/api'

export default {
  name: 'welcome',
  created() {
    auth.loadUser(this)
    if (this.$root.user) {
      this.$router.push('/mymoments')
    }
  }
}
</script>

<style>
.subtitle {
  padding-top: 30px
}

.promo-img {
  height: 200px
}

.fa-3x {
  font-size: 3rem;
  padding-bottom: 10px;
}

.hero-body {
  margin-top: 0px;
}














































































































/* 
happy: https://media.giphy.com/media/26BkNItrjPoIhB4Bi/giphy.gif
smile cute: https://media.giphy.com/media/l0MYtjhrNDLnlKf28/giphy.gif

 */
</style>