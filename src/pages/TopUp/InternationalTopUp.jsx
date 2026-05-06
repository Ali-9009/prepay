import TopUpLayout from "./TopUpLayout";
import { internationalCarriers } from "../../data/carriers";
import FAQ from "../Faq";
import Countries from "../../components/Countries";

export default function InternationalTopUp() {
  return (
    <>
      <TopUpLayout
        title="International top-up"
        image="/images/con-1.png"
        carriers={internationalCarriers}
        extraComponent={<Countries />}
      />
      <FAQ />
    </>
  );
}