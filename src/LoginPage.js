import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./userContext";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  async function login(e) {
    e.preventDefault();

    const response = await fetch("https://toko.ox-sys.com/login", {
      method: "POST",
      body: JSON.stringify({
        _username: username,
        _password: password,
        _subdomain: "toko",
      }),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      credentials: "include",
    });
    if (response.ok) {
      response.json().then(setRedirect(true));
    } else alert("wrong credentials");
  }

  if (redirect) {
    return <Navigate to={"/dashboard"} />;
  }

  return (
    <div className="login-page">
      <div className="login-form">
        <form action="" onSubmit={login}>
          <h2>Login</h2>
          <div>
            <p>Username</p>
            <input
              type="text"
              name=""
              id=""
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <p>Password</p>
            <input
              type="password"
              name=""
              id=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
