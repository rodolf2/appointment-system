import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";

const Buttons = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    const path = location.pathname.split("/")[1];
    setActiveTab(path);
  }, [location]);

  return (
    <div className="relative">
      <div className="flex items-center justify-center flex-col max-w-[1297px] mx-auto">
        <div className="absolute z-10 text-[27px] flex justify-around w-full">
          {/* Announcement Link */}
          <Link
            to="/announcement"
            className={`pt-7 rounded-sm w-[399px] h-[104px] flex flex-col items-center ${
              activeTab === "announcement" ? "bg-[#FEFEFE]" : "bg-[#D2D2D2]"
            }`}
          >
            <span
              className={`relative mb-2 ${
                activeTab === "announcement" ? "text-black" : "text-gray-600"
              }`}
              style={{
                paddingBottom: activeTab === "announcement" ? "5px" : "0",
              }}
            >
              Announcement
              {activeTab === "announcement" && (
                <span className="absolute left-0 right-0 bottom-0 border-b-4 border-[#F3BC62]"></span>
              )}
            </span>
          </Link>

          {/* How to Appoint Link */}
          <Link
            to="/hta"
            className={`pt-7 rounded-sm w-[399px] h-[104px] flex flex-col items-center ${
              activeTab === "hta" ? "bg-[#FEFEFE]" : "bg-[#D2D2D2]"
            }`}
          >
            <span
              className={`relative mb-2 ${
                activeTab === "hta" ? "text-black" : "text-gray-600"
              }`}
              style={{
                paddingBottom: activeTab === "hta" ? "5px" : "0",
              }}
            >
              How to Appoint
              {activeTab === "hta" && (
                <span className="absolute left-0 right-0 bottom-0 border-b-4 border-[#F3BC62]"></span>
              )}
            </span>
          </Link>

          {/* Guidelines Link */}
          <Link
            to="/guidelines"
            className={`pt-7 rounded-sm w-[399px] h-[104px] flex flex-col items-center ${
              activeTab === "guidelines" ? "bg-[#FEFEFE]" : "bg-[#D2D2D2]"
            }`}
          >
            <span
              className={`relative mb-2 ${
                activeTab === "guidelines" ? "text-black" : "text-gray-600"
              }`}
              style={{
                paddingBottom: activeTab === "guidelines" ? "5px" : "0",
              }}
            >
              Guidelines
              {activeTab === "guidelines" && (
                <span className="absolute left-0 right-0 bottom-0 border-b-4 border-[#F3BC62]"></span>
              )}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
