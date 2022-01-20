import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/campuses'>Campuses</Link>
      <Link to='/students'>Students</Link>
    </nav>
  )
};

export default Nav;
