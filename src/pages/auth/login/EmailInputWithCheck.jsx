import React, { useState } from "react";
import { verifyEmailAPI } from "./VerifyEmailAPI";

export default function EmailInputWithCheck({
  email,
  setEmail,
  onValidityChange,
  setQuestions,
  setAnswersList,
}) {
  const [error, setError] = useState("");

  const verifyEmail = async (email) => {
    try {
      const data = await verifyEmailAPI(email);
      console.log("Email verification data:", data);
      setError("");

      setQuestions(data);
      setAnswersList(new Array(data.length).fill(""));

      onValidityChange(true);
    } catch (e) {
      console.error("Email verification error:", e.message);
      setError(e.message);
      onValidityChange(false);
    }
  };

  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-gray-700">
        Email address
      </label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={() => verifyEmail(email)}
        required
        className={`w-full rounded-md border px-4 py-2 shadow-sm focus:outline-none focus:ring-2 ${
          error
            ? "border-red-500 focus:ring-red-300"
            : "border-gray-300 focus:ring-blue-500"
        }`}
        placeholder="you@example.com"
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
