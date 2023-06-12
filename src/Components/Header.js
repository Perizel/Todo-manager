import React from 'react';
import '../App.css';

function Header() {
  return (
    <div>
      <nav className="nav">
        <div className="nav-left"> {/* Add the "nav-left" class here */}
          <a className="brand" href="/">
            PERIZEL
          </a>
        </div>
        <div className="nav-right"> {/* Add the "nav-right" class here */}
          <div className="tabs">
            <a href="https://wpwebinfotech.com">Task Management App by WPWeb Infotech</a>
          </div>
        </div>
      </nav>
    </div>
  );
}


export default Header;
