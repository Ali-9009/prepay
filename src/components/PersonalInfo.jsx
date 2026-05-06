import { useState } from "react";
import { X } from "lucide-react";

export default function PersonalInfo({ open, onClose }) {
    const [gender, setGender] = useState("Male");

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/40"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-[95%] max-w-2xl bg-white rounded-2xl shadow-xl p-6 md:p-8">

                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold">Personal Information</h2>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-gray-100"
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Form */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    {/* First Name */}
                    <div>
                        <label className="text-sm font-medium">First Name</label>
                        <input
                           placeholder="Name"
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg outline-none"
                        />
                    </div>

                    {/* Last Name */}
                    <div>
                        <label className="text-sm font-medium">Last Name</label>
                        <input
                            placeholder="Last Name"
                            className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="text-sm font-medium">Email</label>
                        <input
                            placeholder="example@gmail.com"
                            className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg outline-none"
                        />
                    </div>

                    {/* DOB */}
                    <div>
                        <label className="text-sm font-medium">Date of Birth</label>
                        <input
                            type="date"
                            className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg outline-none"
                        />
                    </div>

                    {/* Gender */}
                    <div className="md:col-span-2">
                        <label className="text-sm font-medium">Gender</label>

                        <div className="flex mt-2 border border-gray-300 rounded-lg overflow-hidden">
                            {["Male", "Female", "Prefer not to say"].map((g) => (
                                <button
                                    key={g}
                                    type="button"
                                    onClick={() => setGender(g)}
                                    className={`flex-1 py-2 text-sm transition ${gender === g
                                            ? "bg-(--primary-color) text-white font-medium"
                                            : "bg-white hover:bg-gray-50"
                                        }`}
                                >
                                    {g}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-end mt-6">
                    <button className="bg-(--primary-color) text-white px-6 py-2 rounded-full font-medium">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}