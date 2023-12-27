import React, { useEffect, useState } from "react";
import CategoryCarousel from "../components/CategoryCarousel";
// import Simple from "../components/Simple";
// import "./Clubs.css";

const Clubs = () => {
   const [data, setData] = useState([]);

   useEffect(() => {
      const clubs = fetch("http://localhost:5000/api/v1/clubs")
         .then((response) => response.json())
         .then((data) => {
            // console.log(data);
            setData(data);
         });
   }, []);

   return (
      <div>
         <h1>clubhub home</h1>
         <div className="wrapper-carousel">
            <CategoryCarousel dataArray={data} />
         </div>
      </div>
   );
};

export default Clubs;
