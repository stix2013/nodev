import { User } from "@/lib/api-types";
import { getUsers } from "@/lib/api";

export default async function UserList() {
  const users: User[] = await getUsers();

  if (users.length === 0) {
    return <p>Could not load users.</p>;
  }

  return (
    <div className="sm:rounded-lg">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-50">
          <tr>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {users.map((user, index) => (
            <tr
              key={user.id}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="py-4 px-6 text-sm font-medium text-gray-900">
                {user.id}
              </td>
              <td className="py-4 px-6 text-sm text-gray-500">{user.name}</td>
              <td className="py-4 px-6 text-sm text-gray-500">
                {user.email}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
