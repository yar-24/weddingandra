import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Header, Fitur, Harga, Accordion, Pembayaran } from "./container";

import { Navbar } from "./components";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { ToastContainer } from "react-toastify";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase-config";
import WelcomeCard from "./components/componenTema/WelcomeCard";
import Home from "./pages/TemaUndangan/Home";
import Couples from "./pages/TemaUndangan/Couples";
import Event from "./pages/TemaUndangan/Event";
import Wishes from "./pages/TemaUndangan/Wishes";
import Gift from "./pages/TemaUndangan/Gift";
import InputData from "./components/InputData";

const App = () => {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  console.log(user)

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route element={<LandingPage user={user} />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route
          element={user ? <Dashboard /> : <LandingPage />}
          path="/dashboard"
        />
        <Route path="/input-data" element={<InputData /> } />
        <Route path="/undangan" element={<WelcomeCard />} />
        <Route path="/:nama" element={<WelcomeCard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/couples" element={<Couples />} />
        <Route path="/event" element={<Event />} />
        <Route path="/wishes" element={<Wishes />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="*" element={<h1>NotFound</h1>} />
      </Routes>
    </>
  );
};

export default App;
