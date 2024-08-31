import React from "react";
import {Link} from "react-router-dom"


const Navigation = ()=>{

    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid ">
            
            <ul className="nav navbar-nav d-flex flex-row justify-content-center">
                <li className="p-2" ><Link to="/addproduct">Add Product</Link></li>
                <li className="active p-2"><Link to="/">Home</Link></li>
            </ul>
            </div>
        </nav>
    )
}
export default Navigation;