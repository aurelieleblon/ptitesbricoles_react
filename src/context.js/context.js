// import React from 'react';

// export default React.createContext({
//   user: null,
//   setUser: (value) => {},
//   isConnected: false,
//   setIsConnected: (value) => {}, 
  
//   // accessToken: null, 
//   // setAccessToken : (value) => {} // Ajoutez cette fonction pour gérer la connexion
// });

import React from 'react';

const GlobalContext = React.createContext({
  user: null,
  setUser: (value) => {},
  isConnected: false,
  setIsConnected: (value) => {
      localStorage.setItem('Token', value.token);

  },
 
});

export default GlobalContext;