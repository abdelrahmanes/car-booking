import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Booking from "./components/booking/Booking";
import PageLayout from "./layout/PageLayout";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./Redux/store";
import { useEffect } from "react";
import { setCars } from "./Redux/features/car";
import { useGetItemsQuery } from "./services/car";

function App() {
  const currentLanguage = useSelector(
    (state: RootState) => state.language.language
  );
  const lang = localStorage.getItem("lang");
  const { data } = useGetItemsQuery("");
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("lang", currentLanguage);
  }, [currentLanguage]);

  useEffect(() => {
    if (data) {
      dispatch(setCars(data.specs));
    }
  }, [data]);
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
