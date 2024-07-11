import { NavLink } from "react-router-dom";

function Navbar(props) {
  return (
    <nav>
      <ul>
        {props.items.map((item, index) => (
          <li key={index + item.name}>
            <NavLink key={index + item.name} to={item.link} alt={item.name}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
