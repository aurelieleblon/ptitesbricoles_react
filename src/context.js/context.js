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