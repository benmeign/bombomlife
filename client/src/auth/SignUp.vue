<template>
  <section class="hero is-bold" style="margin-top: 0px">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-6 is-offset-3">
            <h1 class="title">
              Create your account
            </h1>

            <div class="box">
              <!-- <div class="facebook">
                                                        <a class="button-facebook" href="/auth/facebook">
                                                          <i class="fa fa-facebook fa-fw"></i> Sign up with Facebook</a>
                                                      </div>

                                                      <div class="or-separator">
                                                        <div class="or-line"></div>
                                                        <div class="or-text">OR</div>
                                                        <div class="or-line"></div>
                                                      </div>

                                                      <div> -->

              <article v-if="error" class="message is-danger">
                <div class="message-body">{{ error.message }}</div>
              </article>

              <b-field label="Name">
                <b-input v-model="name" type="text" placeholder="Balou" required>
                </b-input>
              </b-field>

              <b-field label="Email">
                <b-input v-model="email" type="email" placeholder="balou@lelivredelajungle.com" required>
                </b-input>
              </b-field>

              <b-field label="Password">
                <b-input v-model="password" type="password" placeholder="ilenfautpeupouretreheureux" required>
                </b-input>
              </b-field>

              <p class="control has-text-centered">
                <button class="button is-primary" @click="signup" :class="buttonClasses">Register</button>
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>

  </section>
</template>

<script>
import auth from './api'

export default {
  name: 'SignUp',
  data() {
    return {
      error: '',
      name: '',
      email: '',
      password: ''
    }
  },
  computed: {
    buttonClasses() {
      return {
        'is-loading': this.loading
      }
    }
  },
  methods: {
    signup() {
      this.error = ''
      auth.signup({
        email: this.email,
        password: this.password
      }).then(() => auth.login(this.email, this.password, this)).then(() => {
        this.$router.push({ path: '/mymoments' });
      }).catch(err => {
        this.error = err.response.data
      })
    },
  }
}


</script>

<style>
.button-facebook {
  background: #3b5998;
  color: #fff;
  padding: 15px 16px 13px;
  text-align: center;
  font-size: 18px;
  border-radius: 10px;
  margin: 30px 0 50px 0;
  display: inline-block;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  user-select: none;
}

.or-separator {
  display: flex;
}

.or-line {
  position: relative;
  flex-grow: 1;
  background-color: #b5b5b5;
  height: 1px;
  top: .45em;
}

.or-text {
  position: relative;
  color: #b5b5b5;
  line-height: 15px;
  margin: 0 18px;
  flex-shrink: 0;
  flex-grow: 0;
  margin-bottom: 30px;
}

.form-input {
  border: 0;
  border-bottom: 1px solid #00bfff;
  border-radius: 0;
  font-size: 18px;
  padding-bottom: 16px;
  outline: 0;
  width: 100%;
  transition: border-color .3s;
  user-select: text;
  cursor: auto;
  padding: 1px;
  display: inline-block;
  text-align: start;
}

.label {
  margin-top: 10px;
  text-align: left
}

.hero-body {
  margin-top: 0px;
  padding-top: 50px;
}
</style>