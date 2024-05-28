import React, { createContext, useState, useContext } from 'react';

// Create the context
export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  // State to hold the logged-in user's data
  const [session, setSession] = useState(null);

  // Function to log in the user and set session data
  const login = (data) => {
    setSession(data);
  };

  // Function to log out the user and clear session data
  const logout = () => {
    setSession(null);
  };

  return (
    <SessionContext.Provider value={{ session, login, logout }}>
      {children}
    </SessionContext.Provider>
  );
};

// Custom hook to use the session context
export const useSession = () => {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return context;
};
