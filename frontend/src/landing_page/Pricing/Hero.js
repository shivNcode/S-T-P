import React from "react";
function Hero() {
  return (
    <div className="container text-center p-4 mt-3 mb-3">
      <br></br>
      <br></br>
      <h1 className="fs-3">Charges</h1>
      <br></br>
      <h3 className="fs-4 text-muted">List of all charges and taxes</h3>
      <br></br>
      <div className="row">
        <div className="col-1 p-8  text-center'"></div>
        <div className="col-3 ">
          <img style={{ width: "70%",}} src="media/images/pricingEquity.svg" alt="pricing" />
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-3 ">
          <img style={{ width: "70%"}} src="media/images/intradayTrades.svg" alt="pricing" />
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-3 ">
          <img style={{ width: "70%"}} src="media/images/pricingEquity.svg" alt="pricing" />
          <h1 className="fs-3">Free direct MF</h1>
          <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default Hero;
