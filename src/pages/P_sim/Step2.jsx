import { ChevronLeft, Phone, IdCard } from "lucide-react";
import Button from "../../components/Gbtn";

export default function Step2({ next, back, title }) {
  return (
    <>

    
      {/* Header */}
      <div className="bg-(--primary-color) p-6 relative flex flex-col items-center text-center">
        <button
          onClick={back}
          className="absolute left-4 top-6 text-white cursor-pointer"
        >
          <ChevronLeft />
        </button>

        <h2 className="text-white text-xl font-semibold">
          Confirm your service address
        </h2>

        <p className="text-white text-sm mt-1 max-w-md">
          This is typically your home or school address. This is used to set
          your area code and enable quick 911 location. The address must be a
          valid U.S. address.
        </p>
      </div>

      {/* Body */}
      <div className="p-6 space-y-6">
        <form
          onClick={() => next(2)}
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
                className="input"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full text-center"
            text="Continue"
          />
        </form>
      </div>
    </>
  );
}
