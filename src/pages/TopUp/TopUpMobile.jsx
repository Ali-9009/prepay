import TopUpLayout from "./TopUpLayout";
import { usCarriers } from "../../data/carriers";
import FAQ from "../Faq";

export default function TopUpMobile() {
  return (
    <>
      <TopUpLayout
        title="Mobile top-up"
        image="/images/usa.png"
        carriers={usCarriers}
      />
      <FAQ />
    </>
  );
}