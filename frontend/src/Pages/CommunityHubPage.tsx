import React from 'react';
import { Button } from '../Components/Button';

const CommunityHubPage = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Post 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-semibold mb-2">Post Title</h2>
                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis velit eget urna accumsan vestibulum. Proin feugiat libero sit amet sem sodales placerat.</p>
                <div className="flex items-center justify-between">
                    <span className="text-gray-500">Posted by User123</span>
                    <span className="text-gray-500">2 hours ago</span>
                </div>
            </div>

            {/* Comment Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Comments</h3>
                {/* Individual Comment */}
                <div className="bg-gray-100 rounded-lg p-4 mb-4">
                    <p className="text-gray-600">That's inspiring... by User456</p>
                </div>
                {/* Add space for new comment */}
                <textarea className="w-full p-4 border rounded-lg mb-4" placeholder="Add a comment..."></textarea>
                <Button className=" text-white font-semibold py-2 px-4 rounded">Post Comment</Button>
            </div>

            {/* Add space for new post */}
            <textarea className="w-full p-4 border rounded-lg mt-8" placeholder="Write a new post..."></textarea>
            <Button className=" text-white font-semibold py-2 px-4 rounded mt-4">Post</Button>
        </div>
    );
};

export default CommunityHubPage;
