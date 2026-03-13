import { useParams, useNavigate } from "react-router-dom";
import ReviewsMarquee from "../components/ReviewsMarquee";
import FAQ from "./Faq";
import { categories } from "../data/categories";

export default function NavPage() {

    const { category } = useParams();
    const navigate = useNavigate();  
    const data = categories[category];

    if (!data) {
        return <h1>Page not found</h1>;
    }

    return (
        <>
            <section className="pt-16">
                <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">

                    {/* LEFT CONTENT */}
                    <div>
                        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#111] leading-tight mb-3">
                            {data.title}
                        </h1>

                        <p className="text-gray-700 text-lg mt-2">
                            Great as a gift, brilliant for budget control
                        </p>

                        {/* SELECT BOX */}
                        <div className="mt-6 bg-gray-200 backdrop-blur rounded-xl p-4 w-[320px] shadow-sm">
                            <label className="text-md text-gray-800 block mb-2">
                                Country of use
                            </label>

                            <select className="w-full bg-white rounded-lg border border-gray-200 px-3 py-2 focus:outline-none">
                                <option>United States of America</option>
                            </select>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center md:justify-end">
                        <img
                            src={data.image}
                            alt=""
                            className="drop-shadow-xl"
                        />
                    </div>

                </div>
            </section>

            {/* BRAND CARDS */}
            <div className="flex flex-wrap gap-4 mt-6 items-center justify-center max-w-6xl mx-auto px-6">
                {data.brands.map((brand, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center cursor-pointer"
                        onClick={() => navigate("/DetailPage", { state: { brand } })}
                    >
                        <img
                            src={brand}
                            alt=""
                            className="w-40"
                        />
                    </div>
                ))}
            </div>

            <ReviewsMarquee />
            <FAQ />

            <div className="max-w-7xl mx-auto">
                <img src="/images/bottom-banner.png" alt="" />
            </div>
        </>
    );
}