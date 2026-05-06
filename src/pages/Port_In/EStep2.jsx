import { ChevronLeft, Phone, IdCard } from "lucide-react";
import Button from "../../components/Gbtn";

export default function EStep2({ next, back }) {
    return (
        <>
            {/* Header */}
            <div className="bg-(--primary-color) p-6 text-center relative">
                <h2 className="text-white text-xl font-semibold">
                    Transfer Your Number
                </h2>
                <button
                    onClick={back}
                    className="absolute left-4 top-6 text-white cursor-pointer"
                >
                    <ChevronLeft />
                </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-6">
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold">Your transfer number is in progress</p>
                        
                    </div>
                    <p className="mt-2 text-sm text-gray-600">While you wait we assigned you a temporary number so you can stay connected</p>
                    <p className="mt-2 text-sm text-gray-600">your temporary number </p>
                    <p className="mt-2 text-2xl  font-bold">(512) 743 - 6872</p>
                </div>

                <div className="flex justify-center">
                    <Button className="w-full" text="Connect your Device" onClick={() => next(5)} />
                </div>

            </div>
        </>
    );
}
