import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import camping from './camping.jpeg';
import sporting from './sporting.jpeg';
import tools from './Tools.jpeg';
import water from './water.jpeg';

const Categories = props =>


    <div>
        <Navbar />
        <div class="container">
            <div class="columns">
                <div class="column">
                    <div>
                        <a href="/camping"><h2> Camping </h2> </a>
                    </div>
                    <div>
                        <div>
                            <a href="/camping"><img src={camping} alt="camping" className="images" /> </a>

                        </div>

                    </div>
                </div>

                <div class="column">
                    <div>
                        <a href="/sporting"><h2> Sporting Goods </h2> </a>
                    </div>
                    <div>

                        <a href="/sporting"><img src={sporting} alt="sporting" className="images" /> </a>

                    </div>
                </div>
            </div>

            <div class="columns">
                <div class="column">
                    <div>
                        <a href="/water"><h2> Nautical </h2> </a>
                    </div>
                    <div>
                        <a href="/water"><img src={water} alt="water" className="images" /> </a>

                    </div>
                </div>
                <div class="column">
                    <div>
                        <a href="/tools"><h2> Tools </h2> </a>
                    </div>
                    <div>
                        <a href="/tools"><img src={tools} alt="tools" className="images" /> </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

export default Categories;