import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Booking from "./components/booking/Booking";
import PageLayout from "./layout/PageLayout";
import { useGetItemsQuery } from "./services/car";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCars } from "./Redux/features/carSlice";

function App() {
  return (
    <>
      <PageLayout>
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
