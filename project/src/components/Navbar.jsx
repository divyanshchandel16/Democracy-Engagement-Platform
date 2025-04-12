import React from "react";
import { LandmarkIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup"); 
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <LandmarkIcon className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">
                LocalDemocracy
              </span>
            </div>
          </div>
          <div className="flex items-center">
          <Link to="/signup">
  <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
    Sign Up
  </button>
</Link>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
