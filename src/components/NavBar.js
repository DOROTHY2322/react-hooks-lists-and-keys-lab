import React from 'react';

function NavBar(props) {
  const links = ['home', 'about', 'projects'];

  const item = links.map((link, index) => {
    return (<a href={`#${link}`} key={index}>
      {link}
    </a>
  )})
  return (
    <nav>
      {item}
    </nav>
  );
}

export default NavBar;
