import "./login.css";
import {Link} from "react-router-dom"


const Login = () => {
  return (
    <div className="container">
      <div className="login">
        <form action="">
          <h1>Login In</h1>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Email" />
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" />
          <div>
            <input type="checkbox" />
            <label htmlFor="check">Remember me</label>
          </div>
          <button>Login</button>
          <div className="selection">
            <p>Forget Password ?</p>
            <Link to="signingUp"><h4>Sign Up</h4></Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
