<template>

 <section class="hero is-fullheight is-bold">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-4 is-offset-4">
            <h1 class="title">
              Create your account
            </h1>
            <div class="box">
              <label class="label">Username</label>
              <p class="control">
                <input class="input" type="text" placeholder="Béné">
              </p>
              <label class="label">Email</label>
              <p class="control">
                <input class="input" type="text" placeholder="bene@bombomlife.com">
              </p>
              <hr>
              <label class="label">Password</label>
              <p class="control">
                <input class="input" type="password" placeholder="Irock:)">
              </p>
              <hr>
              <p class="control has-text-centered">
                <button class="button is-primary">Register</button>
              </p>
            </div>
            <p class="has-text-centered">
              <a href="login.html">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
 </section>


</template>

<script>
export default {
  name: 'SignUp',
}
</script>