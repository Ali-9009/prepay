export default function ProgressBar({ step, totalSteps }) {
    return (
        <div className="flex items-center justify-between mb-6 px-4 sm:px-6 pt-6">
            {Array.from({ length: totalSteps }).map((_, index) => (
                <div key={index} className="flex-1 flex items-center relative">

                    {/* Line */}
                    {index !== 0 && (
                        <div
                            className={`absolute top-1/2 -translate-y-1/2 -left-1/2 w-full h-0.5
              ${index <= step ? "bg-black" : "bg-gray-300"}`}
                        />
                    )}

                    {/* Circle */}
                    <div
                        className={`z-10 mx-auto w-6 h-6 rounded-full flex items-center justify-center text-xs
            ${index <= step ? "bg-black text-white" : "bg-gray-300"}`}
                    >
                        {index + 1}
                    </div>

                </div>
            ))}
        </div>
    );
}