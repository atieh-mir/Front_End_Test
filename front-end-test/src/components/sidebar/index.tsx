import { FC, useState } from "react";
import { SidebarType } from "./sidebar.interface";

export const Sidebar: FC<SidebarType> = ({ setIndex, index }) => {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <div className="bg-[#C1D8C3] w-[20%] min-h-[100vh] flex flex-col pt-[10rem] pr-8 shadow rounded-l-sm gap-1">
      <button
        className={` transition-all duration-300 rounded-xl p-2.5 w-[90%] text-right ${
          clicked ? "bg-[#6A9C89]" : "hover:bg-[#6A9C89]"
        }`}
        onClick={() => setClicked(!clicked)}>
        کاربران
      </button>

      <ul
        className={`transition-all duration-300 overflow-hidden ${
          clicked
            ? "opacity-100 translate-y-0 h-auto"
            : "opacity-0 -translate-y-2 h-0"
        }`}>
        <li
          className={`p-2 cursor-pointer transition-all duration-300 
                      ${
                        index === 1
                          ? "bg-gray-200 text-gray-600 shadow-md "
                          : "hover:bg-gray-200 hover:text-gray-500 my-2 hover:scale-95"
                      }`}
          onClick={() => setIndex(1)}>
          لیست کاربران{" "}
        </li>
      </ul>
    </div>
  );
};
