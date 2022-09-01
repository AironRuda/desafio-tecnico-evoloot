import React, { useState } from "react";
import UserPool from "../UserPool.js";

import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

const Registro = () => {
  const [usuario, setUsuario] = useState("");
  const [telefono, setTelefono] = useState("");
  const [contra, setContra] = useState("");
  const [contra2, setContra2] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    UserPool.signUp(usuario, contra, [], null, (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
    });
  };

  const responseFacebook = (response) => {
    console.log(response);
  };

  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          className="entrada"
          type="text"
          placeholder="Usuario"
          name="usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          className="entrada"
          type="tel"
          placeholder="Telefono"
          name="phone"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
        <input
          className="entrada"
          type="password"
          placeholder="Contraseña"
          name="contraseña"
          value={contra}
          onChange={(e) => setContra(e.target.value)}
        />
        <input
          className="entrada"
          type="password"
          placeholder="Repetir contraseña"
          name="contraseña2"
          value={contra2}
          onChange={(e) => setContra2(e.target.value)}
        />
        <button className="btn btn-morado" type="submit">
          Crear
        </button>
      </form>
      <FacebookLogin
        appId="788274975660599"
        autoLoad={false}
        fields="name,email"
        callback={responseFacebook}
      />

      <GoogleLogin
        clientId="915354670638-ffae1a93lasgjdji297r8cohqda8aou4.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      ,
    </div>
  );
};

export default Registro;
