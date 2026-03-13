import { useState } from "react";
import { useLocation } from "react-router-dom";
import FAQ from "./Faq";
import ReviewsMarquee from "../components/ReviewsMarquee";

export default function DetailPage() {

    const location = useLocation();
    const brand = location.state?.brand;

    if (!brand) {
        return <h1>No Brand Found</h1>;
    }

    const [quantity, setQuantity] = useState(1);
    const [selectedPrice, setSelectedPrice] = useState(15);

    const prices = [15, 25, 30];

    const increment = () => setQuantity((prev) => prev + 1);
    const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    return (
        <>
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid md:grid-cols-2 gap-12 items-center relative">

                        <div className=" p-12 flex justify-center items-center">
                            <img src={brand} alt="AMC Gift Card" className="relative z-10" />
                        </div>

                        <div className="space-y-12">

                            <div>
                                <h1
                                    style={{
                                        fontSize: "30px",
                                        fontWeight: 600,
                                        marginBottom: "20px",
                                        color: "#111827",
                                    }}
                                    className="mb-12"
                                >
                                    AMC Theatres Gift Card United States
                                </h1>
                            </div>

                            <div className="flex gap-10 text-sm text-gray-600 mb-12">
                                <div className="flex items-center gap-2">
                                    <img src="/images/us.png" className="" />
                                    <div>
                                        <p className="text-gray-400">Country of use:</p>
                                        <p className="font-medium text-black">United States</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="/images/mas.png" className="" />
                                    <div>
                                        <p className="text-gray-400">Delivery:</p>
                                        <p className="font-medium text-black">
                                            On screen • Email
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4 mb-12">
                                {prices.map((price) => (
                                    <button
                                        key={price}
                                        onClick={() => setSelectedPrice(price)}
                                        className={`rounded-lg px-6 py-2 text-sm border transition ${selectedPrice === price
                                            ? "border-red-400 bg-red-100 text-red-500"
                                            : "bg-white shadow border-gray-300"
                                            }`}
                                    >
                                        {price} USD
                                    </button>
                                ))}
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex items-center border rounded-md">
                                    <button
                                        onClick={decrement}
                                        className="px-3 py-1 hover:bg-gray-100 transition"
                                    >
                                        −
                                    </button>
                                    <span className="px-4">{quantity}</span>
                                    <button
                                        onClick={increment}
                                        className="px-3 py-1 hover:bg-gray-100 transition"
                                    >
                                        +
                                    </button>
                                </div>

                                <button className="border border-red-400 text-red-500 rounded-full px-6 py-2 text-sm hover:bg-red-500 hover:text-white transition">
                                    Buy Now ({selectedPrice * quantity} USD)
                                </button>
                            </div>

                        </div>
                    </div>

                    <div className="border-t mt-12 pt-8"></div>

                    <div>
                        <h2 className="font-semibold text-lg mb-3">
                            What is the AMC Theatres gift card?
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-lg ">
                            Give your family and friends a movie-going adventure with an AMC gift card.
                            Or use it to pay for your own movie night. Whether you want to see the
                            latest blockbusters or indie movies. On the big or the small screen.
                            There is always something to see with AMC. Get your AMC gift card on
                            Recharge.com, it's fast safe and simple. Just enter your email address
                            and choose the amount you want. You can pay with your favorite payment
                            method. Once your order is complete, your gift card code will arrive
                            in your inbox in 30 seconds.
                        </p>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto">
                <img src="/images/bottom-banner.png" alt="" />
            </div>

            <FAQ />

            <ReviewsMarquee />
        </>

    );
}