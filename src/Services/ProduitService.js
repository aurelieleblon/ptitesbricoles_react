import axios from 'axios';


function GetProduitById(id) {
    return axios.get('http://127.0.0.1:8080/produit/'+id);

};

export default {

  GetProduitById
};