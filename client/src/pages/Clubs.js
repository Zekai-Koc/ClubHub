import React, { useEffect, useState } from "react";
import CategoryCarousel from "../components/CategoryCarousel";

const Clubs = () => {
   const [data, setData] = useState([]);

   useEffect(() => {
      fetch("http://localhost:5000/api/v1/clubs")
         .then((response) => response.json())
         .then((data) => {
            // console.log("clubs data: ", data);
            setData(data);
         });
   }, []);

   return (
      <div>
         <h1>clubs</h1>

         <div className="wrapper-carousel">
            <CategoryCarousel dataArray={data} />
         </div>
      </div>
   );
};

export default Clubs;
