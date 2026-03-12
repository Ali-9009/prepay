import { MapPin, Search, Navigation, Phone, Smartphone, Mail } from "lucide-react";

const StoreLocations = () => {
    return (
        <section className="px-4 py-12">
            <div className="max-w-4xl mx-auto border border-gray-300 rounded-xl shadow-md p-6">

                {/* Header */}
                <div className="text-center mb-6">
                    <h2 className="text-xl font-semibold flex items-center justify-center gap-2">
                        <MapPin size={18} />
                        Store Locations
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                        Find nearby physical stores with in-store availability
                    </p>
                </div>

                {/* Search */}
                <div className="flex w-80 mx-auto items-center border border-gray-300 rounded-lg px-3 py-2 mb-6 bg-gray-50">
                    <Search size={16} className="text-gray-400 mr-2" />
                    <input
                        type="text"
                        placeholder="Miami Florida"
                        className="w-80 bg-transparent outline-none text-sm"
                    />
                </div>

                {/* Map */}
                <div className="rounded-lg overflow-hidden mb-6">
                    <div className="rounded-lg overflow-hidden mb-6">
                        <iframe
                            title="Store Location Map"
                            src="https://www.google.com/maps?q=Miami,Florida&output=embed"
                            className="w-full h-64 md:h-80 border-0"
                            loading="lazy"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* Locations */}
                <div className="grid md:grid-row-2 gap-4">

                    {/* Location Card */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center border border-gray-300 rounded-lg p-5 bg-gray-50 shadow-sm">
                        {/* Contact Info */}
                        <div className="mb-4 md:mb-0">
                            <p className="text-sm font-semibold text-gray-800">
                                616 Broadway, New York, NY 10012
                            </p>
                            <div className="flex flex-row gap-2 mt-2">
                                <p className="flex gap-2 items-center text-sm text-gray-500">
                                    <Smartphone size={18} color="red" />
                                    (786) 884-2070
                                </p>
                                <p className="flex gap-2 items-center text-sm text-gray-500">
                                    <Mail size={18} color="red" />
                                    Support@helloprepay.com
                                </p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-row gap-2">
                            <button className="flex items-center gap-2 bg-black text-white text-sm px-4 py-2 rounded-full hover:opacity-90 transition">
                                <Navigation size={16} />
                                Directions
                            </button>
                            <button className="flex items-center gap-2 border border-gray-300 text-gray-700 text-sm px-4 py-2 rounded-full hover:bg-gray-100 transition">
                                <Phone size={16} />
                                Call
                            </button>
                        </div>
                    </div>

                    {/* Location Card 2 */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center border border-gray-300 rounded-lg p-5 bg-gray-50 shadow-sm">
                        {/* Contact Info */}
                        <div className="mb-4 md:mb-0">
                            <p className="text-sm font-semibold text-gray-800">
                                616 Broadway, New York, NY 10012
                            </p>
                            <div className="flex flex-row gap-2 mt-2">
                                <p className="flex gap-2 items-center text-sm text-gray-500">
                                    <Smartphone size={18} color="red" />
                                    (786) 884-2070
                                </p>
                                <p className="flex gap-2 items-center text-sm text-gray-500">
                                    <Mail size={18} color="red" />
                                    Support@helloprepay.com
                                </p>
                            </div>
                        </div>
                        

                        {/* Buttons */}
                        <div className="flex flex-row gap-2">
                            <button className="flex items-center gap-2 bg-black text-white text-sm px-4 py-2 rounded-full hover:opacity-90 transition">
                                <Navigation size={18} />
                                Directions
                            </button>
                            <button className="flex items-center gap-2 border border-gray-300 text-gray-700 text-sm px-4 py-2 rounded-full hover:bg-gray-100 transition">
                                <Phone size={18} />
                                Call
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default StoreLocations;