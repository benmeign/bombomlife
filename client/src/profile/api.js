import axios from 'axios'

const bombomlifeApi = axios.create({
    baseURL: process.env.NODE_ENV === "production" ? '/api' : "http://localhost:3000/api"
})

/* MOMENTS */

function getMoments() {
    return bombomlifeApi.get('/users/mymoments').then(response => {
        return response.data;
    });
}

function addMoment(text) {
    return bombomlifeApi.post(`/users/mymoments`, { text }).then(response => {
        return response.data;
    });
}

function editText(mymomentId, text) {
    return bombomlifeApi.post(`/mymoments/${mymomentId}`, { text }).then(response => {
        return response.data;
    });
}

function deleteMoment(mymomentId) {
    return bombomlifeApi.delete(`/mymoments/${mymomentId}`).then(response => {
        return response.data;
    });
}

/* CHALLENGES */

function loadChallenge() {
    return bombomlifeApi.get('/users/challenge').then(response => {
        return response.data;
    });
}

function acceptChallenge() {
    return bombomlifeApi.post('/users/challenge/accept').then(response => {
        return response.data;
    });
}

function succeedChallenge() {
    return bombomlifeApi.post('/users/challenge/succeed').then(response => {
        return response.data;
    });
}

function failChallenge() {
    return bombomlifeApi.post('/users/challenge/fail').then(response => {
        return response.data;
    });
}

function skipChallenge() {
    return bombomlifeApi.post('/users/challenge/skip').then(response => {
        return response.data;
    });
}

export default {
    getMoments,
    addMoment,
    editText,
    deleteMoment,
    loadChallenge,
    acceptChallenge,
    succeedChallenge,
    failChallenge,
    skipChallenge
}