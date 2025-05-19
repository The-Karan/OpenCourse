"use client";

import { useContext } from "react";
import { Progress } from "../../../components/ui/progress";

import { useClerk, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { CiPower } from "react-icons/ci";
import { HiOutlineHome, HiOutlineShieldCheck } from "react-icons/hi";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { adminConfig } from "../../../configs/AdminConfig";
import { UserCourseListContext } from "../../_context/UserCourseListContext";
import logo from "../../../assets/logosaas.jpg"

const Sidebar = () => {
  const { user } = useUser();
  const path = usePathname();
  const { signOut } = useClerk();
  const router = useRouter();
  const { userCourseList, setUserCourseList } = useContext(
    UserCourseListContext
  );

  const isAdmin = adminConfig.emails.includes(
    user?.primaryEmailAddress?.emailAddress
  );
  const handleLogout = async () => {
    await signOut({ redirectTo: '/' }); // Redirect after logout
  };
  const menu = [
    {
      id: 1,
      name: "home",
      icon: <HiOutlineHome />,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Explore",
      icon: <HiOutlineSquare3Stack3D />,
      path: "/dashboard/explore",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: <HiOutlineShieldCheck />,
      path: "/dashboard/upgrade",
    },
    ...(isAdmin
      ? [
          {
            id: 5,
            name: "Admin Users",
            icon: <HiOutlineShieldCheck />,
            path: "/dashboard/admin-users",
          },
        ]
      : []),

    {
      id: 4,
      name: "Logout",
      icon: <CiPower />,
      path: "/dashboard/logout",
      isLogout: true,
    },
  ];


  // Define the email of the admin user

  // Set max courses for regular users
  const maxCourses = 2;
  const courseCount = userCourseList?.length || 0;

  // Calculate progress
  const progress = isAdmin
    ? 100
    : Math.min((courseCount / maxCourses) * 100, 100);

  // Determine if redirect to upgrade is needed
  const needsUpgrade = !isAdmin && courseCount >= maxCourses;
  return (
    <div className="fixed h-full md:w-64 p-4 shadow-md">
      <Link href="/">
         <Image src={logo} alt="logo" width={55} height={55} 
                  />
                  </Link>
      <hr className="my-3" />
      <ul>
        {menu.map((item) => (
             item.isLogout ? (
              <li
              key={item.id}
              className={`flex items-center gap-2 text-gray-600 cursor-pointer p-3 hover:bg-gray-100 hover:text-black rounded-lg mb-3`}
              onClick={handleLogout}
            >
              <div>{item.icon}</div>
              <h2>{item.name}</h2>
            </li>
          ) : (

            <Link href={item.path} key={item.id}>
              <li
                key={item.id}
                className={`flex items-center gap-2 text-gray-600 cursor-pointer p-3 hover:bg-gray-100 hover:text-black rounded-lg mb-3 ${item.path == path && "bg-gray-100 text-black"}`}
              >
                
                <div>{item.icon}</div>
                <h2>{item.name}</h2>
              </li>
            </Link>
            )
          ))}
      </ul>
      <div className="absolute bottom-10 w-[80%]">
        <h2 className="text-sm my-2 ">
          {/* {userCourseList?.length} out of 3 course created.
           */}
          {isAdmin ? (
            <Progress value={(courseCount / 100) * 100} />
          ) : (
            <Progress value={(courseCount / maxCourses) * 100} />
          )}
          {isAdmin
            ? `Courses Created: ${courseCount}`
            : `${courseCount} out of ${maxCourses} courses created`}
        </h2>
        {!isAdmin && needsUpgrade && (
          <h2 className="text-xs text-gray-500">
            Upgrade your plan to unlimted course generate
          </h2>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
