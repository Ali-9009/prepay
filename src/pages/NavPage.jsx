import { useParams, useNavigate } from "react-router-dom";
import ReviewsMarquee from "../components/ReviewsMarquee";
import FAQ from "./Faq";
import { ShimmerCard, ShimmerBrandCard } from "../components/Shimmer";
import { categories } from "../data/categories";
import Breadcrumbs from "../components/Breadcrumbs";

export default function NavPage() {

    const { category } = useParams();
    const navigate = useNavigate();
    const data = categories[category];

    if (!data) {
        return <h1>Page not found</h1>;
    }

    return (
        <>
            <div className="bg-red-50">
                <div className="max-w-6xl mx-auto px-6 mb-6">
                    <Breadcrumbs />
                </div>
            </div>

            <section className="pt-12">
                <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">

                    {/* LEFT CONTENT */}
                    <div>
                        {data ? (
                            <>
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
                            </>
                        ) : (
                            <div className="space-y-4">
                                <ShimmerCard className="h-12 w-3/4" /> {/* Title */}
                                <ShimmerCard className="h-6 w-1/2" />  {/* Paragraph */}
                                <ShimmerCard className="h-16 w-80 mt-6" /> {/* Select box */}
                            </div>
                        )}
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center md:justify-end">
                        {data ? (
                            <img src={data.image} alt="" className="drop-shadow-xl" />
                        ) : (
                            <ShimmerCard className="h-64 w-64 rounded-lg" />
                        )}
                    </div>

                </div>

                {/* BRAND CARDS */}
                <div className="flex flex-wrap gap-4 mt-6 items-center justify-center max-w-6xl mx-auto px-6">
                    {data ? (
                        data.brands.map((brand, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center cursor-pointer"
                                onClick={() => navigate("/DetailPage", { state: { brand } })}
                            >
                                <img src={brand} alt="" className="w-40" />
                            </div>
                        ))
                    ) : (
                        Array.from({ length: 6 }).map((_, index) => (
                            <ShimmerBrandCard key={index} />
                        ))
                    )}
                </div>
            </section>

            <ReviewsMarquee />

            <FAQ start={0} end={5} />

            <div className="max-w-7xl mx-auto">
                <img src="/images/bottom-banner.png" alt="" />
            </div>
        </>
    );
}