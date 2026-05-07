import { Check, Download } from "lucide-react";

export default function ActivationReceipt() {
    return (
        <div className="bg-[#f4efe9] min-h-screen p-4 lg:p-6">

            <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-5 items-start">

                <div className="w-full bg-white rounded-2xl shadow-md p-6 border border-gray-100 xl:sticky xl:top-6">

                    <div className="flex flex-col items-center text-center">

                        <div className="w-14 h-14 rounded-full bg-[#d8f5e8] flex items-center justify-center mb-4">
                            <Check className="w-7 h-7 text-[#17b26a]" strokeWidth={3} />
                        </div>

                        <h1 className="text-3xl lg:text-4xl font-extrabold text-[#0f172a] mb-2">
                            Activation Confirmed!
                        </h1>

                        <p className="text-gray-500 text-sm lg:text-base mb-7 max-w-sm">
                            Your Prepay service is now active and your payment has been processed.
                        </p>
                    </div>

                    <div className="bg-[#f8f8f8] border border-gray-200 rounded-xl p-5">

                        <h2 className="text-center text-xl font-bold text-[#111827] mb-5">
                            Activation Details
                        </h2>

                        <div className="grid gap-4 text-sm">

                            <div className="grid grid-cols-[120px_1fr] items-center gap-3">
                                <span className="text-gray-500">
                                    MDN:
                                </span>

                                <span className="font-semibold text-[#111827] text-right">
                                    7863286587
                                </span>
                            </div>

                            <div className="grid grid-cols-[120px_1fr] items-center gap-3">
                                <span className="text-gray-500">
                                    Sim Type:
                                </span>

                                <span className="font-semibold text-[#111827] text-right">
                                    esim
                                </span>
                            </div>

                            <div className="grid grid-cols-[120px_1fr] items-start gap-3">
                                <span className="text-gray-500">
                                    SIM ICC:
                                </span>

                                <span className="font-semibold text-[#111827] text-right break-all">
                                    8901240527140088702
                                </span>
                            </div>

                            <div className="grid grid-cols-[120px_1fr] items-start gap-3">
                                <span className="text-gray-500">
                                    Transaction:
                                </span>

                                <span className="font-semibold text-[#111827] text-right">
                                    6:54:35 AM - 04/23/2026
                                </span>
                            </div>

                            <div className="grid grid-cols-[120px_1fr] items-start gap-3">
                                <span className="text-gray-500">
                                    Service Plan:
                                </span>

                                <span className="font-semibold text-[#111827] text-right">
                                    Data, Talk and Text
                                </span>
                            </div>
                        </div>

                        <div className="border-t pt-4 mt-5 grid grid-cols-2 items-center">
                            <span className="text-lg font-bold text-[#111827]">
                                Total Charged:
                            </span>

                            <span className="text-2xl font-bold text-(--primary-color) text-right">
                                $1.79
                            </span>
                        </div>
                    </div>

                    <button className="mt-6 w-full bg-(--primary-color) text-white font-semibold py-4 rounded-xl shadow-md flex items-center justify-center gap-2">

                        <Download className="w-5 h-5" />

                        Download Official Receipt
                    </button>
                </div>

                <div className="w-full bg-white rounded-2xl shadow-md p-5 lg:p-8 border border-gray-100">

                    <div className="max-w-5xl mx-auto">

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 items-start">

                            <div>
                                <img
                                    src="/images/logo.png"
                                    alt="logo"
                                />
                            </div>

                            <div className="sm:text-right">
                                <p className="uppercase text-xs tracking-[3px] text-gray-400 font-semibold">
                                    Receipt
                                </p>

                                <h3 className="text-lg font-bold text-[#111827]">
                                    Activation Receipt
                                </h3>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm mb-10">

                            <div className="grid gap-4">

                                <div>
                                    <p className="text-gray-400 uppercase text-xs mb-1">
                                        TR ID:
                                    </p>

                                    <p className="font-semibold text-[#111827] break-all">
                                        52e4edb-b1d8-4ee0-b490-0829bb0233f5
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-5">

                                    <div>
                                        <p className="text-gray-400 uppercase text-xs mb-1">
                                            Date:
                                        </p>

                                        <p className="font-semibold text-[#111827]">
                                            04/23/2026
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-gray-400 uppercase text-xs mb-1">
                                            Time:
                                        </p>

                                        <p className="font-semibold text-[#111827]">
                                            5:54:35 AM
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-gray-400 uppercase text-xs mb-1">
                                        Status:
                                    </p>

                                    <p className="font-bold text-[#17b26a]">
                                        SUCCESS
                                    </p>
                                </div>
                            </div>

                            <div className="flex md:justify-end">
                                <img src="images/qr-code.png" className="w-20 h-20" alt="" />
                            </div>
                        </div>

                        <div className="grid gap-8 text-sm">

                            <div>

                                <h4 className="uppercase text-xs tracking-[2px] text-gray-400 font-bold mb-4">
                                    Customer Info
                                </h4>

                                <div className="grid gap-3">

                                    <div className="grid grid-cols-[120px_1fr] gap-3">
                                        <span className="text-gray-500">
                                            Name:
                                        </span>

                                        <span className="font-semibold text-right">
                                            Keyur Patel
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-[120px_1fr] gap-3">
                                        <span className="text-gray-500">
                                            Email:
                                        </span>

                                        <span className="font-semibold text-right break-all">
                                            keyur7@gmail.com
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-[120px_1fr] gap-3">
                                        <span className="text-gray-500">
                                            Address:
                                        </span>

                                        <span className="font-semibold text-right">
                                            1900 Southwest 8th Street, Miami, FL 33135
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div>

                                <h4 className="uppercase text-xs tracking-[2px] text-gray-400 font-bold mb-4">
                                    Product Details
                                </h4>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">

                                    <div>
                                        <p className="text-gray-500">
                                            Brand:
                                        </p>

                                        <p className="font-semibold">
                                            Prepay
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-gray-500">
                                            Plan:
                                        </p>

                                        <p className="font-semibold">
                                            Data, Talk and Text
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-gray-500">
                                            Activation Date:
                                        </p>

                                        <p className="font-semibold">
                                            04/23/2026
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-gray-500">
                                            Plan Validity:
                                        </p>

                                        <p className="font-semibold">
                                            3 Month
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-gray-500">
                                            Sim Type:
                                        </p>

                                        <p className="font-semibold">
                                            esim
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-gray-500">
                                            SIM ICC:
                                        </p>

                                        <p className="font-semibold break-all">
                                            8901240527140088702
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-gray-500">
                                            MDN:
                                        </p>

                                        <p className="font-semibold">
                                            7863286587
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>

                                <h4 className="uppercase text-xs tracking-[2px] text-gray-400 font-bold mb-4">
                                    Payment Details
                                </h4>

                                <div className="grid gap-3 border-b border-gray-200 pb-4">

                                    <div className="grid grid-cols-2">
                                        <span className="text-gray-500">
                                            Sub Total
                                        </span>

                                        <span className="font-semibold text-right">
                                            $17.3
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-2">
                                        <span className="text-gray-500">
                                            Coupon Discount
                                        </span>

                                        <span className="font-semibold text-[#17b26a] text-right">
                                            -$16.07
                                        </span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 items-center pt-5">
                                    <span className="text-2xl font-bold text-[#111827]">
                                        Total
                                    </span>

                                    <span className="text-3xl font-bold text-(--primary-color) text-right">
                                        $1.79
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}