import { Copyright, Globe, FileText, PenTool, ListChecks, Mail } from "lucide-react";

export default function DMCA() {
    return (
        <section className="py-12 min-h-screen">
            <div className="max-w-4xl mx-auto px-6">

                {/* PAGE TITLE */}
                <div class="w-full bg-(--primary-color) text-white py-16 px-6 text-center rounded-3xl mb-8 shadow-lg">
                    <h1 class="text-3xl md:text-5xl font-extrabold drop-shadow-lg">
                        DMCA
                    </h1>
                </div>

                <div className="text-gray-700 text-lg space-y-4">

                    <div className="flex flex-row items-start justify-left gap-2">
                        <Copyright />
                        <p className="font-bold text-xl">
                            Digital Millennium Copyright Act (DMCA) Compliance
                        </p>
                    </div>

                    <p>
                        Hello PrePay abides by the federal Digital Millennium Copyright Act (DMCA) by responding to notices of alleged infringement that comply with the DMCA and other applicable laws. As part of our response, we may remove or disable access to material residing on a site that is controlled or operated by Hello PrePay (such as topmycell.com) that is claimed to be infringing, in which case we will make a good-faith attempt to contact the person who submitted the affected material so that they may make a counter notification, also in accordance with the DMCA.
                    </p>

                    <p>
                        Hello PrePay does not control content hosted on third party websites, and cannot remove content from sites it does not own or control. If you are the copyright owner of content hosted on a third-party site, and you have not authorized the use of your content, please contact the administrator of that website directly to have the content removed.
                    </p>

                    <p>
                        Before serving either a Notice of Infringing Material or Counter-Notification, you may wish to contact a lawyer to better understand your rights and obligations under the DMCA and other applicable laws. The following notice requirements are intended to comply with Hello PrePay rights and obligations under the DMCA and, in particular, section 512(c), and do not constitute legal advice.
                    </p>

                    <div className="flex flex-row items-start justify-left gap-2">
                        <FileText />
                        <p className="font-bold">
                            Notice To Copyright Owners
                        </p>
                    </div>

                    <p>
                        If you believe material posted on or linked to or from this site is infringing, please provide a written, signed notice of infringement (a "DMCA Notice") to the designated agent at the Hello PrePay by fax or mail, at the address provided on our contact page. Such DMCA Notice should be in the form set forth below, which is consistent with the form suggested by the United States Digital Millennium Copyright Act (the "DMCA").
                    </p>

                    <p>
                        Pursuant to federal law you may be held liable for damages and attorneys' fees if you make any material misrepresentations in a Notification. Thus, if you are not sure whether content located on or accessible via a link from the Website infringes your copyright, you should contact an attorney.
                    </p>

                    <div className="flex flex-row items-start justify-left gap-2">
                        <PenTool />
                        <p className="font-bold">
                            All Notifications Should Include The Following
                        </p>
                    </div>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.
                        </li>

                        <li>
                            Identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works at a single online site are covered by a single notification, a representative list of such works at that site.
                        </li>

                        <li>
                            Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit the service provider to locate the material.
                        </li>

                        <li>
                            Information reasonably sufficient to permit the service provider to contact the complaining party, such as an address, telephone number, and, if available, an electronic mail address at which the complaining party may be contacted.
                        </li>

                        <li>
                            A statement that the complaining party has a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.
                        </li>

                        <li>
                            A statement that the information in the notification is accurate, and under penalty of perjury, that the complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed
                        </li>
                    </ul>

                    <p>
                        Notifications should be sent to the address shown on our contact page.
                    </p>

                    <p>
                        Please note: The DMCA provides that you may be liable for damages (including costs and attorneys' fees) if you make a false or bad faith allegation of copyright infringement by using this process. If you are not sure what your rights are, or whether a copyright has been infringed, you should check with a legal adviser first.
                    </p>

                </div>

                {/* CONTACT */}
                <div className="mt-8 text-gray-700 text-sm md:text-base">
                    <div className="flex flex-row items-start justify-left gap-2">
                        <Mail />
                        <p className="font-semibold">
                            Contact Us
                        </p>
                    </div>
                    <p className="mt-2">
                        If you have any questions about this policy, please contact us at{" "}
                        <a href="mailto:support@example.com" className="text-blue-800 underline">
                            support@example.com
                        </a>.
                    </p>
                </div>

            </div>
        </section>
    );
}