import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../components/componenTema/Navbar";

const Home = ({ dataUndangan }) => {
  const [jam, setJam] = useState({})
  
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  
  let interval = useRef();

  if(dataUndangan){

    const jam = dataUndangan.tglAk;
    setJam(jam)
  }

  const startTimer = () => {
    const countdownDate = new Date(jam).getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    const someref = interval.current;
    startTimer();
    return () => {
      clearInterval(someref);
    };
  });

  return (
    <div className="w-screen min-h-screen bg-main bg-cover bg-center bg-no-repeat">
      <div className="w-full h-full p-8 flex flex-col items-center justify-center gap-5">
        <h1 className="text-2xl text-primary font-Bree">The Wedding Of</h1>
        <img src="mempelai.png" alt="Mempelai" width={180} className="ml-8" />
        <div className="flex flex-col gap-1">
          {dataUndangan ? (
            <h1 className="font-shalimar font-extrabold text-5xl text-primary text-center">
              {dataUndangan.namaP} & {dataUndangan.namaW}
            </h1>
          ) : (
            <h1 className="font-shalimar font-extrabold text-5xl text-primary text-center">
              Amar & Tanto
            </h1>
          )}

          <h2 className="font-Poppins text-2xl text-primary text-center">
            {/* {dataUndangan.tglAk} */}
          </h2>
        </div>
        {dataUndangan ? (
          <div className="flex flex-row text-white font-Bree gap-2">
            <span className="bg-primary p-5 rounded-xl text-center">
              {`${timerDays}`} Hari
            </span>
            <span className="bg-primary p-5 rounded-xl text-center">
              {`${timerHours}`} Jam
            </span>
            <span className="bg-primary p-5 rounded-xl text-center">
              {`${timerMinutes}`} Menit
            </span>
            <span className="bg-primary p-5 rounded-xl text-center">
              {`${timerSeconds}`} Detik
            </span>
          </div>
        ) : (
          <div className="flex flex-row text-white font-Bree gap-2">
            <span className="bg-primary p-5 rounded-xl text-center">
              13 Hari
            </span>
            <span className="bg-primary p-5 rounded-xl text-center">
             7 Jam
            </span>
            <span className="bg-primary p-5 rounded-xl text-center">
              6 Menit
            </span>
            <span className="bg-primary p-5 rounded-xl text-center">
              10 Detik
            </span>
          </div>
        )}
      </div>
      <Navbar />
    </div>
  );
};

export default Home;
