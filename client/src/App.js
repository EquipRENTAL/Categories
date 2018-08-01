import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Parallax} from 'react-parallax';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './components/App.css';


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
                    <Navbar />
                    <Parallax
                        blur={{ min: -10, max: 7 }}
                        bgImage={require('./components/campingGear.jpg')}
                        bgImageAlt="gear"
                        strength={400}
                        >
                        <div style={{ height: '1024px' }} />
                    </Parallax>
                    <Parallax
                        blur={{ min: -10, max: 7 }}
                        bgImage={require('./components/campingSunset.jpg')}
                        bgImageAlt="sunset"
                        strength={200}
                        >
                        <div style={{ height: '820px' }} />
                    </Parallax>
                    <Parallax
                        blur={0}
                        bgImage={require('./components/outdoorNight.jpg')}
                        bgImageAlt="sunset"
                        strength={200}
                        >
                        <div style={{ height: '880px' }} />
                    </Parallax>
                    <Footer />
                </div>
            </Router>
        )
    }
}

export default App;