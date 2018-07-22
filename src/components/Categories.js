import React from "react";
import { Link } from "react-router-dom";
import camping from './camping.jpeg';
import sporting from './sporting.jpeg';
import tools from './Tools.jpeg';
import water from './water.jpeg';

const Categories = props => 


<div>
    <div class ="container">   
        <div>
            <h2> Camping Gear </h2>
        </div>
        <div>
            <img src={camping} alt="camping" className="images"/>
            <ul>
                <p class="description"> Item 1 </p>
                <a href="/camping" target="_blank" class="description">browse more items</a>
            </ul>
        </div>
        <div>
            <h2> Sporting Goods </h2>
        </div>
        <div>
            <img src={sporting} alt="sporting" class="images"/><br/>
            <ul>
                <p class="description"> Item 1 </p>
                <a href="/sporting" target="_blank" class="description">browse more items</a>
            </ul>
        </div>
        <div>
            <h2> Nautical </h2>
        </div>  
        <div>
            <img src={water} alt="water" class="images"/><br/>
            <ul>
                <p class="description"> Item 1 </p>
                <a href="/water" target="_blank" class="description">browse more items</a>
            </ul>
        </div>
        <div>
            <h2> Tools and Misc. </h2>
        </div>      
        <div>
            <img src={tools} alt="tools" class="images"/><br/>
            <ul>
                <p class="description"> Item 1 </p>
                <a href="/tools" target="_blank" class="description">browse more items</a>
            </ul>
        </div>
    </div>
 </div> 

export default Categories;