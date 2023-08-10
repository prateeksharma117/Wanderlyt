import { Link } from "react-router-dom";
import "./login.css";

const SigningUp = () => {
  return (
    <div className="container">
      <div className="login">
        <form action="">
          <h1>Sign Up</h1>
          <label htmlFor="text">First Name</label>
          <input type="text" placeholder="First Name" />
          <label htmlFor="text">Last Name</label>
          <input type="text" placeholder="Last Name" />
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Email" />
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
          <div className="selection">
            <p>Forget Password ?</p>
            <Link to="*"><h4>Login</h4></Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SigningUp;
