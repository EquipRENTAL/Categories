import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar"

const Camping = props =>

    <div>
        <Navbar />

        <div class="container">
            <h1> Camping </h1>

            <h5> Browse by Categories </h5>
            <ul> 
                <p> Tents </p>
                <p> Sleeping Accesories </p>
                <p> Coolers </p>
                <p> Backpacks </p>
                <p> Canopies and Shelters </p>
                <p> Camp Cooking Equipment </p>
                <p> Camping Furniture </p>
                <p> Portable Heaters </p>
                <p> Camping Electronics </p>
                <p> Miscellaneous </p>

            </ul>

        </div>
    </div>




export default Camping;