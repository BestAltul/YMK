export default function CommonFields({
  name,
  setName,
  description,
  setDescription,
}) {
  return (
    <>
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
      <div>
        <label className="mb-1 block text-sm font-medium">Description</label>
        <textarea
          className="w-full rounded border border-gray-300 px-3 py-2"
          rows={5}
          placeholder="• Bullet 1\n• Bullet 2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
    </>
  );
}
