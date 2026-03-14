import { Pencil } from "lucide-react";

import Sidebar from "./Sidebar";
import Button from "../../components/Gbtn";

export default function Profile() {
  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto flex gap-6">
        <Sidebar />

        {/* content */}
        <div className="flex-1 bg-[#fbfbfb] rounded-xl p-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6">Profile Settings</h2>

            {/* Profile Info */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Profile Info</h3>
                <Pencil className="w-5 h-5 cursor-pointer text-gray-500" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input className="input" placeholder="First Name" />
                <input className="input" placeholder="Last Name" />
                <input className="input" placeholder="Email" />
                <input className="input" placeholder="DOB" />
                <input className="input col-span-2" placeholder="Gender" />
              </div>
            </div>

            {/* Address Details */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Address Details</h3>
                <Pencil className="w-5 h-5 cursor-pointer text-gray-500" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input className="input" placeholder="Address line 1" />
                <input className="input" placeholder="Address line 2" />

                <div className="grid grid-cols-3 gap-4 col-span-2">
                  <input className="input" placeholder="City" />
                  <input className="input" placeholder="State" />
                  <input className="input" placeholder="Zip" />
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Security</h3>
                <Pencil className="w-5 h-5 cursor-pointer text-gray-500" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="password"
                  className="input"
                  placeholder="New Password"
                />
                <input
                  type="password"
                  className="input"
                  placeholder="Confirm New Password"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 items-center justify-center">
              <Button text="Reset" />
              <Button text="Save Changes" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
