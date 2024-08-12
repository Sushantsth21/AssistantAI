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
    <div className="container mx-auto p-4 mt-4">
    <h1 className="text-2xl font-bold mb-6 text-gray-800">Coming</h1>
   
  </div>
);
}

export default Settings;