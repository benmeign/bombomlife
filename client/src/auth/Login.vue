<template>
    <section class="hero is-fullheight is-bold">
        <div class="hero-body">
            <div class="container">
                <div class="columns">
                    <div class="column is-6 is-offset-3">
                        <h1 class="title">
                            Connect to your account
                        </h1>

                        <div class="box">
                            <div class="facebook">
                                <a class="button-facebook" href="/auth/facebook">
                                    <i class="fa fa-facebook fa-fw"></i> Login with Facebook</a>
                            </div>

                            <div class="or-separator">
                                <div class="or-line"></div>
                                <div class="or-text">OR</div>
                                <div class="or-line"></div>
                            </div>

                            <div class="field">
                                <label class="label">Email</label>
                                <div class="control has-icons-left has-icons-right">
                                    <input class="input" type="text" placeholder="bene@bombomlife.com" value="">
                                    <span class="icon is-small is-left">
                                        <i class="fa fa-envelope"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Password</label>
                                <div class="control has-icons-left has-icons-right">
                                    <input class="input" type="text" placeholder="Irock;)" value="">
                                    <span class="icon is-small is-left">
                                        <i class="fa fa-lock"></i>
                                    </span>
                                </div>
                            </div>
                            <hr>

                            <p class="control has-text-centered">
                                <button class="button is-primary">Login</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Login',
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
</style>