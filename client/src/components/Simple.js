import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "semantic-ui-react";
import "./Simple.css";
import { Fragment } from "react";

const responsive = {
   desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 60,
   },
   tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50,
   },
   mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30,
   },
};

const Simple = ({ dataArray }) => {
   console.log(dataArray);
   return (
      <Carousel partialVisible itemClass="image-item" responsive={responsive}>
         {dataArray.data.map((element) => {
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
