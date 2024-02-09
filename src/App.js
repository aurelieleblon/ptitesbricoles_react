import './App.css';
import PageProduit from "./Pages/PageProduit"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PageAccueil from './Pages/PageAccueil';
import PageInscription from "./Pages/PageInscription";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalContext from './context.js/context.js'
import React, { useState, useEffect } from 'react';
import PageCreation from './Pages/PageCreation';
import PageAdmin from './Pages/PageAdmin';
import PageContact from './Pages/PageContact';
import PageVideo from './Pages/PageVideo';
import PageConnexion from './Pages/PageConnexion';
import Footer from './Components/Footer';
import Header from './Components/Header';
import PagePanier from './Pages/PagePanier';
import PageModifAdmin from './Pages/PageModifAdmin.jsx';



  function App() {
  const [user, setUser] = useState(window.localStorage.getItem('user'));
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    const storedToken = localStorage.getItem('Token');
    if (storedToken) {
      setIsConnected(true);
    }
  }, []);

    return <>
    
    <GlobalContext.Provider value={{ isConnected, setIsConnected, user, setUser }}>
      <BrowserRouter>
      <Header/>
     
        <Routes>
          
        
          <Route path={"/"} element={<PageAccueil/>} />
          <Route path={"/produit/:PR_ID"} element={<PageProduit />}/>
          <Route path={"/PageAccueil"} element={<PageAccueil/>}/> 
          <Route path={"/connexion"} element={<PageInscription/>}/>
          <Route path={"/Creations"} element={<PageCreation/>}/>
          <Route path={"/PageAdmin"} element={isConnected ? <PageAdmin /> : <PageConnexion />} />
          <Route path={"/PageConnexion"} element={<PageConnexion/>}/>
          <Route path={"/PageContact"} element={<PageContact/>}/>
          <Route path={"/PageVideo"} element={<PageVideo/>} />
          <Route path={"/PagePanier"} element={<PagePanier/>} />
          <Route path={"/modifAdmin/:PR_ID"} element={<PageModifAdmin/>} />
          
        
        
          
          
          </Routes>
          </BrowserRouter>
          </GlobalContext.Provider> 
      
      <ToastContainer
        position="bottom-right"
        autoClose={1800}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      
      <Footer/>
      
    </>;
  }

export default App;
