import React from 'react';
import ReactDOM from 'react-dom';
import { Outlet, Link } from '@modern-js/runtime/router';
import { garfish } from '@modern-js/plugin-garfish/runtime';

garfish.setExternal({
  React,
  ReactDOM,
});

const Layout = () => (
  <div>
    <div>
      <Link to={'/sub'}>Mount Sub App</Link>
    </div>
    <div>
      <Link to={'/'}>Unmount Sub App</Link>
    </div>
    <Outlet />
  </div>
);

export default Layout;
