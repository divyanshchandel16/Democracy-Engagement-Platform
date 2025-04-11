import React from 'react';
import { Bell, AlertCircle, Info, PenTool as Tool } from 'lucide-react';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: 'alert',
      title: 'Road Work Alert',
      message: 'Main Street will be closed for repairs starting next week',
      date: '2024-03-15',
      icon: Tool,
      color: 'red',
    },
    {
      id: 2,
      type: 'info',
      title: 'Council Meeting',
      message: 'Next city council meeting scheduled for March 20th at 7 PM',
      date: '2024-03-20',
      icon: Info,
      color: 'blue',
    },
    {
      id: 3,
      type: 'warning',
      title: 'Public Comment Period',
      message: 'Last week to submit comments on the proposed park renovation',
      date: '2024-03-25',
      icon: AlertCircle,
      color: 'yellow',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-5">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Notifications
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Stay updated with important announcements and alerts
        </p>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Bell className="h-6 w-6 text-gray-400" />
              <span className="ml-2 text-lg font-medium text-gray-900">Recent Notifications</span>
            </div>
            <button className="text-sm text-indigo-600 hover:text-indigo-900">
              Mark all as read
            </button>
          </div>

          <div className="space-y-4">
            {notifications.map((notification) => {
              const Icon = notification.icon;
              return (
                <div
                  key={notification.id}
                  className="flex items-start p-4 bg-gray-50 rounded-lg"
                >
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-${notification.color}-100 flex items-center justify-center`}>
                    <Icon className={`h-5 w-5 text-${notification.color}-600`} />
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                      <p className="text-sm text-gray-500">{notification.date}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{notification.message}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6">
            <button className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              View All Notifications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;