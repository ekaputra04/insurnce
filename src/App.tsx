import Consultation from "./components/Consultation";
import Contact from "./components/Contact";
import Customer from "./components/Customer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Policies from "./components/Policies";

export default function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <Home />
      <Policies />
      <Consultation />
      <Customer />
      <Contact />
    </div>
  );
}
