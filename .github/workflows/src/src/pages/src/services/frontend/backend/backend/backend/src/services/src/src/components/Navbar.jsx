import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "15px", background: "#F8D7DA" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/products">Products</Link>
    </nav>
  );
}

export default Navbar;
