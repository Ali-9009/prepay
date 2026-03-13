import React, { useState, useRef, useEffect } from "react";

const carriers = [
    { name: "AT&T", logo: "/images/att.png" },
    { name: "UIC Mobile", logo: "/images/uic.png" },
    { name: "T-Mobile", logo: "/images/tmobile.png" },
    { name: "Cricket Wireless", logo: "/images/cricket.png" },
    { name: "MobileX", logo: "/images/mobilex.png" },
];

const plans = [
    {
        title: "Unlimited North America Plan",
        price: 60,
        desc: "Unlimited talk, text & data in the US, Canada, and Mexico. AT&T 5G Network. 10GB hotspot data per line per month",
    },
    {
        title: "Unlimited Monthly",
        price: 50,
        desc: "Unlimited 5G with 50GB of premium data. Unlimited talk and text. Unlimited mobile hotspot with 3g speed. Canada and Mexico Add-On Available",
    },
    {
        title: "Starter Monthly",
        price: 45,
        desc: "15GB of premium data with unlimited 2G after. Unlimited talk and text. Canada and Mexico Add-On Available",
    },
];



// Main Flow
export default function ActivateFlow() {
    

    return (
        <div className="max-w-6xl mx-auto p-4">
            
        </div>
    );
}