"use client";
import { CircleUser, PanelsTopLeft, ShieldPlus, VideoIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SideNav() {
  const MenuOption = [
    {
      id: 1,
      name: "Dashboard",
      path: "/dashboard",
      icon: PanelsTopLeft,
    },
    {
      id: 2,
      name: "CreateNew",
      path: "/dashboard/create-new",
      icon: VideoIcon,
    },
    {
      id: 3,
      name: "Upgrade",
      path: "/dashboard/upgrade",
      icon: ShieldPlus,
    },
    {
      id: 4,
      name: "Acount",
      path: "/dashboard/account",
      icon: CircleUser,
    },
  ];

  const pathnName = usePathname();
  console.log(pathnName);
  return (
    <div className="w-64 h-screen shadow-md p-5">
      <div className="grid gap-3">
        {MenuOption.map((item, index) => (
          <Link href={item.path} key={index}>
            <div
              className={`flex items-center gap-3 p-3 
                         hover:bg-indigo-600 hover:text-white 
                         rounded-md cursor-pointer ${
                           pathnName == item.path && "bg-indigo-600 text-white "
                         } `}
            >
              <item.icon />
              <h2>{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
