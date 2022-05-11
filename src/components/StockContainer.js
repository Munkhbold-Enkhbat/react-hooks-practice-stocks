import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, handleStockClick }) {

  const renderStocks = () => {
    return stocks.map(stock => {
      return <Stock key={stock.id} stock={stock} handleStockClick={handleStockClick}/>
    })
  }

  return (
    <div>
      <h2>Stocks</h2>
      {renderStocks()}
    </div>
  );
}

export default StockContainer;
