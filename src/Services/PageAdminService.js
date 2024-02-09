import axios from 'axios';

const token = localStorage.getItem('token')


function ajoutProduit(produit) {
    return axios.post('http://127.0.0.1:8080/PageAdmin/', produit, {
      headers : {
          'Authorization' : `Bearer ${token}`,
      }
  })
}

function suppressionProduit(id) {
  const response =  axios.delete(`http://127.0.0.1:8080/PageAdmin/${id}`, {
    headers : {
        'Authorization' : `Bearer ${token}`,
    }
});
  return response.data;
};

function modificationProduit(modif) {
  const response = axios.patch(`http://127.0.0.1:8080/PageAdmin`, {modif}, {
    headers : {
        'Authorization' : `Bearer ${token}`,
        'Content-Type' : 'application/json'
    }
});
  return response.data;
}

export default {

  ajoutProduit,
  suppressionProduit,
  modificationProduit
};