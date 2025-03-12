import { NavLink } from "react-router";
import { useAuth } from "../AuthContextStore";

export const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <header className="section-navbar">
        <div className="container">
          <div className="logo-brand">
            <NavLink to="/">
              <h1>Recipé</h1>
            </NavLink>
          </div>

          <nav className="navbar">
            <ul>
              {isLoggedIn ? (
                <>
                <li className="nav-item">
                  <NavLink className={"nav-link"} to="/logout">
                    Saved Recipé
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={"nav-link"} to="/fav-item">
                    Logout
                  </NavLink>
                </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink className={"nav-link"} to="/login">
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={"nav-link"} to="/register">
                      Register
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
