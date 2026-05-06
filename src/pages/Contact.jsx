import { MapPin, Phone, Mail } from "lucide-react";
import Button from "../components/Gbtn";

export default function Contact() {
    return (
        <main className="bg-red-50 min-h-screen">

            {/* HEADER */}
            <section className="text-center py-14 px-4">
                <h2 className="text-4xl font-semibold">
                    Contact Our Team
                </h2>
                <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm sm:text-base">
                    We’re here to help. Reach out anytime and we’ll respond as quickly as possible.
                </p>
            </section>

            {/* CONTACT CARDS */}
            <section className="max-w-6xl mx-auto px-4 grid sm:grid-cols-2 md:grid-cols-3 gap-5 mb-12">

                <div className="bg-white p-5 rounded-xl shadow-sm border border-(--primary-color) hover:shadow-md transition">
                    <Phone className="text-[#EB4041] mb-3" />
                    <h4 className="font-semibold text-gray-800">Call Us</h4>
                    <p className="text-sm text-gray-500 mt-1">(786) 884-2070</p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-sm border border-(--primary-color) hover:shadow-md transition">
                    <Mail className="text-[#EB4041] mb-3" />
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-sm text-gray-500 mt-1">Support@helloprepay.com</p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-sm border border-(--primary-color) hover:shadow-md transition sm:col-span-2 md:col-span-1">
                    <MapPin className="text-[#EB4041] mb-3" />
                    <h4 className="font-semibold text-gray-800">Location</h4>
                    <p className="text-sm text-gray-500 mt-1">
                        Worldwide • 24/7 Support
                    </p>
                </div>

            </section>

            {/* FORM SECTION */}
            <section className="max-w-4xl mx-auto px-4 pb-16">

                <div className="bg-white rounded-2xl shadow-lg border border-(--primary-color) p-6 sm:p-10">

                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 text-center">
                        Send us a message
                    </h3>

                    <form className="flex flex-col gap-4">

                        {/* Row 1 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#EB4041]"
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#EB4041]"
                            />
                        </div>

                        {/* Row 2 */}
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#EB4041]"
                        />

                        {/* Row 3 */}
                        <textarea
                            placeholder="Your Message..."
                            rows={5}
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#EB4041] resize-none"
                        />

                        <Button
                            text="Send Message"
                        />

                    </form>

                </div>

            </section>

        </main>
    );
}