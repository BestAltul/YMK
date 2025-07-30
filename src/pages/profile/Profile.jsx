import React, { useState } from "react";
import VibeForm from "@/pages/vibe/VibeForm";

export default function ProfilePage() {
  const [submittedVibe, setSubmittedVibe] = useState(null);

  const handleFormSubmit = (data) => {
    console.log("Submitted:", data);
    setSubmittedVibe(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <VibeForm onSubmit={handleFormSubmit} />

      {submittedVibe && (
        <div className="mx-auto mt-10 max-w-md rounded bg-white p-6 shadow">
          <h3 className="mb-2 text-xl font-bold">{submittedVibe.name}</h3>
          <p className="mb-2 text-sm text-gray-500">{submittedVibe.type}</p>
          <p className="whitespace-pre-line text-gray-700">
            {submittedVibe.description}
          </p>
          <p className="mt-2 text-sm">
            <strong>Visible:</strong> {submittedVibe.visible ? "Yes" : "No"}
          </p>
        </div>
      )}
    </div>
  );
}
