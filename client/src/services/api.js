import axios from 'axios';

export default () => {
    return axios.create({
        baseURL: 'https://backend.chit.sh',
        headers: {
            'Content-Type': 'application/json',   
            'Authorization': "Bearer " + localStorage.getItem('token') || null,
        },
    });
}

