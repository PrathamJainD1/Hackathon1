// src/App.jsx
import React from "react";
import NavigationBar from "./components/Navbar";
import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <div className="app">
      {/* Intro Section */}
      <section className="intro" id="home">
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
      </section>

      {/* Navbar below intro */}
      <NavigationBar />

      {/* Cultural Calendar Section */}
      <section id="cultural-calendar" className="section">
        <h2>{t("Cultural Calendar")}</h2>
        <p>
          {t(
            "Sikkim celebrates festivals throughout the year: Losar, Bumchu, Saga Dawa, and many more. Travelers can plan visits to coincide with these vibrant cultural events."
          )}
        </p>
      </section>

      {/* Travel Routes Section */}
      <section id="travel-routes" className="section">
        <h2>{t("Travel Routes")}</h2>
        <p>
          {t(
            "Popular travel routes include Gangtok, Pelling, and North Sikkim. Each route offers unique landscapes, monasteries, and adventure opportunities for explorers."
          )}
        </p>
      </section>

      {/* Booking / Participation Section */}
      <section id="booking-participation" className="section">
        <h2>{t("Booking / Participation")}</h2>
        <p>
          {t(
            "Plan your trip or participate in cultural events through our simple booking form. Explore packages, join festivals, and experience Sikkim like a local."
          )}
        </p>
      </section>
    </div>
  );
}

export default App;
