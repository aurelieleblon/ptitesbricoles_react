import './App.css';
import PageProduit from "./Pages/PageProduit"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PageAccueil from './Pages/PageAccueil';
import PageInscription from "./Pages/PageInscription";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalContext from './context.js/context';
import React, { useState, useContext } from 'react';
import PageCreation from './Pages/PageCreation';
import PageAdmin from './Pages/PageAdmin';
import PageContact from './Pages/PageContact';
import PageListeEnvie from './Pages/PageListeEnvie';
import PageVideo from './Pages/PageVideo';
import PageConnAdmin from './Pages/PageConnAdmin';
import Footer from './Components/Footer';
import Header from './Components/Header';
import PagePanier from './Pages/PagePanier'



  function App() {
  const [user, setUser] = useState(null)
  const [isConnected, setIsConnected] = useState(false)
  const [accessToken, setAccessToken] = useState(null)
    return <>
    
    
      <BrowserRouter><Header/>
      <GlobalContext.Provider value={{ user, setUser, isConnected, setIsConnected, accessToken, setAccessToken }}>
        <Routes>
          
        
          <Route path={"/"} element={<PageAccueil/>} />
          <Route path={"/produit/:PR_ID"} element={<PageProduit />}/>
          <Route path={"/PageAccueil"} element={<PageAccueil/>}/> 
          <Route path={"/connexion"} element={<PageInscription/>}/>
          <Route path={"/Creations"} element={<PageCreation/>}/>
          <Route path={"/PageAdmin"} element={<PageAdmin/>}/>
          <Route path={"/ConnAdmin"} element={<PageConnAdmin/>}/>
          <Route path={"/PageContact"} element={<PageContact/>}/>
          <Route path={"/PageListeEnvie"} element={<PageListeEnvie/>}/>
          <Route path={"/PageVideo"} element={<PageVideo/>} />
          <Route path={"/PagePanier"} element={<PagePanier/>} />
        
        
          
          
          </Routes>
          </GlobalContext.Provider> 
      </BrowserRouter>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
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
