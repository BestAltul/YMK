import React, { useState } from "react";
import EmailInputWithCheck from "./EmailInputWithCheck";

export default function Login() {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [answersList, setAnswersList] = useState([]);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailValid) return;
    console.log("Login with", email, password, answersList);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold">Log In</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <EmailInputWithCheck
            email={email}
            setEmail={setEmail}
            onValidityChange={setEmailValid}
            setQuestions={setQuestions}
            setAnswersList={setAnswersList}
          />

          {questions.map((questionObj, index) => (
            <div key={index} className="relative">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                {questionObj.question}
              </label>
              <input
                type={showAnswers ? "text" : "password"}
                value={answersList[index] || ""}
                onChange={(e) => {
                  const updated = [...answersList];
                  updated[index] = e.target.value;
                  setAnswersList(updated);
                }}
                className="w-full rounded-md border px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <button
                type="button"
                onClick={() => setShowAnswers(!showAnswers)}
                className="absolute right-3 top-9 text-sm text-blue-600"
              >
                {showAnswers ? "Hide" : "Show"}
              </button>
            </div>
          ))}

          {questions.length === 0 && (
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-md border px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2 text-sm text-blue-600"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700"
            disabled={!emailValid}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
