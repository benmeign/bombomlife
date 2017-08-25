<template>
    <div>
        <div class="container">

            <div class="columns">

                <div v-if="runningChallenge" class="column challenge">
                    <section v-if="!isChallengeSucceeded">
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
                                <div class="modal">
                                    <div class="modal-background"></div>
                                    <div class="modal-content">
                                        <p class="is-success">Well done!</p>
                                        <p class="image is-4by3">
                                            <img src="https://media.giphy.com/media/l0MYtjhrNDLnlKf28/giphy.gif" class="promo-img" alt="Smiiile">
                                        </p>
                                    </div>
                                    <button class="modal-close is-large" aria-label="close"></button>
                                </div>

                                <button @click="failChallenge" class="button is-danger">
                                    <span>I didn't manage :(</span>
                                </button>
                            </section>
                        </div>
                    </section>

                    <section v-if="isChallengeSucceeded">
                        <div class="has-text-centered" style="margin-top:15px">
                            <label class="label title has-text-centered">Congrats! You succeedeed
                                <strong> {{ numberOfChallengesSucceeded }} challenges.</strong> You rock!</label>
                            <figure id="poussin" class="image is-4by3">
                                <img src="https://media.giphy.com/media/l0MYtjhrNDLnlKf28/giphy.gif" class="promo-img" alt="Smiiile">
                            </figure>
                            <button @click="nextChallenge" class="button is-primary-invert" style="margin-top: 10px">
                                <span>See next challenge &nbsp;</span>
                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                            </button>
                        </div>
                    </section>

                </div>
                <div class="column gratitude">
                    <div class="has-text-centered">
                        <label class="label title has-text-centered">#2 - My daily <br> gratitude exercise</label>
                        <div>
                            <label class="label has-text-centered">What made you happy today?</label>
                            <div class="control">
                                <textarea rows="2" class="textarea is-warning" type="text" placeholder="I danced samba with Alex in the park" v-model="newMoment.text"></textarea>
                            </div>

                            <div class="field save-button">
                                <button @click="saveMoment" class="button is-warning">Save</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <hr style="margin-top: 10px">

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
                                                    <span class="icon">
                                                        <i @click="moment.editStatus=true" class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                    </span>
                                                </a>
                                                <a class="level-item">
                                                    <span class="icon">
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
                                                    <span class="icon">
                                                        <i @click="updateText(moment)" class="fa fa-floppy-o" aria-hidden="true"></i>
                                                    </span>
                                                </a>
                                                <a class="level-item" style="float:right;">
                                                    <span class="icon">
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
            isChallengeSucceeded: false,
            runningChallenge: null,
            numberOfChallengesSucceeded: 0,
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
                this.runningChallenge = user.runningChallenge;
                this.numberOfChallengesSucceeded = user.challengesSucceeded.length;
                this.isChallengeSucceeded = true;
                this.loadChallenge();
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
        },
        nextChallenge() {
            this.isChallengeSucceeded = false
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
    margin-right: 5px;
    margin-left: 5px;
}

.gratitude {
    background-color: rgba(255, 221, 87, 0.22);
    margin-right: 5px;
    margin-left: 5px;
}

.save-button {
    margin-top: 10px;
}

.button.is-success {
    margin-right: 10px;
    margin-top: 20px;
}

.button.is-danger {
    margin-top: 20px;
}

.memories {
    margin-bottom: 50px;
}

.fa-chevron-right {
    font-size: 1rem;
}

textarea {
    font-size: 14px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.label {
    font-size: 1.25rem;
}

.title {
    font-size: 1.5rem;
}

.fa-pencil-square-o {
    margin-right: 4px;
}

#poussin {
    position: relative;
}

#poussin::before {
    background-color: rgba(0, 209, 178, 0.2);
    display: block;
    content: ' ';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
}
</style>