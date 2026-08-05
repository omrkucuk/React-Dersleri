import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "300px",
        margin: "0px auto",
        background: "#1B3C53",
        padding: "10px",
        borderRadius: "10px",
        gap: "20px",
      }}
    >
      <NavLink
        to="/"
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
          color: isActive ? "#E6501B" : "#fff",
          textDecoration: "none",
        })}
      >
        Ana Sayfa
      </NavLink>
      <NavLink
        to={"/about"}
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
          color: isActive ? "#E6501B" : "#fff",
          textDecoration: "none",
        })}
      >
        Hakkında
      </NavLink>
      <NavLink
        to={"/products"}
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
          color: isActive ? "#E6501B" : "#fff",
          textDecoration: "none",
        })}
      >
        Ürünler
      </NavLink>
    </nav>
  );
};

export default Navbar;
