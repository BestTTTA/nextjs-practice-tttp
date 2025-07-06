// import Link from "next/link";
import UseButton from "@/components/UseButton";
// import { users } from "@/lib/users";

export default async function HomePage() {
  return (
    <main className="p-4">

      {/* <h1 className="text-4xl font-thin">User lists</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link
              href={`/user/${user.id}`}
              className="text-green-600 underline"
            >
              {user.name}
            </Link>
          </li>
        ))}
      </ul> */}

      <h1 className="text-xl font-bold">Test Button</h1>
      <UseButton />

    </main>
  );
}
