// src/components/Header.tsx
import React from 'react';
import Logo from '../assets/icdlogo.png';

const Header = () => {
  return (
    <header className="flex items-center p-4 bg-white shadow-sm">
      <img src="Logo" />                                                      
      <h1 className="text-lg font-bold">Fostering Global Integration</h1>
    </header>
  );
};

export default Header;
