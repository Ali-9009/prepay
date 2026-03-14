import { MapPin, Search, Navigation, Phone, Smartphone, Mail } from "lucide-react";
import Button from "../components/Gbtn";

export default function Contact() {
    return (

        <main className="max-w-7xl mx-auto">

            <section className="py-12 items-center justify-center">
                <h2 className="primary-heading">Get In Touch With Us</h2>

                <div className="max-w-6xl mx-auto w-full px-6 grid md:grid-cols-2 gap-12 items-center">

                    {/* Right Side Form */}
                    <div>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Name*"
                                className="w-full border border-gray-300 bg-white rounded-md px-4 py-3 focus:outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Email*"
                                className="w-full border border-gray-300 bg-white rounded-md px-4 py-3 focus:outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Subject*"
                                className="w-full border border-gray-300 bg-white rounded-md px-4 py-3 focus:outline-none"
                            />
                            <textarea
                                placeholder="Message"
                                rows={5}
                                className="w-full border border-gray-300 bg-white rounded-md px-4 py-3 focus:outline-none"
                            />
                            <Button
                                className="w-full"
                                text="Send Message"
                                onClick={() => navigate("/")}
                            />
                        </form>
                        <div className="flex flex-row gap-6 mt-2">
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

                    {/* Left Side */}
                    <div className="flex items-center justify-center">
                        <img src="/images/con-1.png" alt="" className="max-w-full h-auto" />
                    </div>

                </div>
            </section>

        </main>
    )
}