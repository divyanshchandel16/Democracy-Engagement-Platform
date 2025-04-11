import React from 'react';
import { Users, Calendar, MapPin } from 'lucide-react';

const Initiatives = () => {
  const initiatives = [
    {
      id: 1,
      title: 'Community Garden Project',
      description: 'Creating a sustainable community garden in the downtown area',
      location: 'Central Park',
      date: '2024-04-15',
      members: 15,
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=400&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Neighborhood Watch Program',
      description: 'Organizing a neighborhood watch program for increased community safety',
      location: 'East Side District',
      date: '2024-04-20',
      members: 28,
      image: 'https://images.unsplash.com/photo-1625243243326-8b0b93ccd381?q=80&w=400&auto=format&fit=crop',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-5">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Local Initiatives
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Join and support community initiatives in your area
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {initiatives.map((initiative) => (
          <div key={initiative.id} className="bg-white shadow rounded-lg overflow-hidden">
            <div className="h-48 w-full relative">
              <img
                className="w-full h-full object-cover"
                src={initiative.image}
                alt={initiative.title}
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">{initiative.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{initiative.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    {initiative.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {initiative.date}
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="h-4 w-4 mr-1" />
                  {initiative.members} members
                </div>
              </div>
              <div className="mt-6">
                <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
                  Join Initiative
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Initiatives;