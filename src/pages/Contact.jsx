import { Mail, MapPin, Phone, Send } from "lucide-react";
import Button from "../components/Gbtn";

export default function Contact() {
    return (
        <main className="px-4 py-16 text-gray-900">
            <section className="mx-auto max-w-6xl">

                <div className="mb-12 text-center">

                    <h1 className="primary-heading">
                        Contact our support team
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-gray-500">
                        Questions, support, or business inquiries send us a message and
                        our team will get back to you shortly.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.4fr]">

                    {/* LEFT PANEL */}
                    <div className="rounded-xl bg-white p-8 shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-semibold">
                            Let’s talk
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-gray-500">
                            We’re available to help you with anything you need.
                        </p>

                        <div className="mt-10 space-y-5">
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFF0F0] text-[#EB4041]">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <p className="mt-1 text-sm text-gray-500">(786) 884-2070</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFF0F0] text-[#EB4041]">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <p className="mt-1 text-sm text-gray-500 break-all">
                                        support@helloprepay.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFF0F0] text-[#EB4041]">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Worldwide • 24/7 Support
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FORM */}
                    <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 sm:p-8 lg:p-10">
                        <form className="space-y-5">
                            <div className="grid gap-5 sm:grid-cols-2">
                                <input
                                    type="text"
                                    placeholder="Full name"
                                    className="h-14 w-full rounded-2xl border border-gray-200 bg-[#FCFCFC] px-5 text-sm outline-none transition focus:border-[#EB4041] focus:bg-white"
                                />

                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="h-14 w-full rounded-2xl border border-gray-200 bg-[#FCFCFC] px-5 text-sm outline-none transition focus:border-[#EB4041] focus:bg-white"
                                />
                            </div>

                            <input
                                type="text"
                                placeholder="Subject"
                                className="h-14 w-full rounded-2xl border border-gray-200 bg-[#FCFCFC] px-5 text-sm outline-none transition focus:border-[#EB4041] focus:bg-white"
                            />

                            <textarea
                                rows={7}
                                placeholder="Write your message..."
                                className="w-full resize-none rounded-2xl border border-gray-200 bg-[#FCFCFC] px-5 py-4 text-sm outline-none transition focus:border-[#EB4041] focus:bg-white"
                            />

                            <div className="flex justify-end">
                                <Button text="Send Message" icon={<Send size={18} />} />
                            </div>
                        </form>
                    </div>

                </div>
            </section>
        </main>
    );
}