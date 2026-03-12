import React from "react";
import "../App";

const reviews = [
    {
        name: "Maria Sheford",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        img: "/images/profile.png",
    },
    {
        name: "Maria Sheford",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        img: "/images/profile.png",
    },
    {
        name: "Maria Sheford",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        img: "/images/profile.png",
    },
    {
        name: "Maria Sheford",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        img: "/images/profile.png",
    },
    {
        name: "Maria Sheford",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        img: "/images/profile.png",
    },
];

const ReviewCard = ({ review }) => {
    return (
        <div className="review-card">
            <img
                className="google-logo"
                src="/images/goo-i.png"
                alt="google"
            />

            <div className="stars">★★★★★</div>

            <p>{review.text}</p>

            <div className="review-user">
                <img src={review.img} alt={review.name} />
                <span>{review.name}</span>
            </div>
        </div>
    );
};

export default function ReviewsMarquee() {
    return (
        <section className="reviews-section">

            {/* Row 1 */}
            <div className="marquee">
                <div className="marquee-track">
                    {[...reviews, ...reviews].map((r, i) => (
                        <ReviewCard key={i} review={r} />
                    ))}
                </div>
            </div>

            {/* Row 2 */}
            <div className="marquee reverse">
                <div className="marquee-track">
                    {[...reviews, ...reviews].map((r, i) => (
                        <ReviewCard key={i} review={r} />
                    ))}
                </div>
            </div>

        </section>
    );
}