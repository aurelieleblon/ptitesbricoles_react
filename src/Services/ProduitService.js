import axios from 'axios';


function GetProduitById(id) {
    return axios.get('http://127.0.0.1:8080/produit/'+id);

};

function GetProduitByIdBis(id) {
  return axios.get('http://127.0.0.1:8080/produit/produit/'+id);

};

function GetProduit() {
  return axios.get('http://127.0.0.1:8080/produit/');

};

export default {
  GetProduit,
  GetProduitById,
  GetProduitByIdBis
};