import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ myStocks }) {
  // console.log("My Stocks:", myStocks)
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        myStocks.map(stock => <Stock key={stock.id} stock={stock}/>)
      }
    </div>
  );
}

export default PortfolioContainer;
