import React from "react";
function Hero() {
  return <>
    <div className="container-fluid" style={{ backgroundColor: "#387ED1" , borderRadius:"1px"}}>
        <div className="row p-3" >
             <div className="col-2">

             </div>
            <div className="col-4 m-4">
                <h4>
                    Support Portal
                </h4>
                <br></br>
                <input className="form-control" placeholder="Search for support articles"></input>
                <br>
                </br>
                <a href=" " className="m-2" style={{color:"white"}}>Track account opening</a>
                <a href=" " className="m-2" style={{color:"white"}}>Track segment activation</a>
                <a href=" " className="m-2" style={{color:"white"}}>Intraday margins</a>

                <a href=" " className="m-2" style={{color:"white"}}>Kite user manual</a>
                <a href=" " className="m-2" style={{color:"white"}}>Learn how to create a ticket</a>
                <br></br>
                    <br></br>

            </div>
            <div className="col-4">
                <a href=" ">
                   <h4 style={{color:"white" , textDecoration:"none"}}>My Tickets</h4>
                </a>
                <h5>Features</h5>
                <p>1</p>
                 <p>1</p>
            </div>
            <div className="col-2"></div>

        </div>
    </div>
  </>;
}

export default Hero;
