import axios from 'axios';

export default () => {
    return axios.create({
        baseURL: 'https://backend.chit.sh', // http://localhost:8081 dev
        headers: {
            'Content-Type': 'application/json',   
            'Authorization': "Bearer " + localStorage.getItem('token') || null,
        },
    });
}

