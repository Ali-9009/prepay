export default function FourStepProcess() {
    return (
        <section className="bg-[#f5f5f5] py-20">
            <div className="max-w-6xl mx-auto px-6 relative">

                {/* Top Heading */}
                <div className="grid md:grid-cols-2 gap-10 mb-20">
                    <h2 className="text-4xl font-semibold">
                        Our four <span className="text-red-500">step process</span>
                    </h2>

                    <p className="text-gray-600">
                        Our four step process for refilling cell phone data and paying bills looks like this:
                    </p>
                </div>

                {/* Steps Wrapper */}
                <div className="relative h-[450px] hidden md:block">

                    {/* SVG Curved Lines */}
                    <svg
                        className="absolute top-0 left-0 w-full h-full pointer-events-none"
                        viewBox="0 0 1000 450"
                        fill="none"
                    >
                        {/* Curve 1 */}
                        <path
                            d="M200 90 C 300 200, 300 200, 200 310"
                            stroke="#9ca3af"
                            strokeDasharray="6 6"
                            strokeWidth="2"
                        />
                        {/* Curve 2 */}
                        <path
                            d="M250 320 C 450 380, 550 150, 700 100"
                            stroke="#9ca3af"
                            strokeDasharray="6 6"
                            strokeWidth="2"
                        />
                        {/* Curve 3 */}
                        <path
                            d="M750 120 C 850 220, 850 220, 750 320"
                            stroke="#9ca3af"
                            strokeDasharray="6 6"
                            strokeWidth="2"
                        />
                    </svg>

                    {/* Step 1 */}
                    <div className="absolute top-0 left-10 text-center">
                        <Circle icon="/icons/icon1.svg" text="Choose your carrier." />
                    </div>

                    {/* Step 2 */}
                    <div className="absolute bottom-0 left-20 text-center">
                        <Circle icon="/icons/icon2.svg" text="Enter your phone number and PIN." />
                    </div>

                    {/* Step 3 */}
                    <div className="absolute top-10 right-32 text-center">
                        <Circle icon="/icons/icon3.svg" text="Choose your payment amount and confirm that amount." />
                    </div>

                    {/* Step 4 */}
                    <div className="absolute bottom-0 right-10 text-center">
                        <Circle icon="/icons/icon4.svg" text="Pay your bill. Share with random." />
                    </div>
                </div>

                {/* Mobile Version (Stacked Clean) */}
                <div className="md:hidden space-y-12">
                    <Circle icon="/icons/icon1.svg" text="Choose your carrier." />
                    <Circle icon="/icons/icon2.svg" text="Enter your phone number and PIN." />
                    <Circle icon="/icons/icon3.svg" text="Choose your payment amount and confirm that amount." />
                    <Circle icon="/icons/icon4.svg" text="Pay your bill. Share with random." />
                </div>

                {/* Bottom Text */}
                <div className="mt-20 text-center max-w-4xl mx-auto">
                    <p className="text-gray-600">
                        We've increased our network's capacity, making the above process even quicker.
                        You won't experience any annoying sign-ups that slow down the process,
                        and we won’t ask you for excess information!
                    </p>
                </div>

            </div>
        </section>
    );
}

/* Reusable Circle Component */
function Circle({ icon, text }) {
    return (
        <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border border-gray-400 flex items-center justify-center bg-white">
                <img src={icon} alt="" className="w-7 h-7" />
            </div>
            <p className="mt-4 text-gray-700 max-w-[200px] text-center">
                {text}
            </p>
        </div>
    );
}