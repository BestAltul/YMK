// components/EmailInputWithCheck.jsx
import React, { useState } from "react";
import axios from "axios";
import { verifyEmailAPI } from "./VeriFyEmailAPI";


export default function EmailInputWithCheck({ email, setEmail, onValidityChange }) {
  const [error, setError] = useState("");
  const [answersList, setAnswersList] = useState([]);
  const [questions, setQuestions] = useState([]);

 const verifyEmail = async (email) => {
  try {
    const data = await verifyEmailAPI(email);
    console.log("Email verification data:", data);
    setError("");

    setQuestions(data);
    setAnswersList(new Array(data.length).fill(""));

  } catch (e) {

    setError(e.message);    

  }
};

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Email address
      </label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={() => verifyEmail(email)}
        required
        className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${
          error ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-blue-500"
        }`}
        placeholder="you@example.com"
      />
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}
