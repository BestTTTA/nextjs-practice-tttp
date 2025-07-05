import { users } from "@/lib/users";

export default async function UserPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = users.find((u) => u.id === parseInt(id));

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Details</h1>
      <div className="border p-4 rounded">
        <div className="mb-2">
          <span className="font-semibold">ID:</span> {user?.id}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Name:</span> {user?.name}
        </div>
      </div>
    </main>
  );
}
