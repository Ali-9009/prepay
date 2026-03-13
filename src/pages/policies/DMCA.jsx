export default function DMCA() {
    return (
        <section className="py-12 min-h-screen">
            <div className="max-w-4xl mx-auto px-6">

                {/* PAGE TITLE */}
                <h1 className="primary-heading pb-6">
                    DMCA
                </h1>

                {/* SECTION 1 */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        PERSONAL INFORMATION WE COLLECT
                    </h2>
                    <p className="text-gray-700 text-lg">
                        When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information.”
                    </p>

                    <p className="text-gray-700 text-lg">
                        We collect Device Information using the following technologies:
                    </p>

                    <p className="text-gray-700 text-lg">
                        – “Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org
                    </p>

                    <p className="text-gray-700 text-lg">
                        – “Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.
                    </p>

                    <p className="text-gray-700 text-lg">
                        – “Web beacons,” “tags,” and “pixels” are electronic files used to record information about how you browse the Site.
                    </p>

                    <p className="text-gray-700 text-lg">
                        Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit/debit card numbers), email address, and phone number. We refer to this information as “Order Information.”
                    </p>

                    <p className="text-gray-700 text-lg">
                        When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information.
                    </p>
                </div>

                
                {/* CONTACT */}
                <div className="mt-8 text-gray-700 text-sm md:text-base">
                    <p>
                        If you have any questions about this policy, please contact us at{" "}
                        <a href="mailto:support@example.com" className="text-red-500 underline">
                            support@example.com
                        </a>.
                    </p>
                </div>

            </div>
        </section>
    );
}