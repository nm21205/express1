import React from 'react';
import Header from './Header';
import './Layout.scss';

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default Layout; 