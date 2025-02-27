import Consultation from "./components/Consultation";
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
    </div>
  );
}
