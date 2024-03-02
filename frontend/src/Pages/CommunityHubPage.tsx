import React from "react";
import { Button } from "../Components/Button";
import { Banner2 } from "../Layouts/Banner2";
const CommunityHubPage = () => {
  return (
    <div className="bg-slate-50">
      <Banner2 />
      <div className="w-2/4 container mx-auto px-4 py-8">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search topics..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        {/* Add New Post Button */}
        <div className="mb-8 flex justify-end">
          <Button className="  px-4 py-2 rounded-md shadow ">
            Add New Post
          </Button>
        </div>
        {/* Post List */}
        <div className="space-y-6">
          {/* Individual Post */}
          <div className="bg-white rounded-md p-6 shadow-md">
            <h2 className="text-lg font-semibold mb-2">My Story</h2>
            <p className="text-gray-600 mb-2 text-xs">
              By userxyz - 4 hours ago
            </p>
            <p className="text-gray-700 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex justify-between items-center">
              <p className="text-blue-500 cursor-pointer">Read More</p>
              <p className="text-gray-600">5 Comments</p>
            </div>
          </div>
          {/* Individual Post */}
          <div className="bg-white rounded-md p-6 shadow-md">
            <h2 className="text-lg font-semibold mb-2">
              How I Deal With Tough Times
            </h2>
            <p className="text-gray-600 mb-2 text-xs">
              By userxyz - 4 hours ago
            </p>
            <p className="text-gray-700 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex justify-between items-center">
              <p className="text-blue-500 cursor-pointer">Read More</p>
              <p className="text-gray-600">5 Comments</p>
            </div>
          </div>
          {/* Individual Post */}
          <div className="bg-white rounded-md p-6 shadow-md">
            <h2 className="text-lg font-semibold mb-2">My Story</h2>
            <p className="text-gray-600 mb-2 text-xs">
              By userxyz - 4 hours ago
            </p>
            <p className="text-gray-700 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex justify-between items-center">
              <p className="text-blue-500 cursor-pointer">Read More</p>
              <p className="text-gray-600">5 Comments</p>
            </div>
          </div>
          {/* Another Post */}
          <div className="space-y-6">
            {/* Individual Post */}
            <div className="bg-white rounded-md p-6 shadow-md">
              <h2 className="text-lg font-semibold mb-2">
                Does anyone else relate?
              </h2>
              <p className="text-gray-600 mb-2 text-xs">
                By anonymous - 2 hours ago
              </p>
              <p className="text-gray-700 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex justify-between items-center">
                <p className="text-blue-500 cursor-pointer">Read More</p>
                <p className="text-gray-600">5 Comments</p>
              </div>
            </div>
          </div>
          {/* More Posts */}
          {/* Add more posts here */}
        </div>
      </div>
    </div>
  );
};

export default CommunityHubPage;
