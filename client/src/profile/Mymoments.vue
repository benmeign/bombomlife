<template>
    <div>
        <div class="container">

            <div class="columns">

                <div class="column challenge">
                    <div class="has-text-centered">
                        <label class="label title has-text-centered">#1 - My happiness <br>challenge of the day</label>
                        <p class="label has-text-centered">{{ runningChallenge.text }}</p>
                        <section v-if="!isChallengeAccepted">
                            <button @click="acceptChallenge" class="button is-primary">Challenge accepted!</button>
                            <br>
                            <button @click="skipChallenge" class="button is-primary-invert" style="margin-top: 10px">
                                <span>Skip this one &nbsp;</span>
                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                            </button>
                        </section>

                        <section v-else>
                            <button @click="succeedChallenge" class="button is-success">I did it :)</button>
                            <!-- <section v-if='!isChallengeSucceeded'>
                                        <article class="message is-primary">
                                            <div class="message-header">
                                                <p>Congrats!</p>
                                                <button class="delete" aria-label="delete"></button>
                                            </div>
                                            <div class="message-body">
                                                <p>well done!</p>
                                                <figure class="image is-4by3">
                                                    <img src="https://media.giphy.com/media/l0MYtjhrNDLnlKf28/giphy.gif" class="promo-img" alt="Smiiile">
                                                </figure>
                                            </div>
                                        </article>
                                    </section> -->
                            <button @click="failChallenge" class="button is-danger">
                                <span>I didn't manage :(</span>
                            </button>
                        </section>
                    </div>
                </div>
                <div class="column gratitude">
                    <div class="has-text-centered">
                        <label class="label title has-text-centered">#2 - My daily <br> gratitude exercise</label>
                        <div>
                            <label class="label has-text-centered">What made you happy today?</label>
                            <div class="control">
                                <textarea class="input is-warning" type="text" placeholder="I danced samba with Alex in the park" v-model="newMoment.text"></textarea>
                            </div>

                            <div class="field save-button">
                                <button @click="saveMoment" class="button is-warning">Save</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <hr>

            <div class="memories">
                <p class="title">My happy memories</p>
                <div class="box">

                    <div v-for="moment in moments">
                        <section v-if="!moment.editStatus">
                            <article class="media">
                                <div class="media-content">
                                    <div class="content">
                                        <p>
                                            <small>{{ moment.date | formatDate }}</small>
                                            <nav class="level" style="float:right">
                                                <a class="level-item">
                                                    <span class="icon is-small">
                                                        <i @click="moment.editStatus=true" class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                    </span>
                                                </a>
                                                <a class="level-item">
                                                    <span class="icon is-small">
                                                        <i @click="deleteMoment(moment)" class="fa fa-trash-o" aria-hidden="true"></i>
                                                    </span>
                                                </a>
                                            </nav>
                                            <br> {{ moment.text }}
                                            <hr>

                                        </p>

                                    </div>
                                </div>
                            </article>
                        </section>
                        <section v-else>
                            <article class="media">
                                <div class="media-content">
                                    <div class="content">
                                        <p>
                                            <small>{{ moment.date | formatDate }}</small>
                                            <nav class="level" style="float:right;">
                                                <a class="level-item">
                                                    <span class="icon is-small">
                                                        <i @click="updateText(moment)" class="fa fa-floppy-o" aria-hidden="true"></i>
                                                    </span>
                                                </a>
                                                <a class="level-item" style="float:right;">
                                                    <span class="icon is-small">
                                                        <i @click="deleteMoment(moment)" class="fa fa-trash-o" aria-hidden="true"></i>
                                                    </span>
                                                </a>
                                            </nav>
                                            <br>
                                            <textarea rows="2" cols="50" class="content" v-model="moment.text"></textarea>
                                            <hr>

                                        </p>
                                    </div>
                                </div>
                            </article>
                        </section>

                        <!-- <section v-if="!moment.editStatus">

                                                                                                                                                                                                                                                                                            <div class="card is-primary">
                                                                                                                                                                                                                                                                                                <div class="card-content">
                                                                                                                                                                                                                                                                                                    <p class="content">{{ moment.text }}</p>
                                                                                                                                                                                                                                                                                                    <small>{{ moment.date | formatDate }}</small>
                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                <footer class="card-footer" style="margin-bottom: 10px">
                                                                                                                                                                                                                                                                                                    <a class="card-footer-item" @click="moment.editStatus=true">Edit</a>
                                                                                                                                                                                                                                                                                                    <a class="card-footer-item" @click="deleteMoment(moment)">Delete</a>
                                                                                                                                                                                                                                                                                                </footer>
                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                        </section>

                                                                                                                                                                                                                                                                                        <section v-else>
                                                                                                                                                                                                                                                                                            <div class="card">
                                                                                                                                                                                                                                                                                                <div class="card-content">
                                                                                                                                                                                                                                                                                                    <textarea rows="6" cols="50" class="content" v-model="moment.text"></textarea>
                                                                                                                                                                                                                                                                                                    <small>{{ moment.date | formatDate }}</small>
                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                <footer class="card-footer" style="margin-bottom: 10px">
                                                                                                                                                                                                                                                                                                    <a class="card-footer-item" @click="updateText(moment)">Save</a>
                                                                                                                                                                                                                                                                                                    <a class="card-footer-item" @click="deleteMoment(moment)">Delete</a>
                                                                                                                                                                                                                                                                                                </footer>
                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                        </section> -->

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

import api from './api'

export default {
    name: 'Moments',
    data() {
        return {
            newMoment: {},
            moments: [],
            isChallengeAccepted: false,
            runningChallenge: null,
        };
    },
    created() {
        api.getMoments().then(moments => {
            this.moments = moments.map((moment) => {
                moment.editStatus = false;
                return moment
            })
        })
        this.loadChallenge()
    },
    methods: {
        saveMoment() {
            api.addMoment(this.newMoment.text).then((moment) => {
                moment.editStatus = false
                this.moments.unshift(moment)
                this.newMoment = {}
            })
        },
        updateText(moment) {
            api.editText(moment._id, moment.text);
            moment.editStatus = false;
        },
        deleteMoment(moment) {
            this.moments.splice(this.moments.indexOf(moment), 1);
            api.deleteMoment(moment._id);
        },
        acceptChallenge() {
            api.acceptChallenge().then((user) => {
                this.isChallengeAccepted = user.isChallengeAccepted
            });
        },
        succeedChallenge() {
            api.succeedChallenge().then((user) => {
                this.isChallengeAccepted = user.isChallengeAccepted;
                this.runningChallenge = user.runningChallenge
                this.loadChallenge()
            });
        },
        failChallenge() {
            api.failChallenge().then((user) => {
                this.isChallengeAccepted = user.isChallengeAccepted;
                this.runningChallenge = user.runningChallenge
                this.loadChallenge()
            });
        },
        skipChallenge() {
            api.skipChallenge().then((user) => {
                this.isChallengeAccepted = user.isChallengeAccepted;
                this.runningChallenge = user.runningChallenge
                this.loadChallenge()
            })
        },
        loadChallenge() {
            api.loadChallenge().then((runningChallenge) => {
                this.runningChallenge = runningChallenge
            })
        }
    },
}

</script>

<style>
.column {
    padding: 50px
}

.button {
    margin-top: 20px,
}

.challenge {
    background-color: rgba(0, 209, 178, 0.2);
    margin-right: 10px;
    margin-left: 10px;
}

.gratitude {
    background-color: rgba(255, 221, 87, 0.22);
    margin-right: 10px;
    margin-left: 10px;
}

.save-button {
    margin-top: 10px;
}

.memories {
    margin-bottom: 50px;
}

.fa {
    font-size: 1.25rem;
}
</style>