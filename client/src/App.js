import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Camping from "./components/Camping";
import Categories from "./components/Categories";
import Sporting from "./components/Sporting";
import Tools from "./components/Tools";
import Water from "./components/Water";
import './components/App.css';


const App = () =>  
    <Router>
        <div>
            <Navbar />
                <Route exact path="/" component={Categories}/>
                <Route exact path="/camping" component={Camping}/>
                <Route exact path="/sporting" component={Sporting}/>
                <Route exact path="/water" component={Water}/>
                <Route exact path="/tools" component={Tools}/>           
        </div>
    </Router>


export default App;
