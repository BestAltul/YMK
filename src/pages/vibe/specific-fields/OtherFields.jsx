export default function TemporaryFields() {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium">Expiration Date</label>
      <input
        type="datetime-local"
        className="w-full rounded border border-gray-300 px-3 py-2"
      />
    </div>
  );
}
