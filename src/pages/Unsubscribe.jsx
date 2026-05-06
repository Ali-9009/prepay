import Button from "../components/Gbtn"

export default function Unsubscribe() {
    return (
        <section className="pb-12">

            {/* TOP RED HEADER */}
            <div className="bg-(--primary-color) py-16 text-center">
                <h1 className="text-white text-2xl md:text-4xl font-medium">
                    Unsubscribe For Autopay
                </h1>
            </div>

            {/* CARD */}
            <div className="flex justify-center -mt-10 px-4">
                <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg border border-red-200 p-10">

                    {/* INPUT */}
                    <div className="mb-8">
                        <label className="block text-gray-500 mb-2 text-sm">
                            Phone Number
                        </label>

                        <input
                            type="text"
                            placeholder="Enter Your mobile Number"
                            className="w-full bg-gray-100 rounded-md px-4 py-3 outline-none focus:ring-1 focus:ring-red-400"
                        />
                    </div>

                    {/* BUTTON */}
                    <div className="text-center">
                        <Button text="Search" />
                    </div>

                </div>
            </div>

        </section>
    );
}