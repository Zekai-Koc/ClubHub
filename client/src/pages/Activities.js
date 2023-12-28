import React, { useEffect, useState } from "react";
import CategoryCarousel from "../components/CategoryCarousel";

const Activities = () => {
   const [data, setData] = useState([]);

   useEffect(() => {
      fetch("http://localhost:5000/api/v1/activities")
         .then((response) => response.json())
         .then((data) => {
            console.log("activities data: ", data);
            setData(data);
         });
   }, []);

   return (
      <div>
         <h1>activities</h1>

         <div className="wrapper-carousel">
            <CategoryCarousel dataArray={data} />
         </div>
      </div>
   );
};

export default Activities;
