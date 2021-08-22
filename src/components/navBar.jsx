import React from "react";
import { NavLink } from "react-router-dom";

// Using stateless function component
// NOTE : getover from this , pass propes to function

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/home">
        NavBar
      </NavLink>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              ABOUT
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              CONTACT US
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/cart">
              Shopping Cart
            </NavLink>
          </li>
        </ul>
      </div>
      <span className="badge badge-primary">{props.productCount}</span>
    </nav>
  );
};

export default NavBar;

// class NavBar extends Component {
//   state = {};
//   render() {
//     return (
//       <React.Fragment>
//         <nav className="navbar navbar-dark bg-dark">
//           <a className="navbar-brand" href="#">
//             NavBar
//           </a>
//           <span className="badge badge-primary">{this.props.productCount}</span>
//         </nav>
//       </React.Fragment>
//     );
//   }
// }

// export default NavBar;
