import { Suspense, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AbroadStudy from "./pages/AbroadStudy";
import CountryStudy from "./pages/CountryStudy";
import University from "./pages/University";
import { useEffect } from "react";
import Specialty from "./pages/Specialty";
import NotFound from "./pages/NotFound";
import News from "./pages/News";
function App() {
  const location = useLocation();
  const [lang, setLang] = useState("az");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="App">
      <Suspense fallback={null}>
        <Header lang={lang} setLang={setLang} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/abroadstudy" element={<AbroadStudy />} />
          <Route
            path="/abroadstudy/:country"
            element={<CountryStudy lang={lang} setLang={setLang} />}
          />
          <Route
            path="/abroadstudy/:country/:university"
            element={<University />}
          />
          <Route
            path="/abroadstudy/:country/:university/:special"
            element={<Specialty />}
          />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
