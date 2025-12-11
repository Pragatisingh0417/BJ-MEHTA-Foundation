"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

// ICONS
import {
  HomeIcon,
  FolderIcon,
  UsersIcon,
  UserCircleIcon,
  ArrowLeftOnRectangleIcon,
  Bars3BottomLeftIcon,
} from "@heroicons/react/24/outline";

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const [collapsed, setCollapsed] = useState(false);

  const menu = [
    { name: "Dashboard", path: "/admin/dashboard", icon: HomeIcon },
    { name: "Projects", path: "/admin/projects", icon: FolderIcon },
    { name: "Donors", path: "/admin/donors", icon: UsersIcon },
    // { name: "Users", path: "/admin/users", icon: UserCircleIcon },
  ];

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    alert("Logged out successfully!");
    router.push("/");
  };

  return (
    <aside
      className={`bg-white shadow-md h-screen p-4 flex flex-col transition-all duration-300 
        ${collapsed ? "w-20" : "w-64"}
      `}
    >
      {/* COLLAPSE BUTTON */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="mb-6"
      >
        <Bars3BottomLeftIcon className="h-7 w-7 text-gray-700" />
      </button>

      {/* PROFILE SECTION */}
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-blue-600 text-white h-10 w-10 flex items-center justify-center rounded-full text-lg font-semibold">
          A
        </div>
        {!collapsed && (
          <div>
            <p className="font-semibold">Admin User</p>
            <p className="text-sm text-gray-500">Administrator</p>
          </div>
        )}
      </div>

      {/* MENU */}
      <nav className="space-y-2 flex-1">
        {menu.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.path;

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded font-medium transition 
                ${active ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-200"}
              `}
            >
              <Icon className="h-6 w-6" />
              {!collapsed && item.name}
            </Link>
          );
        })}
      </nav>

      {/* LOGOUT BUTTON */}
      <button
        onClick={handleLogout}
        className={`
          flex items-center gap-3 px-3 py-2 rounded font-medium mt-6 text-red-600 hover:bg-red-100
          ${collapsed ? "justify-center" : ""}
        `}
      >
        <ArrowLeftOnRectangleIcon className="h-6 w-6" />
        {!collapsed && "Logout"}
      </button>
    </aside>
  );
}
