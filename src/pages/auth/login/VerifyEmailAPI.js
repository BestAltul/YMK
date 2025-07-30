export async function verifyEmailAPI(email) {
  const res = await fetch("/api/v3/auth/start", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  if (res.status === 404 || res.status === 409) {
    const message = await res.text();
    throw new Error(message);
  }

  if (!res.ok) {
    throw new Error(`Unexpected error: ${res.status}`);
  }

  return res.json();
}
