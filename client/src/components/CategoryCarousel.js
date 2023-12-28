import React from "react";
import Simple from "./Simple";

const CategoryCarousel = ({ dataArray }) => {
   const firstCategory = dataArray && dataArray[0].category;

   console.log("firstCategory: ", firstCategory);
   console.log("dataArray: ", dataArray);

   return (
      <>
         {firstCategory && (
            <>
               <h2 className="category-header">{firstCategory}</h2>
               <div className="wrapper-carousel">
                  <Simple dataArray={dataArray} />
               </div>
            </>
         )}
      </>
   );
};

export default CategoryCarousel;
