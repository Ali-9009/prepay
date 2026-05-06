import Button from "../../../components/Gbtn";

function ServiceAddressStep({ nextStep }) {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          nextStep();
        }}
        className="max-w-xl mx-auto space-y-4"
      >
        {/* Phone number to transfer */}
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="Phone"
        >
          Phone number to transfer
        </label>
        <input
          id="Phone"
          name="Phone"
          type="text"
          placeholder="Phone number to transfer"
          className="input"
        />

        {/* Your zip code */}
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="zipcode"
        >
          Your zip code
        </label>
        <input
          id="zipcode"
          name="zipcode"
          type="number"
          placeholder="Your zip code"
          className="input"
        />

        {/* Transfer Pin */}
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="Pin"
        >
          Transfer Pin
        </label>
        <input
          id="Pin"
          name="Pin"
          type="number"
          placeholder="Transfer Pin"
          className="input"
        />

        {/* Your current carrier and Zip Code in one row */}
        <div className="flex space-x-4">
          <div className="flex-1">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="carrier"
            >
              Your current carrier
            </label>
            <input
              id="carrier"
              name="carrier"
              type="text"
              placeholder="Carrier"
              className="input"
            />
          </div>

          <div className="flex-1">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="account"
            >
              Carrier account no
            </label>
            <input
              id="account"
              name="account"
              type="number"
              placeholder="12345"
              required
              className="input"
            />
          </div>
        </div>

        <p>Your account number and transfer PIN authorize us to transfer your number to Hello Prepay. <br /> *Not all carriers require PIN or password. <br /> How do I find my account number and PIN?</p>

        <Button className="w-full" type="submit" onClick={nextStep} text="Submit" />
      </form>
    </>
  );
}

export default ServiceAddressStep;
