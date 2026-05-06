import { ChevronLeft } from "lucide-react";
import Button from "../../components/Gbtn";

export default function Step4({ next, back, flowType }) {
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
                    {flowType === "transfer"
                        ? "Transfer your number"
                        : "Choose Your Sim Type"}
                </h2>
            </div>

            {/* Body */}
            <div className="p-6 space-y-6">

                {flowType === "transfer" ? (

                    <div className="p-6 space-y-6">
                        <form

                            className="max-w-xl mx-auto space-y-4"
                        >
                            <label
                                className="block text-sm font-medium text-gray-700"
                                htmlFor="phoneNumber"
                            >
                                Phone number to transfer
                            </label>
                            <input
                                id="phoneNumber"
                                name="phoneNumber"
                                type="text"
                                placeholder="000-000-0000"
                                className="input"
                            />

                            <label
                                className="block text-sm font-medium text-gray-700"
                                htmlFor="zipCode"
                            >
                                Your Zip Code
                            </label>
                            <input
                                id="zipCode"
                                name="zipCode"
                                type="text"
                                placeholder="000000"
                                className="input"
                            />

                            <div className="flex space-x-4">
                                <div className="flex-1">
                                    <label
                                        className="block text-sm font-medium pb-3 text-gray-700"
                                        htmlFor="currentCarrier"
                                    >
                                        Your Current Carrier
                                    </label>
                                    <input
                                        id="currentCarrier"
                                        name="currentCarrier"
                                        type="text"
                                        placeholder="Your Current Carrier"
                                        className="input"
                                    />
                                </div>

                                <div className="flex-1">
                                    <label
                                        className="block text-sm font-medium pb-3 text-gray-700"
                                        htmlFor="carrierAccountNumber"
                                    >
                                        Carrier account number
                                    </label>
                                    <input
                                        id="carrierAccountNumber"
                                        name="carrierAccountNumber"
                                        type="text"
                                        placeholder="12345"
                                        className="input"
                                    />
                                </div>
                            </div>

                            <label
                                className="block text-sm font-medium text-gray-700"
                                htmlFor="transferPin"
                            >
                                Transfer PIN
                            </label>
                            <input
                                id="transferPin"
                                name="transferPin"
                                type="text"
                                placeholder="1234"
                                className="input"
                            />

                            <Button
                                type="submit"
                                className="w-full text-center"
                                text="Submit"
                                onClick={() => next(4)}
                            />
                        </form>
                    </div>
                ) : (
                    <>
                        <div className="p-6 space-y-6">
                            <div className="max-w-lg mx-auto">
                                <h3 className="font-semibold">Do you have a Hello Prepay pSIM?</h3>
                                <ul className="space-y-3 mt-2 text-sm">
                                    <li className="flex">
                                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                                        <div>
                                            <p className="font-medium">
                                                Activation can be completed after your pSIM is delivered.{" "}
                                                <br />
                                                You can activate it after receiving the SIM card, or contact
                                                support to arrange delivery.
                                            </p>
                                        </div>
                                    </li>
                                </ul>

                                <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
                                    <Button
                                        onClick={() => next(7, "news")}
                                        text="I have my Prepay SIM"
                                    />

                                    <Button
                                        onClick={() => next(7, "tran")}
                                        text="I haven't received my Prepay SIM"
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                )}

            </div>
        </>
    );
}