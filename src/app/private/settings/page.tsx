import { fetchAllUsers } from "@/action/user";
import { getSession } from "@/lib/getSession";
import { User } from "@/models/User";
import { redirect } from "next/navigation";



const Settings = async () => {
  const session = await getSession();
  const user = session?.user;
  if (!user) return redirect("/login");

  if (user?.role !== "admin") return redirect("/private/dashboard");

  const allUsers = await fetchAllUsers();

  return (
    <div className="container mx-auto p-4 mt-">
    <h1 className="text-2xl font-bold mb-6 text-gray-800">Users</h1>
    <div className="overflow-x-auto">
      <table className="w-full min-w-max rounded-lg bg-white shadow-lg border border-gray-200">
        <thead className="bg-gray-100 text-gray-600">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold">First Name</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Last Name</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Action</th>
          </tr>
        </thead>

        <tbody className="text-gray-700">
          {allUsers?.map((user) => (
            <tr key={user._id} className="border-t border-gray-200">
              <td className="px-6 py-4 text-sm">{user.firstName}</td>
              <td className="px-6 py-4 text-sm">{user.lastName}</td>
              <td className="px-6 py-4 text-sm">
                <form
                  action={async () => {
                    "use server";
                    await User.findByIdAndDelete(user._id);
                  }}
                >
                  <button
                    type="submit"
                    className="px-3 py-1 text-red-600 bg-red-100 rounded hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                  >
                    Delete
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
}

export default Settings;