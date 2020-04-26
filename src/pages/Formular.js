import React from "react";
import Footer from "../components/Footer"



const Formular = ()=>{


    return (
        <div>
        <form className={"forms"}>
              Namn: <input type={"text"} placeholder={"Namn"} ></input>
              Önskad tid: <input type={"text"} placeholder={"Tid"} ></input>  
              Telefonnummer: <input type={"text"} placeholder={"Telefonnummer"} ></input>  
              <button className={"btn"} >Bekräfta</button>

                
        </form>
        <Footer/>

        </div>


    )
}


export default Formular;