import React from "react";
import {Link} from "react-router-dom";
import Footer from "../components/Footer"




const Card = (props) => {
    

    return (
<div>
        <div className={"cards"}>
        <div className={"cardone"}>
            <h2>Klippning långt hår</h2>
            1 timme, 499kr <br/>
            <Link class={"btn"} to="/Form">Boka</Link>
        </div>
        <div className={"cardtwo"}>
            <h2>Klippning kort hår</h2>
            45 min, 399kr <br/>
            <Link class={"btn"} to="/Form">Boka</Link>
        </div>
                        </div>
                        <Footer/>

</div>

    )
}

export default Card;