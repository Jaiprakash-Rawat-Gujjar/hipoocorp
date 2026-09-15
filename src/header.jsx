import { useNavigate } from "react-router-dom";

function Header() {

  const navigate = useNavigate();

  return (
    <div className="header">

      <img
        id="logo"
        src="./src/hipoo.png"
        alt="Hipoo Corporation Logo"
      />

      <h1 id="hc">
        HIPOO CORPORATION
      </h1>

      <nav>
        <ul>

          <li onClick={() => navigate("/")}>
            Home
          </li>

          <li onClick={() => navigate("/about")}>
            About
          </li>

          <li onClick={() => navigate("/contact")}>
            Contact
          </li>

        </ul>
      </nav>

      <button
        id="vfib"
        onClick={() => navigate("/verify")}
      >
        Verify Certificate
      </button>

      <button
        id="apyb"
        onClick={() => navigate("/apply")}
      >
        Apply
      </button>

    </div>
  );
}

export default Header;