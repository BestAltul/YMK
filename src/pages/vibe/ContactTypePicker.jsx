// components/ContactTypePicker.jsx
import React from "react";
import CONTACT_TYPES from "../constants/contactTypes";

export default function ContactTypePicker({ onSelect, onCancel }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="w-[400px] rounded bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-lg font-bold">Choose Contact Type</h2>
        <div className="grid grid-cols-4 gap-4">
          {CONTACT_TYPES.map((item) => (
            <button
              key={item.key}
              className="flex flex-col items-center gap-1 rounded p-2 hover:bg-gray-100"
              onClick={() => onSelect(item.key)}
            >
              <div className="text-2xl">🌐</div>
              <div className="text-center text-xs">{item.label}</div>
            </button>
          ))}
        </div>
        <div className="mt-4 text-right">
          <button
            className="text-sm text-gray-500 hover:underline"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
