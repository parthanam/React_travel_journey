import React from "react"
import Cards from "./Components/Cards.js"
import Navbar from "./Components/Navbar.js"
import data from "./data.js"

export default function App()
{   
     const cards = data.map(item => { 
         if(item.id < data.length)
         {
            return( 
                <div>
                    <Cards key={item.id} item={item}/>
                    <hr className="hori--line"/>
                </div>
            )                 
         }
         else
         {
             return( 
                    <Cards key={item.id} item={item}/>
            )
         }
     });
     
        return (
        <div className="Main">
            <Navbar />
            <div className="container">{cards}</div>
        </div>
    );
}