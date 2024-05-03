import React, { useState } from 'react';

const Filter = () => {
  const [selectedOption, setSelectedOption] = useState<string>('Best Selling');

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
    // You can perform additional filtering logic here based on the selected option
  };

  const filterOptions = ['Best Selling', 'Price: Low To High', 'Price: High To Low', 'Newest'];

  return (
    <div className="flex items-center gap-5 justify-center">
    <select
      value={selectedOption}
      onChange={handleOptionChange}
      className="border rounded px-2 py-1 w-full max-w-md sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg"
    >
      {filterOptions.map((option) => (
        <option key={option} value={option} >
          {option}
        </option>
      ))}
    </select>
  </div>
  );
};

export default Filter;
