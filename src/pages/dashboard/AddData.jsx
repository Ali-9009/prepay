import DataCard from "../../components/DataCard";
import Sidebar from "./Sidebar";

const plans = [
  { gb: "10 GB", price: "$10" },
  { gb: "20 GB", price: "$20" },
  { gb: "3 GB", price: "$30" },
  { gb: "40 GB", price: "$40" },
  { gb: "50 GB", price: "$50" },
  { gb: "60 GB", price: "$60" },
];

export default function AddData() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto flex gap-6">

        {/* Sidebar */}
        <Sidebar />

        {/* Content */}
        <div className="flex-1 max-w-5xl mx-auto bg-[#fbfbfb] rounded-xl p-4">
          
          <div className="grid grid-cols-2 gap-6">
            {plans.map((plan, index) => (
              <DataCard key={index} gb={plan.gb} price={plan.price} />
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}