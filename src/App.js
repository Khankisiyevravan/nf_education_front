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
import NewsDetail from "./pages/NewsDetail";
import Consultation from "./pages/Consultation";
function App() {
  const location = useLocation();
  const [lang, setLang] = useState(localStorage.getItem("i18nextLng"));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="App">
      <Suspense fallback={null}>
        <Header lang={lang} setLang={setLang} />
        <Routes>
          <Route
            path="/"
            element={<Homepage lang={lang} setLang={setLang} />}
          />
          <Route
            path="/about"
            element={<About lang={lang} setLang={setLang} />}
          />
          <Route
            path="/contact"
            element={<Contact lang={lang} setLang={setLang} />}
          />
          <Route
            path="/abroadstudy"
            element={<AbroadStudy lang={lang} setLang={setLang} />}
          />
          <Route
            path="/abroadstudy/:country"
            element={<CountryStudy lang={lang} setLang={setLang} />}
          />
          <Route
            path="/abroadstudy/:country/:university"
            element={<University lang={lang} setLang={setLang} />}
          />
          <Route
            path="/abroadstudy/:country/:university/:special"
            element={<Specialty lang={lang} setLang={setLang} />}
          />
          <Route
            path="/news"
            element={<News lang={lang} setLang={setLang} />}
          />
          <Route path="/consultation" element={<Consultation />} />
          <Route
            path="/news/:id"
            element={<NewsDetail lang={lang} setLang={setLang} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer lang={lang} setLang={setLang} />
      </Suspense>
    </div>
  );
}

export default App;
