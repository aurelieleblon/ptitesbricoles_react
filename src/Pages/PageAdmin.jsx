import React, { useState } from 'react';
import '../Styles/PageAdmin.css'
import PageAdminService from '../Services/PageAdminService';
import { toast } from 'react-toastify';

const AdminPage = () => {
   
  const [produit, setProduit] = useState({
    nom : "",
    description : "",
    prix : "",
  });
  const [modificationProduit, setModificationProduit] = useState({
    idmodif: "",
    nommodif: "",
    descriptionmodif: "",
    prixmodif: ""
  });
  

  const handleChange = (event) => {
    const {name, value} = event.currentTarget;
    setProduit({...produit, [name] : value})
  }

  const handleChangeModification = (event) => {
    const { name, value } = event.currentTarget;
    setModificationProduit({ ...modificationProduit, [name]: value });
  };
  


  const handleAdd = () => {
    try {
        const response = PageAdminService.ajoutProduit(produit);
        toast.success("Le produit a bien été ajouté");
       }catch (e){
        console.log(e)
       }
       console.log(produit) 
       
  }
  const handleDelete = () => {
    try {
        const response = PageAdminService.suppressionProduit(produit.id);
        toast.success("Le produit a bien été supprimé");
        
    } catch (e) {
        console.error(e);
    }
}

const handleUpdate = async () => {
  try {
      const response = await PageAdminService.modificationProduit(modificationProduit);
      toast.success("Le produit a bien été modifié");
     
  } catch (e) {
      console.error(e);
  }
}
const handleLogout = () => {
  localStorage.removeItem('token');

  // Afficher le toast de déconnexion réussie
  toast.success("Déconnexion réussie");

  // Rediriger l'utilisateur vers la page de connexion après un court délai
  setTimeout(() => {
    window.location.href = '/ConnAdmin';
  }, 1000); // Redirection après 1 seconde (1000 millisecondes)
}


  return <>
    <div>
      <h2>Tableau d'Administration des Produits</h2>

      
      
<div className='admin'>
        <label className='label'>Nom du Produit:</label>
        <input type="text" value={produit.nom} name={"nom"} onChange={handleChange}/>
        <label className='label'>Description:</label>
        <input type="text" value={produit.description} name={"description"} onChange={handleChange} />
        <label className='label'>Prix:</label>
        <input type="text" value={produit.prix} name={"prix"} onChange={handleChange}/>
        
        <button className='boutonajout' onClick={handleAdd}>Ajouter Produit</button>
</div>
    

<div className='admin'>
  <label className='label'>ID du produit:</label>
  <input type="text" value={produit.id} name={"id"} onChange={handleChange}/>
  

  <button className='boutonsupp' onClick={handleDelete}>Supprimer Produit</button>
</div> 

<div className='admin'>
        <label className='label'>ID du Produit:</label>
        <input type="number" value={modificationProduit.idmodif} name={"idmodif"} onChange={handleChangeModification}/>
        <label className='label'>Nom modifié:</label>
        <input type="text" value={modificationProduit.nommodif} name={"nommodif"} onChange={handleChangeModification} />
        <label className='label'>Description modifiée:</label>
        <input type="text" value={modificationProduit.descriptionmodif} name={"descriptionmodif"} onChange={handleChangeModification} />
        <label className='label'>Prix modifié:</label>
        <input type="number" value={modificationProduit.prixmodif} name={"prixmodif"} onChange={handleChangeModification}/>
        
        <button className='boutonmodif' onClick={handleUpdate}>Modifier Produit</button>

</div>

<button className='boutondeconn' onClick={handleLogout}>  Se déconnecter </button>

</div>
 </>;
}
          
     

export default AdminPage;
