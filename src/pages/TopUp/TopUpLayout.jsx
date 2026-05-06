import { useLocation, useNavigate, Link } from "react-router-dom";

export default function TopUpLayout({
    title,
    image,
    carriers,
    extraComponent,
}) {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            {/* DESKTOP */}
            <section className="py-12 hidden md:flex">
                <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">

                    <div>
                        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold mb-3">
                            {title}
                        </h1>

                        <p className="text-gray-700 text-lg mt-2">
                            Keep them close, no matter the distance
                        </p>

                        <div className="mt-6 bg-gray-200 rounded-xl p-4 w-[320px] shadow-sm">
                            <label className="text-md text-gray-800 block mb-2">
                                Country of use
                            </label>

                            <select
                                value={location.pathname}
                                onChange={(e) => navigate(e.target.value)}
                                className="w-full bg-white rounded-lg border border-gray-300 px-3 py-2"
                            >
                                <option value="/TopUpMobile">United States</option>
                                <option value="/InternationalTopUp">International</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <img src={image} alt="" className="drop-shadow-xl" />
                    </div>
                </div>
            </section>

            {/* MOBILE */}
            <div className="max-w-sm mx-auto py-8 block md:hidden">
                <div className="flex justify-center gap-10">

                    <div onClick={() => navigate("/TopUpMobile")} className="cursor-pointer text-center">
                        <img src="/images/us-coun.png" className="w-24 h-24 rounded-lg" />
                        <p className="mt-2 text-sm">United States</p>
                    </div>

                    <div onClick={() => navigate("/InternationalTopUp")} className="cursor-pointer text-center">
                        <img src="/images/all-coun.png" className="w-24 h-24 rounded-lg" />
                        <p className="mt-2 text-sm">International</p>
                    </div>
                </div>

                {extraComponent}
            </div>

            {/* CARRIERS */}
            <div className="flex flex-wrap gap-4 mt-6 justify-center max-w-6xl mx-auto px-6">
                {carriers.map((carrier) => (
                    <Link key={carrier.name} to={carrier.link} state={{ carrier }}>
                        <img
                            src={carrier.logo}
                            alt={carrier.name}
                            className="w-40 hover:scale-105 transition"
                        />
                    </Link>
                ))}
            </div>
        </>
    );
}