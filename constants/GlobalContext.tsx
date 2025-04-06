// GlobalContext.tsx (Note the .tsx extension)
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the type for our global state
interface GlobalState {
  sfxVolume: number;
  setsfxVolume: (volume: number) => void;
  anim: boolean;
  setAnim: (animationEnabled: boolean) => void;
  toggleAnim: () => void;
}

// Create the context with the defined type
const GlobalContext = createContext<GlobalState | undefined>(undefined);

// Create a custom hook to use the context
export const useGlobalContext = (): GlobalState => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};

// Define the props for the provider component
interface GlobalProviderProps {
  children: ReactNode;
}

// Create the provider component
export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [sfxVolume, setsfxVolume] = useState<number>(1);
  const [anim, setAnim] = useState<boolean>(true);

  const toggleAnim = () => {
    setAnim((prevState) => !prevState);
  };

  return (
    <GlobalContext.Provider value={{ sfxVolume, setsfxVolume, anim, setAnim, toggleAnim }}>
      {children}
    </GlobalContext.Provider>
  );
};