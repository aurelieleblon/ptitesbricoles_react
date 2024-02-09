import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProduitService from '../Services/ProduitService';
import { toast } from 'react-toastify';
import PageAdminService from '../Services/PageAdminService';
import "../Styles/PageAdminModif.css"


function ModifAdmin() {
  const [nomProduit, setProduitNom] = useState('');
  const [description, setDescription] = useState('');
  const [prix, setPrix] = useState('');
  const { PR_ID } = useParams();
 
  
  
  const GetProduitByIdBis = async () => {
    try {
        const response = await ProduitService.GetProduitByIdBis(PR_ID);
        console.log(response)
        setProduit(response.data)
      
    } catch (e) {
        console.log(e)
    }
}
  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyer les données du formulaire au serveur ou effectuer d'autres actions
    console.log('Nom du produit:', nomProduit);
    console.log('Description:', description);
    console.log('Prix:', prix);
  };


  const [produit, setProduit] = useState({
    nomProduit: '',
    description: '',
    prix: ''
    
});


const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setProduit({ ...produit, [name]: value });
    console.log(produit)
};



const handleUpdate = async (e) => {
  e.preventDefault();
    try {
        const response = await PageAdminService.modificationProduit(produit);
        console.log(response);
        toast.success("Le produit a bien été modifié");
       
    } catch (e) {
        console.error(e);
    }
  }
 


useEffect(() => {
    GetProduitByIdBis()
}, []);


  return (
    <>
    
   

    <form onSubmit={handleUpdate}>
      <div>
        <input type='hidden' name="PR_ID" value={produit.PR_ID}> 
        {/* permet de récupérer et d'envoyer l'id en étant caché */}
        </input>
        <label htmlFor="productName">Nom du produit:</label>
        <input
          type="text"
          id="productName"
          name='PR_Nom'
          value={produit.PR_Nom}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name='PR_Description'
          value={produit.PR_Description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="price">Prix:</label>
        <input
          type="number"
          id="price"
          name='PR_Prix'
          value={produit.PR_Prix}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Ajouter</button>
    </form>
    </>
 
  );
}



export default ModifAdmin;
