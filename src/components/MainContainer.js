import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [myStocks, setMyStocks] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then(res => res.json())
      .then(data => setStocks(data))
  }, [])

  const handleStockClick = (e) => {
    const stockName = e.target.innerText.split(/\r?\n/)[0]
    // console.log("stockName:", stockName);
    const chosenStock = stocks.find(stock => stock.name === stockName || stock.ticker === stockName.split(":")[0])
    // console.log("chosenStock:", chosenStock)
    setMyStocks([...myStocks, chosenStock])    
  }

  // console.log("My Stocks:", myStocks);

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} handleStockClick={handleStockClick}/>
        </div>
        <div className="col-4">
          <PortfolioContainer myStocks={myStocks}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
