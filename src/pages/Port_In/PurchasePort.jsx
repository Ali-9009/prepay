import Button from "../../components/Gbtn"

export default function PurchasePort() {
  return (
    <div className="min-h-screen flex items-center bg-red-50 justify-center py-12 px-4">
      
      <div className="bg-white rounded-xl p-10 text-center w-150">
        
        {/* Image */}
        <img
          src="/images/succ.png"   // change this later
          alt="success"
          className="mx-auto mb-6"
        />

        {/* Title */}
        <h2 className="text-lg font-semibold ">
          Purchase Successful!
        </h2>

        {/* Description */}
        <p className=" font-medium text-sm mt-2 leading-relaxed">
          Your Order is Confirmed <br />
          Please wait while we redirect you to the Activation Page
        </p>

              <Button text="continue" to="/portInLayout" className="mt-2" />

      </div>

    </div>
  );
}