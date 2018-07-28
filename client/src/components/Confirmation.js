import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar"
import "./Interact.css"
import Jumbotron from "./Jumbotron"
import { DateRange } from 'react-date-range'
import Interact from "./Interact"


const Confirmation = props =>


    <div>
        <div>
            <Navbar />
            <Jumbotron id="jumbotron" />

            <div className="row" >
                <div className="mx-auto" id="calendar">
                    <DateRange id="date-range"
                        onInit={this.handleSelect}
                        onChange={this.handleSelect}
                    />
                </div>
            </div>
            <Interact />
        </div>
    </div>

export default Confirmation;

















