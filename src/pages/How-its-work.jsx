
function How_its_work() {
    return (
        <section className="py-12">
            <div className="max-w-6xl mx-auto px-6">

                {/* Top Content */}
                <div className="grid md:grid-cols-2 gap-10 mb-16">
                    <div>
                        <h2 className="text-4xl font-semibold">
                            Our four <span className="text-red-500">step process</span>
                        </h2>
                    </div>
                    <div>
                        <p className="text-gray-600">
                            Our four step process for refilling cell phone data and paying bills looks like this:
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

                    <div className="h-32 rounded-lg flex items-center justify-center">
                        <div className="flex flex-col items-center text-center relative z-10">
                            <div className="w-16 h-16 flex items-center justify-center">
                                <img src="/images/icon-1.png" alt="Step 4" className="" />
                            </div>
                            <p className="mt-4 text-gray-700 w-40">
                                Pay your bill. Share with random.
                            </p>
                        </div>
                    </div>

                    <div className="hidden lg:flex h-32 rounded-lg flex items-center justify-center">
                        <img src="/images/arrow.png" alt="" className="ml-40" />
                    </div>

                    <div className="h-32 rounded-lg flex items-center justify-center mb-4">
                        <div className="flex flex-col items-center text-center relative z-10">
                            <div className="w-16 h-16 flex items-center justify-center">
                                <img src="/images/icon-1.png" alt="Step 4" className="" />
                            </div>
                            <p className="mt-4 text-gray-700 w-40">
                                Pay your bill. Share with random.
                            </p>
                        </div>
                    </div>

                    <div className="hidden lg:flex h-32 rounded-lg flex items-center justify-center">

                    </div>

                    <div className="hidden lg:flex h-32 rounded-lg flex items-center justify-center">
                        <img src="/images/arrow-1.png" alt="" className="ml-32" />
                    </div>

                    <div className="h-32 rounded-lg flex items-center justify-center lg:mt-2">
                        <div className="flex flex-col items-center text-center relative z-10">
                            <div className="w-16 h-16 flex items-center justify-center">
                                <img src="/images/icon-1.png" alt="Step 4" className="" />
                            </div>
                            <p className="mt-4 text-gray-700 w-40">
                                Pay your bill. Share with random.
                            </p>
                        </div>
                    </div>

                    <div className="hidden lg:flex h-32 rounded-lg flex items-center justify-center">
                        <img src="/images/arrow-2.png" alt="" className="ml-30" />
                    </div>

                    <div className="h-32 rounded-lg flex items-center justify-center">
                        <div className="flex flex-col items-center text-center relative z-10">
                            <div className="w-16 h-16 flex items-center justify-center">
                                <img src="/images/icon-1.png" alt="Step 4" className="" />
                            </div>
                            <p className="mt-4 text-gray-700 w-40">
                                Pay your bill. Share with random.
                            </p>
                        </div>
                    </div>
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
    )
}

export default How_its_work;