import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Body from "./components/Body";
import Sales from "./components/Sales";
import Education from "./components/Education";
import Recruit from "./components/Recruit";
import Revenue from "./components/Revenue";
import Marketing from "./components/Marketing";
import Customer from "./components/Customer";
import Contact from "./components/Contact";
import Login from "./components/Login";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element=<Body /> />
          <Route path="/sales" element=<Sales /> />
          <Route path="/education" element=<Education /> />
          <Route path="/recruit" element=<Recruit /> />
          <Route path="/revenue" element=<Revenue /> />
          <Route path="/marketing" element=<Marketing /> />
          <Route path="/customer" element=<Customer /> />
          <Route path="/contact" element=<Contact /> />
          <Route path="/login" element=<Login /> />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
