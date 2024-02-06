import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import utilisateurService from '../Services/UtilisateurService';
import GlobalContext from '../context.js/context';
import axios from 'axios';
import '../Styles/PageConnAdmin.css'

const ConnAdmin = () => {

    const navigate = useNavigate();

    //CONNEXION

    const [connexions, setConnexions] = useState({
        nom: '',
        prenom: '',
        email: '',
        password: '',
        
    });
    const { setAccessToken, setIsConnected } = useContext(GlobalContext)


    const handleConn = (event) => {
        const { name, value } = event.currentTarget;
        setConnexions({ ...connexions, [name]: value });
    };

   
    const handleConnexion = async (e) => {
        e.preventDefault();
        try {
            // utilisateur.role = "user"
            const response = await utilisateurService.fetchConnexion({
            nom: connexions.nom,
            prenom: connexions.prenom,
            email: connexions.email,
            password: connexions.password
        });
    
            if (response.data.access_token) {
                console.log(response.data.user);
                const accessToken = response.data.access_token;
                
    
                // Enregistrez le token dans le state (assurez-vous que vous avez déclaré 'accessToken' dans le state de votre composant)
                setAccessToken(accessToken);
                axios.defaults.headers["Authorization"]='Bearer '+accessToken
    
                setIsConnected(true);
    
                // Ajout message de bienvenue avec Toastify
                toast.success(`Bienvenue Admin, ${connexions.prenom} ${connexions.nom} !`);
                if (response.data.user.role == "admin") {
                    navigate('/PageAdmin');                                
                }
            } else {
                toast.error(response.message || 'Erreur de connexion. Veuillez vérifier vos informations.');
            }
        } catch (error) {
            toast.error(error.message || 'Une erreur est survenue lors de la connexion.');
            console.error(error);
        }
    };
    
    
    return (
     
        <div className='connexion'>
    <div className='container-connexion'>
        <div className="wrapper-connexion">
            <form onSubmit={handleConnexion}>
                <h2>Connexion Administrateur</h2>
                <input name='nom' value={connexions.nom} type="text" placeholder="Votre nom" required onChange={handleConn} />
                <input name='prenom' value={connexions.prenom} type="text" placeholder="Votre prénom" required onChange={handleConn} />
                <input name='email' value={connexions.email} type="email" placeholder="Votre adresse mail" required onChange={handleConn} />
                <input name='password' value={connexions.password} type="password" placeholder="Mot de passe" required onChange={handleConn} />
                <button type="submit" className="btnadmin">Se connecter</button>
            </form>
        </div>
    </div>
</div>
    )
}

export default ConnAdmin;
