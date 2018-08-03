import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar"
import { Link } from "react-router-dom";
import camping from '../imgs/camping.jpeg';
import sporting from '../imgs/sporting.jpeg';
import tools from '../imgs/Tools.jpeg';
import water from '../imgs/water.jpeg';
import API from "../utils/API";


class Categories extends Component {
    state = {

    };

    componentDidMount() {
        console.log("Categories componentDidMount")
        this.loadItems();

    };


    loadItems() {
        API.getItems()
            .then(res =>
                this.setState({ items: res.data })
            )
            .catch(err => console.log(err));
    };

    render() {
        console.log("Categories render")
        console.log("Categories props", this.props)
        console.log("Categories state", this.state)
        return (
            <div>
                <Navbar />
              


                <div class="container">
                    <h1> Shop by Categories: </h1>







                    <div>
                        <Link to="/categories/camping"><h2> Camping </h2> </Link>
                    </div>
                    <div>
                        <div>
                            <Link to="/categories/camping"><img src={camping} alt="camping" className="images" /></Link>
                        </div>

                    </div>



                    <div>
                        <Link to="/categories/sporting"><h2>Sporting Goods</h2></Link>
                    </div>
                    <div>
                        <Link to="/categories/sporting"><img src={sporting} alt="sporting" className="images" /></Link>
                    </div>



                    <div>
                        <Link to="/categories/water"><h2>Nautical</h2></Link>

                    </div>
                    <div>
                        <Link to="/categories/water"><img src={water} alt="water" className="images" /></Link>


                    </div>

                    <div>
                        <Link to="/categories/tools"><h2>Tools</h2></Link>

                    </div>
                    <div>
                        <Link to="/categories/tools"><img src={tools} alt="tools" className="images" /></Link>
                    </div>

                </div>
            </div>
        )
    }
}

export default Categories;
