// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


const Navbar = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            
                <Link className="text-2xl font-bold text-blue-600" to="/">RideShare</Link> {/* Use Link for navigation */}
                <ul className="flex space-x-4">
                    <li><Link className="text-gray-700 hover:text-blue-600" to="/">Home</Link></li> {/* Link to Home */}
                    <li><Link className="text-gray-700 hover:text-blue-600" to="/rides">Rides</Link></li>
                    <li><Link className="text-gray-700 hover:text-blue-600" to="/about">About</Link></li> {/* Updated About link */}
                    <li><Link className="text-gray-700 hover:text-blue-600" to="/contact">Contact Us</Link></li>
                </ul>
                <div className="flex space-x-4">
                    <Link className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" to="login">Login</Link>
                    <Link className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" to="Signup">Sign Up</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;