import axios from 'axios'

const bombomlifeApi = axios.create({
    baseURL: process.env.NODE_ENV === "production" ? '/api' : "http://localhost:3000/api"
})

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
    return bombomlifeApi.put(`/mymoments/${mymomentId}`, { text }).then(response => {
        return response.data;
    });
}

function deleteMoment(mymomentId) {
    return bombomlifeApi.delete(`/mymoments/${mymomentId}`).then(response => {
        return response.data;
    });
}


export default {
    getMoments,
    addMoment,
    editText,
    deleteMoment
}