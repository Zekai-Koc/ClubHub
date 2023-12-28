import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "semantic-ui-react";
import "./Simple.css";
import { carouselOptions } from "../utils/carousel_setup";

const Simple = ({ dataArray }) => {
   console.log(dataArray);
   return (
      <Carousel {...carouselOptions}>
         {dataArray.map((element) => {
            return (
               <div key={element._id}>
                  <h4 className="h4-club-name">{element.name}</h4>
                  <div>
                     <Image
                        className="carousel-image"
                        draggable={false}
                        style={{ width: "100%", height: "200px" }}
                        src={element.uriPhotos[0]}
                     />
                  </div>
                  <p className="para-club-description">Club Description</p>
               </div>
            );
         })}
      </Carousel>
   );
};

export default Simple;
