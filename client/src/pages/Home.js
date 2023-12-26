import React from "react";

const Home = () => {
   const clubs = fetch("http://localhost:5000/api/v1/clubs")
      .then((response) => response.json())
      .then((data) => {
         console.log(data);
      });

   return (
      <div className="App">
         <header className="App-header">
            <h1>clubhub home</h1>
         </header>
      </div>
   );
};

export default Home;
