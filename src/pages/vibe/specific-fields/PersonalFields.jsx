import React, { useState } from "react";
import ContactTypePicker from "../ContactTypePicker";

export default function PersonalFields() {
  const [birthday, setBirthday] = useState("");
  const [fields, setFields] = useState([{ label: "", value: "" }]);
  const [showContactPicker, setShowContactPicker] = useState(false);

  const handleFieldChange = (index, key, value) => {
    const updated = [...fields];
    updated[index][key] = value;
    setFields(updated);
  };

  const handleRemoveField = (index) => {
    const updated = [...fields];
    updated.splice(index, 1);
    setFields(updated);
  };

  const handleAddContact = (type) => {
    setFields([...fields, { label: type, value: "" }]);
    setShowContactPicker(false);
  };

  return (
    <div className="space-y-4">
      {/* Birthday Field */}
      <div>
        <label className="mb-1 block text-sm font-medium">Birthday</label>
        <input
          type="date"
          className="w-full rounded border border-gray-300 px-3 py-2"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
      </div>

      {/* Dynamic Fields */}
      <div className="mt-4">
        <label className="mb-2 block text-sm font-semibold">
          Additional Info
        </label>
        {fields.map((field, index) => (
          <div key={index} className="mb-2 flex gap-2">
            <input
              type="text"
              placeholder="Label"
              value={field.label}
              onChange={(e) =>
                handleFieldChange(index, "label", e.target.value)
              }
              className="w-1/3 rounded border border-gray-300 px-2 py-1"
            />
            <input
              type="text"
              placeholder="Value"
              value={field.value}
              onChange={(e) =>
                handleFieldChange(index, "value", e.target.value)
              }
              className="w-2/3 rounded border border-gray-300 px-2 py-1"
            />
            <button
              type="button"
              onClick={() => handleRemoveField(index)}
              className="text-sm text-red-600 hover:underline"
            >
              ✕
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={() => setShowContactPicker(true)}
          className="mt-4 w-full rounded border py-2 text-sm hover:bg-gray-50"
        >
          + Add Contact
        </button>
      </div>

      {showContactPicker && (
        <ContactTypePicker
          onSelect={handleAddContact}
          onCancel={() => setShowContactPicker(false)}
        />
      )}
    </div>
  );
}
