import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Representatives = () => {
  const representatives = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'City Council Member - District 1',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&h=250&auto=format&fit=crop',
      email: 'sarah.johnson@citycouncil.gov',
      phone: '(555) 123-4567',
      district: 'Downtown & North Side',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'City Council Member - District 2',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&h=250&auto=format&fit=crop',
      email: 'michael.chen@citycouncil.gov',
      phone: '(555) 123-4568',
      district: 'East Side & Industrial',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-5">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Your Representatives
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Connect with your local government representatives
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {representatives.map((rep) => (
          <div key={rep.id} className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center">
                <img
                  className="h-16 w-16 rounded-full"
                  src={rep.image}
                  alt={rep.name}
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{rep.name}</h3>
                  <p className="text-sm text-gray-500">{rep.role}</p>
                </div>
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-2" />
                  {rep.district}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Mail className="h-4 w-4 mr-2" />
                  {rep.email}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Phone className="h-4 w-4 mr-2" />
                  {rep.phone}
                </div>
              </div>
              <div className="mt-6 flex space-x-3">
                <button className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
                  Send Message
                </button>
                <button className="flex-1 bg-white text-gray-700 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50">
                  Schedule Meeting
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Representatives;