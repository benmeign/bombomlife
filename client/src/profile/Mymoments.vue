<template>
    <div>
        <div class="container">

            <div class="columns">

                <div class="column">
                    <div class="has-text-centered">
                        <div id="challenge">
                            <label class="label title">#1 - Your happiness challenge of the day</label>
                            <p class="label">Challenge of the day</p>

                            <section v-if="!challengeAccepted">
                                <button @click="" class="button is-primary">Challenge accepted!</button>
                                <br>
                                <button class="button is-primary-invert" style="margin-top: 10px">
                                    <span>Skip this one </span>
                                    <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                </button>
                            </section>

                            <section v-else>
                                <button @click="" class="button is-warning">I did it :)</button>
                                <br>
                                <button class="button is-warning" style="margin-top: 10px">
                                    <span>I didn't manage :(</span>
                                </button>
                            </section>

                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="has-text-centered">
                        <label class="label title">#2 - Your daily gratitude exercise</label>
                        <div>
                            <label class="label">What made you happy today?</label>
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

            <p class="title">My happy memories</p>

            <div v-for="moment in moments">

                <section v-if="!moment.editStatus">
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
                </section>

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
            challengeAccepted: false,
        };
    },
    created() {
        api.getMoments().then(moments => {
            this.moments = moments.map((moment) => {
                moment.editStatus = false;
                return moment
            })
        })
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

#challenge {
    background: black,
}

.save-button {
    margin-top: 10px;
}
</style>