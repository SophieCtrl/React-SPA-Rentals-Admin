import { Link } from "react-router-dom";

function Sidebar(props) {
  return (
    <div className="sidebar">
      <ul>
        {props.items.map((item, index) => (
          <Link key={index + item.name} to={item.link} alt={item.name}>
            {item.name}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
