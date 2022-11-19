import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Contact, Blog, About, Home } from "./pages";
import { Footer, Header } from "./components";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
