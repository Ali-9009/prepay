import { ChevronLeft, PhoneCall, PlusCircle } from "lucide-react";

export default function Step3({ next, back }) {
    return (
        <>
            <div className="bg-(--primary-color) p-6 relative flex flex-col items-center text-center">
                <button
                    onClick={back}
                    className="absolute left-4 top-6 text-white cursor-pointer"
                >
                    <ChevronLeft />
                </button>

                <h2 className="text-white text-xl font-semibold">
                    Choose your number option
                </h2>
            </div>

            <div className="p-6">
                <div className="flex flex-col sm:flex-row gap-4">

                    {/* Transfer Number */}
                    <div
                        onClick={() => next(3, "transfer")}
                        className="flex-1 cursor-pointer border-2 border-gray-200 rounded-xl p-5 text-center hover:border-red-500 hover:shadow-md"
                    >
                        <PhoneCall className="mb-3 text-red-500 mx-auto" size={28} />
                        <h3 className="font-semibold text-sm">
                            I want to transfer my number to Panda
                        </h3>
                    </div>

                    {/* New Number */}
                    <div
                        onClick={() => next(3, "new")}
                        className="flex-1 cursor-pointer border-2 border-gray-200 rounded-xl p-5 text-center hover:border-red-500 hover:shadow-md"
                    >
                        <PlusCircle className="mb-3 text-red-500 mx-auto" size={28} />
                        <h3 className="font-semibold text-sm">
                            I’d like a new number
                        </h3>
                    </div>

                </div>
            </div>
        </>
    );
}