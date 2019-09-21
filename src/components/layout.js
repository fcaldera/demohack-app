import React from 'react';

import NavBar from './navbar';
import Routes from './routes';

function Layout(props) {
  return (
    <div>

      <nav>
        <NavBar/>
      </nav>

      <main>
        <Routes/>
      </main>

    </div>
  );
}

export default Layout;
