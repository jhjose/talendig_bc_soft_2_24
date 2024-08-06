import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Stock Market Simulator</h1>
            <p>Learn to trade stocks with our virtual trading platform.</p>
            <div id="links">
                <Link to='/market' style={{margin: 5}}>
                    <button>Market</button>
                </Link>
                <Link to='/portfolio' style={{margin: 5}}>
                    <button>Portfolio</button>
                </Link>
                <Link to='/alerts' style={{margin: 5}}>
                    <button>Alerts</button>
                </Link>
                <Link to='/help' style={{margin: 5}}>
                    <button>Help Center</button>
                </Link>
                <Link to='/sign_up' style={{margin: 5}}>
                    <button>Sign Up</button>
                </Link>
                <Link to='/sign_in' style={{margin: 5}}>
                    <button>Sign In</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;