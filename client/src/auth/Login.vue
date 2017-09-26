<template>
    <section class="hero is-bold">
        <div class="hero-body">
            <div class="container">
                <div class="columns">
                    <div class="column is-6 is-offset-3">
                        <h1 class="title">
                            Connecte toi à ton <br> compte BomBomLife 
                        </h1>

                        <div class="box">
                            <!-- <div class="facebook">
                                                            <a class="button-facebook" href="/auth/facebook">
                                                                <i class="fa fa-facebook fa-fw"></i> Login with Facebook</a>
                                                        </div>

                                                        <div class="or-separator">
                                                            <div class="or-line"></div>
                                                            <div class="or-text">OR</div>
                                                            <div class="or-line"></div>
                                                        </div> -->

                            <div>
                                <b-notification type="is-danger" :closable="false" v-if="error">{{ error }}</b-notification>
                                <form @submit.prevent="login">
                                    <b-field label="Email">
                                        <b-input v-model="email" type="email" required></b-input>
                                    </b-field>

                                    <b-field label="Mot de passe">
                                        <b-input v-model="password" type="password" required></b-input>
                                    </b-field>

                                    <button class="button is-primary" :class="buttonClasses">Connexion</button>
                                </form>
                            </div>

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
    name: 'login',
    data() {
        return {
            error: '',
            loading: false,
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
        login() {
            this.error = ''
            this.loading = true
            auth.login(this.email, this.password, this).then((response) => {
                this.$router.push('/mymoments')
            }).catch(err => {
                this.error = err.response.data
            }).then(() => {
                this.loading = false
            })
        }
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