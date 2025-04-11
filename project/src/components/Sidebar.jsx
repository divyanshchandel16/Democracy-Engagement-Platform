import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ navigation }) => {
  const location = useLocation();

  return (
    <div className="w-64 bg-white border-r border-gray-200">
      <div className="h-full px-3 py-4">
        <nav className="space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`
                  flex items-center px-4 py-2 text-sm font-medium rounded-md
                  ${isActive 
                    ? 'bg-indigo-50 text-indigo-600' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                `}
              >
                <Icon
                  className={`mr-3 h-5 w-5 ${
                    isActive ? 'text-indigo-600' : 'text-gray-400'
                  }`}
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;