import React, { useEffect, useState } from "react";
import CategoryCarousel from "../components/CategoryCarousel";
import { classifyData, modifyClassifiedData } from "../utils/string_methods";

const Clubs = () => {
   const [clubs, setClubs] = useState([]);

   useEffect(() => {
      fetch("http://localhost:5000/api/v1/clubs")
         .then((response) => response.json())
         .then((clubs) => {
            console.log("clubs data: ", clubs);
            // setClubs(clubs);
            const classifiedData = Object.values(classifyData(clubs.data));
            modifyClassifiedData(classifiedData);
            console.log("classifiedData: ", classifiedData);
            setClubs(classifiedData);
         });
   }, []);

   return (
      <div>
         <h1>clubs</h1>

         <div className="wrapper-carousel">
            {clubs.map((data, index) => (
               <CategoryCarousel key={index} dataArray={data} />
            ))}
         </div>
      </div>
   );
};

export default Clubs;
