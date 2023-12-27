import React from "react";
import MultiCarousel from "../components/MultiCarousel";
import Simple from "../components/Simple";
import "./Clubs.css";

const Clubs = () => {
   const clubs = fetch("http://localhost:5000/api/v1/clubs")
      .then((response) => response.json())
      .then((data) => {
         console.log(data);
      });

   return (
      <div className="App">
         <header className="App-header">
            <h1>clubhub home</h1>
            <Simple className="simple-carousel" />
         </header>
      </div>
   );
};

export default Clubs;
