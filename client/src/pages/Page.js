import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar"
import Sidebar from "../components/Sidebar/Sidebar"

const Camping = props =>

    <div>
        <Navbar />
        <Sidebar />
        <div class="container">
            <h1>{props.match.params.categoryName}</h1>

            <h5>  </h5>



            <img>

            </img>

        

        </div>
    </div>




export default Camping;