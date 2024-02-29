// ResourcesPage.tsx

import React, { useState } from 'react';

type Props = {}

const ResourcesPage = (props: Props) =>  {
  // Sample self-help resources data with images
  const selfHelpResources = [
    {
      title: "Managing Stress",
      description: "Learn effective strategies for managing stress in your daily life.",
      imageUrl:"https://www.encyclopedie-environnement.org/app/uploads/2023/04/gestion-stress.png",
      link: "https://example.com/stress-management"
    },
    {
      title: "Mindfulness Meditation",
      description: "Practice mindfulness meditation techniques to enhance your well-being.",
      imageUrl: "https://health.wordpress.clevelandclinic.org/wp-content/uploads/sites/3/2022/05/10WaysToEaseStress-1166219231-770x533-1.jpg", // Sample image URL
      link: "https://example.com/mindfulness-meditation"
    },
    {
      title: "Coping with Anxiety",
      description: "Explore coping mechanisms and tools to deal with anxiety.",
      imageUrl: "https://www.uhsma.com/wp-content/uploads/2022/03/shutterstock_1531258040-1024x683.jpg", // Sample image URL
      link: "https://example.com/coping-anxiety"
    },
    {
        title: "Managing Stress",
        description: "Learn effective strategies for managing stress in your daily life.",
        imageUrl:"https://www.encyclopedie-environnement.org/app/uploads/2023/04/gestion-stress.png",
        link: "https://example.com/stress-management"
      },
      {
        title: "Mindfulness Meditation",
        description: "Practice mindfulness meditation techniques to enhance your well-being.",
        imageUrl: "https://health.wordpress.clevelandclinic.org/wp-content/uploads/sites/3/2022/05/10WaysToEaseStress-1166219231-770x533-1.jpg", // Sample image URL
        link: "https://example.com/mindfulness-meditation"
      },
      {
        title: "Coping with Anxiety",
        description: "Explore coping mechanisms and tools to deal with anxiety.",
        imageUrl: "https://www.uhsma.com/wp-content/uploads/2022/03/shutterstock_1531258040-1024x683.jpg", // Sample image URL
        link: "https://example.com/coping-anxiety"
      }
  ];

  // State to store the search query
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Function to handle search query change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Filtered resources based on search query
  const filteredResources = selfHelpResources.filter(resource =>
    resource.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Explore self-help Resources</h1>
      {/* Search box */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search topics..."
          className="border border-gray-300 rounded-md p-2 w-1/4"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      {/* Display self-help resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {filteredResources.map((resource, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <img src={resource.imageUrl} alt={resource.title} className=" w-full h-[200px] object-cover rounded-md" />
            </div>
            <h2 className="text-xl font-semibold mb-2">{resource.title}</h2>
            <p className="text-gray-700 mb-4">{resource.description}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer" className="text-primary-orange hover:underline">View Resource</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResourcesPage;
