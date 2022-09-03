import "./loginPage.scss";
import { useStore } from "../../../store/store";
import { useState } from "react";

const LoginPage = () => {
  const { login } = useStore();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username !== null && password !== null) {
      login(username, password);
    }
  };

  return (
    <div className="loginPage">
      <div className="login">
        <div className="ui grid centered">
          <form onSubmit={handleLogin}>
            <div className="fields">
              <div className="required field">
                <div className="ui icon input">
                  <input
                    onChange={(e) => setUserName(e.target.value)}
                    value={username}
                    type="text"
                    name="username"
                    placeholder="Username"
                  />
                  <i className="user icon"></i>
                </div>
              </div>
              <div className="required field">
                <div className="ui icon input">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <i className="lock icon"></i>
                </div>
              </div>
              <div className="field">
                <div className="ui icon input">
                  <input type="submit" value="Login" />
                  <i className="right chevron icon"></i>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
