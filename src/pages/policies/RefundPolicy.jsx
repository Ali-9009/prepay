import { Users, CreditCard, XCircle, Mail, Heart } from "lucide-react";

export default function RefundPolicy() {
    return (
        <section className="py-12 min-h-screen">
            <div className="max-w-4xl mx-auto px-6">

                <div class="w-full bg-(--primary-color) text-white py-16 px-6 text-center rounded-3xl mb-8 shadow-lg">
                    <h1 class="text-3xl md:text-5xl font-extrabold drop-shadow-lg">
                        Refund Policy
                    </h1>
                </div>

                <div className="text-gray-700 text-lg space-y-4">

                    <div className="flex flex-row items-start justify-left gap-2">
                        <Heart />
                        <p className="font-bold">
                            Our Priority
                        </p>
                    </div>

                    <p>
                        At Helloprepay our number one priority is our customers.
                    </p>

                    <div className="flex flex-row items-start justify-left gap-2">
                        <CreditCard />
                        <p className="font-bold">
                            Payment Policy
                        </p>
                    </div>

                    <p>
                        We will never charge your credit/debit card until your top up is processed and credited to your account.
                    </p>

                    <p>
                        Once your mobile refill or top up is credited to your account, there is no way to reverse the refill. Hence, all sales are final and refunds cannot be processed.
                    </p>

                    <div className="flex flex-row items-start justify-left gap-2">
                        <XCircle />
                        <p className="font-bold">
                            Failed Transactions
                        </p>
                    </div>

                    <p>
                        If for any reason, your topup is not credited to your account, we will issue you a refund within 24 hours.
                    </p>

                    <div className="flex flex-row items-start justify-left gap-2">
                        <Mail />
                        <p className="font-bold">
                            Contact Us
                        </p>
                    </div>

                    <p>
                        If you have any questions about our Cancellation or Refund Policy, please contact us at{" "}
                        <a href="mailto:help@helloprepay.com" className="text-blue-800 underline">
                            help@helloprepay.com
                        </a>
                    </p>

                    <p>
                        Thank you for your business!
                    </p>

                </div>
            </div>
        </section>
    );
}