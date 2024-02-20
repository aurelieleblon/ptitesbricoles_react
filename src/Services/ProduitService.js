import axios from 'axios';


function GetProduitById(id) {
    return axios.get('http://127.0.0.1:8080/produit/'+id);

}; //récupère avec CA_ID

function GetProduitByIdBis(id) {
  return axios.get('http://127.0.0.1:8080/produit/produit/'+id);

}; //récupère avec PR_ID

function GetProduit() {
  return axios.get('http://127.0.0.1:8080/produit/');

};

export default {
  GetProduit,
  GetProduitById,
  GetProduitByIdBis
};