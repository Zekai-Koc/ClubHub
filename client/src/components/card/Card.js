import React from "react";
import { Image } from "semantic-ui-react";
import "./Card.css";

const Card = ({ element }) => {
   return (
      <div className="card-container">
         <div key={element._id} className="card">
            <h4 className="card-h4-club-name">{element.name}</h4>
            <div className="card-image-container">
               <Image
                  className="card-carousel-image"
                  draggable={false}
                  src={element.uriPhotos[0]}
               />
            </div>
            <p className="card-para-club-description">{element.description}</p>
         </div>
      </div>
   );
};

export default Card;
