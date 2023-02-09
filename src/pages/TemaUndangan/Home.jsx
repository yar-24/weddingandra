import React from "react";
import Navbar from "../../components/componenTema/Navbar";
import Countdown from "react-countdown";

const Home = ({ dataUndangan }) => {

  const Completionist = () => <span>You are good to go!</span>;

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="flex flex-row text-white font-Bree gap-2">
          <span className="bg-primary p-5 rounded-xl text-center">
            {`${days}`} Hari
          </span>
          <span className="bg-primary p-5 rounded-xl text-center">
            {`${hours}`} Jam
          </span>
          <span className="bg-primary p-5 rounded-xl text-center">
            {`${minutes}`} Menit
          </span>
          <span className="bg-primary p-5 rounded-xl text-center">
            {`${seconds}`} Detik
          </span>
        </div>
      );
    }
  };

  return (
    <>
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
              <Countdown date={Date.now() + 100000000} renderer={renderer} />
            </div>
          ) : (
            <div className="flex flex-row text-white font-Bree gap-2">
            <Countdown date={Date.now() + 100000000} renderer={renderer} />
            </div>
          )}
        </div>
        <Navbar />
      </div>
    </>
  );
};

export default Home;
