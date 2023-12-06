import React, { useState } from 'react';
import AuthContext from '../context/authcontext'

const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
  
    return (
      <AuthContext.Provider value={{ isAuth, setIsAuth }}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;

  