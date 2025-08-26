import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import ResumeGenterator from "./pages/ResumeGenerator";
import FormPage from "./pages/FormPage";
import PNF from './pages/PNF';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/resumeGenerator" element={<ResumeGenterator />}/>
        <Route path="/form" element={<FormPage />}/>
        <Route path="*" element={<PNF />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App