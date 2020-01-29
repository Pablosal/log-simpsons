import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Sign.css";
const SignUp = ({ users, SendUser }) => {
  let history = useHistory();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({ nombre: "", contraseña: "" });
  useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("user")) {
      setIsAuthenticated(true);
    }
  }, []);
  const handleSub = () => {
    history.push("/home");
    SendUser(user);
  };
  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const logout = () => {
    console.log(isAuthenticated);
    setIsAuthenticated(false);
    localStorage.clear();
  };
  return (
    <div className="App">
      <form className="Registrarse form-group">
        <div className="heading">
          <h1>Registrate para continuar</h1>
        </div>
        <div className="inputs">
          <input
            type="text"
            onChange={handleChange}
            value={user.nombre}
            placeholder="Nombre"
            name="nombre"
            className="form-control"
          />
          <input
            placeholder="Contraseña"
            type="password"
            onChange={handleChange}
            value={user.contraseña}
            name="contraseña"
            className="form-control"
          />
        </div>

        <Button
          variant="contained"
          onClick={() => handleSub(user)}
          color="secondary"
        >
          Registrate
        </Button>
      </form>
      <Link to="/home">
        <Button variant="contained" color="primary" onClick={logout}>
          Ya estoy registrado
        </Button>
      </Link>
    </div>
  );
};

export default SignUp;
