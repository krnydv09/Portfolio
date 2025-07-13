import React, { createContext, useState, useEffect } from 'react';

export interface GlobalContextType {
  loggedIn: boolean;
  showPanel: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setShowPanel: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Globals = createContext<GlobalContextType>({
  loggedIn: false,
  setLoggedIn: () => {},
  showPanel: false,
  setShowPanel: () => {},
});

// Provider component
export const GlobalsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    // Check login status on mount
    fetch('/api/auth/check')
      .then(res => res.json())
      .then(data => setLoggedIn(data.loggedIn))
      .catch(() => setLoggedIn(false));
  }, []);

  return (
    <Globals.Provider value={{ loggedIn, setLoggedIn, showPanel, setShowPanel }}>
      {children}
    </Globals.Provider>
  );
};