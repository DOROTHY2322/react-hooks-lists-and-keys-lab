import React from 'react';

function NavBar(props) {
  const links = ['home', 'about', 'contact'];

  return (
    <nav>
      {links.map((link, index) => (
        <a href={`#${link}`} key={`link-${index}`}>
          {link}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;
