// // src/Login.js
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './login.css'; // Import the CSS file if you are using external CSS

// const Login = () => {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [emailError, setEmailError] = useState('');
//     const [passwordError, setPasswordError] = useState('');

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         const user = JSON.parse(sessionStorage.getItem('user'));

//         // Validate email and password
//         const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//         if (!emailRegex.test(email)) {
//             setEmailError('Invalid email address');
//             return; // Stop further execution
//         } else {
//             setEmailError('');
//         }

//         if (password.length < 8) {
//             setPasswordError('Password must be at least 8 characters long');
//             return; // Stop further execution
//         } else {
//             setPasswordError('');
//         }

//         if (emailRegex.test(email) && password.length >= 8) {
//             if (user && email === user.email && password === user.password) {
//                 // Redirect based on role
//                 if (user.role === 'user') {
//                     alert('Login successful!');
//                     navigate('/search'); // Redirect to SearchSection
//                 } else if (user.role === 'driver') {
//                     alert('Login successful!');
//                     navigate('/publish-ride'); // Redirect to PublishRide
//                 }
//             } else {
//                 alert('Invalid email or password');
//             }
//         }
//     };

//     return (
//         <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: '#007BFF', color: 'white' }}>
//             <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm">
//                 <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">Login</h2>
//                 <form onSubmit={handleSubmit} className="text-black">
//                     <div className="mb-4">
//                         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//                             Email
//                         </label>
//                         <input
//                             type="email"
//                             id="email"
//                             placeholder="Email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         />
//                         {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//                             Password
//                         </label>
//                         <input
//                             type="password"
//                             id="password"
//                             placeholder="Password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         />
//                         {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
//                     </div>
//                     <div className="flex flex-col items-center">
//                         <button
//                             type="submit"
//                             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline mb-2"
//                         >
//                             Login
//                         </button>
//                         <p className="text-center mt-4">
//                             Don't have an account?<Link to="/signup" className="text-blue-500 px-4 py-2">Sign Up</Link>
//                         </p>
//                         <p className="text-center mt-2">
//                             <Link to="/forgot-password" className="text-blue-500">Forgot Password?</Link>
//                         </p>
                    
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Login;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const user = JSON.parse(sessionStorage.getItem('user'));

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            setEmailError('Invalid email address');
            return; 
        } else {
            setEmailError('');
        }

        if (password.length < 8) {
            setPasswordError('Password must be at least 8 characters long');
            return; // Stop further execution
        } else {
            setPasswordError('');
        }

        if (emailRegex.test(email) && password.length >= 8) {
            if (user && email === user.email && password === user.password) {
                // Display success message and redirect based on role
                setModalMessage('Login successful!');
                setModalVisible(true);

                if (user.role === 'user') {
                    setTimeout(() => navigate('/search'), 2000); // Redirect after 2 seconds
                } else if (user.role === 'driver') {
                    setTimeout(() => navigate('/publish-ride'), 2000); // Redirect after 2 seconds
                }
            } else {
                setModalMessage('Invalid email or password');
                setModalVisible(true);
            }
        }
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: '#007BFF', color: 'white' }}>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm">
                <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">Login</h2>
                <form onSubmit={handleSubmit} className="text-black">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
                    </div>
                    <div className="flex flex-col items-center">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline mb-2"
                        >
                            Login
                        </button>
                        <p className="text-center mt-4">
                            Don't have an account?<Link to="/signup" className="text-blue-500 px-4 py-2">Sign Up</Link>
                        </p>
                        <p className="text-center mt-2">
                            <Link to="/forgot-password" className="text-blue-500">Forgot Password?</Link>
                        </p>
                    </div>
                </form>
            </div>

            {/* Modal Popup */}
            {modalVisible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded shadow-lg text-center w-80">
                        <img
                            width="50px"
                            src="https://w7.pngwing.com/pngs/709/448/png-transparent-green-check-business-internet-service-organization-computer-software-web-page-green-registration-success-button-web-design-company-text-thumbnail.png"
                            alt="Success"
                            className="mx-auto mb-4"
                        />
                        <h1 className="text-xl font-bold text-green-600">{modalMessage}</h1>
                        <button
                            onClick={closeModal}
                            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                        >
                            Done
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;

