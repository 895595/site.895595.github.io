import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import './Header.css';


const NavLinks=[
    {
        path:"tasks",
        display:"Tasks",
        
        
    },
    {
        path:"employes",
        display:"Employes",
    }
]


function Header(){
    const [nav,setnav]=useState("")
    return(
        <div>
            <div className="divIteam">
                <div className="navVrapper">
                    <div className="Navigation">
                        <ul className={nav?"menu menuactiv":"menu"}>
                                    {
                                            NavLinks.map((iteam,index)=>{
                                            return(
                                                <li key={index} className="navIteam">
                                                    <NavLink to={iteam.path}>{iteam.display}</NavLink>
                                                    
                                                </li>
                                                
                                            )
                                        })  
                                    }
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header