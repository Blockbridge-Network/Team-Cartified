import { useContext } from 'react';
import { WalletContext } from '../contexts/WalletContext';

export const useWallet = () => {
  const context = useContext(WalletContext);
  
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  
  return context;
};