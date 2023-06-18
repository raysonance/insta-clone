import React from 'react';

const AuthContext = React.createContext({
  signIn: (username: string, password: string) => {},
  signOut: () => {},
  signUp: () => {},
});

const useAuth = () => React.useContext(AuthContext);

export {useAuth, AuthContext};
