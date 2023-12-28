import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Simple.css";
import { carouselOptions } from "../utils/carousel_setup";
import Card from "./card/Card";

const Simple = ({ dataArray }) => {
   console.log(dataArray);
   return (
      <Carousel {...carouselOptions}>
         {dataArray.map((element) => (
            <Card element={element} />
         ))}
      </Carousel>
   );
};

export default Simple;
