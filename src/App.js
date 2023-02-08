import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
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
import InputData from "./pages/Dashboard/InputData";
import PilihHarga from "./pages/Dashboard/PilihHarga";
import PilihTema from "./pages/Dashboard/PilihTema";
import { getDatabase, ref, child, get } from "firebase/database";

const App = () => {
  const [user, setUser] = useState({});
  const [dataUndangan, setDataUndangan] = useState();
  const [loading, setLoading] = React.useState(false);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  React.useEffect(() => {
    if (user) {
      const dbRef = ref(getDatabase());
      get(child(dbRef, `dataUndangan/${user.uid}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            setDataUndangan(snapshot.val());
            setLoading(true);
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [user]);

  console.log(dataUndangan)

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route element={<LandingPage user={user} />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route
          element={user ? <Dashboard user={user} /> : <LandingPage />}
          path="/dashboard"
        >
          <Route index element={<PilihTema />} />
          <Route path="input-data" element={<InputData user={user} />} />
          <Route path="pilih-harga" element={<PilihHarga user={user} />} />
        </Route>
        <Route path="/undangan" element={<WelcomeCard dataUndangan={dataUndangan} />} />
        <Route path="/:nama" element={<WelcomeCard />} />
        <Route path="/home" element={<Home dataUndangan={dataUndangan} />} />
        <Route path="/couples" element={<Couples dataUndangan={dataUndangan} />} />
        <Route path="/event" element={<Event dataUndangan={dataUndangan} />} />
        <Route path="/wishes" element={<Wishes dataUndangan={dataUndangan} />} />
        <Route path="/gift" element={<Gift dataUndangan={dataUndangan} />} />
        <Route path="*" element={<h1>NotFound</h1>} />
      </Routes>
    </>
  );
};

export default App;
