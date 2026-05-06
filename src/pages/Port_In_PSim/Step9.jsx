import { ChevronLeft, Phone, IdCard } from "lucide-react";
import Button from "../../components/Gbtn";

export default function Step9({ next, back }) {
    return (
        <>
            {/* Header */}
            <div className="bg-(--primary-color) p-6 text-center relative">
                <h2 className="text-white text-xl font-semibold">
                    Yayyy! You are all set!
                </h2>
                <button
                    onClick={back}
                    className="absolute left-4 top-6 text-white cursor-pointer"
                >
                    <ChevronLeft />
                </button>
            </div>

            {/* Body */}
            <div className="max-w-md mx-auto py-4">

                <ul className="space-y-3 text-sm">
                    <li className="flex">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                        <p className="font-semibold">
                            insert your SIM Card and start your prepay mobile service.
                        </p>
                    </li>
                </ul>
                {/* Button */}
                <div className="flex justify-center mt-6">
                    {/* Call nextStep when clicked */}
                    <Button text="Done" to="/" />
                </div>
            </div>
        </>
    );
}
