import { ChevronLeft } from "lucide-react";
import Button from "../../components/Gbtn";

export default function Step8({ next, back}) {
    return (
        <>
            {/* Header */}
            <div className="bg-(--primary-color) p-6 text-center relative">
                <h2 className="text-white text-xl font-semibold">
                    Activate Your Line
                </h2>
                <button
                    onClick={back}
                    className="absolute left-4 top-6 text-white cursor-pointer"
                >
                    <ChevronLeft />
                </button>
            </div>

            <div className="max-w-md mx-auto py-6">

                <div className="mb-5">
                    <h2 className="text-lg font-semibold text-gray-800">
                        Your physical SIM details
                    </h2>
                </div>

                <div className="mb-4 text-sm text-gray-600">
                    <p className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                        Enter the 18–19 digit ICCID on your SIM card to activate.
                    </p>
                </div>

                <div className="max-w-sm mx-auto mb-4">

                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        ICCID
                    </label>

                    <input
                        type="text"
                        placeholder="ICCID"
                        className="w-full border border-red-400 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-400"
                    />

                    <Button onClick={() => next(6)} text="Submit" className="mt-3 w-full" />

                </div>

                <div>
                    <h3 className="font-semibold text-sm text-gray-800 mb-2">
                        Example:
                    </h3>

                    <ul className=" space-y-3 text-sm">
                        <li className="flex">
                            <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                            <div>
                                <p className="font-semibold">Check the 18–19 digit ICCID printed on the back of your <br /> physical SIM (pSIM)
                                    as shown in Picture 2.</p>
                            </div>
                        </li>
                        <li className="flex">
                            <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                            <div>
                                <p className="font-semibold">Enter that exact same ICCID in the box above, as illustrated in Picture 3.</p>
                            </div>
                        </li>
                        <li className="flex">
                            <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                            <div>
                                <p className="font-semibold">Double-check the ICCID for accuracy before you hit Submit.</p>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </>
    );
}