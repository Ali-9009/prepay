import Button from "../../../components/Gbtn";

function AddressStep({ nextStep }) {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          nextStep();
        }}
        className="max-w-xl mx-auto space-y-4"
      >
        {/* Address line 1 */}
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="address1"
        >
          Address line 1
        </label>
        <input
          id="address1"
          name="address1"
          type="text"
          placeholder="Address line 1"
          className="input"
        />

        {/* Address line 2 */}
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="address2"
        >
          Address line 2
        </label>
        <input
          id="address2"
          name="address2"
          type="text"
          placeholder="Address line 2"
          className="input"
        />

        {/* City */}
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="city"
        >
          City
        </label>
        <input
          id="city"
          name="city"
          type="text"
          placeholder="City"
          className="input"
        />

        {/* State and Zip Code in one row */}
        <div className="flex space-x-4">
          <div className="flex-1">
            <label
              className="block text-sm font-medium pb-3 text-gray-700"
              htmlFor="state"
            >
              State
            </label>
            <input
              id="state"
              name="state"
              type="text"
              placeholder="TX"
              className="input"
            />
          </div>

          <div className="flex-1">
            <label
              className="block text-sm font-medium pb-3 text-gray-700"
              htmlFor="zip"
            >
              Zip code <span className="text-red-500">*</span>
            </label>
            <input
              id="zip"
              name="zip"
              type="text"
              placeholder="12345"
              required
              className="input"
            />
          </div>
        </div>

        <Button type="submit" className="w-full text-center" onClick={nextStep} text="Continue" />
      </form>
    </>
  );
}

export default AddressStep;
