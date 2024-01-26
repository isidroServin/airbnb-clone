import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/Card";
import activities from "./../src/data";
function App() {
  const cards = activities.map((item) => {
    return <Card {...item} key={item.id} />;
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
/*<section className="cards--list">
        {
          //map through the array of objects and create a new card component for each object in the array
          activities.map((activity) => {
            return <Card key={activity.id} info={activity} />;
          })
        }
      </section>*/

export default App;
