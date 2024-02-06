import axios from 'axios';


function GetProduitListeEnvie() {
    return axios.get('http://127.0.0.1:8080/PageListeEnvie/');

};
function AddProduitListeEnvie(produit) {
  return axios.post('http://127.0.0.1:8080/PageListeEnvie/', produit);

};
function DeleteProduitListeEnvie(id) {
  const response =  axios.delete(`http://127.0.0.1:8080/PageListeEnvie/`+id);
  return response.data;
};


export default {

  GetProduitListeEnvie,
  AddProduitListeEnvie,
  DeleteProduitListeEnvie,
};