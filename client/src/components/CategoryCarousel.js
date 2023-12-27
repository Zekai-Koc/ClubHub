import React from "react";
import Simple from "./Simple";

const CategoryCarousel = ({ dataArray }) => {
   console.log("dataArray[0]: ", dataArray.data[0].category);
   return (
      <>
         <h2 className="category-header">{dataArray.data[0].category}</h2>
         <div className="wrapper-carousel">
            <Simple dataArray={dataArray} />
         </div>
      </>
   );
};

export default CategoryCarousel;
