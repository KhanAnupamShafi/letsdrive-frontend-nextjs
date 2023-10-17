'use client';

import Login from '@/components/view/Auth/Login';
import Register from '@/components/view/Auth/Register';
import { useState } from 'react';

const AuthSection = () => {
  const [currentView, setCurrentView] = useState('register');
  const toggleView = () => {
    setCurrentView((prevView) =>
      prevView === 'register' ? 'signin' : 'register'
    );
  };

  return (
    <>
      <div className="col-span-2 lg:col-span-1">
        {currentView === 'register' ? (
          <Register setCurrentView={toggleView} />
        ) : (
          <Login setCurrentView={toggleView} />
        )}
      </div>
    </>
  );
};

export default AuthSection;
