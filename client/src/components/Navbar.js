import React from "react";
import { Link } from "react-router-dom";

const Navbar = props =>
    <div>
        <nav class="navbar navbar-dark bg-success">
            <div class="info-section">
                <h1>EquipRENT</h1>
                {/*  Make it so that pressing EquipRENT should take you to the homepage. */}
            </div>
        </nav>

            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="">Find</span>
                </div>

                <div>
                    <input type="text" class="form-control"></input>
                </div>


                {/* THIS is the Google Maps Portion.

                    <div> 
                        <body onload="initialize()">
                            <div id="locationField">
                                <input id="autocomplete" class="controls" type="text"  placeholder="Enter a location"> 
                            </div> 
                            <div id="map"></div>
                        <script src='google-map.js'></script>
                        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA16l5HP5G1MyIsuiQ0BEl_xaQHcPYrRIY&libraries=places"></script>
                        </body>

                    </div> */}

                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button">Search!</button>
                </div>

            </div>
        </div>
    

export default Navbar;