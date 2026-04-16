// ============================================================
// NotFound.jsx — 404 Page
// Requirement 10.1: Show for any unknown/invalid route
// ============================================================

import { GrHomeRounded } from "react-icons/gr";
import { useNavigate } from "react-router";

const NotFound =()=> {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <div className="text-8xl font-bold text-[#2D5B4A] select-none mb-4">
        404
      </div>
      <h1 className="text-xl font-bold text-[#2D5B4A] mb-2">Page Not Found</h1>
      <p className="text-sm text-gray-400 mb-8 max-w-xs">
        Looks like this page does not exist. The friendship might have moved
        without leaving an address.
      </p>
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 bg-[#2D6A4F] hover:bg-[#1B4332] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-150 hover:scale-105"
      >
        <GrHomeRounded size={15} />
        Back to Home
      </button>
    </div>
  );
}

export default NotFound
