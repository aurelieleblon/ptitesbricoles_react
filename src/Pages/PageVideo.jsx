import React from 'react';
import '../Styles/PageVideo.css';
import { Link } from 'react-router-dom'; // Importation du fichier CSS

const PageVideo = () => {
    return (
        <div className="page-container">
            <h1> Nos créations s'adaptent à toutes les morphologies. Pour vous aider à ajuster nos produits, voici quelques vidéos explicatives : comment porter le foulard et le headband ?</h1>
            <div className="video-container">
                <div className="video-wrapper">
                    <video controls width="500px" height="400px">
                        <source src={process.env.PUBLIC_URL + '/Assets/videofoul.mp4'} type="video/mp4" />
                    </video>
                </div>

                <div className="video-wrapper">
                    <video controls width="500px" height="500px">
                        <source src={process.env.PUBLIC_URL + '/Assets/videoheadband.MOV'} type="video/mp4" />
                    </video>
                </div>
            </div>
            <Link to={"/PageAccueil"}> Retour à l'accueil</Link> 
        </div>
    );
}


export default PageVideo;

