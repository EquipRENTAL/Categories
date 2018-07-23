import React from "react";
import { Link } from "react-router-dom";
import camping from './camping.jpeg';
import sporting from './sporting.jpeg';
import tools from './Tools.jpeg';
import water from './water.jpeg';

const Categories = props =>


    <div>
        <div class="container">

            <div class="columns">
                <div class="column">
                    <div>
                        <h2> Camping </h2>
                    </div>
                    <div>
                        <img src={camping} alt="camping" className="images" />

                        <div>
                            <a class="button is-small is-rounded" href="/camping" role="button">Browse</a>
                        </div>

                    </div>
                </div>

                <div class="column">
                    <div>
                        <h2> Sporting Goods </h2>
                    </div>
                    <div>
                        <img src={sporting} alt="sporting" class="images" /><br />
                        <div>
                             <a class="button is-small is-rounded" href="/sporting" role="button">Browse</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="columns">
                <div class="column">
                    <div>
                        <h2> Nautical </h2>
                    </div>
                    <div>
                        <img src={water} alt="water" class="images" /><br />
                        <div>
                            <a class="button is-small is-rounded" href="/water" role="button">Browse</a>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div>
                        <h2> Tools and Misc. </h2>
                    </div>
                    <div>
                        <img src={tools} alt="tools" class="images" /><br />
                        <div>
                             <a class="button is-small is-rounded" href="/tools" role="button">Browse</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

export default Categories;