import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation

const Buttons = () => {
  const location = useLocation(); // Get the current location
  const [activeTab, setActiveTab] = useState("");

  // Update activeTab based on the current location
  useEffect(() => {
    const path = location.pathname.split("/")[1]; // Get the path after the first slash
    setActiveTab(path); // Set activeTab based on the path
  }, [location]);

  return (
    <div className="relative">
      <div className="flex items-center justify-center flex-col max-w-[1297px] mx-auto">
        {/* Tab Buttons */}
        <div className="absolute z-10 text-[27px] flex justify-around w-full">
          {/* Announcement Tab */}
          <Link
            to="/announcement"
            className={`pt-7 rounded-sm w-[399px] h-[104px] flex flex-col items-center ${
              activeTab === "announcement" ? "bg-[#FEFEFE]" : "bg-[#D2D2D2]"
            }`}
          >
            <span
              className={`relative mb-2 ${
                activeTab === "announcement" ? "text-black" : "text-gray-600"
              }`} // Added margin-bottom
            >
              Announcement
              {activeTab === "announcement" && (
                <span className="absolute left-0 right-0 bottom-0 border-b-4 border-orange-500"></span>
              )}
            </span>
          </Link>

          {/* How to Appoint Tab */}
          <Link
            to="/howtoappoint"
            className={`pt-7 rounded-sm w-[399px] h-[104px] flex flex-col items-center ${
              activeTab === "howtoappoint" ? "bg-[#FEFEFE]" : "bg-[#D2D2D2]"
            }`}
          >
            <span
              className={`relative mb-2 ${
                activeTab === "howtoappoint" ? "text-black" : "text-gray-600"
              }`} // Added margin-bottom
            >
              How to Appoint
              {activeTab === "howtoappoint" && (
                <span className="absolute left-0 right-0 bottom-0 border-b-4 border-orange-500"></span>
              )}
            </span>
          </Link>

          {/* Guidelines Tab */}
          <Link
            to="/guidelines"
            className={`pt-7 rounded-sm w-[399px] h-[104px] flex flex-col items-center ${
              activeTab === "guidelines" ? "bg-[#FEFEFE]" : "bg-[#D2D2D2]"
            }`}
          >
            <span
              className={`relative mb-2 ${
                activeTab === "guidelines" ? "text-black" : "text-gray-600"
              }`} // Added margin-bottom
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
