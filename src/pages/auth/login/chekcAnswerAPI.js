export async function checkAnswersAPI(email, answers, timezone) {
  const res = await fetch("/api/v3/auth/check", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, answers, timezone }),
  });

  const contentType = res.headers.get("content-type") || "";

  let errorData = null;
  let errorText = null;

  if (!res.ok) {
    if (contentType.includes("application/json")) {
      errorData = await res.json();
    } else {
      errorText = await res.text();
    }
    const error = new Error(
      errorData?.message || errorText || "Error checking answers",
    );
    error.status = res.status;
    throw error;
  }

  return res.json();
}
