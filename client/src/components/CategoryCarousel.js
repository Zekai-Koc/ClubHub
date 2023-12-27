import React from "react";
import Simple from "./Simple";

const CategoryCarousel = ({ dataArray }) => {
   const firstCategory =
      dataArray &&
      dataArray.data &&
      dataArray.data[0] &&
      dataArray.data[0].category;

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
