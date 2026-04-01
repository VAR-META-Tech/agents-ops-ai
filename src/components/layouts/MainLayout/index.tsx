import React from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className='flex min-h-screen flex-col'>
      <div className='sticky-header'>
        <Header />
      </div>
      <div className='min-h-screen'>{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
