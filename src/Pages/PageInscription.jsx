import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import utilisateurService from '../Services/UtilisateurService';
import '../Styles/PageInscription.css';

const Inscription = () => {

    const navigate = useNavigate();

   
    //INSCRIPTION

    const [utilisateur, setUtilisateur] = useState({
        nom: '',
        prenom: '',
        adresse: '',
        email: '',
        password: '',
        telephone: '',
        
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
        if (!utilisateur.nom || !utilisateur.prenom || !utilisateur.email || !utilisateur.password || !utilisateur.adresse) {
            toast.error("Veuillez remplir tous les champs");
            return;
        }

        // Vérifier si l'adresse e-mail est valide
        if (!isEmailValid(utilisateur.email)) {
            toast.error("Veuillez entrer une adresse e-mail valide");
            return;
        }

        try {
            await utilisateurService.addUtilisateur(utilisateur);
            toast.success(`Bienvenue, ${utilisateur.prenom} ! Vous avez été inscrit(e).`);
            navigate("/PageAccueil");
            // Rediriger vers la page accueil après l'enregistrement réussi
            // navigate
        } catch (error) {
            console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
            toast.error('Erreur lors de la création de l\'utilisateur');
        }
    };


    return (
                   

            <div className={`page-inscri`}>
                <div className='container-inscri'>
                   
                     <div className="wrapper-inscri">
                        <p> En vous inscrivant, vous recevrez nos nouveautés et des offres promotionnelles.</p>
                        <form>
                            <h2>Inscription</h2>
                            
                            <div className="input-inbox">
                                <input
                                    type="text"
                                    placeholder="Nom"
                                    name='nom'
                                    value={utilisateur.nom}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-inbox">
                                <input
                                    type="text"
                                    placeholder="Prenom"
                                    name='prenom'
                                    value={utilisateur.prenom}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="input-inbox">
                                <input

                                    type="text"
                                    placeholder="Adresse"
                                    value={utilisateur.adresse}
                                    onChange={handleChange}
                                    name='adresse'
                                />
                            </div>

                            <div className="input-inbox">
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

                            <div className="input-inbox">
                                <input
                                    type="password"
                                    placeholder="Mot de passe"
                                    name='password'
                                    value={utilisateur.password}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="input-inbox">
                                <input
                                 type="text"
                                 placeholder="Téléphone"
                                 name='telephone'
                                 value={utilisateur.telephone}
                                 onChange={handleChange}
                                 pattern="[0-9]*"  // Expression régulière permettant d'accepter uniquement des chiffres
                                 title="Veuillez saisir uniquement des chiffres" // Message d'erreur affiché en cas de saisie invalide
                                 maxLength="10" // Limite le nombre de caractères à 10 (ou ajustez selon vos besoins)
                                 required 
                                />
                            </div>

                            <button type="button" className="btn" onClick={handleAdd} >
                                S'inscrire
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            
        
    );
};

export default Inscription;
