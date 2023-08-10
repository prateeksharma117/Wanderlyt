import "./App.css";
import { Routes, Route} from "react-router-dom";
import Service from "./routes/service";
import Contact from "./routes/contact";
import About from "./routes/about";
import Home from "./routes/home";
import Signup from "./routes/signup";


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signup/*" element={<Signup />} />
        </Routes>
    </div>
  );
}

export default App;
