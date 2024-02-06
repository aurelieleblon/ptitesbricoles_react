import axios from 'axios';


function ajoutProduit(produit) {
    return axios.post('http://127.0.0.1:8080/PageAdmin/', produit);

};

function suppressionProduit(id) {
  const response =  axios.delete(`http://127.0.0.1:8080/PageAdmin/`+id);
  return response.data;
};

function modificationProduit(modif) {
  const response = axios.patch(`http://127.0.0.1:8080/PageAdmin/`+modif.idmodif, modif);
  return response.data;
}

export default {

  ajoutProduit,
  suppressionProduit,
  modificationProduit
};