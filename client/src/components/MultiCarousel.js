import React from "react";
import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import "./MultiCarousel.css";

// const responsive = {
//    desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 4,
//       slidesToSlide: 4, // optional, default to 1.
//    },
//    tablet: {
//       breakpoint: { max: 1024, min: 768 },
//       items: 3,
//       slidesToSlide: 3, // optional, default to 1.
//    },
//    mobile: {
//       breakpoint: { max: 767, min: 464 },
//       items: 2,
//       slidesToSlide: 1, // optional, default to 1.
//    },
// };

const responsive = {
   superLargeDesktop: {
      breakpoint: { max: 4000, min: 2000 },
      items: 7,
   },
   desktop: {
      breakpoint: { max: 1999, min: 1200 },
      items: 5,
   },
   tablet: {
      breakpoint: { max: 1199, min: 600 },
      items: 3,
   },
   mobile2: {
      breakpoint: { max: 599, min: 421 },
      items: 2,
   },
   mobile1: {
      breakpoint: { max: 420, min: 0 },
      items: 1,
   },
};

const sliderImageUrl = [
   //First image url
   {
      url: "https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_streamingupdate_2096_0908fa1b.jpeg",
   },
   {
      url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*",
   },
   //Second image url
   {
      url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*",
   },
   //Third image url
   {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU",
   },

   //Fourth image url

   {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU",
   },
];
const MultiCarousel = () => {
   return (
      <>
         <h3>Where is my carousel???</h3>
         <p>------------------------------</p>
         <Carousel
            className="carousel-container"
            responsive={responsive}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            partialVisible={false}
            dotListClass="custom-dot-list-style"
         >
            <div>
               <img
                  className="club-image"
                  src="https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_streamingupdate_2096_0908fa1b.jpeg"
                  alt="movie"
               />
            </div>
            <div>
               <img
                  className="club-image"
                  src="https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_streamingupdate_2096_0908fa1b.jpeg"
                  alt="movie"
               />
            </div>
            <div>
               <img
                  className="club-image"
                  src="https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_streamingupdate_2096_0908fa1b.jpeg"
                  alt="movie"
               />
            </div>
         </Carousel>
         <p>------------------------------</p>
      </>
   );
};

export default MultiCarousel;
