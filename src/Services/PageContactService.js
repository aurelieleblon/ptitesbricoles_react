import axios from 'axios';


function contact(utilisateur) {
    return axios.post('http://127.0.0.1:8080/PageContact/', utilisateur);

};

export default {
    contact
}