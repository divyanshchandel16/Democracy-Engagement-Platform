import React from 'react';
import { FileText, Calendar, MessageCircle } from 'lucide-react';

const Legislation = () => {
  const legislationItems = [
    {
      id: 1,
      title: 'Downtown Zoning Changes',
      status: 'Under Review',
      summary: 'Proposed changes to zoning regulations in the downtown area to allow for mixed-use development and increased housing density.',
      hearingDate: '2024-04-15',
      comments: 24,
    },
    {
      id: 2,
      title: 'Park Improvement Fund',
      status: 'Proposed',
      summary: 'Allocation of funds for improvements to city parks, including new playground equipment and enhanced lighting.',
      hearingDate: '2024-04-20',
      comments: 15,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-5">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Local Legislation
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Stay informed about proposed and current legislation in your area
        </p>
      </div>

      <div className="space-y-4">
        {legislationItems.map((item) => (
          <div key={item.id} className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  item.status === 'Under Review' 
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {item.status}
                </span>
              </div>
              <p className="mt-3 text-sm text-gray-500">{item.summary}</p>
              <div className="mt-4 flex items-center space-x-6">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  Hearing: {item.hearingDate}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <MessageCircle className="h-4 w-4 mr-1" />
                  {item.comments} comments
                </div>
              </div>
              <div className="mt-4">
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                  <FileText className="h-4 w-4 mr-2" />
                  Read Full Document
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Legislation;