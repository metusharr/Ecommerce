import React, { useState } from "react";
import { Edit2, Save, X } from "lucide-react"; // icons

export default function ProfileDetails() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Tushar",
    mobile: "8448276790",
    email: "- not added -",
    gender: "MALE",
    dob: "- not added -",
    location: "- not added -",
    altMobile: "- not added -",
    hintName: "- not added -",
  });

  const menuItems = [
    { section: "ORDERS", links: ["Orders & Returns"] },
    { section: "CREDITS", links: ["Coupons", "Myntra Credit", "MynCash"] },
    {
      section: "ACCOUNT",
      links: [
        "Profile",
        "Saved Cards",
        "Saved UPI",
        "Saved Wallets/BNPL",
        "Addresses",
        "Myntra Insider",
        "Delete Account",
      ],
    },
    { section: "LEGAL", links: ["Terms of Use", "Privacy Policy"] },
  ];

  const labelMap = {
    dob: "Date of Birth",
    altMobile: "Alternate Mobile",
    hintName: "Hint Name",
    mobile: "Mobile Number",
    email: "Email ID",
  };

  const handleChange = (field, value) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log("Updated Profile:", profile);
  };

  return (
    <div className="min-h-screen bg-white text-black flex font-sans">
      
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-6 border-r border-gray-200 shadow-md">
        <h2 className="font-bold text-xl mb-10 tracking-tight">
          Account
          <span className="block text-gray-500 text-sm font-normal mt-1">
            {profile.name}
          </span>
        </h2>
        {menuItems.map((group, idx) => (
          <div key={idx} className="mb-10">
            <p className="uppercase text-gray-500 text-xs mb-4 tracking-widest">
              {group.section}
            </p>
            <ul className="space-y-2">
              {group.links.map((link, i) => (
                <li
                  key={i}
                  className={`cursor-pointer px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                    link === "Profile"
                      ? "bg-black text-white font-semibold"
                      : "text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 lg:px-20">
        <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200 max-w-6xl mx-auto transition-all duration-500 hover:shadow-lg">
          <h1 className="text-3xl font-bold tracking-tight pb-3 mb-8 text-black border-b border-gray-300">
            Profile Details
          </h1>

          {/* Profile Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 text-sm">
            {Object.entries(profile).map(([key, value], idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-gray-500 font-medium mb-1">
                  {labelMap[key] || key}
                </span>
                {isEditing ? (
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => handleChange(key, e.target.value)}
                    className="border border-gray-300 px-4 py-2 rounded-lg text-black w-full focus:outline-none focus:ring-2 focus:ring-black transition-all shadow-sm"
                  />
                ) : (
                  <span
                    className={`${
                      value === "- not added -"
                        ? "text-gray-400 italic"
                        : "text-black"
                    }`}
                  >
                    {value}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex gap-4">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 bg-black text-white px-8 py-2.5 rounded-lg font-semibold shadow hover:bg-gray-900 transition"
                >
                  <Save size={18} /> SAVE
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="flex items-center gap-2 bg-gray-700 text-white px-8 py-2.5 rounded-lg font-semibold shadow hover:bg-gray-800 transition"
                >
                  <X size={18} /> CANCEL
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-2 bg-black text-white px-8 py-2.5 rounded-lg font-semibold shadow hover:bg-gray-900 transition"
              >
                <Edit2 size={18} /> EDIT
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
