import React, { useState } from "react";
import { Homes } from "../components/homes/Homes";
import { Upcomming } from "../components/Upcomming/Upcomming";
import { latest, recommended, upcome } from "../dummyData";
import Footer from "../components/footer/Footer";

const HomePage = () => {
  const [items, setItems] = useState(upcome);
  const [item, setItem] = useState(latest);

  return (
    <>
      <Homes />
      <Upcomming items={items} title="Séries" />
      <Upcomming items={item} title="Filmes" />
      
    </>
  );
};

export default HomePage;
