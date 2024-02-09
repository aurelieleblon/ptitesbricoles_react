import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Auth from '../Services/Auth';
import UtilisateurService from '../Services/UtilisateurService';
import context from '../context.js/context';
import { useNavigate } from 'react-router-dom';
import "../Styles/PageConnexion.css"
import GlobalContext from '../context.js/context';



const Connexion = () => {
    const{isConnected, setIsConnected, user, setUser} = useContext(GlobalContext);
   
    const [utilisateur, setUtilisateur] = useState({email: '', password: '' });

    const navigate = useNavigate()

    const handleConn = (event) => {
        const { name, value } = event.currentTarget;
        setUtilisateur({ ...utilisateur, [name]: value });
        
    };

    const handleConnexion = async (e) => {
        e.preventDefault();
        try {
            const response = await UtilisateurService.loginUtilisateur(utilisateur);
            console.log(response);
           
            setIsConnected(true);
            setUser(response.data.user); 
            localStorage.setItem("token", response.data.access_token)
            localStorage.setItem('user', JSON.stringify(response.data.user));
            toast.success("Bonjour " + response.data.user.UT_Nom + " "+ response.data.user.UT_Prenom + "!");
            setTimeout(() => {
              navigate("/PageAccueil");
          }, 1000);
        } catch (e) {
            toast.error("Veuillez vérifier vos identifiants et mot de passe.");
        }
    };
  

    return (
        <div className='connexion'>
            <div className='container-connexion'>
                <div className="wrapper-connexion">
                    <form onSubmit={handleConnexion}>
                        <h2>Connexion</h2>
                        
                        <input name='email' value={utilisateur.email} type="email" placeholder="Votre adresse mail" required onChange={handleConn} />
                        <input name='password' value={utilisateur.password} type="password" placeholder="Mot de passe" required onChange={handleConn} />
                        <button type="submit" className="btnadmin">Se connecter</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Connexion;
