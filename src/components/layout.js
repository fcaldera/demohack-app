import React from 'react';

import NavBar from './navbar';
import Routes from './routes';

function Layout(props) {
  return (
    <React.Fragment>

      <nav>
        <NavBar/>
      </nav>

      <main>
        <Routes/>
      </main>

    </React.Fragment>
  );
}

export default Layout;
