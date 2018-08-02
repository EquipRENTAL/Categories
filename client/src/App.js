import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Camping from "./components/Camping";
import Categories from "./components/Categories";
// import Sporting from "./components/Sporting";
// import Tools from "./components/Tools";
// import Water from "./components/Water";
// import Tent from "./components/Tent";
// import SleepingAccessories from "./components/SleepingAccessories";
// import Coolers from "./components/Coolers";
// import Backpacks from "./components/Backpacks";
// import Cooking from "./components/Cooking";
// import Heater from "./components/Heater";
// import Confirmation from "./components/Confirmation"
// import Account from "./components/Account"
// import Post from "./components/Post"
// import About from "./components/About"
// import './components/App.css';


class App extends Component {

    state = {
        date: new Date(),
    }

    handleSelect(date) {
        console.log(date);
    }

    componentDidMount() {
    }

    render() {
        return (
            <Router>
                <div>

                    <Route exact path="/:categoryName" component={Categories} />

                    
                    {/* When I work on Category I should use this.props.match.params.categoryName
                     */}
                    
                    
                    {/* <Route exact path="/" component={Categories} />
                    <Route exact path="/camping" component={Camping} />
                    <Route exact path="/sporting" component={Sporting} />
                    <Route exact path="/water" component={Water} />
                    <Route exact path="/tools" component={Tools} />
                    <Route exact path="/tent" component={Tent} />
                    <Route exact path="/sleeping" component={SleepingAccessories} />
                    <Route exact path="/coolers" component={Coolers} />
                    <Route exact path="/backpacks" component={Backpacks} />
                    <Route exact path="/cooking" component={Cooking} />
                    <Route exact path="/heater" component={Heater} />
                    <Route exact path="/Confirmation" component={Confirmation} />
                    <Route exact path="/account" component={Account} />
                    <Route exact path="/post" component={Post} />
                    <Route exact path="/about" component={About} />  */}

                </div>
            </Router>
        )
    }
}

export default App;



// const App = () =>
//     <Router>
//         <div>
//             <Route exact path="/" component={Categories} />
//             <Route exact path="/camping" component={Camping} />
//             <Route exact path="/sporting" component={Sporting} />
//             <Route exact path="/water" component={Water} />
//             <Route exact path="/tools" component={Tools} />
//             <Route exact path="/tent" component={Tent} />
//             <Route exact path="/sleeping" component={SleepingAccessories} />
//             <Route exact path="/coolers" component={Coolers} />
//             <Route exact path="/backpacks" component={Backpacks} />
//             <Route exact path="/cooking" component={Cooking} />
//             <Route exact path="/heater" component={Heater} />
//             <Route exact path="/Confirmation" component={Confirmation} />

//         </div>
//     </Router>


