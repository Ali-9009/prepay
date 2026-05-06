import { Link } from "react-router-dom";
import Button from "../components/Gbtn"


export default function PrepayGift() {
    return (
        <>
            <section className="pt-12 px-6 md:px-8 overflow-hidden">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center lg:space-x-8 justify-center gap-0">
                    {/* Left Text */}
                    <div className="max-w-xl">
                        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#111] leading-tight mb-3">
                            A Small Gift From <br /> Hello Prepay
                        </h1>
                        <p className="text-[#111] text-base leading-relaxed mb-4 max-w-md">
                            Thanks for your recent purchase we’ve included a complimentary SIM card for you to enjoy.
                        </p>
                        <p className="text-[#111] text-base leading-relaxed mb-8 max-w-md">
                            As a token of our appreciation, we’re giving you a simple way to stay connected. Activate your SIM in just a few quick steps and enjoy your service right away.
                        </p>
                        <Button to="" text="Activate My Free SIM" /> 
                        <p className="text-[#111] text-base leading-relaxed mt-4 max-w-md">
                            Already have an account?{" "}
                            <Link to="/SignIn" className="text-red-500 font-medium hover:underline">
                                Log in
                            </Link>
                        </p>
                    </div>

                    {/* Right Character Image */}
                    <div className="pt-8">
                        <img
                            src="/images/gift-1.png"
                            alt="Hello Prepay mascot"
                            className="md:w-90 w-70 drop-shadow-xl"
                        />
                    </div>
                </div>
            </section>

            <section className="md:py-12 py-8 px-6 md:px-8">
                <div className="max-w-3xl mx-auto text-center">

                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        We truly appreciate your support and wanted to give you something useful in return.
                        <span className="block mt-2">
                            No commitments, no hassle just easy connectivity.
                        </span>
                    </p>

                </div>
            </section>
        </>
    );
}
