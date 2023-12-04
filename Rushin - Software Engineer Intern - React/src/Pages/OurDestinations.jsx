import React, { useState } from 'react';

const DropdownExample = () => {
  const [selectedOption, setSelectedOption] = useState('option1');
  const [options, setOptions] = useState({
    option1: { image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2020/02/Places-In-Sri-Lanka_4th-jun.jpg', description: 'Full of romantic landscapes, stirring mountains, lush green tea gardens and golden beaches, the island nation of Sri Lanka is nothing short of magnificent.' },
    option2: { image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/9d/57/98/cinnamon-lakeside-colombo.jpg?w=700&h=-1&s=1', description: 'Cinnamon Velifushi Maldives, a one-resort island for sun, activity, relaxation and luxury surrounded by exotic marine life and a swimmable lagoon.' },
  });

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;

    // Update selected option
    setSelectedOption(selectedValue);
  };

  // Get the selected option details
  const selectedOptionDetails = options[selectedOption] || {};

  return (
    <div className="flex items-center justify-center h-screen mb-36">
      <div className="text-center">
        <label htmlFor="dropdown" className="block text-4xl italic font-medium text-fuchsia-700">
          Our destinations
        </label>
        <select
          id="dropdown"
          name="dropdown"
          className="w-2/5 p-2 mt-1 border rounded-md shadow-sm jusblock -center bg-inherit"
          onChange={handleSelectChange}
          value={selectedOption}
        >
          <option value="">Select an option</option>
          <option value="option1">Habarana Village by Cinnamon</option>
          <option value="option2">Cinnamon Velifushi Maldives</option>
        </select>

        {/* Display the image */}
        <div className='static flex flex-row mt-10'>
        {selectedOptionDetails.image && (
            <div className='w-full '>
          <img src={selectedOptionDetails.image} alt="Selected" className="mx-auto mt-4 w-5/5 " />
          </div>
        )}

        {/* Display the description */}
        {selectedOptionDetails.description && (
            <div className='absolute w-2/12 mt-20 mr-64 bg-white shadow-inner items-right h-2/5 end-0'>
                <h1 className='mt-10 text-xl italic font-medium mr-14 text-fuchsia-900'>Cinnamon Life</h1>
          <p className="mt-4 mr-4 text-sm text-left text-gray-600 ml-9">{selectedOptionDetails.description}</p>
          <button class="bg-purple-950 hover:bg-purple-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-4 mr-12">
              Dicover More
          </button>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default DropdownExample;
