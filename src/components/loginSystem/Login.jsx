import React, { useState } from "react";
import { Button } from "@material-ui/core";
import "./Log.css";
import { useHistory } from "react-router-dom";
const Login = ({ users }) => {
  let history = useHistory();
  const [logedUser, setLogedUser] = useState({ nombre: "", contraseña: "" });
  const [token, setToken] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const LoghandleChange = e => {
    setLogedUser({ ...logedUser, [e.target.name]: e.target.value });
  };
  const authUser = () => {
    console.log(token);
    const userFinded = users.find(a => a.nombre === logedUser.nombre);
    if (logedUser.contraseña === userFinded.contraseña) {
      setToken("ZWwgZ2F0byBlcyByb2pvIGNvbiB1biBwZW5lIHN1Y2lv");
      localStorage.setItem("user", JSON.stringify(logedUser));
      localStorage.setItem("token", `${JSON.stringify(token)}`);
    } else if (logedUser.contraseña !== userFinded.contraseña) {
      alert("Contraseña no coincide");
      return;
    }
    if (localStorage.getItem("token") && localStorage.getItem("user")) {
      setIsAuthenticated(true);
    }
    history.push("/dashboard");
  };
  return (
    <div className="layout">
      <div className="Login">
        <div className="headLog">
          <h1>Logeate</h1>
        </div>
        <input
          type="text"
          onChange={LoghandleChange}
          value={logedUser.nombre}
          placeholder="Nombre"
          name="nombre"
          className="form-control"
        />
        <input
          placeholder="Contraseña"
          type="password"
          onChange={LoghandleChange}
          value={logedUser.contraseña}
          name="contraseña"
          className="form-control"
        />

        <Button onClick={() => authUser()} variant="contained" color="primary">
          Logeate
        </Button>
      </div>
    </div>
  );
};

export default Login;
