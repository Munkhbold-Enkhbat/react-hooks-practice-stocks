import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, handleStockClick, stockType }) {

  const renderStocks = () => {
    const stocksToDisplay = stocks.filter(stock => stock.type === stockType)
    return stocksToDisplay.map(stock => {
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
