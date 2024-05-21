"use client";
import React, { useState } from "react";
import { File, Shield, Upload } from "lucide-react";
import Image from "next/image";

function SideNav() {
  const menuList = [
    {
      id: 1,
      name: "Upload",
      icon: Upload,
      path: "/upload",
    },
    {
      id: 2,
      name: "Files",
      icon: File,
      path: "/files",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
      path: "/upgrade",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="shadow-sm border-r h-full">
      <div className="p-5 border-b">
        <Image src="/logo.svg" width={50} height={40} />
      </div>
      <div className="p-5 border-b"></div>
      <div className="flex flex-col float-left w-full ">
        {menuList.map((item, index) => (
          <button
            className={`flex gap-2 p-4 px-2 hover:bg-gray-100 w-full text-gray-500 
                            ${
                              activeIndex === index
                                ? "bg-blue-50 text-primary"
                                : null
                            }`}
            onClick={() => setActiveIndex(index)}
          >
            <item.icon />
            <h2>{item.name}</h2>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
