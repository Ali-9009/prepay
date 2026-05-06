import { ArrowRight, Calendar, ChevronLeft } from "lucide-react";
import Button from "../../components/Gbtn";

export default function Step4({ back, next, flowType }) {

    const baseFlow = flowType?.split("|")[0];

    return (
        <>
            {/* Header */}
            <div className="bg-(--primary-color) p-6 relative flex flex-col items-center text-center">
                <button
                    onClick={back}
                    className="absolute left-4 top-6 text-white cursor-pointer"
                >
                    <ChevronLeft />
                </button>

                <h2 className="text-white text-xl font-semibold">
                    {baseFlow === "transfer"
                        ? "Transfer your number"
                        : "Yayyy! Here is your new number"}
                </h2>
            </div>

            <div className="p-6 space-y-6">

                {/* transfer */}
                {baseFlow === "transfer" && (
                    <div className="p-6 space-y-6">

                        <div className="flex flex-col sm:flex-row gap-6 w-full text-center">

                            <div
                                onClick={() => next(4, "schedule")}
                                className="flex-1 w-full cursor-pointer"
                            >
                                <div className="flex flex-col items-center w-full">
                                    <div className="w-full border-2 border-gray-200 rounded-xl p-5 hover:border-red-500 flex justify-center">
                                        <Calendar className="text-red-500" size={28} />
                                    </div>
                                    <h3 className="mt-3 font-semibold text-sm">
                                        Schedule Your Service for a Future Date
                                    </h3>
                                </div>
                            </div>

                            <div
                                onClick={() => next(4, "instant")}
                                className="flex-1 w-full cursor-pointer"
                            >
                                <div className="flex flex-col items-center w-full">
                                    <div className="w-full border-2 border-gray-200 rounded-xl p-5 hover:border-red-500 flex justify-center">
                                        <ArrowRight className="text-red-500" size={28} />
                                    </div>
                                    <h3 className="mt-3 font-semibold text-sm">
                                        Start Your Service Now
                                    </h3>
                                </div>
                            </div>

                        </div>
                    </div>
                )}

                {/* new */}
                {baseFlow === "new" && (
                    <div className="flex flex-col gap-6 items-center justify-center text-center">
                        <h2 className="text-2xl font-bold">(512) 743 - 6742</h2>
                        <Button text="Select your service date" />
                    </div>
                )}

            </div>
        </>
    );
}