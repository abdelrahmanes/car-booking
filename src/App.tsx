import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Booking from "./components/booking/Booking";
import PageLayout from "./layout/PageLayout";
import { useSelector } from "react-redux";
import { RootState } from "./Redux/store";
import { useEffect } from "react";

function App() {
  const currentLanguage = useSelector(
    (state: RootState) => state.language.language
  );

  useEffect(() => {
    localStorage.setItem("lang", currentLanguage);
  }, [currentLanguage]);

  const lang = localStorage.getItem("lang");

  return (
    <>
      <PageLayout className={`${lang === "ar" ? "rtl" : "ltr"}`}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </PageLayout>
    </>
  );
}

export default App;
