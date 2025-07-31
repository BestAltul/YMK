import React, { useState } from "react";
import CommonFields from "./CommonFields";
import SpecificFields from "./SpecificFields";

export default function VibeForm({ initialValues = {}, onSubmit }) {
  const [name, setName] = useState(initialValues.name || "");
  const [description, setDescription] = useState(
    initialValues.description || "",
  );
  const [type, setType] = useState(initialValues.type || "PERSONAL");
  const [visible, setVisible] = useState(initialValues.visible ?? true);

  const [showContactPicker, setShowContactPicker] = useState(false);
  const [contacts, setContacts] = useState([]);

  const [tabs, setTabs] = useState([
    { id: "basic", label: "Basic", editing: false },
    { id: "details", label: "Details", editing: false },
    { id: "settings", label: "Settings", editing: false },
  ]);

  const [activeTab, setActiveTab] = useState("basic");

  const startEditing = (id) => {
    setTabs((prev) =>
      prev.map((tab) =>
        tab.id === id ? { ...tab, editing: true } : { ...tab, editing: false },
      ),
    );
  };

  const stopEditing = (id, newLabel) => {
    setTabs((prev) =>
      prev.map((tab) =>
        tab.id === id ? { ...tab, label: newLabel, editing: false } : tab,
      ),
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, description, type, visible };
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-md space-y-4 rounded-xl bg-white p-6 shadow-md"
    >
      <h2 className="text-center text-2xl font-bold">
        {initialValues?.id ? "Edit Vibe" : "Create Vibe"}
      </h2>

      {/* Type Selector */}
      <div>
        <label className="mb-1 block text-sm font-medium">Type</label>
        <select
          className="w-full rounded border border-gray-300 px-3 py-2"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="PERSONAL">Personal</option>
          <option value="BUSINESS">Business</option>
          <option value="TEMPORARY">Temporary</option>
        </select>
      </div>

      {/* Tabs only for non-PERSONAL */}
      {type !== "PERSONAL" && (
        <div className="mb-4 flex border-b">
          {tabs.map(({ id, label, editing }) => (
            <div key={id} className="flex-1 border-b-2 text-center">
              {editing ? (
                <input
                  type="text"
                  autoFocus
                  defaultValue={label}
                  onBlur={(e) => stopEditing(id, e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") stopEditing(id, e.target.value);
                  }}
                  className="w-full border-b border-blue-600 px-2 py-1 text-sm focus:outline-none"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setActiveTab(id)}
                  onDoubleClick={() => startEditing(id)}
                  className={`w-full py-2 text-sm font-medium ${
                    activeTab === id
                      ? "border-b-2 border-blue-600 text-blue-600"
                      : "text-gray-500 hover:text-blue-600"
                  }`}
                >
                  {label}
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Render Common and Specific Fields */}
      {(type === "PERSONAL" || activeTab === "basic") && (
        <div>
          <CommonFields
            name={name}
            setName={setName}
            description={description}
            setDescription={setDescription}
          />
          <SpecificFields type={type} />
          <div className="mt-2 flex items-center gap-2">
            <input
              type="checkbox"
              id="visible"
              className="h-4 w-4"
              checked={visible}
              onChange={() => setVisible(!visible)}
            />
            <label htmlFor="visible" className="text-sm">
              Visible
            </label>
          </div>
        </div>
      )}

      {type !== "PERSONAL" && activeTab === "details" && (
        <div>{/* Details tab content */}</div>
      )}

      {type !== "PERSONAL" && activeTab === "settings" && (
        <div>{/* Settings tab content */}</div>
      )}

      <button
        type="submit"
        className="w-full rounded bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700"
      >
        {initialValues?.id ? "Update" : "Create"}
      </button>
    </form>
  );
}
