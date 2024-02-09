import axios from "axios";

function fetchCommandeUserById(id) {
    return axios.get(`http://127.0.0.1:8080/Commande/${id}`);
}
// function DetailsCommandeById(id) {
//     return axios.get('http://127.0.0.1:8080/Commande/details/${id}');
// }

function addCommande(cmd) {
    return axios.post(`http://127.0.0.1:8080/Commande/`, cmd);
}

function deleteCommande(id) {
    return axios.delete(`http://127.0.0.1:8080/Commande/${id}`);
}


export default {
    fetchCommandeUserById,
    addCommande,
    // DetailsCommandeById,
    deleteCommande
 };