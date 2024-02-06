import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageContactService from '../Services/PageContactService';
import GlobalContext from '../context.js/context';
import '../Styles/PageContact.css';

const Contact = () => {

    const navigate = useNavigate();

    
    const { setAccessToken, setIsConnected } = useContext(GlobalContext)
         

    const [utilisateur, setUtilisateur] = useState({
        nom: '',
        prenom: '',
        adresse: '',
        telephone: '',
        email: '', 
        message: '',
                    
    });


    const isEmailValid = (email) => {
        // Expression régulière pour valider une adresse e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleChange = (event) => {
        const { name, value } = event.currentTarget;
        setUtilisateur({ ...utilisateur, [name]: value });
    };

    const handleAdd = async () => {
        // Vérifier si tous les champs obligatoires sont remplis
        if (!utilisateur.nom || !utilisateur.prenom || !utilisateur.adresse || !utilisateur.email || !utilisateur.telephone || !utilisateur.message) {
            toast.error("Veuillez remplir tous les champs");
            return;
        }

        // Vérifier si l'adresse e-mail est valide
        if (!isEmailValid(utilisateur.email)) {
            toast.error("Veuillez entrer une adresse e-mail valide");
            return;
        }

        try {
            await PageContactService.contact(utilisateur);
            toast.success("Le message a bien été envoyé");
            navigate("/PageAccueil");
            // Rediriger vers la page accueil après l'enregistrement réussi
            // navigate
        } catch (error) {
            console.error('Erreur lors de l\'envoi du message :', error);
            toast.error('Erreur lors de l\'envoi du message');
        }
    };


    return (
     
        <div className='header2'> 
      
            <div className="page-contact">
                <p> Vous souhaitez me contacter ou passer une commande ? 
                    Envoyez-moi un message en m'indiquant le produit, la couleur et la quantité que vous souhaitez.</p>
                <div className='container-contact'>
                
                    <div className="wrapper-contact">
                        <form>
                            <h2>Contact</h2>
                            <div className="input-inbox-contact">
                                <input
                                    type="text"
                                    placeholder="Nom"
                                    name='nom'
                                    value={utilisateur.nom}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="input-inbox-contact">
                                <input
                                    type="text"
                                    placeholder="Prenom"
                                    name='prenom'
                                    value={utilisateur.prenom}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="input-inbox-contact">
                                <input

                                    type="text"
                                    placeholder="Adresse"
                                    value={utilisateur.adresse}
                                    onChange={handleChange}
                                    name='adresse'
                                    required
                                />
                            </div>

                             <div className="input-inbox-contact">
                                <input
                                type="text"
                                placeholder="Téléphone"
                                name='telephone'
                                value={utilisateur.telephone}
                                onChange={handleChange}
                                pattern="[0-9]*"  // Expression régulière permettant d'accepter uniquement des chiffres
                                title="Veuillez saisir uniquement des chiffres" // Message d'erreur affiché en cas de saisie invalide
                                maxLength="10" // Limite le nombre de caractères à 10 (ou ajustez selon vos besoins)
                                required // Champ obligatoire
                            />
                             </div>
                             
                             <div className="input-inbox-contact">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name='email'
                                    value={utilisateur.email}
                                    onChange={handleChange}
                                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                                    title="Veuillez entrer une adresse e-mail valide"
                                    required

                                />
                            </div>

                           

                                                     
                           
                            <div className="input-inbox-contact-message">
                                <input
                                    type="text"
                                    placeholder="Votre message"
                                    name='message'
                                    value={utilisateur.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            

                            <button type="button" className="btn" onClick={handleAdd} >
                                Envoyer
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        
        </div >
    );
};

export default Contact;