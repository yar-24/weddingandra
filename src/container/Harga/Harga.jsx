import React from "react";

import "./Harga.css";

function Harga() {
  return (
    <div
      className="app__wrapper-harga app__harga flex__center section__padding"
      id="harga"
    >
      <div className="app__harga-tittle">
        <h1 className="headtext__cormorant">Paket & Harga Undangan</h1>
      </div>

      <div className="app__harga-row">
        <div className="col-xs-12 col-md-4">
          <div className="card harga__rate">
            <div className="card__body">
              <div className="harga__tittle">
                <h3>BASIC</h3>
              </div>
              <div className="harga__nominal">
                <h2>Rp. 150.000</h2>
              </div>
              <ul>
                <li className="fitur">Preset/Design standart</li>
                <li>Quotes</li>
                <li>Detail Info Acara</li>
                <li>Profil Pasangan</li>
                <li>Navigasi Lokasi</li>
                <li>Menambahkan ke google calendar</li>
                <li>Unlimited Custom jadwal acara</li>
                <li>RSVP</li>
                <li>Masa Aktif Selamanya Edit Tanpa Batas</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-md-4">
          <div className="card harga__rate">
            <div className="card__body">
              <div className="harga__tittle">
                <h3>STANDAR</h3>
              </div>
              <div className="harga__nominal">
                <h2>Rp. 200.000</h2>
              </div>
              <ul>
                <li>Semua yang ada di paket STANDAR</li>
                <li>Amplop digital</li>
                <li>Kirim Ucapan</li>
                <li>Gallery (max 10)</li>
                <li>Love Stories</li>
                <li>Buku Tamu</li>
                <li>Background Music (list only)</li>
                <li>Custom Domain (additional) (list only)</li>
                <li>Masa Aktif Selamanya Edit Tanpa Batas (list only)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-md-4">
          <div className="card harga__rate">
            <div className="card__body">
              <div className="harga__tittle">
                <h3>Premium</h3>
              </div>
              <div className="harga__nominal">
                <h2>Rp. 250.000</h2>
              </div>
              <ul>
                <li>Semua yang ada di paket PREMIUM</li>
                <li>Gallery (max 20)</li>
                <li>Background Music (list dan custom)</li>
                <li>Bahasa Indonesia/Inggris</li>
                <li>Custom Background Gambar Layout Section</li>
                <li>Custom Domain (additional)</li>
                <li>Live Streaming</li>
                <li>Scan QR code tamu</li>
                <li>Masa Aktif Selamanya Edit Tanpa Batas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Harga;
