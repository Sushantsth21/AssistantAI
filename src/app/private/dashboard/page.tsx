import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { getSession } from "../../../lib/getSession";
import { redirect } from "next/navigation";
import Link from 'next/link';

const Dashboard = async () => {
  const session = await getSession();
  const user = session?.user;
  if (!user) return redirect("/");

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 mt-16">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white h-screen p-6">
        <nav>
          <ul>
            <li>
              <Link href="/private/settings" className="block px-4 py-2 text-white hover:bg-gray-700 transition-colors duration-300 rounded-t-lg">
                Settings
              </Link>
            </li>
            <li>
              <Link href="/" className="block px-4 py-2 text-white hover:bg-gray-700 transition-colors duration-300 rounded-b-lg">
                Add to List
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Area */}
      <main className="flex-1 p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Card Section */}
          <Card className="shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <CardTitle className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Total Revenue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">$00.00</div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <CardTitle className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Subscriptions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">000</div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <CardTitle className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Sales
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">+000</div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <CardTitle className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Active Now
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">+7</div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* User Activity Card */}
          <Card className="shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <CardTitle className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                User Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-700 dark:text-gray-300">
                <p className="mb-2 font-semibold">Total Logins:</p>
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">12</div>
              </div>
              <div className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                <p className="mb-2 font-semibold">New Registrations:</p>
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">3</div>
              </div>
            </CardContent>
          </Card>

          {/* System Metrics Card */}
          <Card className="shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <CardTitle className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                System Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-700 dark:text-gray-300">
                <p className="mb-2 font-semibold">Server Uptime:</p>
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">99.9%</div>
              </div>
              <div className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                <p className="mb-2 font-semibold">Current Load:</p>
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">30%</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
