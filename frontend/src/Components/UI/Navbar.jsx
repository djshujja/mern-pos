import './Navbar.css'
import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = props => {
    return(
    <header>

    <nav>
    <div>
      <Link to='/' className="brand-logo">Point Of Sale</Link>
      <ul id="nav-mobile">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/order">Order</Link></li>
      </ul>
    </div>
  </nav>
    </header>
    )

  

}

export default Navbar;