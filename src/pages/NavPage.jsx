import ReviewsMarquee from "../components/ReviewsMarquee";
import FAQ from "./faq";



export default function NavPage() {

    return (

        <>

            <ReviewsMarquee />

            <FAQ />
            
            <div className="max-w-7xl mx-auto">
                <img src="/images/bottem-banner.png" alt="" />
            </div>

        </>
    );
}