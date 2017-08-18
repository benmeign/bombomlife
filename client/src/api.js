import axios from 'axios'

const bombomlifeApi = axios.create({
    baseURL: 'http://localhost:3000/api'
})

function getMoments() {
    return bombomlifeApi.get('/mymoments').then(response => {
        return response.data;
    });
}

function addMoment(text, date) {
    return bombomlifeApi.put(`/mymoments`, {text, date}).then(response => {
        return response.data;  
    });
}

export default {
    getMoments,
    addMoment
}