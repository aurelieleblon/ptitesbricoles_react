import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import PageListeEnvieService from '../Services/PageListeEnvieService';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../Styles/StyleProduit.css';



const ListeEnvies = () => {
    // Définition de l'état local pour stocker les éléments de la liste d'envies
    const [envies, setEnvies] = useState([]);

    // Fonction pour ajouter un nouvel élément à la liste d'envies
    const ajouterEnvie = (nouvelleEnvie) => {
        setEnvies([...envies, nouvelleEnvie]);
    };

    // Fonction pour supprimer un élément de la liste d'envies
    const supprimerEnvie = (index) => {
        const nouvelleListeEnvies = [...envies];
        nouvelleListeEnvies.splice(index, 1);
        setEnvies(nouvelleListeEnvies);
    };

    return (
        <div>
            <h2>Liste d'envies</h2>
            <ul>
                {envies.map((envie, index) => (
                    <li key={index}>
                        {envie}
                        <button onClick={() => supprimerEnvie(index)}>Supprimer</button>
                    </li>
                ))}
            </ul>
            <form onSubmit={(e) => {
                e.preventDefault();
                const nouvelleEnvie = e.target.elements.envie.value;
                ajouterEnvie(nouvelleEnvie);
                e.target.reset();
            }}>
                <input type="text" name="envie" />
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
};

export default ListeEnvies;
