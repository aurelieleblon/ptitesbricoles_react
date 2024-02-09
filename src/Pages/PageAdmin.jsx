import React, { useEffect, useState } from 'react';
import '../Styles/PageAdmin.css'
import ProduitService from '../Services/ProduitService';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import PageAdminService from '../Services/PageAdminService';

const AdminPage = () => {
const [produits, setProduits] = useState([])
const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false); // État de connexion admin

const checkAdminLogin = () => {
  // Récupère le jeton JWT du stockage local
  const token = localStorage.getItem('Token');

  // Vérifie si le jeton existe
  if (token) {
 
    // Met à jour l'état isAdminLoggedIn en indiquant que l'admin est connecté
    setIsAdminLoggedIn(true);
  } else {
    // Aucun jeton trouvé, l'admin n'est pas connecté
    setIsAdminLoggedIn(false);
  }
}

  const GetProduit = async () => {
    try {
        const response = await ProduitService.GetProduit();
        
        setProduits(response.data.data)
          
    } catch (e) {
        console.log(e)
    }
}
console.log(produits.PR_ID);

const [newProduit, setNewProduit] = useState({
  PR_Nom: '',
  PR_Description: '',
  PR_Prix: ''
})

const handleNewChange = (event) => {
  const { name, value } = event.currentTarget;
  setNewProduit({ ...newProduit, [name]: value });
  
};

const handleAdd = (e) => {
  e.preventDefault();
  try {
      const response = PageAdminService.ajoutProduit(newProduit);
      toast.success("Le produit a bien été ajouté");
     }catch (e){
      console.log(e)
     }
     console.log(newProduit) 
     
} 
const deleteProduit = (id) => {
  try {
      const response = PageAdminService.suppressionProduit(id);
      setTimeout(() => {
        window.location.reload();
    }, 2000);
      toast.success("Le produit a bien été supprimé");
      
  } catch (e) {
      console.error(e);
  }
}
useEffect(() => {
  GetProduit() 
}, []) // dépendance vide pour que ça ait lieu que une seule fois et que ça ne dépende de rien. SIl y a qq chose dedans (ex user) ca change en fonction de user
 
console.log(produits)
return (
  <>
  {/* {isAdminLoggedIn && ( */}
  <form className='ajout' onSubmit={handleAdd}>
      
      <div>
        <h1> Ajout de produits </h1>
        <label htmlFor="newProduit">Nom du nouveau produit:</label>
        <input
          type="text"
          id="newProduit"
          name='PR_Nom'
          value={newProduit.PR_Nom}
          onChange={handleNewChange}
          required
        />
      </div>
      <div>
        <label htmlFor="newDescription">Description du nouveau produit:</label>
        <textarea
          id="newDescription"
          name='PR_Description'
          value={newProduit.PR_Description}
          onChange={handleNewChange}
          required
        />
      </div>
      
      <div>
        <label htmlFor="newPrice">Prix du nouveau produit:</label>
        <input
          type="number"
          id="newPrice"
          name='PR_Prix'
          value={newProduit.PR_Prix}
          onChange={handleNewChange}
          required
        />
      </div>
      <button className='bouton-ajouter' type="submit">Ajouter</button>
    </form>
  {/* )} */}
    
 
 
  <table>
        <thead>
            <tr>
            <th className='colonne-img'>Image</th>
            <th className='colonne-produit'>Nom du produit <img class="ASC-icon" src={""} width={10} alt="" /></th>
            <th  className='colonne-prixQ'>Prix</th>
           
            <th className='colonne-modSupp'>Modifier</th>
            <th className='colonne-modSupp'>Supprimer</th>
            </tr>
        </thead>
        <tbody>
        {produits.map ((prod) => (
            <tr>
            <td><img src={process.env.PUBLIC_URL + `/Assets/images/` + prod.PR_Image1}   height={50} alt="Produit" className='img-produit'/></td>
            <td>{prod.PR_Nom}</td>
            <td>{prod.PR_Prix}€</td>
            <td>
              <Link to={`/modifAdmin/${prod.PR_ID}`}>
                <button className='bouton-modifier'>Modifier</button>
              </Link>
            </td>

            <td><button className='bouton-supprimer' onClick={() => deleteProduit(prod.PR_ID)}>Supprimer</button>
</td>
            </tr>
        ))}
        </tbody>
    </table>
  
  
  </>
)

}

export default AdminPage;

