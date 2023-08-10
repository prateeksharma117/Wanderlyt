import { Route, Routes } from "react-router-dom";
import Hero from "../components/HeroStyle";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";
import signup_hero_img from "../images/signup_hero_img.jpg";
import Login from "../components/login";
import SigningUp from "../components/signingup";

const Signup = () => {
  return (
    <>
      <NavBar />
      <Hero
        cName="hero-mid"
        heroImg={signup_hero_img}
        title="Sign Up"
        url="/"
        btnClass="hide"
      />
      <div>
        <Routes>
          <Route path="*" element={<Login/>} />
          <Route path="signingUp" element={<SigningUp/>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
