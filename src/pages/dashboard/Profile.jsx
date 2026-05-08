import { useState } from "react";
import { Info, Lock, Calendar, Eye, EyeOff } from "lucide-react";

import Sidebar from "./Sidebar";
import Button from "../../components/Gbtn";

function InputField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  disabled = false,
  icon,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div>
      {label && (
        <label className="block text-[11px] font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          type={isPassword ? (showPassword ? "text" : "password") : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className="w-full h-10 rounded-md border border-red-300 bg-white px-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none disabled:bg-[#fafafa] disabled:text-gray-400"
        />

        {icon && !isPassword && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300">
            {icon}
          </div>
        )}

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300"
          >
            {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
          </button>
        )}
      </div>
    </div>
  );
}

function SectionCard({
  title,
  icon,
  editing,
  onEdit,
  onSave,
  children,
}) {
  return (
    <div className="mb-8 rounded-xl border border-gray-200 bg-white p-4 md:p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>

        <button
          onClick={editing ? onSave : onEdit}
          className="min-w-17 rounded-full bg-(--primary-color) px-4 py-1.5 text-xs font-semibold text-white transition hover:opacity-90"
        >
          {editing ? "Save" : "Edit"}
        </button>
      </div>

      {children}
    </div>
  );
}

export default function Profile() {
  const [profileEditing, setProfileEditing] = useState(false);
  const [addressEditing, setAddressEditing] = useState(false);
  const [securityEditing, setSecurityEditing] = useState(false);

  const [profile, setProfile] = useState({
    firstName: "Keyur",
    lastName: "Patel",
    email: "keyur@hyvikk.com",
    dob: "01/31/2026",
  });

  const [address, setAddress] = useState({
    street: "1900 Southwest 8th Street",
    city: "Miami",
    state: "FL",
    zip: "33135",
  });

  const [security, setSecurity] = useState({
    password: "",
    confirmPassword: "",
  });

  return (
    <div className="">
      <div className="max-w-6xl mx-auto flex gap-6">
        {/* content */}
        <div className="flex-1 bg-[#fbfbfb] rounded-xl p-4 md:p-6 lg:p-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6">Profile Settings</h2>

            {/* Personal Information */}
            <SectionCard
              title="Personal Information"
              editing={profileEditing}
              onEdit={() => setProfileEditing(true)}
              onSave={() => setProfileEditing(false)}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  label="First Name"
                  value={profile.firstName}
                  disabled={!profileEditing}
                  onChange={(e) =>
                    setProfile({ ...profile, firstName: e.target.value })
                  }
                />

                <InputField
                  label="Last Name"
                  value={profile.lastName}
                  disabled={!profileEditing}
                  onChange={(e) =>
                    setProfile({ ...profile, lastName: e.target.value })
                  }
                />

                <InputField
                  label="Email ID"
                  value={profile.email}
                  disabled={!profileEditing}
                  onChange={(e) =>
                    setProfile({ ...profile, email: e.target.value })
                  }
                />

                <InputField
                  label="Date of Birth"
                  value={profile.dob}
                  disabled={!profileEditing}
                  onChange={(e) =>
                    setProfile({ ...profile, dob: e.target.value })
                  }
                  icon={<Calendar size={14} />}
                />
              </div>
            </SectionCard>

            {/* Service Address */}
            <SectionCard
              title="Service Address"
              icon={<Info size={15} className="text-black" />}
              editing={addressEditing}
              onEdit={() => setAddressEditing(true)}
              onSave={() => setAddressEditing(false)}
            >
              <div className="mb-4">
                <InputField
                  label="Street Address"
                  value={address.street}
                  disabled={!addressEditing}
                  onChange={(e) =>
                    setAddress({ ...address, street: e.target.value })
                  }
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <InputField
                  label="City"
                  value={address.city}
                  disabled={!addressEditing}
                  onChange={(e) =>
                    setAddress({ ...address, city: e.target.value })
                  }
                />

                <InputField
                  label="State"
                  value={address.state}
                  disabled={!addressEditing}
                  onChange={(e) =>
                    setAddress({ ...address, state: e.target.value })
                  }
                />

                <InputField
                  label="Zip Code"
                  value={address.zip}
                  disabled={!addressEditing}
                  onChange={(e) =>
                    setAddress({ ...address, zip: e.target.value })
                  }
                />
              </div>
            </SectionCard>

            {/* Security */}
            <SectionCard
              title="Security"
              editing={securityEditing}
              onEdit={() => setSecurityEditing(true)}
              onSave={() => setSecurityEditing(false)}
            >
              <p className="text-xs text-gray-500 mb-4">
                Leave these fields empty to keep your current password
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  label="New Password"
                  type="password"
                  value={security.password}
                  disabled={!securityEditing}
                  placeholder="New password"
                  onChange={(e) =>
                    setSecurity({ ...security, password: e.target.value })
                  }
                />

                <InputField
                  label="Confirm Password"
                  type="password"
                  value={security.confirmPassword}
                  disabled={!securityEditing}
                  placeholder="Confirm new password"
                  onChange={(e) =>
                    setSecurity({
                      ...security,
                      confirmPassword: e.target.value,
                    })
                  }
                />
              </div>

              <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                <span>Password Requirements</span>
                <Lock size={12} />
              </div>
            </SectionCard>

          </div>
        </div>
      </div>
    </div>
  );
}