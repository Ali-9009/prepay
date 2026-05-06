import Plan from "../../components/Plan";
import Sidebar from "./Sidebar";

export default function ChangePlan() {

  return (
    <div className="">
      <div className="max-w-6xl mx-auto flex gap-6">

        {/* content */}
        <div className="flex-1 bg-[#fbfbfb] rounded-xl p-4">
          
        <Plan />

        </div>
      </div>
    </div>
  );
}
