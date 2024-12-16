// src/components/OffersSection.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const OffersSection = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleButtonClick = (offer) => {
        if (offer.buttonText === "Get Started" || offer.buttonText === "Join Now") {
            navigate('/signup'); // Redirect to the signup page for these buttons
        } else if (offer.buttonText === "Book Now") {
            navigate('/search'); // Redirect to the Search page for the "Book Now" button
        }
        // You can add more conditions for other buttons if needed
    };

    return (
        <section className="bg-gray-100 py-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-8 text-blue-600">Exclusive Offers Just for You!</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {offersData.map((offer, index) => (
                        <div key={index} className="offer bg-white text-blue-600 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <h3 className="text-xl font-semibold">{offer.title}</h3>
                            <p>{offer.description}</p>
                            <button 
                                onClick={() => handleButtonClick(offer)} // Call the function on button click
                                className="bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700 transition duration-300"
                            >
                                {offer.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const offersData = [
    {
        title: "50% Off Your First Ride!",
        description: "Sign up today and enjoy 50% off your first ride with us. Experience the convenience of ridesharing at half the price!",
        buttonText: "Get Started"
    },
    {
        title: "Your Safety is Our Priority",
        description: "We ensure a safe and secure ride every time. Our drivers are background checked and trained to provide you with a comfortable experience.",
        buttonText: "Learn More"
    },
    {
        title: "Refer a Friend, Earn Rewards!",
        description: "Invite your friends to join our rideshare community and earn ride credits for every successful referral. Share the love!",
        buttonText: "Refer Now"
    },
    {
        title: "Weekend Rides at 30% Off!",
        description: "Enjoy your weekends with discounted rides. Get 30% off on all rides every Saturday and Sunday!",
        buttonText: "Book Now" // This button will redirect to the Search page
    },
    {
        title: "Join Our Loyalty Program",
        description: "Sign up for our loyalty program and earn points for every ride. Redeem points for discounts and exclusive offers!",
        buttonText: "Join Now"
    }
];

export default OffersSection;