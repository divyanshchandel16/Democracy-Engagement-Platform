import React from 'react';
import { Bell, FileText, Users, MapPin } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-5">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Welcome to LocalDemocracy
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Stay informed and engaged with your local government
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Recent Notifications */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <Bell className="h-6 w-6 text-gray-400" />
              <h3 className="ml-2 text-lg font-medium text-gray-900">Recent Notifications</h3>
            </div>
            <div className="mt-4 space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-2 w-2 rounded-full bg-blue-400 mt-2"></div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">New road work on Main St</p>
                  <p className="text-sm text-gray-500">Starting next week</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-2 w-2 rounded-full bg-green-400 mt-2"></div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Park cleanup event</p>
                  <p className="text-sm text-gray-500">This Saturday at 9 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Legislation */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <FileText className="h-6 w-6 text-gray-400" />
              <h3 className="ml-2 text-lg font-medium text-gray-900">Upcoming Legislation</h3>
            </div>
            <div className="mt-4 space-y-4">
              <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <p className="text-sm font-medium text-yellow-800">Under Review</p>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-yellow-700">
                    Proposed zoning changes for downtown area
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Community Updates */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <Users className="h-6 w-6 text-gray-400" />
              <h3 className="ml-2 text-lg font-medium text-gray-900">Community Updates</h3>
            </div>
            <div className="mt-4 space-y-4">
              <div className="relative">
                <div className="relative flex space-x-3">
                  <div>
                    <span className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white">
                      <MapPin className="h-5 w-5 text-white" />
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div>
                      <p className="text-sm text-gray-500">
                        New community garden project
                      </p>
                    </div>
                    <div className="mt-2 text-sm text-gray-700">
                      <p>15 neighbors have joined</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;