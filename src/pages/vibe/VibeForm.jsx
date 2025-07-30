// components/VibeForm.jsx
import React, { useState } from "react";

export default function VibeForm({ initialValues = {}, onSubmit }) {
  const [name, setName] = useState(initialValues.name || "");
  const [description, setDescription] = useState(
    initialValues.description || "",
  );
  const [type, setType] = useState(initialValues.type || "PERSONAL");
  const [visible, setVisible] = useState(initialValues.visible ?? true);

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

      {/* Name */}
      <div>
        <label className="mb-1 block text-sm font-medium">Name</label>
        <input
          type="text"
          className="w-full rounded border border-gray-300 px-3 py-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      {/* Description with bullet points */}
      <div>
        <label className="mb-1 block text-sm font-medium">Description</label>
        <textarea
          className="w-full rounded border border-gray-300 px-3 py-2"
          placeholder={`• Full-stack developer\n• Based in NYC\n• Available for freelance`}
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <p className="mt-1 text-sm text-gray-500">
          Use bullet points (e.g. • or - ) and press Enter for line breaks
        </p>
      </div>

      {/* Type */}
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

      {/* Visible */}
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="visible"
          checked={visible}
          onChange={() => setVisible(!visible)}
          className="h-4 w-4"
        />
        <label htmlFor="visible" className="text-sm">
          Visible
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full rounded bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700"
      >
        {initialValues?.id ? "Update" : "Create"}
      </button>
    </form>
  );
}
