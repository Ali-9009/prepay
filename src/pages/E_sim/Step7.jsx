import { ArrowRight, Calendar, ChevronLeft } from "lucide-react";
import Button from "../../components/Gbtn";

export default function Step7({ back, next }) {

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
                    Select your service start date
                </h2>
            </div>

            <div className="p-6 space-y-6">
                    <div className="p-6 space-y-6">

                        <div className="flex flex-col sm:flex-row gap-6 w-full text-center">

                            <div
                                onClick={() => next(7, "schedule")}
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
                                onClick={() => next(7, "instant")}
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
            </div>
        </>
    );
}