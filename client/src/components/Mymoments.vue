<template>
  
<div class="container"> 

    <div>
        <div class="field">
            <label class="label title is-left">What made me happy today?</label>
            <div class="control">
                <textarea class="textarea" placeholder="I danced under the rain with my best friend" v-model="newMoment.text"></textarea>
            </div>
        </div>
        <div class="field">
            <div class="control">
                <label class="radio">
                <input type="radio" name="question">
                <small>Public, share your moment with the world!</small>
                </label>
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <button @click="saveMoment" class="button is-warning">Save</button>
            </div>
        </div>
    </div>

    <br>
    <p class="title">My moments</p>

    <div v-for="moment in moments">

        <div class="card is-primary">
            <div class="card-content">
                <p class="content">{{ moment.text }}</p>
                <small>{{ moment.date | formatDate }}</small>
            </div>
            <footer class="card-footer" style="margin-bottom: 10px">
                <a class="card-footer-item">Edit</a>
                <a class="card-footer-item">Delete</a>
            </footer> 
        </div>
  
    </div>
</div>


</template>

<script>

import api from '@/api'

export default {
  name: 'Moments',
  data () {
    return {
      newMoment: {},
      moments: []
    };
  },
  created () {
      api.getMoments().then(moments => {
            this.moments = moments
        })
    },
    methods: {
        saveMoment(){
            this.newMoment.date = Date.now
            api.addMoment(this.newMoment.text,this.newMoment.date).then( () => {
                console.log(this.newMoment.text)
                api.getMoments().then(moments => {
                    this.moments = moments
                })
               this.newMoment = ""
            })

        }
    },
}

</script>