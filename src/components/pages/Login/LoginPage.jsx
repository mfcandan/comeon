import "./loginPage.scss";
import { useStore } from "../../../store/store";
import { useState } from "react";

const LoginPage = () => {
  const { login } = useStore();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleLogin = (e) => {
    e.preventDefault();
    if (userName !== null && password !== null) {
      login(userName, password);
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
                    value={userName}
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
