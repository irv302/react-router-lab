import React from "react";

const Stock = (props) => {
    const stock = props.stocks.filter(data => data.symbol === props.match.params.symbol)[0]
    return ( 
        <div className="stock-page">
            <h2>{stock.name}/{stock.symbol}</h2>
            <h2>{stock.lastPrice}</h2>
        </div>
    )
}

export default Stock;