import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Page from "./pages/Page";
import Categories from "./pages/Categories";
import About from "./pages/About"
import Home from "./pages/Home"
import Tent from "./pages/Tent"
// import Confirmation from "./pages/Confirmation"
import Account from "./pages/Account"
import Post from "./pages/Post"
import Login from "./pages/Login"
import './App.css';


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
    //   <div>
    //     {/* <NavTabs */}
    //       currentPage={this.state.currentPage}
    //       handlePageChange={this.handlePageChange}
    //     />
    //     {this.renderPage()}
    //   </div>

    <div>
            <Router>
                <div>

                    
                    
                    
                    
                    <Route exact path="/categories" component={Categories} />
                    <Route exact path="/tent" component={Tent} />  
                    {/* <Route exact path="/Confirmation" component={Confirmation} /> */}
                    <Route exact path="/account" component={Account} />
                    <Route exact path="/post" component={Post} />
                    <Route exact path="/about" component={About} /> 
                    <Route exact path="/login" component={Login} /> 
                    <Route exact path="/home" component={Home} /> 



                    <Route exact path="/categories/:categoryName" component={Page} />

                </div>
            </Router>
            </div>
    )}
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


