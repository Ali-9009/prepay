import FAQ from "../Faq";


export default function TopUp() {

    const carriers = [
        { id: "att", name: "AT&T", bg: "#00A8E0", color: "#fff", logo: "/images/at-t.png", category: "topup" },
        { id: "verizon", name: "Verizon", bg: "#CD040B", color: "#fff", logo: "/images/verizon.png", category: "topup" },
        { id: "boost", name: "Boost Mobile", bg: "#F7941D", color: "#fff", logo: "/images/boost.png", category: "topup" },
        { id: "tmobile", name: "T-Mobile", bg: "#E20074", color: "#fff", logo: "/images/t-mobile.png", category: "topup" },
        { id: "metro", name: "MetroPCS", bg: "#003DA5", color: "#fff", logo: "/images/metro.png", category: "topup" },
        { id: "cricket", name: "Cricket Wireless", bg: "#00B140", color: "#fff", logo: "/images/cricket.png", category: "topup" },
        { id: "linkup", name: "LinkUp Mobile", bg: "#1a1a2e", color: "#fff", logo: "/images/link-up.png", category: "topup" },
        { id: "mobilex", name: "MobileX", bg: "#0f3460", color: "#fff", logo: "/images/mobileX.png", category: "topup" },
        { id: "light", name: "Light Mobile", bg: "#f8f8f0", color: "#333", logo: "/images/light-mobile.png", category: "topup" },
        { id: "uiic1", name: "UIIC Mobile", bg: "#fff", color: "#333", logo: "/images/uiic-mobile.png", category: "topup" },
        { id: "uiic2", name: "UIIC Mobile Plus", bg: "#e8f4fd", color: "#0078d4", logo: "/images/uiic-mobile-plus.png", category: "topup" },
    ];

    return (
        <>
            <section className="py-12">
                <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">

                    {/* LEFT CONTENT */}
                    <div>
                        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#111] leading-tight mb-3">
                            Mobile top-up
                        </h1>

                        <p className="text-gray-700 text-lg mt-2">
                            Keep them close, no matter the distance
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
                            src="/images/con-1.png"
                            alt=""
                            className="drop-shadow-xl"
                        />
                    </div>

                </div>
            </section>

            {/* BRAND CARDS */}
            <div className="flex flex-wrap gap-4 mt-6 items-center justify-center max-w-6xl mx-auto px-6">
                {carriers.map((category, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center"
                    >
                        <img
                            src={category.logo}
                            alt={`Brand ${index + 1}`}
                            className="w-40"
                        />
                    </div>
                ))}
            </div>

            <FAQ />
        </>
    );
}