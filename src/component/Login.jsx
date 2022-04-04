import React from "react";
import Youtube from "../Assets/img/yt.png";
import Youtubemini from "../Assets/img/Logo.svg";
import "../App.css";
import { Context } from "../component/Context/Authentication";

function Login() {
  const { setToken } = React.useContext(Context);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { user__email, user_password } = evt.target.elements;

    setToken({
      email: user__email.value.trim(),
      password: user_password.value.trim(),
    });
  };

  return (
    <main className="main">
      <img className="main__img" src={Youtube} alt="Youtube" />
      <form className="main__form" onSubmit={handleSubmit}>
        <img className="main__img__inner" src={Youtubemini} alt="Youtube" />
        <strong>Login</strong>

        <input
          className="form__input"
          type="email"
          defaultValue="eve.holt@reqres.in"
          name="user__email"
        />
        <strong>Password</strong>
        <input
          className="form__input"
          type="password"
          defaultValue="cityslicka"
          name="user_password"
        />

        <button className="main__button">Log in</button>
      </form>
      <h2 className="main__title">By Bekpulatov</h2>
    </main>
  );
}
export default Login;
