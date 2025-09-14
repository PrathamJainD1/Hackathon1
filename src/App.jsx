import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <div className="app">
      {/* Intro */}
      <header className="intro">
        <h1>{t("Sikkim: Land of Monasteries, Mountains & Culture")}</h1>
        <p>
          {t(
            "Nestled in the lap of the majestic Himalayas, Sikkim is India’s hidden gem of natural beauty and cultural richness. Known for its snow-capped peaks like Kanchenjunga, vibrant Buddhist monasteries, and warm hospitality, Sikkim offers travelers a perfect blend of adventure and tranquility."
          )}
        </p>
        <p>
          {t(
            "From lush valleys and alpine meadows to traditional festivals and diverse cuisines, every corner of Sikkim tells a story of harmony between nature and culture. Whether you seek spiritual peace, thrilling treks, or just breathtaking views, Sikkim promises an unforgettable journey."
          )}
        </p>
      </header>

      {/* Navbar */}
      <Navbar />

      {/* New Sections */}
      <section className="section">
        <h2>📅 {t("Cultural Calendar")}</h2>
        <p>{t("Cultural Calendar Intro")}</p>
      </section>

      <section className="section">
        <h2>🗻 {t("Why Choose Sikkim")}</h2>
        <p>{t("WhyChooseText")}</p>
      </section>

      <section className="section">
        <h2>🌍 {t("Problems This Website Solves")}</h2>
        <p>{t("Problem Statement 1")}</p>
        <p>{t("Problem Statement 2")}</p>
      </section>
    </div>
  );
}

export default App;
